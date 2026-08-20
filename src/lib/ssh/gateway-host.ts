import { loadStudioSettings } from "@/lib/studio/settings-store";
import * as childProcess from "node:child_process";

const SSH_TARGET_ENV = "HERMES_GATEWAY_SSH_TARGET";
const SSH_USER_ENV = "HERMES_GATEWAY_SSH_USER";
const SSH_PORT_ENV = "HERMES_GATEWAY_SSH_PORT";
const SSH_STRICT_HOST_KEY_ENV = "HERMES_GATEWAY_SSH_STRICT_HOST_KEY_CHECKING";

const DEFAULT_MAX_BUFFER = 4 * 1024 * 1024;
const MAX_MAX_BUFFER = 16 * 1024 * 1024;
const DEFAULT_TIMEOUT_MS = 30_000;
const MAX_TIMEOUT_MS = 120_000;
const MAX_INPUT_BYTES = 1024 * 1024;
const MAX_REMOTE_ARG_BYTES = 64 * 1024;

const SSH_TARGET_PATTERN = /^(?:[a-zA-Z0-9._-]+@)?(?:\[[a-fA-F0-9:.%_-]+\]|[a-zA-Z0-9._:%-]+)$/;

export const assertSafeSshTarget = (value: string): string => {
  const target = value.trim();
  if (!target) {
    throw new Error("SSH target is required.");
  }
  if (target.length > 512 || target.startsWith("-") || !SSH_TARGET_PATTERN.test(target)) {
    throw new Error("SSH target contains unsupported characters.");
  }
  return target;
};

export const quotePosixShellArg = (value: string): string =>
  `'${value.replaceAll("'", `'"'"'`)}'`;

const buildRemoteCommand = (argv: string[]): string => {
  if (argv.length === 0) {
    throw new Error("Remote SSH command is required.");
  }
  const byteLength = argv.reduce(
    (total, value) => total + Buffer.byteLength(value, "utf8"),
    0,
  );
  if (byteLength > MAX_REMOTE_ARG_BYTES) {
    throw new Error("Remote SSH command arguments are too large.");
  }
  return argv.map(quotePosixShellArg).join(" ");
};

export const resolveConfiguredSshTarget = (env: NodeJS.ProcessEnv = process.env): string | null => {
  const configuredTarget = env[SSH_TARGET_ENV]?.trim() ?? "";
  const configuredUser = env[SSH_USER_ENV]?.trim() ?? "";

  if (configuredTarget) {
    const combined = configuredTarget.includes("@")
      ? configuredTarget
      : configuredUser
        ? `${configuredUser}@${configuredTarget}`
        : configuredTarget;
    return assertSafeSshTarget(combined);
  }

  return null;
};

export const resolveConfiguredSshPort = (env: NodeJS.ProcessEnv = process.env): number | null => {
  const rawPort = env[SSH_PORT_ENV]?.trim() ?? "";
  if (!rawPort) {
    return null;
  }
  const port = Number.parseInt(rawPort, 10);
  if (!Number.isInteger(port) || port < 1 || port > 65_535) {
    throw new Error(`${SSH_PORT_ENV} must be a valid port.`);
  }
  return port;
};

export const resolveConfiguredSshStrictHostKeyChecking = (
  env: NodeJS.ProcessEnv = process.env
): "accept-new" | "yes" => {
  const rawValue = env[SSH_STRICT_HOST_KEY_ENV]?.trim().toLowerCase() ?? "";
  if (!rawValue) {
    return "accept-new";
  }
  if (rawValue === "accept-new" || rawValue === "yes") {
    return rawValue;
  }
  throw new Error(
    `${SSH_STRICT_HOST_KEY_ENV} must be one of: accept-new, yes. Disabling host-key verification is not supported.`
  );
};

export const resolvePortFromGatewayUrl = (gatewayUrl: string): number | null => {
  const trimmed = gatewayUrl.trim();
  if (!trimmed) {
    return null;
  }
  try {
    const parsed = new URL(trimmed);
    if (!parsed.port) {
      return null;
    }
    const port = Number.parseInt(parsed.port, 10);
    return Number.isInteger(port) && port >= 1 && port <= 65_535 ? port : null;
  } catch {
    return null;
  }
};

export const resolveGatewaySshTargetFromGatewayUrl = (
  gatewayUrl: string,
  env: NodeJS.ProcessEnv = process.env
): string => {
  const configured = resolveConfiguredSshTarget(env);
  if (configured) return configured;

  const trimmed = gatewayUrl.trim();
  if (!trimmed) {
    throw new Error(
      `Gateway URL is missing. Set it in Studio settings or set ${SSH_TARGET_ENV}.`
    );
  }
  let hostname: string;
  try {
    hostname = new URL(trimmed).hostname;
  } catch {
    throw new Error(`Invalid gateway URL: ${trimmed}`);
  }
  if (!hostname) {
    throw new Error(`Invalid gateway URL: ${trimmed}`);
  }

  const configuredUser = env[SSH_USER_ENV]?.trim() ?? "";
  const user = configuredUser || "ubuntu";
  return assertSafeSshTarget(`${user}@${hostname}`);
};

