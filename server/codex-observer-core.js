"use strict";

const crypto = require("node:crypto");
const path = require("node:path");

const DEFAULT_MAX_AGENTS = 64;
const DEFAULT_MAX_HISTORY = 40;
const DEFAULT_STALE_AFTER_MS = 30 * 60 * 1000;
const MAX_SUMMARY_LENGTH = 320;
const ALLOWED_HOOK_EVENTS = new Set([
  "SessionStart",
  "SessionEnd",
  "SubagentStart",
  "SubagentStop",
  "PreToolUse",
  "PostToolUse",
  "Stop",
]);

const isRecord = (value) => Boolean(value && typeof value === "object" && !Array.isArray(value));

const clampText = (value, limit = MAX_SUMMARY_LENGTH) => {
  if (typeof value !== "string") return "";
  const compact = value.replace(/\s+/g, " ").trim();
  if (compact.length <= limit) return compact;
  return `${compact.slice(0, Math.max(0, limit - 1)).trimEnd()}…`;
};

const redactText = (value, limit = MAX_SUMMARY_LENGTH) => {
  let text = clampText(value, Math.max(limit * 2, limit));
  if (!text) return "";

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

  return clampText(text, limit);
};

const stableHash = (value, length = 12) =>
  crypto.createHash("sha256").update(String(value)).digest("hex").slice(0, length);

