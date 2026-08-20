"use strict";

const crypto = require("node:crypto");
const fs = require("node:fs");
const http = require("node:http");
const os = require("node:os");
const path = require("node:path");
const { WebSocket, WebSocketServer } = require("ws");

const { CodexObserverState, clampText } = require("./codex-observer-core");

const DEFAULT_HOST = "127.0.0.1";
const DEFAULT_PORT = 18789;
const MAX_HTTP_BODY_BYTES = 256 * 1024;
const MAX_WS_FRAME_BYTES = 256 * 1024;
const MAX_WS_FRAMES_PER_SECOND = 90;
const MAX_WS_FRAME_BURST = 180;
const HEARTBEAT_INTERVAL_MS = 30_000;
const READ_ONLY_METHODS = [
  "agents.list",
  "agents.files.get",
  "sessions.list",
  "sessions.preview",
  "chat.history",
  "status",
  "health",
  "config.get",
  "exec.approvals.get",
  "models.list",
  "skills.status",
  "cron.list",
  "tasks.list",
  "wake",
];
const MUTATING_METHODS = new Set([
  "agents.create",
  "agents.update",
  "agents.delete",
  "agents.files.set",
  "sessions.patch",
  "sessions.reset",
  "chat.send",
  "chat.abort",
  "config.patch",
  "config.set",
  "exec.approvals.set",
  "exec.approval.resolve",
  "cron.add",
  "cron.run",
  "cron.remove",
  "tasks.update",
]);

const resolvePort = (env = process.env) => {
  const raw = String(env.CODEX_OBSERVER_PORT ?? env.DEMO_ADAPTER_PORT ?? DEFAULT_PORT).trim();
  const port = Number.parseInt(raw, 10);
  return Number.isInteger(port) && port >= 1 && port <= 65_535 ? port : DEFAULT_PORT;
};

const resolveTokenFile = (env = process.env) => {
  const configured = String(env.CODEX_OBSERVER_TOKEN_FILE ?? "").trim();
  if (configured) return path.resolve(configured.replace(/^~(?=$|\/)/, os.homedir()));
  return path.join(os.homedir(), ".codex", "hermes3d-observer", "token");
};

const ensurePrivateDirectory = (directory) => {
  fs.mkdirSync(directory, { recursive: true, mode: 0o700 });
  try {
    fs.chmodSync(directory, 0o700);
  } catch {
    // Best effort on filesystems that do not expose POSIX permissions.
  }
};

const ensureObserverToken = (env = process.env) => {
  const tokenFile = resolveTokenFile(env);
  ensurePrivateDirectory(path.dirname(tokenFile));

  let token = "";
  try {
    token = fs.readFileSync(tokenFile, "utf8").trim();
  } catch (error) {
    if (!error || error.code !== "ENOENT") throw error;
  }

  if (!/^[a-f0-9]{64}$/i.test(token)) {
    token = crypto.randomBytes(32).toString("hex");
    const tempPath = `${tokenFile}.${process.pid}.${crypto.randomBytes(4).toString("hex")}.tmp`;
    fs.writeFileSync(tempPath, `${token}\n`, { encoding: "utf8", mode: 0o600, flag: "wx" });
    fs.renameSync(tempPath, tokenFile);
  }

  try {
    fs.chmodSync(tokenFile, 0o600);
  } catch {
    // Best effort on filesystems that do not expose POSIX permissions.
  }
  return { token, tokenFile };
};

const isLoopbackAddress = (address) => {
  const normalized = String(address ?? "").toLowerCase();
  return (
    normalized === "127.0.0.1" ||
    normalized.startsWith("127.") ||
    normalized === "::1" ||
    normalized === "0:0:0:0:0:0:0:1" ||
    normalized.startsWith("::ffff:127.")
  );
};

