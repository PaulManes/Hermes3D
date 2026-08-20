import crypto from "node:crypto";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

const observerDir = path.join(os.homedir(), ".codex", "hermes3d-observer");
const hooksPath = path.join(os.homedir(), ".codex", "hooks.json");
const bridgePath = path.join(observerDir, "codex-hook-bridge.mjs");
const tokenPath = path.join(observerDir, "token");
const observerCommandMarker = "hermes3d-observer/codex-hook-bridge.mjs";

const isObserverHandler = (handler) =>
  Boolean(
    handler &&
      typeof handler === "object" &&
      typeof handler.command === "string" &&
      handler.command.includes(observerCommandMarker),
  );

const removeObserverHandlers = (config) => {
  const next = { ...config, hooks: { ...(config.hooks ?? {}) } };
  let removed = 0;
  for (const [eventName, rawGroups] of Object.entries(next.hooks)) {
    if (!Array.isArray(rawGroups)) continue;
    const groups = rawGroups
      .map((group) => {
        if (!group || typeof group !== "object" || !Array.isArray(group.hooks)) return group;
        const handlers = group.hooks.filter((handler) => {
          const observer = isObserverHandler(handler);
          if (observer) removed += 1;
          return !observer;
        });
        return handlers.length > 0 ? { ...group, hooks: handlers } : null;
      })
      .filter(Boolean);
    if (groups.length > 0) next.hooks[eventName] = groups;
    else delete next.hooks[eventName];
  }
  return { next, removed };
};

const atomicWriteJson = async (filePath, value) => {
  const tempPath = `${filePath}.${process.pid}.${crypto.randomBytes(4).toString("hex")}.tmp`;
  await fs.writeFile(tempPath, `${JSON.stringify(value, null, 2)}\n`, {
    encoding: "utf8",
    mode: 0o600,
    flag: "wx",
  });
  await fs.rename(tempPath, filePath);
  await fs.chmod(filePath, 0o600).catch(() => {});
};

const main = async () => {
  let removed = 0;
  try {
    const raw = await fs.readFile(hooksPath, "utf8");
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("Existing ~/.codex/hooks.json is not a JSON object.");
    }
    const stamp = new Date().toISOString().replace(/[:.]/g, "-");
    await fs.writeFile(`${hooksPath}.backup-${stamp}`, raw, { mode: 0o600, flag: "wx" });
    const result = removeObserverHandlers(parsed);
    removed = result.removed;
    await atomicWriteJson(hooksPath, result.next);
  } catch (error) {
    if (!error || error.code !== "ENOENT") throw error;
  }

  await fs.rm(bridgePath, { force: true });
  if (process.argv.includes("--purge-token")) {
    await fs.rm(tokenPath, { force: true });
  }

  console.log(`Removed ${removed} Hermes3D Codex Observer hook handler(s).`);
  console.log(
    process.argv.includes("--purge-token")
      ? "Observer token removed."
      : `Observer token preserved at ${tokenPath}. Use --purge-token to remove it.`,
  );
  console.log("Restart Codex Desktop to reload hook configuration.");
};

await main();
