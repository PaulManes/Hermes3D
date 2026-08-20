// @vitest-environment node

import { createRequire } from "node:module";
import { describe, expect, it } from "vitest";

const require = createRequire(import.meta.url);

type AgentSummary = {
  id: string;
  role: string;
  activity: string;
};

type Preview = {
  items: Array<{ text: string }>;
};

type GatewayEventFrame = {
  event: string;
  payload?: {
    message?: { content?: string };
  };
};

type ObserverStateInstance = {
  applyHookEvent(input: Record<string, unknown>): GatewayEventFrame[];
  listAgents(): AgentSummary[];
  sessionPreviews(keys: string[]): Preview[];
  historyFor(sessionKey: string): Array<{ content: string }>;
};

type RpcResponse = {
  ok: boolean;
  payload?: { agents?: unknown[] };
  error?: { code: string };
};

const core = require("../../server/codex-observer-core.js") as {
  CodexObserverState: new () => ObserverStateInstance;
  classifyTool(toolName: string): string;
  redactText(value: string): string;
};
const adapter = require("../../server/codex-observer-adapter.js") as {
  handleReadOnlyMethod(
    state: ObserverStateInstance,
    method: string,
    params: Record<string, unknown>,
    id: string,
  ): RpcResponse;
  isLoopbackAddress(address: string): boolean;
};

const { CodexObserverState, classifyTool, redactText } = core;
const { handleReadOnlyMethod, isLoopbackAddress } = adapter;

const base = {
  session_id: "thr_test_123",
  cwd: "/Users/example/project",
  model: "gpt-5.6-codex",
  permission_mode: "default",
};

describe("Codex Observer core", () => {
  it("creates a root agent and a distinct subagent from lifecycle events", () => {
    const state = new CodexObserverState();
    state.applyHookEvent({
      ...base,
      hook_event_name: "SessionStart",
      source: "startup",
    });
    state.applyHookEvent({
      ...base,
      hook_event_name: "SubagentStart",
      turn_id: "turn_1",
      agent_id: "agent_1",
      agent_type: "reviewer",
    });

    const agents = state.listAgents();
    expect(agents).toHaveLength(2);
    expect(agents.some((agent) => agent.role === "Main Agent")).toBe(true);
    expect(agents.some((agent) => agent.role === "Reviewer")).toBe(true);
    expect(new Set(agents.map((agent) => agent.id)).size).toBe(2);
  });

  it("attributes tool activity to a subagent when agent_id is present", () => {
    const state = new CodexObserverState();
    state.applyHookEvent({
      ...base,
      hook_event_name: "SubagentStart",
      turn_id: "turn_1",
      agent_id: "agent_1",
      agent_type: "builder",
    });
    state.applyHookEvent({
      ...base,
      hook_event_name: "PreToolUse",
      turn_id: "turn_1",
      agent_id: "agent_1",
      agent_type: "builder",
      tool_name: "apply_patch",
      tool_use_id: "tool_1",
      tool_input: { command: "*** Begin Patch" },
    });

    const builder = state.listAgents().find((agent) => agent.role === "Builder");
    expect(builder).toBeDefined();
    if (!builder) throw new Error("Builder subagent was not created.");
    expect(builder.activity).toBe("coding");
    const preview = state.sessionPreviews([`agent:${builder.id}:main`])[0];
    const latest = preview.items[preview.items.length - 1];
    expect(latest?.text).toContain("apply_patch");
  });

  it("redacts common secrets before they enter activity history", () => {
    const state = new CodexObserverState();
    state.applyHookEvent({
      ...base,
      hook_event_name: "PreToolUse",
      turn_id: "turn_1",
      tool_name: "Bash",
      tool_use_id: "tool_1",
      tool_input: {
        command: "curl -H 'Authorization: Bearer super-secret-token' https://example.test",
      },
    });

    const mainAgent = state.listAgents().find((agent) => agent.role === "Main Agent");
    expect(mainAgent).toBeDefined();
    if (!mainAgent) throw new Error("Main agent was not created.");
    const history = state.historyFor(`agent:${mainAgent.id}:main`);
    const joined = JSON.stringify(history);
    expect(joined).toContain("[REDACTED]");
    expect(joined).not.toContain("super-secret-token");
  });

  it("records a subagent final message without reading transcript files", () => {
    const state = new CodexObserverState();
    const frames = state.applyHookEvent({
      ...base,
      hook_event_name: "SubagentStop",
      turn_id: "turn_1",
      agent_id: "agent_1",
      agent_type: "explorer",
      agent_transcript_path: "/private/unstable/transcript.jsonl",
      last_assistant_message: "Found the routing boundary.",
      stop_hook_active: false,
    });

    const chat = frames.find((frame) => frame.event === "chat");
    expect(chat?.payload?.message?.content).toBe("Found the routing boundary.");
    expect(JSON.stringify(frames)).not.toContain("transcript.jsonl");
  });

  it("keeps the gateway surface read-only", () => {
    const state = new CodexObserverState();
    state.applyHookEvent({ ...base, hook_event_name: "SessionStart", source: "startup" });

    const agents = handleReadOnlyMethod(state, "agents.list", {}, "req_1");
    const mutation = handleReadOnlyMethod(
      state,
      "chat.send",
      { message: "do work" },
      "req_2",
    );

    expect(agents.ok).toBe(true);
    expect(agents.payload?.agents).toHaveLength(1);
    expect(mutation.ok).toBe(false);
    expect(mutation.error?.code).toBe("observer.read_only");
  });

  it("recognizes only loopback ingress addresses", () => {
    expect(isLoopbackAddress("127.0.0.1")).toBe(true);
    expect(isLoopbackAddress("::1")).toBe(true);
    expect(isLoopbackAddress("::ffff:127.0.0.1")).toBe(true);
    expect(isLoopbackAddress("192.168.1.40")).toBe(false);
  });

  it("classifies common Codex tools", () => {
    expect(classifyTool("Bash")).toBe("terminal");
    expect(classifyTool("apply_patch")).toBe("coding");
    expect(classifyTool("mcp__github__get_file")).toBe("integration");
    expect(classifyTool("search")).toBe("research");
    expect(redactText("API_KEY=abc123")).toBe("API_KEY=[REDACTED]");
  });
});