export const resolveGatewaySshTarget = (env: NodeJS.ProcessEnv = process.env): string => {
  const configured = resolveConfiguredSshTarget(env);
  if (configured) return configured;

  const settings = loadStudioSettings();
  return resolveGatewaySshTargetFromGatewayUrl(settings.gateway?.url?.trim() ?? "", env);
};

export const extractJsonErrorMessage = (value: string): string | null => {
  const trimmed = value.trim();
  if (!trimmed) return null;
  try {
    const parsed = JSON.parse(trimmed) as unknown;
    if (!parsed || typeof parsed !== "object") return null;
    const record = parsed as Record<string, unknown>;
    const direct = record.error;
    if (typeof direct === "string" && direct.trim()) return direct.trim();
    if (direct && typeof direct === "object") {
      const nested = (direct as Record<string, unknown>).message;
      if (typeof nested === "string" && nested.trim()) return nested.trim();
    }
    return null;
  } catch {
    return null;
  }
};

export const parseJsonOutput = (raw: string, label: string): unknown => {
  const trimmed = raw.trim();
  if (!trimmed) {
    throw new Error(`Command produced empty JSON output (${label}).`);
  }
  try {
    return JSON.parse(trimmed) as unknown;
  } catch {
    throw new Error(`Command produced invalid JSON output (${label}).`);
  }
};

export const runSshJson = (params: {
  sshTarget: string;
  sshPort?: number | null;
  strictHostKeyChecking?: "accept-new" | "yes";
  argv: string[];
  label: string;
  input?: string;
  fallbackMessage?: string;
  maxBuffer?: number;
  timeoutMs?: number;
}): unknown => {
  const sshTarget = assertSafeSshTarget(params.sshTarget);
  const remoteCommand = buildRemoteCommand(params.argv);

  if (params.input !== undefined && Buffer.byteLength(params.input, "utf8") > MAX_INPUT_BYTES) {
    throw new Error("SSH command input is too large.");
  }

  const maxBuffer = params.maxBuffer ?? DEFAULT_MAX_BUFFER;
  if (!Number.isInteger(maxBuffer) || maxBuffer < 1 || maxBuffer > MAX_MAX_BUFFER) {
    throw new Error(`maxBuffer must be between 1 and ${MAX_MAX_BUFFER}.`);
  }

  const timeout = params.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  if (!Number.isInteger(timeout) || timeout < 1 || timeout > MAX_TIMEOUT_MS) {
    throw new Error(`timeoutMs must be between 1 and ${MAX_TIMEOUT_MS}.`);
  }

  if (
    params.sshPort !== undefined &&
    params.sshPort !== null &&
    (!Number.isInteger(params.sshPort) || params.sshPort < 1 || params.sshPort > 65_535)
  ) {
    throw new Error("SSH port must be between 1 and 65535.");
  }

  const options: childProcess.SpawnSyncOptionsWithStringEncoding = {
    encoding: "utf8",
    input: params.input,
    maxBuffer,
    timeout,
  };

  const sshArgs = [
    "-o",
    "BatchMode=yes",
    "-o",
    `StrictHostKeyChecking=${params.strictHostKeyChecking ?? resolveConfiguredSshStrictHostKeyChecking()}`,
  ];
  if (typeof params.sshPort === "number") {
    sshArgs.push("-p", String(params.sshPort));
  }
  // OpenSSH sends the remote command through the destination account's shell.
  // Pass one POSIX-quoted command string so untrusted values remain data rather
  // than becoming additional shell syntax on the remote host.
  sshArgs.push(sshTarget, remoteCommand);

  const result = childProcess.spawnSync("ssh", sshArgs, options);
  if (result.error) {
    const timedOut = "code" in result.error && result.error.code === "ETIMEDOUT";
    throw new Error(
      timedOut
        ? `SSH command timed out (${params.label}).`
        : `Failed to execute ssh: ${result.error.message}`,
    );
  }
  const stdout = result.stdout ?? "";
  const stderr = result.stderr ?? "";
  if (result.status !== 0) {
    const stderrText = stderr.trim();
    const stdoutText = stdout.trim();
    const message =
      extractJsonErrorMessage(stdout) ??
      extractJsonErrorMessage(stderr) ??
      (stderrText ||
        stdoutText ||
        params.fallbackMessage ||
        `Command failed (${params.label}).`);
    throw new Error(message);
  }
  return parseJsonOutput(stdout, params.label);
};
