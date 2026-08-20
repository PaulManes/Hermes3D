// @vitest-environment node

import { beforeEach, describe, expect, it, vi } from "vitest";

import { spawnSync } from "node:child_process";

vi.mock("node:child_process", async () => {
  const actual = await vi.importActual<typeof import("node:child_process")>(
    "node:child_process"
  );
  return {
    default: actual,
    ...actual,
    spawnSync: vi.fn(),
  };
});

import { runSshJson } from "@/lib/ssh/gateway-host";

const mockedSpawnSync = vi.mocked(spawnSync);

const succeed = () => {
  mockedSpawnSync.mockReturnValueOnce({
    status: 0,
    stdout: JSON.stringify({ ok: true }),
    stderr: "",
    error: undefined,
  } as never);
};

describe("runSshJson", () => {
  beforeEach(() => {
    mockedSpawnSync.mockReset();
  });

  it("forwards bounded maxBuffer and timeout settings to spawnSync", () => {
    succeed();

    runSshJson({
      sshTarget: "me@example.test",
      argv: ["bash", "-lc", "echo ok"],
      label: "ssh-json-test",
      input: "echo hello",
      maxBuffer: 12_345,
      timeoutMs: 5_000,
    });

    expect(mockedSpawnSync).toHaveBeenCalledTimes(1);
    const [, , options] = mockedSpawnSync.mock.calls[0] as [
      string,
      string[],
      { encoding?: string; input?: string; maxBuffer?: number; timeout?: number },
    ];
    expect(options.maxBuffer).toBe(12_345);
    expect(options.timeout).toBe(5_000);
  });

  it("sends one POSIX-quoted remote command so arguments cannot add shell syntax", () => {
    succeed();

    runSshJson({
      sshTarget: "me@example.test",
      argv: ["bash", "-s", "--", "agent; touch /tmp/pwn", "O'Reilly"],
      label: "ssh-quoting-test",
      input: "echo hello",
    });

    const [command, args] = mockedSpawnSync.mock.calls[0] as [string, string[]];
    expect(command).toBe("ssh");
    expect(args.at(-2)).toBe("me@example.test");
    expect(args.at(-1)).toBe(
      `'bash' '-s' '--' 'agent; touch /tmp/pwn' 'O'"'"'Reilly'`,
    );
    expect(args).not.toContain("agent; touch /tmp/pwn");
  });

  it("rejects an SSH target that could be interpreted as an option", () => {
    expect(() =>
      runSshJson({
        sshTarget: "-oProxyCommand=touch /tmp/pwn",
        argv: ["true"],
        label: "unsafe-target-test",
      }),
    ).toThrow("SSH target contains unsupported characters");
    expect(mockedSpawnSync).not.toHaveBeenCalled();
  });

  it("rejects invalid ports before executing ssh", () => {
    expect(() =>
      runSshJson({
        sshTarget: "me@example.test",
        sshPort: 0,
        argv: ["true"],
        label: "unsafe-port-test",
      }),
    ).toThrow("SSH port must be between 1 and 65535");
    expect(mockedSpawnSync).not.toHaveBeenCalled();
  });
});
