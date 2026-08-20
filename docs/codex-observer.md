# Codex Desktop Observer

Hermes3D can act as a second-screen, read-only visualization of Codex Desktop sessions and subagents. Codex remains the control surface. Hermes3D receives lifecycle and local tool events through official Codex hooks, converts them into the existing gateway protocol, and renders the agents inside the office.

This integration does **not** modify Codex Desktop, scrape its UI, read private transcript files, expose an API key, or attempt to display hidden chain-of-thought.

## What appears in the office

The observer currently maps these Codex hook events:

| Codex event | Hermes3D behavior |
| --- | --- |
| `SessionStart` | Creates or activates the root Codex worker |
| `SubagentStart` | Creates a worker for the new subagent |
| `PreToolUse` | Shows terminal, coding, research, testing, integration, or general tool activity |
| `PostToolUse` | Adds a short redacted completion entry and updates the worker |
| `SubagentStop` | Marks the subagent complete and shows its last assistant message when available |
| `Stop` | Marks the root turn complete and shows its last assistant message when available |
| `SessionEnd` | Retires the session's workers |

Tool hooks cover Bash, `apply_patch`, MCP calls, and most other local function tools. Hosted tools such as `WebSearch` do not currently use Codex's local tool-hook path, so they may not appear. See the official [Codex hooks documentation](https://developers.openai.com/codex/hooks) for the current event contract.

## macOS setup

Requirements:

- Node.js 20 or newer
- Codex Desktop using the same macOS user account
- This Hermes3D fork checked out locally

Install the repository dependencies:

```bash
npm ci
```

Install the observer hooks into your user-level Codex configuration:

```bash
npm run codex:install-hooks
```

The installer:

- copies a small bridge to `~/.codex/hermes3d-observer/codex-hook-bridge.mjs`;
- creates a random local token at `~/.codex/hermes3d-observer/token` with owner-only permissions;
- merges the observer into `~/.codex/hooks.json` without deleting existing hooks;
- removes older Hermes3D observer entries before adding the current version, so rerunning it is safe;
- backs up an existing `hooks.json` before changing it.

Restart Codex Desktop. Codex requires new or changed command hooks to be reviewed and trusted. Open `/hooks` when prompted and review the Hermes3D bridge command before trusting it.

Start Hermes3D and the local observer together:

```bash
npm run dev:codex
```

Then open:

```text
http://localhost:3000
```

The launcher configures Studio to use the local observer at:

```text
ws://127.0.0.1:18789
```

If Studio does not connect automatically, choose **Demo backend** in the connection screen and use that URL. The observer advertises the existing demo-compatible gateway profile so the current Hermes3D UI can consume it without a separate Codex-specific UI mode.

Start a Codex task that creates subagents or uses local tools. Workers should appear as hook events arrive.

## Commands

```bash
# Start only the read-only observer gateway
npm run codex-observer

# Start the observer and Hermes3D dev server together
npm run dev:codex

# Install or refresh the user-level Codex hooks
npm run codex:install-hooks

# Remove only the Hermes3D handlers and installed bridge
npm run codex:uninstall-hooks

# Also remove the local observer token
npm run codex:uninstall-hooks -- --purge-token
```

## Architecture

```text
Codex Desktop
  │
  │ official lifecycle hooks (JSON on stdin)
  ▼
~/.codex/hermes3d-observer/codex-hook-bridge.mjs
  │
  │ authenticated HTTP POST, localhost only
  ▼
server/codex-observer-adapter.js
  │
  │ read-only Hermes3D gateway protocol
  ▼
Hermes3D Studio and 3D office
```

The hook bridge is asynchronous for normal lifecycle and tool events. It has a short timeout, always exits successfully, and stays silent when Hermes3D is closed. Observer telemetry cannot approve, deny, rewrite, or delay Codex tool calls.

`SessionEnd` is synchronous because Codex always runs that hook synchronously; the bridge still uses a short request timeout and remains advisory.

## Security and privacy boundaries

The observer is intentionally narrower than the original Hermes/Hermes-agent control surfaces:

- The HTTP and WebSocket server bind only to `127.0.0.1`.
- Non-loopback requests and WebSocket upgrades are rejected.
- Hook ingress requires a random 256-bit bearer token stored outside the repository.
- The gateway exposes read-only methods. Chat sends, configuration writes, agent mutations, approval changes, task writes, and cron mutations are rejected.
- Hook payloads are allowlisted, size-limited, depth-limited, and redacted before transmission.
- Common token, API-key, password, authorization, cookie, and secret patterns are replaced with `[REDACTED]`.
- Full transcript paths and transcript contents are not sent or read. Codex documents transcript files as an unstable hook interface, so the observer deliberately ignores them.
- Tool input and output are reduced to short summaries and bounded in memory.
- Agent and history counts are bounded, and stale subagents expire.

The observer still displays some operational metadata, including workspace paths, tool names, short command or argument summaries, model names, subagent types, and final assistant messages. Use it only on a Mac and display you trust.

## Ports and paths

Defaults:

| Setting | Default |
| --- | --- |
| Observer WebSocket | `ws://127.0.0.1:18789` |
| Hook ingress | `http://127.0.0.1:18789/events` |
| Health endpoint | `http://127.0.0.1:18789/health` |
| Token file | `~/.codex/hermes3d-observer/token` |
| User hook config | `~/.codex/hooks.json` |

Override the observer port when launching Hermes3D:

```bash
CODEX_OBSERVER_PORT=18889 npm run dev:codex
```

For a custom hook endpoint, set `HERMES3D_CODEX_OBSERVER_URL` in the environment inherited by Codex. The bridge only accepts an HTTP loopback URL whose path is `/events`.

## Troubleshooting

### The office loads but no Codex agents appear

1. Confirm the observer is healthy:

   ```bash
   curl http://127.0.0.1:18789/health
   ```

2. Restart Codex Desktop after installing the hooks.
3. Open `/hooks` and confirm every Hermes3D hook is trusted and enabled.
4. Run a fresh Codex turn. Existing activity from before hook installation is not replayed.
5. Confirm Studio is connected to `ws://127.0.0.1:18789` using the Demo backend profile.

### Codex reports a hook configuration error

Restore the most recent `~/.codex/hooks.json.backup-*` file, or run:

```bash
npm run codex:uninstall-hooks
npm run codex:install-hooks
```

The installer refuses to overwrite malformed JSON rather than guessing how to repair it.

### Port 18789 is already in use

Stop the Hermes/demo adapter using that port or launch the Codex observer on another port:

```bash
CODEX_OBSERVER_PORT=18889 npm run dev:codex
```

### Some tool activity is missing

Codex hooks are an observability surface, not a complete execution trace. Hosted tools such as `WebSearch` are not currently covered, and specialized tool paths may opt out. The integration shows only events Codex officially emits to local hooks.
