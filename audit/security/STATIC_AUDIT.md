# Static Security Audit

Generated from tracked source only. The scanner does not install dependencies, execute repository scripts, start services, or access developer credentials. Pattern matches identify review surfaces; they are not automatically proof of a vulnerability.

## Summary

- Tracked files inspected: **633**
- API route handlers inventoried: **25**
- Environment variable names referenced: **31**
- Blocking findings: **0**
- Critical: **0**
- High: **51**
- Medium: **208**
- Low: **0**
- Informational: **2**

## Blocking findings

None detected.

## Review findings and security-sensitive boundaries

### HIGH — Sensitive host credential path is referenced

- Location: `.gitignore:34`
- Category: `credential-access`
- Evidence: `id_rsa`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `.gitignore:35`
- Category: `credential-access`
- Evidence: `id_rsa.pub`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `.gitignore:36`
- Category: `credential-access`
- Evidence: `id_ed25519`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `.gitignore:37`
- Category: `credential-access`
- Evidence: `id_ed25519.pub`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `Dockerfile:33`
- Category: `host-mutation`
- Evidence: `COPY --chown=node:node --from=builder /app/.next ./.next`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `Dockerfile:34`
- Category: `host-mutation`
- Evidence: `COPY --chown=node:node --from=builder /app/public ./public`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `Dockerfile:35`
- Category: `host-mutation`
- Evidence: `COPY --chown=node:node --from=builder /app/server ./server`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `Dockerfile:36`
- Category: `host-mutation`
- Evidence: `COPY --chown=node:node --from=deps /app/node_modules ./node_modules`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `Dockerfile:37`
- Category: `host-mutation`
- Evidence: `COPY --chown=node:node --from=builder /app/package.json ./package.json`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `Dockerfile:38`
- Category: `host-mutation`
- Evidence: `COPY --chown=node:node --from=builder /app/next.config.ts ./next.config.ts`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `docs/hermes-agent-tailscale.md:145`
- Category: `host-mutation`
- Evidence: `launchctl load ~/Library/LaunchAgents/dev.hermes3d.serve.plist`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `docs/hermes-agent-tailscale.md:165`
- Category: `host-mutation`
- Evidence: `systemctl --user enable --now hermes-serve`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Host command-execution boundary

- Location: `scripts/cleanup-ux-artifacts.mjs:2`
- Category: `command-execution`
- Evidence: `import { spawnSync } from "node:child_process";`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `scripts/cleanup-ux-artifacts.mjs:41`
- Category: `command-execution`
- Evidence: `return spawnSync(command, args, { encoding: "utf8" });`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `scripts/hermes3doctor.mjs:1`
- Category: `command-execution`
- Evidence: `import { execFileSync } from "node:child_process";`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `scripts/hermes3doctor.mjs:175`
- Category: `command-execution`
- Evidence: `const branch = execFileSync("git", ["rev-parse", "--abbrev-ref", "HEAD"], {`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `scripts/hermes3doctor.mjs:181`
- Category: `command-execution`
- Evidence: `execFileSync("git", ["status", "--porcelain"], {`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `scripts/smoke-dev-server.mjs:1`
- Category: `command-execution`
- Evidence: `import { spawn } from "node:child_process";`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `scripts/smoke-dev-server.mjs:25`
- Category: `command-execution`
- Evidence: `const child = spawn(process.execPath, ["server/index.js", "--dev"], {`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `scripts/static-security-audit.mjs:1`
- Category: `command-execution`
- Evidence: `import { execFileSync } from "node:child_process";`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `scripts/static-security-audit.mjs:47`
- Category: `command-execution`
- Evidence: `execFileSync("git", args, {`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `scripts/static-security-audit.mjs:172`
- Category: `command-execution`
- Evidence: `pattern: /(?:node:child_process|child_process|\bexecFileSync\s*\(|\bexecFile\s*\(|\bexecSync\s*\(|\bspawnSync\s*\(|\bspawn\s*\(|\bfork\s*\()/g,`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Persistent or privileged host mutation command