const safeCompare = (left, right) => {
  if (typeof left !== "string" || typeof right !== "string") return false;
  const leftBuffer = Buffer.from(left, "utf8");
  const rightBuffer = Buffer.from(right, "utf8");
  if (leftBuffer.length !== rightBuffer.length) return false;
  return crypto.timingSafeEqual(leftBuffer, rightBuffer);
};

const readPresentedToken = (request) => {
  const authorization = request.headers.authorization;
  if (typeof authorization === "string" && /^Bearer\s+/i.test(authorization)) {
    return authorization.replace(/^Bearer\s+/i, "").trim();
  }
  const custom = request.headers["x-hermes3d-observer-token"];
  return typeof custom === "string" ? custom.trim() : "";
};

const writeJson = (response, statusCode, value) => {
  const body = Buffer.from(JSON.stringify(value));
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": String(body.length),
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
  });
  response.end(body);
};

const readJsonBody = (request, maxBytes = MAX_HTTP_BODY_BYTES) =>
  new Promise((resolve, reject) => {
    const chunks = [];
    let total = 0;
    request.on("data", (chunk) => {
      total += chunk.length;
      if (total > maxBytes) {
        reject(Object.assign(new Error("Request body is too large."), { statusCode: 413 }));
        request.destroy();
        return;
      }
      chunks.push(chunk);
    });
    request.on("end", () => {
      try {
        const raw = Buffer.concat(chunks).toString("utf8");
        resolve(JSON.parse(raw));
      } catch {
        reject(Object.assign(new Error("Request body is not valid JSON."), { statusCode: 400 }));
      }
    });
    request.on("error", reject);
  });

const createRateLimiter = () => {
  let tokens = MAX_WS_FRAME_BURST;
  let lastRefillAt = Date.now();
  return () => {
    const now = Date.now();
    const elapsed = Math.max(0, now - lastRefillAt);
    tokens = Math.min(
      MAX_WS_FRAME_BURST,
      tokens + (elapsed / 1000) * MAX_WS_FRAMES_PER_SECOND,
    );
    lastRefillAt = now;
    if (tokens < 1) return false;
    tokens -= 1;
    return true;
  };
};

const randomId = () => crypto.randomUUID().replaceAll("-", "");
const responseOk = (id, payload = {}) => ({ type: "res", id, ok: true, payload });
const responseError = (id, code, message) => ({
  type: "res",
  id,
  ok: false,
  error: { code, message },
});

const handleReadOnlyMethod = (state, method, params, id) => {
  const input = params && typeof params === "object" ? params : {};
  switch (method) {
    case "agents.list":
      return responseOk(id, {
        defaultId: state.defaultAgentId(),
        mainKey: "main",
        agents: state.listAgents(),
      });
    case "agents.files.get":
      return responseOk(id, { file: { missing: true } });
    case "sessions.list":
      return responseOk(id, { sessions: state.listSessions() });
    case "sessions.preview":
      return responseOk(id, {
        ts: Date.now(),
        previews: state.sessionPreviews(input.keys, input.limit, input.maxChars),
      });
    case "chat.history": {
      const sessionKey = typeof input.sessionKey === "string" ? input.sessionKey : "";
      return responseOk(id, { sessionKey, messages: state.historyFor(sessionKey) });
    }
    case "status":
    case "health":
      return responseOk(id, state.statusPayload());
    case "config.get":
      return responseOk(id, {
        config: {
          observer: { source: "codex", mode: "read-only", transport: "localhost-hooks" },
          gateway: { reload: { mode: "hot" } },
        },
        hash: "codex-observer-read-only",
        exists: true,
        path: "local://codex-observer",
      });
    case "exec.approvals.get":
      return responseOk(id, {
        path: "",
        exists: true,
        hash: "codex-observer-read-only",
        file: {
          version: 1,
          defaults: { security: "deny", ask: "off", autoAllowSkills: false },
          agents: {},
        },
      });
    case "models.list": {
      const models = [...new Set(state.listAgents().map((agent) => agent.model).filter(Boolean))].map(
        (model) => ({ id: model, name: model, provider: "openai" }),
      );
      return responseOk(id, { models });
    }
    case "skills.status":
      return responseOk(id, { skills: [] });
    case "cron.list":
      return responseOk(id, { jobs: [] });
    case "tasks.list":
      return responseOk(id, { tasks: [] });
    case "wake":
      return responseOk(id, { ok: true });
    default:
      if (MUTATING_METHODS.has(method)) {
        return responseError(
          id,
          "observer.read_only",
          `Codex Observer is read-only and does not support ${method}.`,
        );
      }
      return responseError(id, "observer.unsupported_method", `Unsupported method: ${method}.`);
  }
};

