import crypto from "node:crypto";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const observerDir = path.join(os.homedir(), ".codex", "hermes3d-observer");
const hooksPath = path.join(os.homedir(), ".codex", "hooks.json");
const installedBridgePath = path.join(observerDir, "codex-hook-bridge.mjs");
const tokenPath = path.join(observerDir, "token");
const sourceBridgePath = fileURLToPath(new URL("./codex-hook-bridge.mjs", import.meta.url));
const observerCommandMarker = "hermes3d-observer/codex-hook-bridge.mjs";
const hookEvents = [
  "SessionStart",
  "SessionEnd",
  "SubagentStart",
  "PreToolUse",
  "PostToolUse",
  "SubagentStop",
  "Stop",
];

const quotePosix = (value) => `'${String(value).replaceAll("'", `'"'"'`)}'`;

const isObserverHandler = (handler) =>
  Boolean(
    handler &&
      typeof handler === "object" &&
      typeof handler.command === "string" &&
      handler.command.includes(observerCommandMarker),
  );

const removeObserverHandlers = (config) => {
  const next = { ...config, hooks: { ...(config.hooks ?? {}) } };
  for (const [eventName, rawGroups] of Object.entries(next.hooks)) {
    if (!Array.isArray(rawGroups)) continue;
    const groups = rawGroups
      .map((group) => {
        if (!group || typeof group !== "object" || !Array.isArray(group.hooks)) return group;
        const handlers = group.hooks.filter((handler) => !isObserverHandler(handler));
        return handlers.length > 0 ? { ...group, hooks: handlers } : null;
      })
      .filter(Boolean);
    if (groups.length > 0) next.hooks[eventName] = groups;
    else delete next.hooks[eventName];
  }
  return next;
};

const readExistingConfig = async () => {
  try {
    const raw = await fs.readFile(hooksPath, "utf8");
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("Existing ~/.codex/hooks.json is not a JSON object.");
    }
    if (
      parsed.hooks !== undefined &&
      (!parsed.hooks || typeof parsed.hooks !== "object" || Array.isArray(parsed.hooks))
    ) {
      throw new Error("Existing ~/.codex/hooks.json has an invalid hooks field.");
    }
    return { config: parsed, raw };
  } catch (error) {
    if (error && error.code === "ENOENT") return { config: {}, raw: null };
    throw error;
  }
};

const backupExistingConfig = async (raw) => {
  if (raw === null) return null;
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const backupPath = `${hooksPath}.backup-${stamp}`;
  await fs.writeFile(backupPath, raw, { mode: 0o600, flag: "wx" });
  return backupPath;
};

const atomicWriteJson = async (filePath, value) => {
  const directory = path.dirname(filePath);
  await fs.mkdir(directory, { recursive: true, mode: 0o700 });
  const tempPath = `${filePath}.${process.pid}.${crypto.randomBytes(4).toString("hex")}.tmp`;
  await fs.writeFile(tempPath, `${JSON.stringify(value, null, 2)}\n`, {
    encoding: "utf8",
    mode: 0o600,
    flag: "wx",
  });
  await fs.rename(tempPath, filePath);
  await fs.chmod(filePath, 0o600).catch(() => {});
};

const ensureToken = async () => {
  try {
    const existing = (await fs.readFile(tokenPath, "utf8")).trim();
    if (/^[a-f0-9]{64}$/i.test(existing)) {
      await fs.chmod(tokenPath, 0o600).catch(() => {});
      return;
    }
  } catch (error) {
    if (!error || error.code !== "ENOENT") throw error;
  }
  await fs.writeFile(tokenPath, `${crypto.randomBytes(32).toString("hex")}\n`, {
    encoding: "utf8",
    mode: 0o600,
    flag: "w",
  });
};

const buildHandler = (eventName) => {
  const handler = {
    type: "command",
    command: `${quotePosix(process.execPath)} ${quotePosix(installedBridgePath)}`,
    timeout: eventName === "SessionEnd" ? 2 : 3,
  };
  if (eventName !== "SessionEnd") handler.async = true;
  return handler;
};

const main = async () => {
  await fs.mkdir(observerDir, { recursive: true, mode: 0o700 });
  await fs.chmod(observerDir, 0o700).catch(() => {});
  await fs.copyFile(sourceBridgePath, installedBridgePath);
  await fs.chmod(installedBridgePath, 0o600).catch(() => {});
  await ensureToken();

  const { config, raw } = await readExistingConfig();
  const backupPath = await backupExistingConfig(raw);
  const next = removeObserverHandlers(config);
  next.description =
    typeof next.description === "string" && next.description.trim()
      ? next.description
      : "User lifecycle hooks for Codex.";
  next.hooks = { ...(next.hooks ?? {}) };

  for (const eventName of hookEvents) {
    const groups = Array.isArray(next.hooks[eventName]) ? [...next.hooks[eventName]] : [];
    groups.push({ hooks: [buildHandler(eventName)] });
    next.hooks[eventName] = groups;
  }

  await atomicWriteJson(hooksPath, next);

  console.log("Hermes3D Codex Observer hooks installed.");
  console.log(`Hooks: ${hooksPath}`);
  console.log(`Bridge: ${installedBridgePath}`);
  if (backupPath) console.log(`Backup: ${backupPath}`);
  console.log("");
  console.log("Next:");
  console.log("1. Restart Codex Desktop.");
  console.log("2. Review and trust the new command hooks in /hooks when prompted.");
  console.log("3. Start Hermes3D with: npm run dev:codex");
};

await main();