- Location: `scripts/static-security-audit.mjs:186`
- Category: `host-mutation`
- Evidence: `pattern: /\b(?:sudo|launchctl|systemctl|crontab|defaults\s+write|security\s+add-trusted-cert|chmod\s+[0-7]{3,4}|chown)\b/g,`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `scripts/static-security-audit.mjs:193`
- Category: `credential-access`
- Evidence: `pattern: /(?:~\/|\/Users\/[^/]+\/|process\.env\.HOME[^\n]{0,120})?(?:\.ssh|\.aws|\.gnupg|Keychains|id_rsa|id_ed25519)/g,`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `server/index.js:61`
- Category: `host-mutation`
- Evidence: `console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\`);`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `server/index.js:61`
- Category: `credential-access`
- Evidence: `console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\`);`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `src/lib/office/github.ts:1`
- Category: `command-execution`
- Evidence: `import * as childProcess from "node:child_process";`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `src/lib/office/github.ts:124`
- Category: `command-execution`
- Evidence: `const result = childProcess.spawnSync(command, args, {`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `src/lib/ssh/agent-state.ts:118`
- Category: `credential-access`
- Evidence: `sshTarget: params.sshTarget,`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `src/lib/ssh/agent-state.ts:132`
- Category: `credential-access`
- Evidence: `sshTarget: params.sshTarget,`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `src/lib/ssh/gateway-host.ts:2`
- Category: `command-execution`
- Evidence: `import * as childProcess from "node:child_process";`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `src/lib/ssh/gateway-host.ts:184`
- Category: `credential-access`
- Evidence: `const sshTarget = assertSafeSshTarget(params.sshTarget);`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `src/lib/ssh/gateway-host.ts:202`
- Category: `credential-access`
- Evidence: `params.sshPort !== undefined &&`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `src/lib/ssh/gateway-host.ts:203`
- Category: `credential-access`
- Evidence: `params.sshPort !== null &&`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `src/lib/ssh/gateway-host.ts:204`
- Category: `credential-access`
- Evidence: `(!Number.isInteger(params.sshPort) || params.sshPort < 1 || params.sshPort > 65_535)`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `src/lib/ssh/gateway-host.ts:222`
- Category: `credential-access`
- Evidence: `if (typeof params.sshPort === "number") {`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `src/lib/ssh/gateway-host.ts:223`
- Category: `credential-access`
- Evidence: `sshArgs.push("-p", String(params.sshPort));`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `src/lib/ssh/gateway-host.ts:230`
- Category: `command-execution`
- Evidence: `const result = childProcess.spawnSync("ssh", sshArgs, options);`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `src/lib/ssh/skills-remove.ts:73`
- Category: `credential-access`
- Evidence: `sshTarget: params.sshTarget,`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `tests/unit/agentStateRoute.test.ts:3`
- Category: `command-execution`
- Evidence: `import { spawnSync } from "node:child_process";`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `tests/unit/agentStateRoute.test.ts:12`
- Category: `command-execution`
- Evidence: `vi.mock("node:child_process", () => {`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `tests/unit/gatewayMediaRoute.test.ts:5`
- Category: `command-execution`
- Evidence: `import { spawnSync } from "node:child_process";`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `tests/unit/gatewayMediaRoute.test.ts:12`
- Category: `command-execution`
- Evidence: `vi.mock("node:child_process", async () => {`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `tests/unit/gatewayMediaRoute.test.ts:13`
- Category: `command-execution`
- Evidence: `const actual = await vi.importActual<typeof import("node:child_process")>(`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `tests/unit/gatewayMediaRoute.test.ts:14`
- Category: `command-execution`
- Evidence: `"node:child_process"`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `tests/unit/runSshJson.test.ts:5`
- Category: `command-execution`
- Evidence: `import { spawnSync } from "node:child_process";`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `tests/unit/runSshJson.test.ts:7`
- Category: `command-execution`
- Evidence: `vi.mock("node:child_process", async () => {`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `tests/unit/runSshJson.test.ts:8`
- Category: `command-execution`
- Evidence: `const actual = await vi.importActual<typeof import("node:child_process")>(`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `tests/unit/runSshJson.test.ts:9`
- Category: `command-execution`
- Evidence: `"node:child_process"`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `tests/unit/skillsRemoveRoute.test.ts:3`
- Category: `command-execution`
- Evidence: `import { spawnSync } from "node:child_process";`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `tests/unit/skillsRemoveRoute.test.ts:12`
- Category: `command-execution`
- Evidence: `vi.mock("node:child_process", () => {`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### MEDIUM — Filesystem mutation boundary