const slugify = (value, fallback = "agent") => {
  const slug = String(value ?? "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 36);
  return slug || fallback;
};

const prettify = (value, fallback) => {
  const cleaned = String(value ?? "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!cleaned) return fallback;
  return cleaned.replace(/\b\w/g, (letter) => letter.toUpperCase());
};

const classifyTool = (toolName) => {
  const normalized = String(toolName ?? "").trim();
  const lower = normalized.toLowerCase();

  if (!lower) return "tool";
  if (lower === "bash" || lower === "exec_command" || lower === "write_stdin" || lower.includes("shell")) {
    return "terminal";
  }
  if (lower === "apply_patch" || lower === "edit" || lower === "write" || lower.includes("patch")) {
    return "coding";
  }
  if (/\b(test|lint|build|check|verify)\b/.test(lower)) return "testing";
  if (lower.startsWith("mcp__")) return "integration";
  if (/\b(search|read|find|grep|glob|list|fetch|open)\b/.test(lower)) return "research";
  if (lower.includes("agent")) return "delegation";
  return "tool";
};

const summarizeObject = (value, depth = 0) => {
  if (depth > 2) return "";
  if (typeof value === "string") return redactText(value, 220);
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) {
    const parts = value.slice(0, 4).map((item) => summarizeObject(item, depth + 1)).filter(Boolean);
    return parts.join(", ");
  }
  if (!isRecord(value)) return "";

  const preferredKeys = [
    "command",
    "cmd",
    "path",
    "file",
    "query",
    "pattern",
    "description",
    "url",
    "name",
    "status",
    "exit_code",
    "exitCode",
    "output",
    "result",
    "message",
  ];
  const entries = [];
  for (const key of preferredKeys) {
    if (!(key in value)) continue;
    const summary = summarizeObject(value[key], depth + 1);
    if (summary) entries.push(`${key}: ${summary}`);
    if (entries.length >= 3) break;
  }
  if (entries.length === 0) {
    for (const [key, item] of Object.entries(value).slice(0, 3)) {
      if (/token|secret|password|authorization|cookie|private[_-]?key/i.test(key)) continue;
      const summary = summarizeObject(item, depth + 1);
      if (summary) entries.push(`${key}: ${summary}`);
    }
  }
  return redactText(entries.join(" · "), 260);
};

const summarizeTool = (toolName, input, response) => {
  const displayName = clampText(toolName, 80) || "tool";
  const inputSummary = summarizeObject(input);
  const responseSummary = response === undefined ? "" : summarizeObject(response);
  const activity = classifyTool(displayName);
  const summary = inputSummary
    ? `${displayName}: ${inputSummary}`
    : responseSummary
      ? `${displayName}: ${responseSummary}`
      : displayName;
  return {
    activity,
    summary: redactText(summary, MAX_SUMMARY_LENGTH),
    responseSummary: redactText(responseSummary, MAX_SUMMARY_LENGTH),
  };
};

const resolveTimestamp = (payload, fallback = Date.now()) => {
  for (const key of ["timestamp", "created_at", "createdAt", "updated_at", "updatedAt", "at"]) {
    const value = payload?.[key];
    if (typeof value === "number" && Number.isFinite(value) && value > 0) return value;
    if (typeof value === "string") {
      const parsed = Date.parse(value);
      if (Number.isFinite(parsed) && parsed > 0) return parsed;
    }
  }
  return fallback;
};

const sessionKeyFor = (agentId) => `agent:${agentId}:main`;

const lifecycleFrame = (agent, phase, at, details = {}) => ({
  type: "event",
  event: "agent",
  payload: {
    stream: "lifecycle",
    runId: details.runId ?? null,
    sessionKey: sessionKeyFor(agent.id),
    agentId: agent.id,
    timestamp: at,
    data: {
      phase,
      activity: agent.activity,
      status: agent.status,
      tool: details.tool ?? null,
      toolUseId: details.toolUseId ?? null,
      turnId: agent.turnId ?? null,
    },
  },
});

const chatFrame = (agent, state, text, at, runId = null) => ({
  type: "event",
  event: "chat",
  payload: {
    runId,
    sessionKey: sessionKeyFor(agent.id),
    agentId: agent.id,
    state,
    timestamp: at,
    message: {
      role: "assistant",
      content: redactText(text, 900),
    },
  },
});

class CodexObserverState {
  constructor(options = {}) {
    this.maxAgents = Number.isInteger(options.maxAgents) ? options.maxAgents : DEFAULT_MAX_AGENTS;
    this.maxHistory = Number.isInteger(options.maxHistory) ? options.maxHistory : DEFAULT_MAX_HISTORY;
    this.staleAfterMs = Number.isInteger(options.staleAfterMs)
      ? options.staleAfterMs
      : DEFAULT_STALE_AFTER_MS;
    this.agents = new Map();
    this.mainAgentBySession = new Map();
    this.subagentByExternalKey = new Map();
    this.lastSessionId = null;
  }

  _workspaceFromPayload(payload) {
    const cwd = typeof payload.cwd === "string" ? payload.cwd.trim() : "";
    return cwd || "Codex workspace";
  }

  _ensureCapacity() {
    if (this.agents.size < this.maxAgents) return;
    const candidates = [...this.agents.values()].sort((left, right) => left.updatedAt - right.updatedAt);
    const removable = candidates.find((agent) => !agent.isMain && agent.status !== "working") ?? candidates[0];
    if (!removable) return;
    this.agents.delete(removable.id);
    if (removable.externalKey) this.subagentByExternalKey.delete(removable.externalKey);
    if (removable.isMain) this.mainAgentBySession.delete(removable.sessionId);
  }

  _upsertMain(payload, at) {
    const sessionId = clampText(payload.session_id, 160);
    if (!sessionId) throw new Error("Codex hook event is missing session_id.");
    this.lastSessionId = sessionId;

    const existingId = this.mainAgentBySession.get(sessionId);
    if (existingId && this.agents.has(existingId)) {
      const existing = this.agents.get(existingId);
      existing.workspace = this._workspaceFromPayload(payload);
      existing.model = clampText(payload.model, 100) || existing.model;
      existing.updatedAt = at;
      return existing;
    }

    this._ensureCapacity();
    const workspace = this._workspaceFromPayload(payload);
    const workspaceName = path.basename(workspace) || "Workspace";
    const id = `codex-main-${stableHash(sessionId)}`;
    const agent = {
      id,
      name: `Codex · ${clampText(workspaceName, 36)}`,
      role: "Main Agent",
      workspace,
      identity: { name: "Codex", emoji: "⌘" },
      sessionId,
      sourceAgentId: null,
      externalKey: null,
      agentType: "main",
      isMain: true,
      model: clampText(payload.model, 100) || "Codex",
      permissionMode: clampText(payload.permission_mode, 60) || null,
      turnId: clampText(payload.turn_id, 160) || null,
      status: "idle",
      activity: "Waiting",
      lastMessage: "",
      createdAt: at,
      updatedAt: at,
      history: [],
    };
    this.agents.set(id, agent);
    this.mainAgentBySession.set(sessionId, id);
    return agent;
  }

  _upsertSubagent(payload, at) {
    const sessionId = clampText(payload.session_id, 160);
    const externalAgentId = clampText(payload.agent_id, 180);
    if (!sessionId || !externalAgentId) {
      throw new Error("Subagent hook event is missing session_id or agent_id.");
    }
    this._upsertMain(payload, at);
    const externalKey = `${sessionId}:${externalAgentId}`;
    const existingId = this.subagentByExternalKey.get(externalKey);
    if (existingId && this.agents.has(existingId)) {
      const existing = this.agents.get(existingId);
      existing.agentType = clampText(payload.agent_type, 100) || existing.agentType;
      existing.role = prettify(existing.agentType, "Subagent");
      existing.name = existing.role;
      existing.model = clampText(payload.model, 100) || existing.model;
      existing.permissionMode = clampText(payload.permission_mode, 60) || existing.permissionMode;
      existing.turnId = clampText(payload.turn_id, 160) || existing.turnId;
      existing.updatedAt = at;
      return existing;
    }

    this._ensureCapacity();
    const agentType = clampText(payload.agent_type, 100) || "subagent";
    const role = prettify(agentType, "Subagent");
    const id = `codex-${slugify(agentType, "subagent")}-${stableHash(externalKey)}`;
    const agent = {
      id,
      name: role,
      role,
      workspace: this._workspaceFromPayload(payload),
      identity: { name: role, emoji: "◈" },
      sessionId,
      sourceAgentId: externalAgentId,
      externalKey,
      agentType,
      isMain: false,
      model: clampText(payload.model, 100) || "Codex",
      permissionMode: clampText(payload.permission_mode, 60) || null,
      turnId: clampText(payload.turn_id, 160) || null,
      status: "idle",
      activity: "Waiting",
      lastMessage: "",
      createdAt: at,
      updatedAt: at,
      history: [],
    };
    this.agents.set(id, agent);
    this.subagentByExternalKey.set(externalKey, id);
    return agent;
  }

  _resolveActor(payload, at) {
    const externalAgentId = clampText(payload.agent_id, 180);
    if (externalAgentId) {
      try {
        return this._upsertSubagent(payload, at);
      } catch {
        // Current released tool-hook schemas do not promise agent_id. Fall back
        // to the root agent rather than dropping telemetry when it is absent or malformed.
      }
    }
    return this._upsertMain(payload, at);
  }

  _record(agent, role, content, at) {
    const text = redactText(content, 900);
    if (!text) return;
    agent.history.push({ role, content: text, timestamp: at });
    if (agent.history.length > this.maxHistory) {
      agent.history.splice(0, agent.history.length - this.maxHistory);
    }
    agent.lastMessage = text;
  }

  _touch(agent, payload, at) {
    agent.updatedAt = at;
    agent.workspace = this._workspaceFromPayload(payload);
    agent.model = clampText(payload.model, 100) || agent.model;
    agent.permissionMode = clampText(payload.permission_mode, 60) || agent.permissionMode;
    agent.turnId = clampText(payload.turn_id, 160) || agent.turnId;
  }

  presenceFrame(at = Date.now()) {
    const sessions = this.listSessions();
    return {
      type: "event",
      event: "presence",
      payload: {
        timestamp: at,
        sessions: {
          recent: sessions.map((session) => ({ key: session.key, updatedAt: session.updatedAt })),
          byAgent: sessions.map((session) => ({
            agentId: session.agentId,
            recent: [{ key: session.key, updatedAt: session.updatedAt }],
          })),
        },
      },
    };
  }

  applyHookEvent(rawPayload) {
    if (!isRecord(rawPayload)) throw new Error("Codex hook payload must be an object.");
    const eventName = clampText(rawPayload.hook_event_name, 80);
    if (!ALLOWED_HOOK_EVENTS.has(eventName)) {
      throw new Error(`Unsupported Codex hook event: ${eventName || "(missing)"}`);
    }

    const at = resolveTimestamp(rawPayload);
    const frames = [];

    switch (eventName) {
      case "SessionStart": {
        const agent = this._upsertMain(rawPayload, at);
        this._touch(agent, rawPayload, at);
        agent.status = "working";
        agent.activity = rawPayload.source === "resume" ? "Resuming session" : "Starting session";
        this._record(agent, "system", agent.activity, at);
        frames.push(lifecycleFrame(agent, "start", at, { runId: rawPayload.turn_id ?? null }));
        break;
      }
      case "SubagentStart": {
        const agent = this._upsertSubagent(rawPayload, at);
        this._touch(agent, rawPayload, at);
        agent.status = "working";
        agent.activity = "Starting delegated task";
        this._record(agent, "system", agent.activity, at);
        frames.push(lifecycleFrame(agent, "start", at, { runId: rawPayload.turn_id ?? null }));
        break;
      }
      case "PreToolUse": {
        const agent = this._resolveActor(rawPayload, at);
        this._touch(agent, rawPayload, at);
        const tool = summarizeTool(rawPayload.tool_name, rawPayload.tool_input);
        agent.status = "working";
        agent.activity = tool.activity;
        this._record(agent, "assistant", tool.summary || `Using ${rawPayload.tool_name || "tool"}`, at);
        frames.push(
          lifecycleFrame(agent, "start", at, {
            runId: rawPayload.turn_id ?? rawPayload.tool_use_id ?? null,
            tool: clampText(rawPayload.tool_name, 80) || null,
            toolUseId: clampText(rawPayload.tool_use_id, 160) || null,
          }),
        );
        break;
      }
      case "PostToolUse": {
        const agent = this._resolveActor(rawPayload, at);
        this._touch(agent, rawPayload, at);
        const tool = summarizeTool(
          rawPayload.tool_name,
          rawPayload.tool_input,
          rawPayload.tool_response,
        );
        agent.status = "working";
        agent.activity = tool.activity;
        const completion = tool.responseSummary
          ? `Completed ${tool.summary}. Result: ${tool.responseSummary}`
          : `Completed ${tool.summary || rawPayload.tool_name || "tool"}`;
        this._record(agent, "assistant", completion, at);
        frames.push(
          lifecycleFrame(agent, "end", at, {
            runId: rawPayload.turn_id ?? rawPayload.tool_use_id ?? null,
            tool: clampText(rawPayload.tool_name, 80) || null,
            toolUseId: clampText(rawPayload.tool_use_id, 160) || null,
          }),
        );
        frames.push(
          chatFrame(
            agent,
            "final",
            completion,
            at,
            clampText(rawPayload.tool_use_id, 160) || clampText(rawPayload.turn_id, 160) || null,
          ),
        );
        break;
      }
      case "SubagentStop": {
        const agent = this._upsertSubagent(rawPayload, at);
        this._touch(agent, rawPayload, at);
        const message =
          redactText(rawPayload.last_assistant_message, 900) || "Delegated task finished";
        agent.status = "done";
        agent.activity = "Finished delegated task";
        this._record(agent, "assistant", message, at);
        frames.push(lifecycleFrame(agent, "end", at, { runId: rawPayload.turn_id ?? null }));
        frames.push(chatFrame(agent, "final", message, at, clampText(rawPayload.turn_id, 160) || null));
        break;
      }
      case "Stop": {
        const agent = this._upsertMain(rawPayload, at);
        this._touch(agent, rawPayload, at);
        const message = redactText(rawPayload.last_assistant_message, 900) || "Turn finished";
        agent.status = "done";
        agent.activity = "Turn complete";
        this._record(agent, "assistant", message, at);
        frames.push(lifecycleFrame(agent, "end", at, { runId: rawPayload.turn_id ?? null }));
        frames.push(chatFrame(agent, "final", message, at, clampText(rawPayload.turn_id, 160) || null));
        break;
      }
      case "SessionEnd": {
        const main = this._upsertMain(rawPayload, at);
        const sessionId = main.sessionId;
        for (const agent of this.agents.values()) {
          if (agent.sessionId !== sessionId) continue;
          agent.status = "done";
          agent.activity = "Session ended";
          agent.updatedAt = at;
          frames.push(lifecycleFrame(agent, "end", at));
        }
        break;
      }
      default:
        break;
    }

    frames.push(this.presenceFrame(at));
    return frames;
  }

  expireStale(now = Date.now()) {
    const removed = [];
    for (const agent of this.agents.values()) {
      if (now - agent.updatedAt <= this.staleAfterMs) continue;
      if (agent.status === "working") {
        agent.status = "idle";
        agent.activity = "Inactive";
        continue;
      }
      if (agent.isMain) continue;
      removed.push(agent.id);
      this.agents.delete(agent.id);
      if (agent.externalKey) this.subagentByExternalKey.delete(agent.externalKey);
    }
    return removed;
  }

  listAgents() {
    return [...this.agents.values()]
      .sort((left, right) => right.updatedAt - left.updatedAt)
      .map((agent) => ({
        id: agent.id,
        name: agent.name,
        role: agent.role,
        workspace: agent.workspace,
        identity: agent.identity,
        status: agent.status,
        activity: agent.activity,
        model: agent.model,
        updatedAt: agent.updatedAt,
        isDefault: agent.isMain,
      }));
  }

  listSessions() {
    return [...this.agents.values()]
      .sort((left, right) => right.updatedAt - left.updatedAt)
      .map((agent) => ({
        key: sessionKeyFor(agent.id),
        agentId: agent.id,
        updatedAt: agent.updatedAt,
        displayName: agent.isMain ? "Main" : agent.role,
        origin: { label: agent.name, provider: "codex" },
        model: agent.model,
        modelProvider: "openai",
      }));
  }

  sessionPreviews(keys, limit = 8, maxChars = 280) {
    const requested = Array.isArray(keys) ? keys : [];
    return requested.map((key) => {
      const agentId = String(key).match(/^agent:([^:]+):/)?.[1] ?? "";
      const agent = this.agents.get(agentId);
      if (!agent || agent.history.length === 0) return { key, status: "empty", items: [] };
      const items = agent.history.slice(-Math.max(1, Math.min(20, limit))).map((entry) => ({
        role: entry.role === "assistant" ? "assistant" : "user",
        text: clampText(entry.content, Math.max(40, Math.min(1200, maxChars))),
        timestamp: entry.timestamp,
      }));
      return { key, status: "ok", items };
    });
  }

  historyFor(sessionKey) {
    const agentId = String(sessionKey ?? "").match(/^agent:([^:]+):/)?.[1] ?? "";
    const agent = this.agents.get(agentId);
    return agent ? [...agent.history] : [];
  }

  statusPayload() {
    const sessions = this.listSessions();
    return {
      observer: { source: "codex", readOnly: true },
      sessions: {
        recent: sessions.map((session) => ({ key: session.key, updatedAt: session.updatedAt })),
        byAgent: sessions.map((session) => ({
          agentId: session.agentId,
          recent: [{ key: session.key, updatedAt: session.updatedAt }],
        })),
      },
    };
  }

  defaultAgentId() {
    if (this.lastSessionId) {
      const id = this.mainAgentBySession.get(this.lastSessionId);
      if (id && this.agents.has(id)) return id;
    }
    return this.listAgents()[0]?.id ?? null;
  }
}

module.exports = {
  ALLOWED_HOOK_EVENTS,
  CodexObserverState,
  classifyTool,
  clampText,
  redactText,
  sessionKeyFor,
  slugify,
  stableHash,
  summarizeObject,
  summarizeTool,
};
