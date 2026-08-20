import { spawn } from "node:child_process";
import http from "node:http";

const observerPort = Number.parseInt(process.env.CODEX_OBSERVER_PORT || "18789", 10);
const port =
  Number.isInteger(observerPort) && observerPort > 0 && observerPort <= 65_535
    ? observerPort
    : 18789;
const gatewayUrl = `ws://127.0.0.1:${port}`;
const children = new Set();
let shuttingDown = false;

const spawnNode = (args, env = {}) => {
  const child = spawn(process.execPath, args, {
    cwd: process.cwd(),
    env: { ...process.env, ...env },
    stdio: "inherit",
    shell: false,
  });
  children.add(child);
  child.once("exit", (code, signal) => {
    children.delete(child);
    if (shuttingDown) return;
    const reason = signal ? `signal ${signal}` : `exit ${code ?? 1}`;
    console.error(`[dev:codex] ${args.join(" ")} stopped (${reason}).`);
    void shutdown(code ?? 1);
  });
  return child;
};

const waitForObserver = async () => {
  const deadline = Date.now() + 8_000;
  while (Date.now() < deadline) {
    const healthy = await new Promise((resolve) => {
      const request = http.get(
        { hostname: "127.0.0.1", port, path: "/health", timeout: 500 },
        (response) => {
          response.resume();
          resolve(response.statusCode === 200);
        },
      );
      request.on("timeout", () => request.destroy());
      request.on("error", () => resolve(false));
    });
    if (healthy) return;
    await new Promise((resolve) => setTimeout(resolve, 150));
  }
  throw new Error(`Codex Observer did not become healthy on port ${port}.`);
};

const shutdown = async (exitCode = 0) => {
  if (shuttingDown) return;
  shuttingDown = true;
  for (const child of children) {
    if (!child.killed) child.kill("SIGTERM");
  }
  await new Promise((resolve) => setTimeout(resolve, 500));
  for (const child of children) {
    if (!child.killed) child.kill("SIGKILL");
  }
  process.exitCode = exitCode;
};

process.once("SIGINT", () => void shutdown(0));
process.once("SIGTERM", () => void shutdown(0));

try {
  spawnNode(["server/codex-observer-adapter.js"], {
    CODEX_OBSERVER_PORT: String(port),
  });
  await waitForObserver();
  console.log(`[dev:codex] Codex activity gateway ready at ${gatewayUrl}`);
  spawnNode(["server/index.js", "--dev"], {
    HERMES3D_GATEWAY_URL: gatewayUrl,
    HERMES3D_GATEWAY_ADAPTER_TYPE: "demo",
    NEXT_PUBLIC_GATEWAY_URL: gatewayUrl,
  });
} catch (error) {
  console.error("[dev:codex] Failed to start:", error);
  await shutdown(1);
}