- Location: `scripts/generate-dependency-report.mjs:192`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(root, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `scripts/generate-dependency-report.mjs:193`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(path.join(root, "REPORT.md"), report);`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `scripts/hermes3doctor.mjs:128`
- Category: `network-egress`
- Evidence: `const socket = new WebSocket(url, { handshakeTimeout: timeoutMs });`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `scripts/hermes3doctor.mjs:154`
- Category: `network-egress`
- Evidence: `const response = await fetch(url, { headers, signal: controller.signal });`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Public network bind literal

- Location: `scripts/lib/hermes3doctor-core.mjs:268`
- Category: `public-bind`
- Evidence: `normalizedHost !== "0.0.0.0";`
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Filesystem mutation boundary

- Location: `scripts/list-dependency-lifecycle-scripts.mjs:110`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(path.dirname(outputPath), { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `scripts/list-dependency-lifecycle-scripts.mjs:111`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(outputPath, \`${JSON.stringify(records, null, 2)}\n\`);`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `scripts/smoke-dev-server.mjs:56`
- Category: `network-egress`
- Evidence: `const res = await fetch(url, { redirect: "manual" });`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `scripts/static-security-audit.mjs:221`
- Category: `path-resolution`
- Evidence: `pattern: /(?:searchParams|get\(["']path["']\)|params\.(?:path|file|name)|formData\.get\(["'](?:file|path|name)["']\))/g,`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `scripts/static-security-audit.mjs:498`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(outputDir, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `scripts/static-security-audit.mjs:499`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(reportPath, report);`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `scripts/static-security-audit.mjs:500`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(jsonPath, \`${JSON.stringify(output, null, 2)}\n\`);`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `scripts/studio-setup.js:67`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(settingsDir, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `scripts/studio-setup.js:75`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), "utf8");`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `server/gateway-proxy.js:139`
- Category: `public-bind`
- Evidence: `url.hostname === "127.0.0.1" || url.hostname === "::1" || url.hostname === "0.0.0.0"`
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Outbound network boundary

- Location: `server/gateway-proxy.js:341`
- Category: `network-egress`
- Evidence: `upstreamWs = new WebSocket(upstreamUrl, {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `server/hermes-agent/jsonrpc-client.js:50`
- Category: `path-resolution`
- Evidence: `parsed.searchParams.set("token", token.trim());`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `server/hermes-agent/jsonrpc-client.js:151`
- Category: `network-egress`
- Evidence: `const ws = new WebSocket(this.url, options);`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `server/hermes-agent/office-speech.js:50`
- Category: `path-resolution`
- Evidence: `parsed.searchParams.set("channel", channel || DEFAULT_CHANNEL);`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `server/hermes-agent/office-speech.js:52`
- Category: `path-resolution`
- Evidence: `parsed.searchParams.set("token", token.trim());`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `server/hermes-agent/office-speech.js:138`
- Category: `network-egress`
- Evidence: `const ws = new WebSocket(eventsUrl, wsOptions);`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `server/hermes-gateway-adapter.js:271`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(path.dirname(HISTORY_FILE), { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `server/hermes-gateway-adapter.js:272`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(HISTORY_FILE, JSON.stringify(data, null, 2), "utf8");`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `server/index.js:55`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(CERT_DIR, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `server/index.js:56`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(CERT_PATH, pems.cert);`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `server/index.js:57`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(KEY_PATH, pems.private);`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `server/index.js:173`
- Category: `public-bind`
- Evidence: `: hostname === "0.0.0.0" || hostname === "::"`
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `server/network-policy.js:51`
- Category: `public-bind`
- Evidence: `if (normalized === "0.0.0.0" || normalized === "::") {`
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/app/api/files/upload/route.ts:88`
- Category: `path-resolution`
- Evidence: `const file = formData.get("file");`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `src/app/api/files/upload/route.ts:116`
- Category: `filesystem-write`
- Evidence: `await fs.writeFile(targetPath, bytes);`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/app/api/gateway/media/route.ts:194`
- Category: `path-resolution`
- Evidence: `const { searchParams } = new URL(request.url);`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/app/api/gateway/media/route.ts:195`
- Category: `path-resolution`
- Evidence: `const rawPath = (searchParams.get("path") ?? "").trim();`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `src/app/api/office/browser-preview/route.ts:61`
- Category: `network-egress`
- Evidence: `const response = await fetch(\`${baseUrl}${pathname}\`, {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/app/api/office/browser-preview/route.ts:126`
- Category: `path-resolution`
- Evidence: `const { searchParams } = new URL(request.url);`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/app/api/office/browser-preview/route.ts:127`
- Category: `path-resolution`
- Evidence: `const rawUrl = (searchParams.get("url") ?? "").trim();`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/app/api/office/browser-preview/route.ts:142`
- Category: `path-resolution`
- Evidence: `const waitMsRaw = Number(searchParams.get("waitMs") ?? "");`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/app/api/office/github/route.ts:34`
- Category: `path-resolution`
- Evidence: `const { searchParams } = new URL(request.url);`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/app/api/office/github/route.ts:35`
- Category: `path-resolution`
- Evidence: `const repo = (searchParams.get("repo") ?? "").trim();`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/app/api/office/github/route.ts:36`
- Category: `path-resolution`
- Evidence: `const number = parsePullRequestNumber(searchParams.get("number"));`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `src/app/api/office/layout/route.ts:32`
- Category: `network-egress`
- Evidence: `response = await fetch(params.layoutUrl, {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/app/api/office/layout/route.ts:59`
- Category: `path-resolution`
- Evidence: `const source = url.searchParams.get("source")?.trim() || "local";`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/app/api/office/layout/route.ts:86`
- Category: `path-resolution`
- Evidence: `const gatewayUrl = url.searchParams.get("gatewayUrl")?.trim() || "";`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/app/api/office/presence/route.ts:21`
- Category: `path-resolution`
- Evidence: `const source = url.searchParams.get("source")?.trim() || "local";`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/app/api/office/presence/route.ts:22`
- Category: `path-resolution`
- Evidence: `const workspaceId = url.searchParams.get("workspaceId")?.trim() || "default";`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/app/api/office/route.ts:20`
- Category: `path-resolution`
- Evidence: `const workspaceId = asString(url.searchParams.get("workspaceId")) || "default";`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/app/api/office/route.ts:21`
- Category: `path-resolution`
- Evidence: `const officeId = asString(url.searchParams.get("officeId"));`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/app/api/office/standup/config/route.ts:18`
- Category: `path-resolution`
- Evidence: `return (url.searchParams.get("gatewayUrl") ?? "").trim();`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/app/api/path-suggestions/route.ts:136`
- Category: `path-resolution`
- Evidence: `const { searchParams } = new URL(request.url);`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/app/api/path-suggestions/route.ts:137`
- Category: `path-resolution`
- Evidence: `const rawQuery = searchParams.get("q");`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `src/app/api/runtime/custom/route.ts:89`
- Category: `network-egress`
- Evidence: `const response = await fetch(\`${runtimeUrl}${pathname}\`, {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/app/spotify/callback/page.tsx:8`
- Category: `path-resolution`
- Evidence: `const code = url.searchParams.get("code") ?? "";`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/app/spotify/callback/page.tsx:9`
- Category: `path-resolution`
- Evidence: `const state = url.searchParams.get("state") ?? "";`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/app/spotify/callback/page.tsx:10`
- Category: `path-resolution`
- Evidence: `const error = url.searchParams.get("error") ?? "";`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `src/features/agents/components/AgentChatPanel.tsx:1506`
- Category: `network-egress`
- Evidence: `const response = await fetch("/api/files/upload", {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/features/agents/screens/AgentsPageScreen.tsx:153`
- Category: `path-resolution`
- Evidence: `const searchParams = useSearchParams();`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/features/agents/screens/AgentsPageScreen.tsx:157`
- Category: `path-resolution`
- Evidence: `searchParams.get(SETTINGS_ROUTE_AGENT_ID_QUERY_PARAM)`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/features/agents/screens/AgentsPageScreen.tsx:159`
- Category: `path-resolution`
- Evidence: `[pathname, searchParams]`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `src/features/office/components/OfficeBuilderPanel.tsx:29`
- Category: `network-egress`
- Evidence: `const response = await fetch("/api/office", {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/features/office/components/OfficeBuilderPanel.tsx:50`
- Category: `network-egress`
- Evidence: `const response = await fetch("/api/office/publish", {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/features/office/hooks/useRemoteOfficeLayout.ts:29`
- Category: `path-resolution`
- Evidence: `const searchParams = new URLSearchParams({ source: "remote" });`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/features/office/hooks/useRemoteOfficeLayout.ts:30`
- Category: `path-resolution`
- Evidence: `return \`/api/office/layout?${searchParams.toString()}\`;`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `src/features/office/hooks/useRemoteOfficeLayout.ts:39`
- Category: `network-egress`
- Evidence: `const response = await fetch(requestUrl, { cache: "no-store" });`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/features/office/hooks/useRemoteOfficePresence.ts:70`
- Category: `path-resolution`
- Evidence: `const searchParams = new URLSearchParams({`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/features/office/hooks/useRemoteOfficePresence.ts:73`
- Category: `path-resolution`
- Evidence: `return \`/api/office/presence?${searchParams.toString()}\`;`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `src/features/office/hooks/useRemoteOfficePresence.ts:92`
- Category: `network-egress`
- Evidence: `const response = await fetch(requestUrl, { cache: "no-store" });`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/features/office/screens/github/useBrowserPreview.ts:48`
- Category: `network-egress`
- Evidence: `const response = await fetch(`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/features/office/screens/GithubImmersiveScreen.tsx:92`
- Category: `network-egress`
- Evidence: `const response = await fetch("/api/office/github", { cache: "no-store" });`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/features/office/screens/GithubImmersiveScreen.tsx:158`
- Category: `network-egress`
- Evidence: `const response = await fetch(`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/features/office/screens/GithubImmersiveScreen.tsx:265`
- Category: `network-egress`
- Evidence: `const response = await fetch("/api/office/github", {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/features/office/screens/GithubImmersiveScreen.tsx:310`
- Category: `network-egress`
- Evidence: `const response = await fetch("/api/office/github", {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/features/office/screens/OfficeScreen.tsx:1084`
- Category: `path-resolution`
- Evidence: `const searchParams = new URL(window.location.href).searchParams;`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/features/office/screens/OfficeScreen.tsx:1085`
- Category: `path-resolution`
- Evidence: `return searchParams.has("code");`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `src/features/office/screens/OfficeScreen.tsx:3073`
- Category: `network-egress`
- Evidence: `void fetch("/api/office/call", {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/features/office/screens/OfficeScreen.tsx:3104`
- Category: `network-egress`
- Evidence: `void fetch("/api/office/call", {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/features/office/screens/OfficeScreen.tsx:3233`
- Category: `network-egress`
- Evidence: `void fetch("/api/office/text", {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/features/office/screens/OfficeScreen.tsx:3264`
- Category: `network-egress`
- Evidence: `void fetch("/api/office/text", {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/features/office/screens/OfficeScreen.tsx:3431`
- Category: `network-egress`
- Evidence: `const response = await fetch("/api/office/remote-message", {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/features/office/screens/OfficeScreen.tsx:3539`
- Category: `network-egress`
- Evidence: `const response = await fetch("/api/office/remote-handoff", {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/features/office/screens/OfficeScreen.tsx:3812`
- Category: `network-egress`
- Evidence: `const response = await fetch("/api/office/voice/transcribe", {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/features/retro-office/overlays/MonitorImmersiveContent.tsx:60`
- Category: `network-egress`
- Evidence: `const response = await fetch(\`/api/office/browser-preview?${params.toString()}\`, {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/features/retro-office/RetroOffice3D.tsx:3717`
- Category: `network-egress`
- Evidence: `void fetch("/api/office/layout", {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/features/retro-office/RetroOffice3D.tsx:3985`
- Category: `network-egress`
- Evidence: `const response = await fetch("/api/office/voice/reply", {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/features/spotify-jukebox/auth.ts:158`
- Category: `network-egress`
- Evidence: `const res = await fetch("https://accounts.spotify.com/api/token", {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/features/spotify-jukebox/spotifyApi.ts:59`
- Category: `network-egress`
- Evidence: `const res = await fetch(\`${BASE}/me/player\`, { headers: headers(token) });`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/features/spotify-jukebox/spotifyApi.ts:77`
- Category: `network-egress`
- Evidence: `const res = await fetch(\`${BASE}/search?${params}\`, { headers: headers(token) });`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/features/spotify-jukebox/spotifyApi.ts:89`
- Category: `network-egress`
- Evidence: `await fetch(\`${BASE}/me/player/play${params}\`, {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/features/spotify-jukebox/spotifyApi.ts:97`
- Category: `network-egress`
- Evidence: `await fetch(\`${BASE}/me/player/pause\`, { method: "PUT", headers: headers(token) });`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/features/spotify-jukebox/spotifyApi.ts:101`
- Category: `network-egress`
- Evidence: `await fetch(\`${BASE}/me/player/play\`, { method: "PUT", headers: headers(token) });`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/features/spotify-jukebox/spotifyApi.ts:105`
- Category: `network-egress`
- Evidence: `await fetch(\`${BASE}/me/player/next\`, { method: "POST", headers: headers(token) });`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/features/spotify-jukebox/spotifyApi.ts:109`
- Category: `network-egress`
- Evidence: `await fetch(\`${BASE}/me/player/previous\`, { method: "POST", headers: headers(token) });`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/features/spotify-jukebox/spotifyApi.ts:114`
- Category: `network-egress`
- Evidence: `await fetch(\`${BASE}/me/player/volume?${params}\`, { method: "PUT", headers: headers(token) });`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/hooks/useVoiceReplyPlayback.ts:178`
- Category: `network-egress`
- Evidence: `const response = await fetch("/api/office/voice/reply", {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `src/lib/agent-state/local.ts:27`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(path.dirname(dest), { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `src/lib/agent-state/local.ts:28`
- Category: `filesystem-write`
- Evidence: `fs.renameSync(src, dest);`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `src/lib/agent-state/local.ts:45`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(path.join(trashDir, "agents"), { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `src/lib/agent-state/local.ts:46`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(path.join(trashDir, "workspaces"), { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `src/lib/agent-state/local.ts:101`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(path.dirname(dest), { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `src/lib/agent-state/local.ts:102`
- Category: `filesystem-write`
- Evidence: `fs.renameSync(src, dest);`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/lib/gateway/agentConfig.ts:354`
- Category: `path-resolution`
- Evidence: `const trimmed = params.name.trim();`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/lib/gateway/agentConfig.ts:380`
- Category: `path-resolution`
- Evidence: `const trimmed = params.name.trim();`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/lib/gateway/agentFiles.ts:25`
- Category: `path-resolution`
- Evidence: `name: params.name,`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/lib/gateway/agentFiles.ts:48`
- Category: `path-resolution`
- Evidence: `name: params.name,`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/lib/gateway/agentFiles.ts:59`
- Category: `path-resolution`
- Evidence: `const entries = Object.entries(params.files).filter(`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/lib/gateway/execApprovals.ts:69`
- Category: `path-resolution`
- Evidence: `const payload: Record<string, unknown> = { file: params.file };`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Public network bind literal

- Location: `src/lib/gateway/local-gateway.ts:31`
- Category: `public-bind`
- Evidence: `normalized === "0.0.0.0"`
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Outbound network boundary

- Location: `src/lib/gateway/nodeGatewayClient.ts:206`
- Category: `network-egress`
- Evidence: `const socket = new WebSocket(gatewayUrl);`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/lib/gateway/protocol/GatewayBrowserClient.ts:457`
- Category: `network-egress`
- Evidence: `this.ws = new WebSocket(this.opts.url);`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `src/lib/http.ts:5`
- Category: `network-egress`
- Evidence: `const res = await fetch(input, init);`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Public network bind literal

- Location: `src/lib/office/browserPreview.ts:15`
- Category: `public-bind`
- Evidence: `return normalized === "0.0.0.0" ? "127.0.0.1" : hostname;`
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/lib/office/github.ts:619`
- Category: `path-resolution`
- Evidence: `\`path=${params.path}\`,`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/lib/office/layoutSnapshot.ts:53`
- Category: `path-resolution`
- Evidence: `parsed.searchParams.delete("source");`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `src/lib/office/layoutSnapshotStore.ts:16`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(dirPath, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `src/lib/office/layoutSnapshotStore.ts:55`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(resolveStorePath(), JSON.stringify(store, null, 2), "utf8");`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `src/lib/office/presence.ts:117`
- Category: `network-egress`
- Evidence: `const response = await fetch(presenceUrl, {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/lib/office/standup/service.ts:128`
- Category: `path-resolution`
- Evidence: `url.searchParams.set("maxResults", "50");`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/lib/office/standup/service.ts:129`
- Category: `path-resolution`
- Evidence: `url.searchParams.set("fields", "summary,status,assignee");`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/lib/office/standup/service.ts:130`
- Category: `path-resolution`
- Evidence: `url.searchParams.set("jql", jql);`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `src/lib/office/standup/service.ts:183`
- Category: `network-egress`
- Evidence: `const response = await fetch(searchUrl, {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `src/lib/office/standup/store.ts:14`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(dirPath, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `src/lib/office/standup/store.ts:77`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(storePath, JSON.stringify(store, null, 2), "utf8");`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `src/lib/office/store.ts:48`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(dirPath, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `src/lib/office/store.ts:126`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(storePath, JSON.stringify(store, null, 2), "utf8");`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/lib/office/store.ts:177`
- Category: `path-resolution`
- Evidence: `existing.name = params.name;`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/lib/office/store.ts:185`
- Category: `path-resolution`
- Evidence: `name: params.name,`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `src/lib/runtime/custom/http.ts:36`
- Category: `network-egress`
- Evidence: `const response = await fetch("/api/runtime/custom", {`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Public network bind literal

- Location: `src/lib/security/urlSafety.ts:3`
- Category: `public-bind`
- Evidence: `const LOOPBACK_HOSTNAMES = new Set(["localhost", "127.0.0.1", "::1", "0.0.0.0"]);`
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/lib/skills/install-gateway.ts:57`
- Category: `path-resolution`
- Evidence: `const fileEntries = params.files`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `src/lib/skills/remove-local.ts:83`
- Category: `filesystem-write`
- Evidence: `fs.rmSync(baseDir, { recursive: true, force: false });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/lib/skills/types.ts:196`
- Category: `path-resolution`
- Evidence: `name: resolveRequiredValue(params.name, "Skill name is required to install dependencies."),`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `src/lib/studio/settings-store.ts:201`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(dir, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `src/lib/studio/settings-store.ts:203`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), "utf8");`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `src/lib/studio/settings.ts:295`
- Category: `public-bind`
- Evidence: `const LOOPBACK_HOSTNAMES = new Set(["127.0.0.1", "::1", "0.0.0.0"]);`
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Outbound network boundary

- Location: `src/lib/tasks/shared-store-client.ts:34`
- Category: `network-egress`
- Evidence: `return fetch(input, { ...init, signal: controller.signal }).finally(() =>`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `src/lib/tasks/shared-store.ts:36`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(dirPath, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `src/lib/tasks/shared-store.ts:166`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(tmpPath, JSON.stringify(store, null, 2), "utf8");`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `src/lib/tasks/shared-store.ts:167`
- Category: `filesystem-write`
- Evidence: `fs.renameSync(tmpPath, storePath);`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `src/lib/tasks/shared-store.ts:170`
- Category: `filesystem-write`
- Evidence: `fs.unlinkSync(tmpPath);`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `src/lib/voiceReply/provider.ts:39`
- Category: `network-egress`
- Evidence: `const response = await fetch(`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/agentStateLocal.test.ts:26`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(workspace, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/agentStateLocal.test.ts:27`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(agentDir, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/agentStateLocal.test.ts:28`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(path.join(workspace, "hello.txt"), "hi", "utf8");`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/agentStateLocal.test.ts:29`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(path.join(agentDir, "state.json"), "{}", "utf8");`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/agentStateLocal.test.ts:49`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(fakeTrashDir, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/agentStateRoute.test.ts:26`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(settingsDir, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/agentStateRoute.test.ts:27`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `tests/unit/cronGatewayClient.test.ts:22`
- Category: `path-resolution`
- Evidence: `name: params.name,`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/gatewayEnvDefaults.test.ts:68`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/gatewayEnvDefaults.test.ts:140`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/gatewayEnvDefaults.test.ts:173`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/gatewayMediaRoute.test.ts:31`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(settingsDir, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/gatewayMediaRoute.test.ts:32`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/gatewayMediaRoute.test.ts:65`
- Category: `filesystem-write`
- Evidence: `fs.rmSync(tempDir, { recursive: true, force: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/gatewayMediaRoute.test.ts:133`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(imagesDir, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/gatewayMediaRoute.test.ts:134`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(outsideDir, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/gatewayMediaRoute.test.ts:137`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(outsideFile, "not-allowed", "utf8");`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/gatewayMediaRoute.test.ts:154`
- Category: `filesystem-write`
- Evidence: `fs.rmSync(symlinkPath, { force: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `tests/unit/gatewayProxy.test.ts:79`
- Category: `network-egress`
- Evidence: `const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `tests/unit/gatewayProxy.test.ts:139`
- Category: `network-egress`
- Evidence: `const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `tests/unit/gatewayProxy.test.ts:206`
- Category: `network-egress`
- Evidence: `const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `tests/unit/gatewayProxy.test.ts:293`
- Category: `network-egress`
- Evidence: `const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `tests/unit/gatewayProxy.test.ts:363`
- Category: `network-egress`
- Evidence: `const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `tests/unit/gatewayProxy.test.ts:443`
- Category: `network-egress`
- Evidence: `const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `tests/unit/gatewayProxy.test.ts:528`
- Category: `network-egress`
- Evidence: `const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `tests/unit/gatewayProxy.test.ts:601`
- Category: `network-egress`
- Evidence: `const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `tests/unit/gatewayProxy.test.ts:667`
- Category: `network-egress`
- Evidence: `const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `tests/unit/gatewayProxy.test.ts:727`
- Category: `network-egress`
- Evidence: `const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `tests/unit/gatewayProxy.test.ts:802`
- Category: `network-egress`
- Evidence: `const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `tests/unit/gatewayProxy.test.ts:882`
- Category: `network-egress`
- Evidence: `const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `tests/unit/hermesAgentBridge.test.ts:47`
- Category: `path-resolution`
- Evidence: `received.push({ __connect: true, path: url.pathname, token: url.searchParams.get("token") });`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `tests/unit/officeSpeechSubscriber.test.ts:24`
- Category: `path-resolution`
- Evidence: `expect(url.searchParams.get("channel")).toBe("hermes3d");`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `tests/unit/officeSpeechSubscriber.test.ts:25`
- Category: `path-resolution`
- Evidence: `expect(url.searchParams.get("token")).toBe("secret");`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `tests/unit/officeSpeechSubscriber.test.ts:40`
- Category: `path-resolution`
- Evidence: `expect(url.searchParams.has("token")).toBe(false);`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/pathSuggestionsRoute.test.ts:13`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(path.join(tempHome, "Documents"), { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/pathSuggestionsRoute.test.ts:14`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(path.join(tempHome, "Downloads"), { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/pathSuggestionsRoute.test.ts:15`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(path.join(tempHome, "Doc.txt"), "doc", "utf8");`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/pathSuggestionsRoute.test.ts:16`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(path.join(tempHome, "Notes.txt"), "notes", "utf8");`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/pathSuggestionsRoute.test.ts:17`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(path.join(tempHome, ".secret"), "hidden", "utf8");`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/pathSuggestionsRoute.test.ts:25`
- Category: `filesystem-write`
- Evidence: `fs.rmSync(home, { recursive: true, force: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `tests/unit/serverNetworkPolicy.test.ts:20`
- Category: `public-bind`
- Evidence: `resolveHosts({ HOST: "0.0.0.0", HOSTNAME: "example-host" } as unknown as NodeJS.ProcessEnv)`
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `tests/unit/serverNetworkPolicy.test.ts:21`
- Category: `public-bind`
- Evidence: `).toEqual(["0.0.0.0"]);`
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `tests/unit/serverNetworkPolicy.test.ts:23`
- Category: `public-bind`
- Evidence: `resolveHost({ HOST: "0.0.0.0", HOSTNAME: "example-host" } as unknown as NodeJS.ProcessEnv)`
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `tests/unit/serverNetworkPolicy.test.ts:24`
- Category: `public-bind`
- Evidence: `).toBe("0.0.0.0");`
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `tests/unit/serverNetworkPolicy.test.ts:29`
- Category: `public-bind`
- Evidence: `expect(isPublicHost("0.0.0.0")).toBe(true);`
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `tests/unit/serverNetworkPolicy.test.ts:30`
- Category: `public-bind`
- Evidence: `expect(isPublicHost("::")).toBe(true);`
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `tests/unit/serverNetworkPolicy.test.ts:51`
- Category: `public-bind`
- Evidence: `expect(() => assertPublicHostAllowed({ host: "0.0.0.0", studioAccessToken: "" })).toThrow(`
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `tests/unit/serverNetworkPolicy.test.ts:54`
- Category: `public-bind`
- Evidence: `expect(() => assertPublicHostAllowed({ host: "0.0.0.0", studioAccessToken: "   " })).toThrow(`
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `tests/unit/serverNetworkPolicy.test.ts:58`
- Category: `public-bind`
- Evidence: `assertPublicHostAllowed({ host: "0.0.0.0", studioAccessToken: "abc" })`
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/sharedTaskStore.test.ts:23`
- Category: `filesystem-write`
- Evidence: `fs.rmSync(tempDir, { recursive: true, force: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/sharedTaskStore.test.ts:83`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(storePath, "{invalid json!!!", "utf8");`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/skillsRemoveLocal.test.ts:26`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(skillDir, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/skillsRemoveLocal.test.ts:27`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(path.join(skillDir, "SKILL.md"), "# skill", "utf8");`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/skillsRemoveLocal.test.ts:65`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(workspaceSkillsRoot, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/skillsRemoveLocal.test.ts:82`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(nonSkillDir, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/skillsRemoveRoute.test.ts:25`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(settingsDir, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/skillsRemoveRoute.test.ts:26`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/skillsRemoveRoute.test.ts:115`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(skillDir, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/skillsRemoveRoute.test.ts:116`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(path.join(skillDir, "SKILL.md"), "# skill", "utf8");`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/standupStore.test.ts:14`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(storeDir, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/standupStore.test.ts:15`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/standupStore.test.ts:29`
- Category: `filesystem-write`
- Evidence: `fs.rmSync(tempDir, { recursive: true, force: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/studioSettingsRoute.test.ts:18`
- Category: `filesystem-write`
- Evidence: `fs.rmSync(tempDir, { recursive: true, force: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/studioSettingsRoute.test.ts:42`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/studioUpstreamGatewaySettings.test.ts:16`
- Category: `filesystem-write`
- Evidence: `fs.rmSync(tempDir, { recursive: true, force: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/studioUpstreamGatewaySettings.test.ts:25`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/studioUpstreamGatewaySettings.test.ts:41`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(path.join(tempDir, "hermes3d"), { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/studioUpstreamGatewaySettings.test.ts:42`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/studioUpstreamGatewaySettings.test.ts:47`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/taskStoreRoute.test.ts:25`
- Category: `filesystem-write`
- Evidence: `fs.rmSync(tempDir, { recursive: true, force: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### INFO — Tracked executable file

- Location: `plugins/hermes3d-office-bridge/install.sh`
- Category: `executable`
- Review: Confirm the executable is expected and never runs automatically during install or startup.

### INFO — Tracked executable file

- Location: `scripts/hermes3d-start.sh`
- Category: `executable`
- Review: Confirm the executable is expected and never runs automatically during install or startup.

## Server API surface

| Route file | Exported methods |
| --- | --- |
| `src/app/api/files/[file]/route.ts` | GET |
| `src/app/api/files/upload/route.ts` | POST |
| `src/app/api/gateway/agent-state/route.ts` | POST, PUT |
| `src/app/api/gateway/media/route.ts` | GET |
| `src/app/api/gateway/skills/remove/route.ts` | POST |
| `src/app/api/health/route.ts` | GET |
| `src/app/api/office/browser-preview/route.ts` | GET |
| `src/app/api/office/call/route.ts` | POST |
| `src/app/api/office/github/route.ts` | GET, POST |
| `src/app/api/office/layout/route.ts` | GET, PUT |
| `src/app/api/office/presence/route.ts` | GET |
| `src/app/api/office/publish/route.ts` | PUT |
| `src/app/api/office/remote-handoff/route.ts` | POST |
| `src/app/api/office/remote-message/route.ts` | POST |
| `src/app/api/office/route.ts` | GET, PUT |
| `src/app/api/office/standup/config/route.ts` | GET, PUT |
| `src/app/api/office/standup/meeting/route.ts` | GET, PUT |
| `src/app/api/office/standup/run/route.ts` | POST |
| `src/app/api/office/text/route.ts` | POST |
| `src/app/api/office/voice/reply/route.ts` | POST |
| `src/app/api/office/voice/transcribe/route.ts` | POST |
| `src/app/api/path-suggestions/route.ts` | GET |
| `src/app/api/runtime/custom/route.ts` | POST |
| `src/app/api/studio/route.ts` | GET, PUT |
| `src/app/api/task-store/route.ts` | DELETE, GET, PUT |

## Root npm scripts

| Script | Command |
| --- | --- |
| `dev` | `node server/index.js --dev` |
| `dev:https` | `node server/index.js --dev --https` |
| `hermes-adapter` | `node server/hermes-gateway-adapter.js` |
| `demo-gateway` | `node server/demo-gateway-adapter.js` |
| `build` | `next build` |
| `start` | `node server/index.js` |
| `lint` | `eslint .` |
| `cleanup:ux-artifacts` | `node scripts/cleanup-ux-artifacts.mjs` |
| `studio:setup` | `node scripts/studio-setup.js` |
| `doctor` | `node scripts/hermes3doctor.mjs` |
| `smoke:dev-server` | `node scripts/smoke-dev-server.mjs` |
| `typecheck` | `tsc --noEmit` |
| `test` | `vitest` |
| `e2e` | `playwright test` |

## GitHub Actions dependencies

| Location | Action | Commit-SHA pinned |
| --- | --- | --- |
| `.github/workflows/ci.yml:34` | `actions/checkout@fbc6f3992d24b796d5a048ff273f7fcc4a7b6c09` | Yes |
| `.github/workflows/ci.yml:39` | `actions/setup-node@a0853c24544627f65ddf259abe73b1d18a591444` | Yes |
| `.github/workflows/dependency-refresh.yml:31` | `actions/checkout@fbc6f3992d24b796d5a048ff273f7fcc4a7b6c09` | Yes |
| `.github/workflows/dependency-refresh.yml:37` | `actions/setup-node@a0853c24544627f65ddf259abe73b1d18a591444` | Yes |
| `.github/workflows/dependency-refresh.yml:159` | `actions/upload-artifact@043fb46d1a93c77aae656e7c1c64a875d1fc6a0a` | Yes |
| `.github/workflows/static-security-audit.yml:24` | `actions/checkout@fbc6f3992d24b796d5a048ff273f7fcc4a7b6c09` | Yes |
| `.github/workflows/static-security-audit.yml:30` | `actions/setup-node@a0853c24544627f65ddf259abe73b1d18a591444` | Yes |
| `.github/workflows/static-security-audit.yml:39` | `actions/upload-artifact@043fb46d1a93c77aae656e7c1c64a875d1fc6a0a` | Yes |

## Referenced environment variables

- `CI`
- `CODEX_HOME`
- `CUSTOM_RUNTIME_ALLOWLIST`
- `DEBUG`
- `DEMO_ADAPTER_PORT`
- `ELEVENLABS_API_KEY`
- `ELEVENLABS_MODEL_ID`
- `ELEVENLABS_VOICE_ID`
- `HERMES3D_E2E_GATEWAY`
- `HERMES3D_GATEWAY_ADAPTER_TYPE`
- `HERMES3D_GATEWAY_TOKEN`
- `HERMES3D_GATEWAY_URL`
- `HERMES_ADAPTER_PORT`
- `HERMES_AGENT_NAME`
- `HERMES_API_KEY`
- `HERMES_API_URL`
- `HERMES_GATEWAY_SSH_TARGET`
- `HERMES_GATEWAY_SSH_USER`
- `HERMES_MODEL`
- `HERMES_STATE_DIR`
- `HOME`
- `HTTPS`
- `NEXT_PUBLIC_GATEWAY_URL`
- `NEXT_PUBLIC_STUDIO_TRANSCRIPT_DEBUG`
- `NEXT_PUBLIC_STUDIO_TRANSCRIPT_V2`
- `NODE_ENV`
- `NO_COLOR`
- `PORT`
- `STUDIO_ACCESS_TOKEN`
- `TRUSTED_PROXY`
- `UPSTREAM_ALLOWLIST`

## Interpretation

A clean blocking result means the scanner did not find tracked credentials, direct remote-code piping, dynamic evaluation, or explicit TLS verification bypasses matching its rules. Command execution, SSH helpers, filesystem writes, network egress, API routes, and public-binding literals remain manual-review surfaces and must be evaluated in context.