const createCodexObserverServer = (options = {}) => {
  const host = options.host ?? DEFAULT_HOST;
  const port = options.port ?? resolvePort(options.env ?? process.env);
  const state = options.state ?? new CodexObserverState(options.stateOptions);
  const auth = options.auth ?? ensureObserverToken(options.env ?? process.env);
  const clients = new Set();

  const broadcast = (frame) => {
    for (const client of clients) {
      client.sendEvent(frame);
    }
  };

  const server = http.createServer(async (request, response) => {
    if (!isLoopbackAddress(request.socket.remoteAddress)) {
      writeJson(response, 403, { error: "Codex Observer accepts localhost traffic only." });
      return;
    }

    let url;
    try {
      url = new URL(request.url ?? "/", `http://${request.headers.host ?? "localhost"}`);
    } catch {
      writeJson(response, 400, { error: "Invalid request URL." });
      return;
    }

    if (request.method === "GET" && url.pathname === "/health") {
      writeJson(response, 200, {
        ok: true,
        source: "codex",
        readOnly: true,
        agents: state.listAgents().length,
      });
      return;
    }

    if (request.method === "GET" && url.pathname === "/") {
      response.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      });
      response.end("Hermes3D Codex Observer\n");
      return;
    }

    if (request.method !== "POST" || url.pathname !== "/events") {
      writeJson(response, 404, { error: "Not found." });
      return;
    }

    if (!safeCompare(readPresentedToken(request), auth.token)) {
      writeJson(response, 401, { error: "Observer token required." });
      return;
    }

    try {
      const payload = await readJsonBody(request);
      const frames = state.applyHookEvent(payload);
      for (const frame of frames) broadcast(frame);
      writeJson(response, 202, { accepted: true, event: clampText(payload.hook_event_name, 80) });
    } catch (error) {
      const statusCode = Number.isInteger(error?.statusCode) ? error.statusCode : 400;
      writeJson(response, statusCode, {
        error: error instanceof Error ? error.message : "Invalid observer event.",
      });
    }
  });

  const wss = new WebSocketServer({
    noServer: true,
    maxPayload: MAX_WS_FRAME_BYTES,
    perMessageDeflate: false,
  });

  server.on("upgrade", (request, socket, head) => {
    if (!isLoopbackAddress(request.socket.remoteAddress)) {
      socket.write("HTTP/1.1 403 Forbidden\r\nConnection: close\r\n\r\n");
      socket.destroy();
      return;
    }
    let pathname = "/";
    try {
      pathname = new URL(request.url ?? "/", "http://localhost").pathname;
    } catch {
      socket.destroy();
      return;
    }
    if (pathname !== "/" && pathname !== "/gateway") {
      socket.write("HTTP/1.1 404 Not Found\r\nConnection: close\r\n\r\n");
      socket.destroy();
      return;
    }
    wss.handleUpgrade(request, socket, head, (websocket) => {
      wss.emit("connection", websocket, request);
    });
  });

  wss.on("connection", (websocket) => {
    let connected = false;
    let sequence = 0;
    const allowFrame = createRateLimiter();

    const send = (frame) => {
      if (websocket.readyState !== WebSocket.OPEN) return;
      websocket.send(JSON.stringify(frame));
    };
    const client = {
      sendEvent(frame) {
        send({ ...frame, seq: typeof frame.seq === "number" ? frame.seq : sequence++ });
      },
    };
    clients.add(client);
    send({ type: "event", event: "connect.challenge", payload: { nonce: randomId() } });

    websocket.on("message", (raw) => {
      if (!allowFrame()) {
        websocket.close(1008, "rate limit exceeded");
        return;
      }
      let frame;
      try {
        frame = JSON.parse(String(raw));
      } catch {
        websocket.close(1007, "invalid JSON");
        return;
      }
      if (!frame || typeof frame !== "object" || frame.type !== "req") return;
      const id = typeof frame.id === "string" ? frame.id : "";
      const method = typeof frame.method === "string" ? frame.method : "";
      if (!id || !method) return;

      if (method === "connect") {
        connected = true;
        send(
          responseOk(id, {
            type: "hello-ok",
            protocol: 3,
            adapterType: "demo",
            runtimeName: "Codex Observer",
            features: {
              methods: READ_ONLY_METHODS,
              events: ["agent", "chat", "presence", "heartbeat"],
            },
            snapshot: {
              health: {
                agents: state.listAgents().map((agent) => ({
                  agentId: agent.id,
                  name: agent.name,
                  isDefault: agent.id === state.defaultAgentId(),
                })),
                defaultAgentId: state.defaultAgentId(),
              },
              sessionDefaults: { mainKey: "main" },
            },
            auth: { role: "viewer", scopes: ["operator.read"] },
            policy: { tickIntervalMs: HEARTBEAT_INTERVAL_MS, readOnly: true },
          }),
        );
        return;
      }

      if (!connected) {
        send(responseError(id, "observer.not_connected", "Send connect first."));
        return;
      }
      send(handleReadOnlyMethod(state, method, frame.params, id));
    });

    const cleanup = () => clients.delete(client);
    websocket.on("close", cleanup);
    websocket.on("error", cleanup);
  });

  const heartbeat = setInterval(() => {
    state.expireStale();
    broadcast({
      type: "event",
      event: "heartbeat",
      payload: { timestamp: Date.now(), source: "codex" },
    });
  }, HEARTBEAT_INTERVAL_MS);
  heartbeat.unref();

  const listen = () =>
    new Promise((resolve, reject) => {
      const onError = (error) => {
        server.off("error", onError);
        reject(error);
      };
      server.once("error", onError);
      server.listen(port, host, () => {
        server.off("error", onError);
        resolve({ host, port });
      });
    });

  const close = () =>
    new Promise((resolve) => {
      clearInterval(heartbeat);
      for (const client of clients) clients.delete(client);
      wss.close(() => {
        if (!server.listening) {
          resolve();
          return;
        }
        server.close(() => resolve());
      });
    });

  return { auth, broadcast, close, host, listen, port, server, state, wss };
};

const startCodexObserver = async (options = {}) => {
  const observer = createCodexObserverServer(options);
  await observer.listen();
  console.log(`[codex-observer] WebSocket: ws://${observer.host}:${observer.port}`);
  console.log(`[codex-observer] Hook ingress: http://${observer.host}:${observer.port}/events`);
  console.log(`[codex-observer] Token file: ${observer.auth.tokenFile}`);
  console.log("[codex-observer] Read-only localhost observer is ready.");
  return observer;
};

if (require.main === module) {
  startCodexObserver().catch((error) => {
    console.error("[codex-observer] Failed to start:", error);
    process.exitCode = 1;
  });
}

module.exports = {
  DEFAULT_HOST,
  DEFAULT_PORT,
  createCodexObserverServer,
  ensureObserverToken,
  handleReadOnlyMethod,
  isLoopbackAddress,
  resolvePort,
  resolveTokenFile,
  startCodexObserver,
};
