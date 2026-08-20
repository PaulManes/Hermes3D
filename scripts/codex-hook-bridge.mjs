import fs from "node:fs/promises";
import http from "node:http";
import os from "node:os";
import path from "node:path";

const MAX_STDIN_BYTES = 512 * 1024;
const MAX_STRING_LENGTH = 900;
const MAX_KEYS = 40;
const MAX_ARRAY_ITEMS = 16;
const MAX_DEPTH = 4;
const REQUEST_TIMEOUT_MS = 850;
const LOOPBACK_HOSTS = new Set(["127.0.0.1", "localhost", "::1", "[::1]"]);
const ALLOWED_FIELDS = new Set([
  "session_id",
  "cwd",
  "hook_event_name",
  "model",
  "turn_id",
  "permission_mode",
  "source",
  "reason",
  "agent_id",
  "agent_type",
  "stop_hook_active",
  "last_assistant_message",
  "tool_name",
  "tool_use_id",
  "tool_input",
  "tool_response",
]);

const tokenFile = () => {
  const configured = process.env.CODEX_OBSERVER_TOKEN_FILE?.trim();
  if (configured) {
    return path.resolve(configured.replace(/^~(?=$|\/)/, os.homedir()));
  }
  return path.join(os.homedir(), ".codex", "hermes3d-observer", "token");
};

const isSensitiveKey = (key) =>
  /authorization|api[_-]?key|token|password|passwd|secret|cookie|private[_-]?key|credential/i.test(
    key,
  );

const redactText = (value, limit = MAX_STRING_LENGTH) => {
  let text = String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();
  text = text
    .replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, "Bearer [REDACTED]")
    .replace(/\b(?:sk|rk|pk)-[A-Za-z0-9_-]{12,}\b/g, "[REDACTED]")
    .replace(
      /\b(authorization|api[_-]?key|access[_-]?token|auth[_-]?token|token|password|passwd|secret|cookie)\b\s*[:=]\s*(?:"[^"]*"|'[^']*'|[^\s,;]+)/gi,
      "$1=[REDACTED]",
    )
    .replace(
      /\b([A-Z0-9_]*(?:TOKEN|SECRET|PASSWORD|API_KEY|PRIVATE_KEY)[A-Z0-9_]*)=([^\s]+)/g,
      "$1=[REDACTED]",
    );
  if (text.length <= limit) return text;
  return `${text.slice(0, Math.max(0, limit - 1)).trimEnd()}…`;
};

const sanitizeValue = (value, depth = 0, key = "") => {
  if (isSensitiveKey(key)) return "[REDACTED]";
  if (depth > MAX_DEPTH) return "[TRUNCATED]";
  if (value === null || value === undefined) return null;
  if (typeof value === "string") return redactText(value);
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  if (typeof value === "boolean") return value;
  if (Array.isArray(value)) {
    return value
      .slice(0, MAX_ARRAY_ITEMS)
      .map((item) => sanitizeValue(item, depth + 1, key));
  }
  if (typeof value !== "object") return redactText(String(value));

  const output = {};
  for (const [entryKey, entryValue] of Object.entries(value).slice(0, MAX_KEYS)) {
    output[entryKey] = sanitizeValue(entryValue, depth + 1, entryKey);
  }
  return output;
};

const sanitizePayload = (input) => {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    throw new Error("Hook input must be a JSON object.");
  }
  const output = {};
  for (const field of ALLOWED_FIELDS) {
    if (!(field in input)) continue;
    output[field] = sanitizeValue(input[field], 0, field);
  }
  if (typeof output.hook_event_name !== "string" || !output.hook_event_name.trim()) {
    throw new Error("Hook input is missing hook_event_name.");
  }
  return output;
};

const readStdin = async () => {
  const chunks = [];
  let total = 0;
  for await (const chunk of process.stdin) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    total += buffer.length;
    if (total > MAX_STDIN_BYTES) {
      throw new Error("Hook input exceeds the observer size limit.");
    }
    chunks.push(buffer);
  }
  return Buffer.concat(chunks).toString("utf8");
};

const resolveEndpoint = () => {
  const configured =
    process.env.HERMES3D_CODEX_OBSERVER_URL?.trim() ||
    "http://127.0.0.1:18789/events";
  const endpoint = new URL(configured);
  if (endpoint.protocol !== "http:" || !LOOPBACK_HOSTS.has(endpoint.hostname)) {
    throw new Error("Observer endpoint must be an HTTP loopback URL.");
  }
  if (endpoint.pathname !== "/events") {
    throw new Error("Observer endpoint path must be /events.");
  }
  return endpoint;
};

const postEvent = async (endpoint, token, payload) => {
  const body = Buffer.from(JSON.stringify(payload));
  await new Promise((resolve, reject) => {
    const request = http.request(
      {
        protocol: endpoint.protocol,
        hostname: endpoint.hostname,
        port: endpoint.port,
        path: `${endpoint.pathname}${endpoint.search}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Content-Length": String(body.length),
        },
        timeout: REQUEST_TIMEOUT_MS,
      },
      (response) => {
        response.resume();
        response.on("end", () => {
          if ((response.statusCode ?? 500) >= 200 && (response.statusCode ?? 500) < 300) {
            resolve();
            return;
          }
          reject(new Error(`Observer returned HTTP ${response.statusCode ?? 500}.`));
        });
      },
    );
    request.on("timeout", () => request.destroy(new Error("Observer request timed out.")));
    request.on("error", reject);
    request.end(body);
  });
};

const writeRequiredOutput = (eventName) => {
  if (eventName === "Stop" || eventName === "SubagentStop") {
    process.stdout.write("{}\n");
  }
};

const main = async () => {
  let eventName = "";
  try {
    const raw = await readStdin();
    const parsed = JSON.parse(raw);
    const payload = sanitizePayload(parsed);
    eventName = payload.hook_event_name;

    const [token, endpoint] = await Promise.all([
      fs.readFile(tokenFile(), "utf8").then((value) => value.trim()),
      Promise.resolve(resolveEndpoint()),
    ]);
    if (!/^[a-f0-9]{64}$/i.test(token)) return;
    await postEvent(endpoint, token, payload);
  } catch {
    // Telemetry is deliberately best-effort. It must never steer, block, or
    // slow down Codex when the observer is closed or misconfigured.
  } finally {
    writeRequiredOutput(eventName);
  }
};

await main();
