# Static Security Audit

Generated from tracked source only. The scanner does not install dependencies, execute repository scripts, start services, or access developer credentials. Pattern matches identify review surfaces; they are not automatically proof of a vulnerability.

## Summary

- Tracked files inspected: **635**
- API route handlers inventoried: **25**
- Environment variable names referenced: **31**
- Blocking findings: **0**
- Critical: **0**
- High: **385**
- Medium: **1419**
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

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:27`
- Category: `credential-access`
- Evidence: `- Evidence: \`id_rsa\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:34`
- Category: `credential-access`
- Evidence: `- Evidence: \`id_rsa.pub\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:41`
- Category: `credential-access`
- Evidence: `- Evidence: \`id_ed25519\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:48`
- Category: `credential-access`
- Evidence: `- Evidence: \`id_ed25519.pub\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:55`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`id_rsa\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:62`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`id_rsa.pub\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:69`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`id_ed25519\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:76`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`id_ed25519.pub\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:83`
- Category: `host-mutation`
- Evidence: `- Evidence: \`- Evidence: \\`COPY --chown=node:node --from=builder /app/.next ./.next\\`\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:90`
- Category: `host-mutation`
- Evidence: `- Evidence: \`- Evidence: \\`COPY --chown=node:node --from=builder /app/public ./public\\`\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:97`
- Category: `host-mutation`
- Evidence: `- Evidence: \`- Evidence: \\`COPY --chown=node:node --from=builder /app/server ./server\\`\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:104`
- Category: `host-mutation`
- Evidence: `- Evidence: \`- Evidence: \\`COPY --chown=node:node --from=deps /app/node_modules ./node_modules\\`\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:111`
- Category: `host-mutation`
- Evidence: `- Evidence: \`- Evidence: \\`COPY --chown=node:node --from=builder /app/package.json ./package.json\\`\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:118`
- Category: `host-mutation`
- Evidence: `- Evidence: \`- Evidence: \\`COPY --chown=node:node --from=builder /app/next.config.ts ./next.config.ts\\`\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:125`
- Category: `host-mutation`
- Evidence: `- Evidence: \`- Evidence: \\`launchctl load ~/Library/LaunchAgents/dev.hermes3d.serve.plist\\`\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:132`
- Category: `host-mutation`
- Evidence: `- Evidence: \`- Evidence: \\`systemctl --user enable --now hermes-serve\\`\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:139`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`import { spawnSync } from "node:child_process";\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:146`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`return spawnSync(command, args, { encoding: "utf8" });\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:153`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`import { execFileSync } from "node:child_process";\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:160`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`const branch = execFileSync("git", ["rev-parse", "--abbrev-ref", "HEAD"], {\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:167`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`execFileSync("git", ["status", "--porcelain"], {\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:174`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`import { spawn } from "node:child_process";\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:181`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`const child = spawn(process.execPath, ["server/index.js", "--dev"], {\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:188`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`import { execFileSync } from "node:child_process";\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:195`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`execFileSync("git", args, {\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:202`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`pattern: /(?:node:child_process|child_process|\bexecFileSync\s*\(|\bexecFile\s*\(|\bexecSync\s*\(|\bspawnSync\s*\(|\bspawn\s*\(|\bfork\s*\()/g,\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:209`
- Category: `host-mutation`
- Evidence: `- Evidence: \`- Evidence: \\`pattern: /\b(?:sudo|launchctl|systemctl|crontab|defaults\s+write|security\s+add-trusted-cert|chmod\s+[0-7]{3,4}|chown)\b/g,\\`\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:216`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`pattern: /(?:~\/|\/Users\/[^/]+\/|process\.env\.HOME[^\n]{0,120})?(?:\.ssh|\.aws|\.gnupg|Keychains|id_rsa|id_ed25519)/g,\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:223`
- Category: `host-mutation`
- Evidence: `- Evidence: \`- Evidence: \\`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\\`);\\`\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:223`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\\`);\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:230`
- Category: `host-mutation`
- Evidence: `- Evidence: \`- Evidence: \\`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\\`);\\`\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:230`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\\`);\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:237`
- Category: `host-mutation`
- Evidence: `- Evidence: \`- Evidence: \\`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\\`);\\`\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:237`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\\`);\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:244`
- Category: `host-mutation`
- Evidence: `- Evidence: \`- Evidence: \\`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\\`);\\`\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:244`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\\`);\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:251`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`import * as childProcess from "node:child_process";\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:258`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`const result = childProcess.spawnSync(command, args, {\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:265`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`sshTarget: params.sshTarget,\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:272`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`sshTarget: params.sshTarget,\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:279`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`import * as childProcess from "node:child_process";\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:286`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`const sshTarget = assertSafeSshTarget(params.sshTarget);\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:293`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`params.sshPort !== undefined &&\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:300`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`params.sshPort !== null &&\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:307`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`(!Number.isInteger(params.sshPort) || params.sshPort < 1 || params.sshPort > 65_535)\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:314`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`if (typeof params.sshPort === "number") {\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:321`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`sshArgs.push("-p", String(params.sshPort));\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:328`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`const result = childProcess.spawnSync("ssh", sshArgs, options);\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:335`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`sshTarget: params.sshTarget,\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:342`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`import { spawnSync } from "node:child_process";\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:349`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`vi.mock("node:child_process", () => {\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:356`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`import { spawnSync } from "node:child_process";\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:363`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`vi.mock("node:child_process", async () => {\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:370`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`const actual = await vi.importActual<typeof import("node:child_process")>(\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:377`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`"node:child_process"\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:384`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`import { spawnSync } from "node:child_process";\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:391`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`vi.mock("node:child_process", async () => {\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:398`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`const actual = await vi.importActual<typeof import("node:child_process")>(\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:405`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`"node:child_process"\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:412`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`import { spawnSync } from "node:child_process";\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:419`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`vi.mock("node:child_process", () => {\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:426`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "id_rsa",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:433`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "id_rsa.pub",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:440`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "id_ed25519",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:447`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "id_ed25519.pub",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:454`
- Category: `host-mutation`
- Evidence: `- Evidence: \`"snippet": "COPY --chown=node:node --from=builder /app/.next ./.next",\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:461`
- Category: `host-mutation`
- Evidence: `- Evidence: \`"snippet": "COPY --chown=node:node --from=builder /app/public ./public",\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:468`
- Category: `host-mutation`
- Evidence: `- Evidence: \`"snippet": "COPY --chown=node:node --from=builder /app/server ./server",\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:475`
- Category: `host-mutation`
- Evidence: `- Evidence: \`"snippet": "COPY --chown=node:node --from=deps /app/node_modules ./node_modules",\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:482`
- Category: `host-mutation`
- Evidence: `- Evidence: \`"snippet": "COPY --chown=node:node --from=builder /app/package.json ./package.json",\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:489`
- Category: `host-mutation`
- Evidence: `- Evidence: \`"snippet": "COPY --chown=node:node --from=builder /app/next.config.ts ./next.config.ts",\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:496`
- Category: `host-mutation`
- Evidence: `- Evidence: \`"snippet": "launchctl load ~/Library/LaunchAgents/dev.hermes3d.serve.plist",\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:503`
- Category: `host-mutation`
- Evidence: `- Evidence: \`"snippet": "systemctl --user enable --now hermes-serve",\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:510`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "import { spawnSync } from \"node:child_process\";",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:517`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "return spawnSync(command, args, { encoding: \"utf8\" });",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:524`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "import { execFileSync } from \"node:child_process\";",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:531`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "const branch = execFileSync(\"git\", [\"rev-parse\", \"--abbrev-ref\", \"HEAD\"], {",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:538`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "execFileSync(\"git\", [\"status\", \"--porcelain\"], {",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:545`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "import { spawn } from \"node:child_process\";",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:552`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "const child = spawn(process.execPath, [\"server/index.js\", \"--dev\"], {",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:559`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "import { execFileSync } from \"node:child_process\";",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:566`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "execFileSync(\"git\", args, {",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:573`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "pattern: /(?:node:child_process|child_process|\\bexecFileSync\\s*\\(|\\bexecFile\\s*\\(|\\bexecSync\\s*\\(|\\bspawnSync\\s*\\(|\\bspawn\\s*\\(|\\bfork\\s*\\()/g,",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:580`
- Category: `host-mutation`
- Evidence: `- Evidence: \`"snippet": "pattern: /\\b(?:sudo|launchctl|systemctl|crontab|defaults\\s+write|security\\s+add-trusted-cert|chmod\\s+[0-7]{3,4}|chown)\\b/g,",\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:587`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "pattern: /(?:~\\/|\\/Users\\/[^/]+\\/|process\\.env\\.HOME[^\\n]{0,120})?(?:\\.ssh|\\.aws|\\.gnupg|Keychains|id_rsa|id_ed25519)/g,",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:594`
- Category: `host-mutation`
- Evidence: `- Evidence: \`"snippet": "console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\`);",\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:594`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\`);",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:601`
- Category: `host-mutation`
- Evidence: `- Evidence: \`"snippet": "console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\`);",\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:601`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\`);",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:608`
- Category: `host-mutation`
- Evidence: `- Evidence: \`"snippet": "console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\`);",\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:608`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\`);",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:615`
- Category: `host-mutation`
- Evidence: `- Evidence: \`"snippet": "console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\`);",\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:615`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\`);",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:622`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "import * as childProcess from \"node:child_process\";",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:629`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "const result = childProcess.spawnSync(command, args, {",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:636`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "sshTarget: params.sshTarget,",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:643`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "sshTarget: params.sshTarget,",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:650`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "import * as childProcess from \"node:child_process\";",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:657`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "const sshTarget = assertSafeSshTarget(params.sshTarget);",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:664`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "params.sshPort !== undefined &&",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:671`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "params.sshPort !== null &&",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:678`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "(!Number.isInteger(params.sshPort) || params.sshPort < 1 || params.sshPort > 65_535)",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:685`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "if (typeof params.sshPort === \"number\") {",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:692`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "sshArgs.push(\"-p\", String(params.sshPort));",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:699`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "const result = childProcess.spawnSync(\"ssh\", sshArgs, options);",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:706`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "sshTarget: params.sshTarget,",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:713`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "import { spawnSync } from \"node:child_process\";",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:720`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "vi.mock(\"node:child_process\", () => {",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:727`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "import { spawnSync } from \"node:child_process\";",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:734`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "vi.mock(\"node:child_process\", async () => {",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:741`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "const actual = await vi.importActual<typeof import(\"node:child_process\")>(",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:748`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "\"node:child_process\"",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:755`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "import { spawnSync } from \"node:child_process\";",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:762`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "vi.mock(\"node:child_process\", async () => {",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:769`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "const actual = await vi.importActual<typeof import(\"node:child_process\")>(",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:776`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "\"node:child_process\"",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:783`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "import { spawnSync } from \"node:child_process\";",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:790`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "vi.mock(\"node:child_process\", () => {",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:797`
- Category: `host-mutation`
- Evidence: `- Evidence: \`COPY --chown=node:node --from=builder /app/.next ./.next\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:804`
- Category: `host-mutation`
- Evidence: `- Evidence: \`COPY --chown=node:node --from=builder /app/public ./public\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:811`
- Category: `host-mutation`
- Evidence: `- Evidence: \`COPY --chown=node:node --from=builder /app/server ./server\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:818`
- Category: `host-mutation`
- Evidence: `- Evidence: \`COPY --chown=node:node --from=deps /app/node_modules ./node_modules\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:825`
- Category: `host-mutation`
- Evidence: `- Evidence: \`COPY --chown=node:node --from=builder /app/package.json ./package.json\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:832`
- Category: `host-mutation`
- Evidence: `- Evidence: \`COPY --chown=node:node --from=builder /app/next.config.ts ./next.config.ts\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:839`
- Category: `host-mutation`
- Evidence: `- Evidence: \`launchctl load ~/Library/LaunchAgents/dev.hermes3d.serve.plist\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:846`
- Category: `host-mutation`
- Evidence: `- Evidence: \`systemctl --user enable --now hermes-serve\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:853`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { spawnSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:860`
- Category: `command-execution`
- Evidence: `- Evidence: \`return spawnSync(command, args, { encoding: "utf8" });\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:867`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { execFileSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:874`
- Category: `command-execution`
- Evidence: `- Evidence: \`const branch = execFileSync("git", ["rev-parse", "--abbrev-ref", "HEAD"], {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:881`
- Category: `command-execution`
- Evidence: `- Evidence: \`execFileSync("git", ["status", "--porcelain"], {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:888`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { spawn } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:895`
- Category: `command-execution`
- Evidence: `- Evidence: \`const child = spawn(process.execPath, ["server/index.js", "--dev"], {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:902`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { execFileSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:909`
- Category: `command-execution`
- Evidence: `- Evidence: \`execFileSync("git", args, {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:916`
- Category: `command-execution`
- Evidence: `- Evidence: \`pattern: /(?:node:child_process|child_process|\bexecFileSync\s*\(|\bexecFile\s*\(|\bexecSync\s*\(|\bspawnSync\s*\(|\bspawn\s*\(|\bfork\s*\()/g,\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:923`
- Category: `host-mutation`
- Evidence: `- Evidence: \`pattern: /\b(?:sudo|launchctl|systemctl|crontab|defaults\s+write|security\s+add-trusted-cert|chmod\s+[0-7]{3,4}|chown)\b/g,\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:930`
- Category: `credential-access`
- Evidence: `- Evidence: \`pattern: /(?:~\/|\/Users\/[^/]+\/|process\.env\.HOME[^\n]{0,120})?(?:\.ssh|\.aws|\.gnupg|Keychains|id_rsa|id_ed25519)/g,\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:937`
- Category: `host-mutation`
- Evidence: `- Evidence: \`console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\`);\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:937`
- Category: `credential-access`
- Evidence: `- Evidence: \`console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\`);\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:944`
- Category: `host-mutation`
- Evidence: `- Evidence: \`console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\`);\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:944`
- Category: `credential-access`
- Evidence: `- Evidence: \`console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\`);\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:951`
- Category: `command-execution`
- Evidence: `- Evidence: \`import * as childProcess from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:958`
- Category: `command-execution`
- Evidence: `- Evidence: \`const result = childProcess.spawnSync(command, args, {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:965`
- Category: `credential-access`
- Evidence: `- Evidence: \`sshTarget: params.sshTarget,\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:972`
- Category: `credential-access`
- Evidence: `- Evidence: \`sshTarget: params.sshTarget,\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:979`
- Category: `command-execution`
- Evidence: `- Evidence: \`import * as childProcess from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:986`
- Category: `credential-access`
- Evidence: `- Evidence: \`const sshTarget = assertSafeSshTarget(params.sshTarget);\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:993`
- Category: `credential-access`
- Evidence: `- Evidence: \`params.sshPort !== undefined &&\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:1000`
- Category: `credential-access`
- Evidence: `- Evidence: \`params.sshPort !== null &&\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:1007`
- Category: `credential-access`
- Evidence: `- Evidence: \`(!Number.isInteger(params.sshPort) || params.sshPort < 1 || params.sshPort > 65_535)\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:1014`
- Category: `credential-access`
- Evidence: `- Evidence: \`if (typeof params.sshPort === "number") {\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:1021`
- Category: `credential-access`
- Evidence: `- Evidence: \`sshArgs.push("-p", String(params.sshPort));\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:1028`
- Category: `command-execution`
- Evidence: `- Evidence: \`const result = childProcess.spawnSync("ssh", sshArgs, options);\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:1035`
- Category: `credential-access`
- Evidence: `- Evidence: \`sshTarget: params.sshTarget,\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:1042`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { spawnSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:1049`
- Category: `command-execution`
- Evidence: `- Evidence: \`vi.mock("node:child_process", () => {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:1056`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { spawnSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:1063`
- Category: `command-execution`
- Evidence: `- Evidence: \`vi.mock("node:child_process", async () => {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:1070`
- Category: `command-execution`
- Evidence: `- Evidence: \`const actual = await vi.importActual<typeof import("node:child_process")>(\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:1077`
- Category: `command-execution`
- Evidence: `- Evidence: \`"node:child_process"\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:1084`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { spawnSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:1091`
- Category: `command-execution`
- Evidence: `- Evidence: \`vi.mock("node:child_process", async () => {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:1098`
- Category: `command-execution`
- Evidence: `- Evidence: \`const actual = await vi.importActual<typeof import("node:child_process")>(\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:1105`
- Category: `command-execution`
- Evidence: `- Evidence: \`"node:child_process"\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:1112`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { spawnSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:1119`
- Category: `command-execution`
- Evidence: `- Evidence: \`vi.mock("node:child_process", () => {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:20`
- Category: `credential-access`
- Evidence: `"snippet": "id_rsa",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:30`
- Category: `credential-access`
- Evidence: `"snippet": "id_rsa.pub",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:40`
- Category: `credential-access`
- Evidence: `"snippet": "id_ed25519",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:50`
- Category: `credential-access`
- Evidence: `"snippet": "id_ed25519.pub",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:60`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`id_rsa\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:70`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`id_rsa.pub\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:80`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`id_ed25519\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:90`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`id_ed25519.pub\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:100`
- Category: `host-mutation`
- Evidence: `"snippet": "- Evidence: \`COPY --chown=node:node --from=builder /app/.next ./.next\`",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:110`
- Category: `host-mutation`
- Evidence: `"snippet": "- Evidence: \`COPY --chown=node:node --from=builder /app/public ./public\`",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:120`
- Category: `host-mutation`
- Evidence: `"snippet": "- Evidence: \`COPY --chown=node:node --from=builder /app/server ./server\`",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:130`
- Category: `host-mutation`
- Evidence: `"snippet": "- Evidence: \`COPY --chown=node:node --from=deps /app/node_modules ./node_modules\`",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:140`
- Category: `host-mutation`
- Evidence: `"snippet": "- Evidence: \`COPY --chown=node:node --from=builder /app/package.json ./package.json\`",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:150`
- Category: `host-mutation`
- Evidence: `"snippet": "- Evidence: \`COPY --chown=node:node --from=builder /app/next.config.ts ./next.config.ts\`",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:160`
- Category: `host-mutation`
- Evidence: `"snippet": "- Evidence: \`launchctl load ~/Library/LaunchAgents/dev.hermes3d.serve.plist\`",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:170`
- Category: `host-mutation`
- Evidence: `"snippet": "- Evidence: \`systemctl --user enable --now hermes-serve\`",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:180`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`import { spawnSync } from \"node:child_process\";\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:190`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`return spawnSync(command, args, { encoding: \"utf8\" });\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:200`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`import { execFileSync } from \"node:child_process\";\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:210`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`const branch = execFileSync(\"git\", [\"rev-parse\", \"--abbrev-ref\", \"HEAD\"], {\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:220`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`execFileSync(\"git\", [\"status\", \"--porcelain\"], {\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:230`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`import { spawn } from \"node:child_process\";\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:240`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`const child = spawn(process.execPath, [\"server/index.js\", \"--dev\"], {\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:250`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`import { execFileSync } from \"node:child_process\";\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:260`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`execFileSync(\"git\", args, {\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:270`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`pattern: /(?:node:child_process|child_process|\\bexecFileSync\\s*\\(|\\bexecFile\\s*\\(|\\bexecSync\\s*\\(|\\bspawnSync\\s*\\(|\\bspawn\\s*\\(|\\bfork\\s*\\()/g,\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:280`
- Category: `host-mutation`
- Evidence: `"snippet": "- Evidence: \`pattern: /\\b(?:sudo|launchctl|systemctl|crontab|defaults\\s+write|security\\s+add-trusted-cert|chmod\\s+[0-7]{3,4}|chown)\\b/g,\`",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:290`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`pattern: /(?:~\\/|\\/Users\\/[^/]+\\/|process\\.env\\.HOME[^\\n]{0,120})?(?:\\.ssh|\\.aws|\\.gnupg|Keychains|id_rsa|id_ed25519)/g,\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:300`
- Category: `host-mutation`
- Evidence: `"snippet": "- Evidence: \`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\\`);\`",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:300`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\\`);\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:310`
- Category: `host-mutation`
- Evidence: `"snippet": "- Evidence: \`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\\`);\`",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:310`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\\`);\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:320`
- Category: `host-mutation`
- Evidence: `"snippet": "- Evidence: \`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\\`);\`",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:320`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\\`);\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:330`
- Category: `host-mutation`
- Evidence: `"snippet": "- Evidence: \`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\\`);\`",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:330`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\\`);\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:340`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`import * as childProcess from \"node:child_process\";\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:350`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`const result = childProcess.spawnSync(command, args, {\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:360`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`sshTarget: params.sshTarget,\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:370`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`sshTarget: params.sshTarget,\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:380`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`import * as childProcess from \"node:child_process\";\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:390`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`const sshTarget = assertSafeSshTarget(params.sshTarget);\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:400`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`params.sshPort !== undefined &&\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:410`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`params.sshPort !== null &&\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:420`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`(!Number.isInteger(params.sshPort) || params.sshPort < 1 || params.sshPort > 65_535)\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:430`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`if (typeof params.sshPort === \"number\") {\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:440`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`sshArgs.push(\"-p\", String(params.sshPort));\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:450`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`const result = childProcess.spawnSync(\"ssh\", sshArgs, options);\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:460`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`sshTarget: params.sshTarget,\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:470`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`import { spawnSync } from \"node:child_process\";\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:480`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`vi.mock(\"node:child_process\", () => {\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:490`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`import { spawnSync } from \"node:child_process\";\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:500`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`vi.mock(\"node:child_process\", async () => {\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:510`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`const actual = await vi.importActual<typeof import(\"node:child_process\")>(\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:520`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`\"node:child_process\"\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:530`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`import { spawnSync } from \"node:child_process\";\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:540`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`vi.mock(\"node:child_process\", async () => {\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:550`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`const actual = await vi.importActual<typeof import(\"node:child_process\")>(\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:560`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`\"node:child_process\"\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:570`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`import { spawnSync } from \"node:child_process\";\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:580`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`vi.mock(\"node:child_process\", () => {\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:590`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"id_rsa\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:600`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"id_rsa.pub\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:610`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"id_ed25519\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:620`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"id_ed25519.pub\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:630`
- Category: `host-mutation`
- Evidence: `"snippet": "\"snippet\": \"COPY --chown=node:node --from=builder /app/.next ./.next\",",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:640`
- Category: `host-mutation`
- Evidence: `"snippet": "\"snippet\": \"COPY --chown=node:node --from=builder /app/public ./public\",",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:650`
- Category: `host-mutation`
- Evidence: `"snippet": "\"snippet\": \"COPY --chown=node:node --from=builder /app/server ./server\",",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:660`
- Category: `host-mutation`
- Evidence: `"snippet": "\"snippet\": \"COPY --chown=node:node --from=deps /app/node_modules ./node_modules\",",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:670`
- Category: `host-mutation`
- Evidence: `"snippet": "\"snippet\": \"COPY --chown=node:node --from=builder /app/package.json ./package.json\",",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:680`
- Category: `host-mutation`
- Evidence: `"snippet": "\"snippet\": \"COPY --chown=node:node --from=builder /app/next.config.ts ./next.config.ts\",",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:690`
- Category: `host-mutation`
- Evidence: `"snippet": "\"snippet\": \"launchctl load ~/Library/LaunchAgents/dev.hermes3d.serve.plist\",",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:700`
- Category: `host-mutation`
- Evidence: `"snippet": "\"snippet\": \"systemctl --user enable --now hermes-serve\",",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:710`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"import { spawnSync } from \\\"node:child_process\\\";\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:720`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"return spawnSync(command, args, { encoding: \\\"utf8\\\" });\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:730`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"import { execFileSync } from \\\"node:child_process\\\";\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:740`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"const branch = execFileSync(\\\"git\\\", [\\\"rev-parse\\\", \\\"--abbrev-ref\\\", \\\"HEAD\\\"], {\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:750`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"execFileSync(\\\"git\\\", [\\\"status\\\", \\\"--porcelain\\\"], {\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:760`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"import { spawn } from \\\"node:child_process\\\";\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:770`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"const child = spawn(process.execPath, [\\\"server/index.js\\\", \\\"--dev\\\"], {\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:780`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"import { execFileSync } from \\\"node:child_process\\\";\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:790`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"execFileSync(\\\"git\\\", args, {\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:800`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"pattern: /(?:node:child_process|child_process|\\\\bexecFileSync\\\\s*\\\\(|\\\\bexecFile\\\\s*\\\\(|\\\\bexecSync\\\\s*\\\\(|\\\\bspawnSync\\\\s*\\\\(|\\\\bspawn\\\\s*\\\\(|\\\\bfork\\\\s*\\\\()/g,\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:810`
- Category: `host-mutation`
- Evidence: `"snippet": "\"snippet\": \"pattern: /\\\\b(?:sudo|launchctl|systemctl|crontab|defaults\\\\s+write|security\\\\s+add-trusted-cert|chmod\\\\s+[0-7]{3,4}|chown)\\\\b/g,\",",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:820`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"pattern: /(?:~\\\\/|\\\\/Users\\\\/[^/]+\\\\/|process\\\\.env\\\\.HOME[^\\\\n]{0,120})?(?:\\\\.ssh|\\\\.aws|\\\\.gnupg|Keychains|id_rsa|id_ed25519)/g,\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:830`
- Category: `host-mutation`
- Evidence: `"snippet": "\"snippet\": \"console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \\\"${CERT_PATH}\\\"\\\\n\`);\",",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:830`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \\\"${CERT_PATH}\\\"\\\\n\`);\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:840`
- Category: `host-mutation`
- Evidence: `"snippet": "\"snippet\": \"console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \\\"${CERT_PATH}\\\"\\\\n\`);\",",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:840`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \\\"${CERT_PATH}\\\"\\\\n\`);\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:850`
- Category: `host-mutation`
- Evidence: `"snippet": "\"snippet\": \"console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \\\"${CERT_PATH}\\\"\\\\n\`);\",",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:850`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \\\"${CERT_PATH}\\\"\\\\n\`);\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:860`
- Category: `host-mutation`
- Evidence: `"snippet": "\"snippet\": \"console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \\\"${CERT_PATH}\\\"\\\\n\`);\",",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:860`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \\\"${CERT_PATH}\\\"\\\\n\`);\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:870`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"import * as childProcess from \\\"node:child_process\\\";\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:880`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"const result = childProcess.spawnSync(command, args, {\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:890`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"sshTarget: params.sshTarget,\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:900`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"sshTarget: params.sshTarget,\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:910`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"import * as childProcess from \\\"node:child_process\\\";\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:920`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"const sshTarget = assertSafeSshTarget(params.sshTarget);\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:930`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"params.sshPort !== undefined &&\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:940`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"params.sshPort !== null &&\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:950`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"(!Number.isInteger(params.sshPort) || params.sshPort < 1 || params.sshPort > 65_535)\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:960`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"if (typeof params.sshPort === \\\"number\\\") {\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:970`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"sshArgs.push(\\\"-p\\\", String(params.sshPort));\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:980`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"const result = childProcess.spawnSync(\\\"ssh\\\", sshArgs, options);\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:990`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"sshTarget: params.sshTarget,\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1000`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"import { spawnSync } from \\\"node:child_process\\\";\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1010`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"vi.mock(\\\"node:child_process\\\", () => {\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1020`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"import { spawnSync } from \\\"node:child_process\\\";\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1030`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"vi.mock(\\\"node:child_process\\\", async () => {\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1040`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"const actual = await vi.importActual<typeof import(\\\"node:child_process\\\")>(\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1050`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"\\\"node:child_process\\\"\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1060`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"import { spawnSync } from \\\"node:child_process\\\";\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1070`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"vi.mock(\\\"node:child_process\\\", async () => {\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1080`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"const actual = await vi.importActual<typeof import(\\\"node:child_process\\\")>(\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1090`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"\\\"node:child_process\\\"\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1100`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"import { spawnSync } from \\\"node:child_process\\\";\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1110`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"vi.mock(\\\"node:child_process\\\", () => {\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:1120`
- Category: `host-mutation`
- Evidence: `"snippet": "COPY --chown=node:node --from=builder /app/.next ./.next",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:1130`
- Category: `host-mutation`
- Evidence: `"snippet": "COPY --chown=node:node --from=builder /app/public ./public",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:1140`
- Category: `host-mutation`
- Evidence: `"snippet": "COPY --chown=node:node --from=builder /app/server ./server",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:1150`
- Category: `host-mutation`
- Evidence: `"snippet": "COPY --chown=node:node --from=deps /app/node_modules ./node_modules",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:1160`
- Category: `host-mutation`
- Evidence: `"snippet": "COPY --chown=node:node --from=builder /app/package.json ./package.json",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:1170`
- Category: `host-mutation`
- Evidence: `"snippet": "COPY --chown=node:node --from=builder /app/next.config.ts ./next.config.ts",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:1180`
- Category: `host-mutation`
- Evidence: `"snippet": "launchctl load ~/Library/LaunchAgents/dev.hermes3d.serve.plist",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:1190`
- Category: `host-mutation`
- Evidence: `"snippet": "systemctl --user enable --now hermes-serve",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1200`
- Category: `command-execution`
- Evidence: `"snippet": "import { spawnSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1210`
- Category: `command-execution`
- Evidence: `"snippet": "return spawnSync(command, args, { encoding: \"utf8\" });",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1220`
- Category: `command-execution`
- Evidence: `"snippet": "import { execFileSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1230`
- Category: `command-execution`
- Evidence: `"snippet": "const branch = execFileSync(\"git\", [\"rev-parse\", \"--abbrev-ref\", \"HEAD\"], {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1240`
- Category: `command-execution`
- Evidence: `"snippet": "execFileSync(\"git\", [\"status\", \"--porcelain\"], {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1250`
- Category: `command-execution`
- Evidence: `"snippet": "import { spawn } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1260`
- Category: `command-execution`
- Evidence: `"snippet": "const child = spawn(process.execPath, [\"server/index.js\", \"--dev\"], {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1270`
- Category: `command-execution`
- Evidence: `"snippet": "import { execFileSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1280`
- Category: `command-execution`
- Evidence: `"snippet": "execFileSync(\"git\", args, {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1290`
- Category: `command-execution`
- Evidence: `"snippet": "pattern: /(?:node:child_process|child_process|\\bexecFileSync\\s*\\(|\\bexecFile\\s*\\(|\\bexecSync\\s*\\(|\\bspawnSync\\s*\\(|\\bspawn\\s*\\(|\\bfork\\s*\\()/g,",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:1300`
- Category: `host-mutation`
- Evidence: `"snippet": "pattern: /\\b(?:sudo|launchctl|systemctl|crontab|defaults\\s+write|security\\s+add-trusted-cert|chmod\\s+[0-7]{3,4}|chown)\\b/g,",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:1310`
- Category: `credential-access`
- Evidence: `"snippet": "pattern: /(?:~\\/|\\/Users\\/[^/]+\\/|process\\.env\\.HOME[^\\n]{0,120})?(?:\\.ssh|\\.aws|\\.gnupg|Keychains|id_rsa|id_ed25519)/g,",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:1320`
- Category: `host-mutation`
- Evidence: `"snippet": "console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\`);",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:1320`
- Category: `credential-access`
- Evidence: `"snippet": "console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\`);",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:1330`
- Category: `host-mutation`
- Evidence: `"snippet": "console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\`);",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:1330`
- Category: `credential-access`
- Evidence: `"snippet": "console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\`);",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1340`
- Category: `command-execution`
- Evidence: `"snippet": "import * as childProcess from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1350`
- Category: `command-execution`
- Evidence: `"snippet": "const result = childProcess.spawnSync(command, args, {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:1360`
- Category: `credential-access`
- Evidence: `"snippet": "sshTarget: params.sshTarget,",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:1370`
- Category: `credential-access`
- Evidence: `"snippet": "sshTarget: params.sshTarget,",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1380`
- Category: `command-execution`
- Evidence: `"snippet": "import * as childProcess from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:1390`
- Category: `credential-access`
- Evidence: `"snippet": "const sshTarget = assertSafeSshTarget(params.sshTarget);",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:1400`
- Category: `credential-access`
- Evidence: `"snippet": "params.sshPort !== undefined &&",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:1410`
- Category: `credential-access`
- Evidence: `"snippet": "params.sshPort !== null &&",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:1420`
- Category: `credential-access`
- Evidence: `"snippet": "(!Number.isInteger(params.sshPort) || params.sshPort < 1 || params.sshPort > 65_535)",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:1430`
- Category: `credential-access`
- Evidence: `"snippet": "if (typeof params.sshPort === \"number\") {",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:1440`
- Category: `credential-access`
- Evidence: `"snippet": "sshArgs.push(\"-p\", String(params.sshPort));",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1450`
- Category: `command-execution`
- Evidence: `"snippet": "const result = childProcess.spawnSync(\"ssh\", sshArgs, options);",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:1460`
- Category: `credential-access`
- Evidence: `"snippet": "sshTarget: params.sshTarget,",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1470`
- Category: `command-execution`
- Evidence: `"snippet": "import { spawnSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1480`
- Category: `command-execution`
- Evidence: `"snippet": "vi.mock(\"node:child_process\", () => {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1490`
- Category: `command-execution`
- Evidence: `"snippet": "import { spawnSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1500`
- Category: `command-execution`
- Evidence: `"snippet": "vi.mock(\"node:child_process\", async () => {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1510`
- Category: `command-execution`
- Evidence: `"snippet": "const actual = await vi.importActual<typeof import(\"node:child_process\")>(",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1520`
- Category: `command-execution`
- Evidence: `"snippet": "\"node:child_process\"",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1530`
- Category: `command-execution`
- Evidence: `"snippet": "import { spawnSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1540`
- Category: `command-execution`
- Evidence: `"snippet": "vi.mock(\"node:child_process\", async () => {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1550`
- Category: `command-execution`
- Evidence: `"snippet": "const actual = await vi.importActual<typeof import(\"node:child_process\")>(",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1560`
- Category: `command-execution`
- Evidence: `"snippet": "\"node:child_process\"",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1570`
- Category: `command-execution`
- Evidence: `"snippet": "import { spawnSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1580`
- Category: `command-execution`
- Evidence: `"snippet": "vi.mock(\"node:child_process\", () => {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

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

- Location: `audit/security/STATIC_AUDIT.md:1126`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(root, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1133`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(path.join(root, "MACOS.md"), report);\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1140`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(root, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1147`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(path.join(root, "REPORT.md"), report);\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1154`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const socket = new WebSocket(url, { handshakeTimeout: timeoutMs });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1161`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch(url, { headers, signal: controller.signal });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1168`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`normalizedHost !== "0.0.0.0";\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1175`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(path.dirname(outputPath), { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1182`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(outputPath, \\\`${JSON.stringify(records, null, 2)}\n\\\`);\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1189`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const res = await fetch(url, { redirect: "manual" });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1196`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`pattern: /(?:searchParams|get\(["']path["']\)|params\.(?:path|file|name)|formData\.get\(["'](?:file|path|name)["']\))/g,\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1203`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(outputDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1210`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(reportPath, report);\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1217`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(jsonPath, \\\`${JSON.stringify(output, null, 2)}\n\\\`);\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1224`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(settingsDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1231`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1238`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`url.hostname === "127.0.0.1" || url.hostname === "::1" || url.hostname === "0.0.0.0"\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1245`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`upstreamWs = new WebSocket(upstreamUrl, {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1252`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`parsed.searchParams.set("token", token.trim());\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1259`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const ws = new WebSocket(this.url, options);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1266`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`parsed.searchParams.set("channel", channel || DEFAULT_CHANNEL);\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1273`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`parsed.searchParams.set("token", token.trim());\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1280`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const ws = new WebSocket(eventsUrl, wsOptions);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1287`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(path.dirname(HISTORY_FILE), { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1294`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(HISTORY_FILE, JSON.stringify(data, null, 2), "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1301`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(CERT_DIR, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1308`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(CERT_PATH, pems.cert);\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1315`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(KEY_PATH, pems.private);\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1322`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`: hostname === "0.0.0.0" || hostname === "::"\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1329`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`if (normalized === "0.0.0.0" || normalized === "::") {\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1336`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`await handle.writeFile(bytes);\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1343`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const file = formData.get("file");\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1350`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const { searchParams } = new URL(request.url);\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1357`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const rawPath = (searchParams.get("path") ?? "").trim();\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1364`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch(\\\`${baseUrl}${pathname}\\\`, {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1371`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const { searchParams } = new URL(request.url);\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1378`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const rawUrl = (searchParams.get("url") ?? "").trim();\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1385`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const waitMsRaw = Number(searchParams.get("waitMs") ?? "");\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1392`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const { searchParams } = new URL(request.url);\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1399`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const repo = (searchParams.get("repo") ?? "").trim();\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1406`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const number = parsePullRequestNumber(searchParams.get("number"));\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1413`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`response = await fetch(params.layoutUrl, {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1420`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const source = url.searchParams.get("source")?.trim() || "local";\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1427`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const gatewayUrl = url.searchParams.get("gatewayUrl")?.trim() || "";\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1434`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const source = url.searchParams.get("source")?.trim() || "local";\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1441`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const workspaceId = url.searchParams.get("workspaceId")?.trim() || "default";\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1448`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const workspaceId = asString(url.searchParams.get("workspaceId")) || "default";\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1455`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const officeId = asString(url.searchParams.get("officeId"));\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1462`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`return (url.searchParams.get("gatewayUrl") ?? "").trim();\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1469`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const { searchParams } = new URL(request.url);\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1476`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const rawQuery = searchParams.get("q");\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1483`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch(\\\`${runtimeUrl}${pathname}\\\`, {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1490`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const code = url.searchParams.get("code") ?? "";\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1497`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const state = url.searchParams.get("state") ?? "";\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1504`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const error = url.searchParams.get("error") ?? "";\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1511`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch("/api/files/upload", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1518`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const searchParams = useSearchParams();\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1525`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`searchParams.get(SETTINGS_ROUTE_AGENT_ID_QUERY_PARAM)\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1532`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`[pathname, searchParams]\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1539`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch("/api/office", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1546`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch("/api/office/publish", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1553`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const searchParams = new URLSearchParams({ source: "remote" });\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1560`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`return \\\`/api/office/layout?${searchParams.toString()}\\\`;\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1567`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch(requestUrl, { cache: "no-store" });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1574`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const searchParams = new URLSearchParams({\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1581`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`return \\\`/api/office/presence?${searchParams.toString()}\\\`;\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1588`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch(requestUrl, { cache: "no-store" });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1595`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch(\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1602`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch("/api/office/github", { cache: "no-store" });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1609`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch(\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1616`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch("/api/office/github", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1623`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch("/api/office/github", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1630`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const searchParams = new URL(window.location.href).searchParams;\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1637`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`return searchParams.has("code");\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1644`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`void fetch("/api/office/call", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1651`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`void fetch("/api/office/call", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1658`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`void fetch("/api/office/text", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1665`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`void fetch("/api/office/text", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1672`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch("/api/office/remote-message", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1679`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch("/api/office/remote-handoff", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1686`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch("/api/office/voice/transcribe", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1693`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch(\\\`/api/office/browser-preview?${params.toString()}\\\`, {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1700`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`void fetch("/api/office/layout", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1707`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch("/api/office/voice/reply", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1714`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const res = await fetch("https://accounts.spotify.com/api/token", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1721`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const res = await fetch(\\\`${BASE}/me/player\\\`, { headers: headers(token) });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1728`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const res = await fetch(\\\`${BASE}/search?${params}\\\`, { headers: headers(token) });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1735`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`await fetch(\\\`${BASE}/me/player/play${params}\\\`, {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1742`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`await fetch(\\\`${BASE}/me/player/pause\\\`, { method: "PUT", headers: headers(token) });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1749`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`await fetch(\\\`${BASE}/me/player/play\\\`, { method: "PUT", headers: headers(token) });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1756`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`await fetch(\\\`${BASE}/me/player/next\\\`, { method: "POST", headers: headers(token) });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1763`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`await fetch(\\\`${BASE}/me/player/previous\\\`, { method: "POST", headers: headers(token) });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1770`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`await fetch(\\\`${BASE}/me/player/volume?${params}\\\`, { method: "PUT", headers: headers(token) });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1777`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch("/api/office/voice/reply", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1784`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(path.dirname(dest), { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1791`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.renameSync(src, dest);\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1798`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(path.join(trashDir, "agents"), { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1805`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(path.join(trashDir, "workspaces"), { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1812`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(path.dirname(dest), { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1819`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.renameSync(src, dest);\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1826`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const trimmed = params.name.trim();\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1833`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const trimmed = params.name.trim();\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1840`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`name: params.name,\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1847`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`name: params.name,\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1854`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const entries = Object.entries(params.files).filter(\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1861`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const payload: Record<string, unknown> = { file: params.file };\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1868`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`normalized === "0.0.0.0"\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1875`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const socket = new WebSocket(gatewayUrl);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1882`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`this.ws = new WebSocket(this.opts.url);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1889`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const res = await fetch(input, init);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1896`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`return normalized === "0.0.0.0" ? "127.0.0.1" : hostname;\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1903`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`\\\`path=${params.path}\\\`,\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1910`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`parsed.searchParams.delete("source");\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1917`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(dirPath, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1924`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(resolveStorePath(), JSON.stringify(store, null, 2), "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1931`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch(presenceUrl, {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1938`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`url.searchParams.set("maxResults", "50");\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1945`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`url.searchParams.set("fields", "summary,status,assignee");\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1952`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`url.searchParams.set("jql", jql);\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1959`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch(searchUrl, {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1966`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(dirPath, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1973`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(storePath, JSON.stringify(store, null, 2), "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1980`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(dirPath, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1987`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(storePath, JSON.stringify(store, null, 2), "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1994`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`existing.name = params.name;\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2001`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`name: params.name,\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2008`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch("/api/runtime/custom", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:2015`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`const LOOPBACK_HOSTNAMES = new Set(["localhost", "127.0.0.1", "::1", "0.0.0.0"]);\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2022`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const fileEntries = params.files\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2029`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.rmSync(baseDir, { recursive: true, force: false });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2036`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`name: resolveRequiredValue(params.name, "Skill name is required to install dependencies."),\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2043`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(dir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2050`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:2057`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`const LOOPBACK_HOSTNAMES = new Set(["127.0.0.1", "::1", "0.0.0.0"]);\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2064`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`return fetch(input, { ...init, signal: controller.signal }).finally(() =>\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2071`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(dirPath, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2078`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(tmpPath, JSON.stringify(store, null, 2), "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2085`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.renameSync(tmpPath, storePath);\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2092`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.unlinkSync(tmpPath);\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2099`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch(\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2106`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(workspace, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2113`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(agentDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2120`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(path.join(workspace, "hello.txt"), "hi", "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2127`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(path.join(agentDir, "state.json"), "{}", "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2134`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(fakeTrashDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2141`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(settingsDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2148`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2155`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`name: params.name,\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2162`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.rmSync(stateDir, { recursive: true, force: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2169`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(uploads, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2176`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(outside, "secret", "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2183`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2190`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2197`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2204`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(settingsDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2211`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2218`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.rmSync(tempDir, { recursive: true, force: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2225`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(imagesDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2232`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(outsideDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2239`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(outsideFile, "not-allowed", "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2246`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.rmSync(symlinkPath, { force: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2253`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2260`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2267`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2274`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2281`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2288`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2295`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2302`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2309`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2316`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2323`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2330`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2337`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`received.push({ __connect: true, path: url.pathname, token: url.searchParams.get("token") });\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2344`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`expect(url.searchParams.get("channel")).toBe("hermes3d");\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2351`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`expect(url.searchParams.get("token")).toBe("secret");\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2358`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`expect(url.searchParams.has("token")).toBe(false);\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2365`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(path.join(tempHome, "Documents"), { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2372`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(path.join(tempHome, "Downloads"), { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2379`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(path.join(tempHome, "Doc.txt"), "doc", "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2386`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(path.join(tempHome, "Notes.txt"), "notes", "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2393`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(path.join(tempHome, ".secret"), "hidden", "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2400`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.rmSync(home, { recursive: true, force: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:2407`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`resolveHosts({ HOST: "0.0.0.0", HOSTNAME: "example-host" } as unknown as NodeJS.ProcessEnv)\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:2414`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`).toEqual(["0.0.0.0"]);\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:2421`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`resolveHost({ HOST: "0.0.0.0", HOSTNAME: "example-host" } as unknown as NodeJS.ProcessEnv)\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:2428`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`).toBe("0.0.0.0");\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:2435`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`expect(isPublicHost("0.0.0.0")).toBe(true);\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:2442`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`expect(isPublicHost("::")).toBe(true);\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:2449`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`expect(() => assertPublicHostAllowed({ host: "0.0.0.0", studioAccessToken: "" })).toThrow(\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:2456`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`expect(() => assertPublicHostAllowed({ host: "0.0.0.0", studioAccessToken: "   " })).toThrow(\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:2463`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`assertPublicHostAllowed({ host: "0.0.0.0", studioAccessToken: "abc" })\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2470`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.rmSync(tempDir, { recursive: true, force: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2477`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(storePath, "{invalid json!!!", "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2484`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(skillDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2491`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(path.join(skillDir, "SKILL.md"), "# skill", "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2498`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(workspaceSkillsRoot, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2505`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(nonSkillDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2512`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(settingsDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2519`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2526`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(skillDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2533`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(path.join(skillDir, "SKILL.md"), "# skill", "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2540`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(storeDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2547`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2554`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.rmSync(tempDir, { recursive: true, force: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2561`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.rmSync(tempDir, { recursive: true, force: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2568`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2575`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.rmSync(tempDir, { recursive: true, force: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2582`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2589`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(path.join(tempDir, "hermes3d"), { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2596`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2603`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2610`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.rmSync(tempDir, { recursive: true, force: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2617`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(root, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2624`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(path.join(root, \"MACOS.md\"), report);",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2631`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(root, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2638`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(path.join(root, \"REPORT.md\"), report);",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2645`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const socket = new WebSocket(url, { handshakeTimeout: timeoutMs });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2652`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(url, { headers, signal: controller.signal });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2659`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(path.dirname(outputPath), { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2666`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(outputPath, \\`${JSON.stringify(records, null, 2)}\\n\\`);",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2673`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const res = await fetch(url, { redirect: \"manual\" });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2680`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "pattern: /(?:searchParams|get\\([\"']path[\"']\\)|params\\.(?:path|file|name)|formData\\.get\\([\"'](?:file|path|name)[\"']\\))/g,",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2687`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(outputDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2694`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(reportPath, report);",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2701`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(jsonPath, \\`${JSON.stringify(output, null, 2)}\\n\\`);",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2708`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(settingsDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2715`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2722`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "upstreamWs = new WebSocket(upstreamUrl, {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2729`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "parsed.searchParams.set(\"token\", token.trim());",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2736`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const ws = new WebSocket(this.url, options);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2743`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "parsed.searchParams.set(\"channel\", channel || DEFAULT_CHANNEL);",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2750`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "parsed.searchParams.set(\"token\", token.trim());",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2757`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const ws = new WebSocket(eventsUrl, wsOptions);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2764`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(path.dirname(HISTORY_FILE), { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2771`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(HISTORY_FILE, JSON.stringify(data, null, 2), \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2778`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(CERT_DIR, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2785`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(CERT_PATH, pems.cert);",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2792`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(KEY_PATH, pems.private);",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2799`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "await handle.writeFile(bytes);",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2806`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const { searchParams } = new URL(request.url);",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2813`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const rawPath = (searchParams.get(\"path\") ?? \"\").trim();",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2820`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\\`${baseUrl}${pathname}\\`, {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2827`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const { searchParams } = new URL(request.url);",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2834`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const rawUrl = (searchParams.get(\"url\") ?? \"\").trim();",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2841`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const waitMsRaw = Number(searchParams.get(\"waitMs\") ?? \"\");",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2848`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const { searchParams } = new URL(request.url);",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2855`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const repo = (searchParams.get(\"repo\") ?? \"\").trim();",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2862`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const number = parsePullRequestNumber(searchParams.get(\"number\"));",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2869`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "response = await fetch(params.layoutUrl, {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2876`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const source = url.searchParams.get(\"source\")?.trim() || \"local\";",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2883`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const gatewayUrl = url.searchParams.get(\"gatewayUrl\")?.trim() || \"\";",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2890`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const source = url.searchParams.get(\"source\")?.trim() || \"local\";",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2897`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const workspaceId = url.searchParams.get(\"workspaceId\")?.trim() || \"default\";",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2904`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const workspaceId = asString(url.searchParams.get(\"workspaceId\")) || \"default\";",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2911`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const officeId = asString(url.searchParams.get(\"officeId\"));",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2918`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "return (url.searchParams.get(\"gatewayUrl\") ?? \"\").trim();",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2925`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const { searchParams } = new URL(request.url);",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2932`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const rawQuery = searchParams.get(\"q\");",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2939`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\\`${runtimeUrl}${pathname}\\`, {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2946`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const code = url.searchParams.get(\"code\") ?? \"\";",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2953`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const state = url.searchParams.get(\"state\") ?? \"\";",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2960`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const error = url.searchParams.get(\"error\") ?? \"\";",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2967`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\"/api/files/upload\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2974`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const searchParams = useSearchParams();",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2981`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "searchParams.get(SETTINGS_ROUTE_AGENT_ID_QUERY_PARAM)",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2988`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "[pathname, searchParams]",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2995`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\"/api/office\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3002`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\"/api/office/publish\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3009`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const searchParams = new URLSearchParams({ source: \"remote\" });",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3016`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "return \\`/api/office/layout?${searchParams.toString()}\\`;",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3023`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(requestUrl, { cache: \"no-store\" });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3030`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const searchParams = new URLSearchParams({",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3037`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "return \\`/api/office/presence?${searchParams.toString()}\\`;",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3044`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(requestUrl, { cache: \"no-store\" });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3051`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3058`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\"/api/office/github\", { cache: \"no-store\" });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3065`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3072`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\"/api/office/github\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3079`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\"/api/office/github\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3086`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const searchParams = new URL(window.location.href).searchParams;",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3093`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "return searchParams.has(\"code\");",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3100`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "void fetch(\"/api/office/call\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3107`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "void fetch(\"/api/office/call\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3114`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "void fetch(\"/api/office/text\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3121`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "void fetch(\"/api/office/text\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3128`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\"/api/office/remote-message\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3135`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\"/api/office/remote-handoff\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3142`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\"/api/office/voice/transcribe\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3149`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\\`/api/office/browser-preview?${params.toString()}\\`, {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3156`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "void fetch(\"/api/office/layout\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3163`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\"/api/office/voice/reply\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3170`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const res = await fetch(\"https://accounts.spotify.com/api/token\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3177`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const res = await fetch(\\`${BASE}/me/player\\`, { headers: headers(token) });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3184`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const res = await fetch(\\`${BASE}/search?${params}\\`, { headers: headers(token) });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3191`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "await fetch(\\`${BASE}/me/player/play${params}\\`, {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3198`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "await fetch(\\`${BASE}/me/player/pause\\`, { method: \"PUT\", headers: headers(token) });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3205`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "await fetch(\\`${BASE}/me/player/play\\`, { method: \"PUT\", headers: headers(token) });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3212`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "await fetch(\\`${BASE}/me/player/next\\`, { method: \"POST\", headers: headers(token) });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3219`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "await fetch(\\`${BASE}/me/player/previous\\`, { method: \"POST\", headers: headers(token) });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3226`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "await fetch(\\`${BASE}/me/player/volume?${params}\\`, { method: \"PUT\", headers: headers(token) });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3233`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\"/api/office/voice/reply\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3240`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(path.dirname(dest), { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3247`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.renameSync(src, dest);",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3254`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(path.join(trashDir, \"agents\"), { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3261`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(path.join(trashDir, \"workspaces\"), { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3268`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(path.dirname(dest), { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3275`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.renameSync(src, dest);",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3282`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const trimmed = params.name.trim();",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3289`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const trimmed = params.name.trim();",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3296`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "name: params.name,",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3303`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "name: params.name,",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3310`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const entries = Object.entries(params.files).filter(",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3317`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const payload: Record<string, unknown> = { file: params.file };",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3324`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const socket = new WebSocket(gatewayUrl);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3331`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "this.ws = new WebSocket(this.opts.url);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3338`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const res = await fetch(input, init);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3345`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "\\`path=${params.path}\\`,",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3352`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "parsed.searchParams.delete(\"source\");",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3359`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(dirPath, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3366`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(resolveStorePath(), JSON.stringify(store, null, 2), \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3373`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(presenceUrl, {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3380`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "url.searchParams.set(\"maxResults\", \"50\");",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3387`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "url.searchParams.set(\"fields\", \"summary,status,assignee\");",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3394`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "url.searchParams.set(\"jql\", jql);",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3401`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(searchUrl, {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3408`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(dirPath, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3415`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(storePath, JSON.stringify(store, null, 2), \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3422`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(dirPath, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3429`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(storePath, JSON.stringify(store, null, 2), \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3436`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "existing.name = params.name;",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3443`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "name: params.name,",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3450`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\"/api/runtime/custom\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3457`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const fileEntries = params.files",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3464`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.rmSync(baseDir, { recursive: true, force: false });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3471`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "name: resolveRequiredValue(params.name, \"Skill name is required to install dependencies.\"),",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3478`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(dir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3485`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3492`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "return fetch(input, { ...init, signal: controller.signal }).finally(() =>",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3499`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(dirPath, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3506`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(tmpPath, JSON.stringify(store, null, 2), \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3513`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.renameSync(tmpPath, storePath);",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3520`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.unlinkSync(tmpPath);",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3527`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3534`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(workspace, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3541`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(agentDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3548`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(path.join(workspace, \"hello.txt\"), \"hi\", \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3555`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(path.join(agentDir, \"state.json\"), \"{}\", \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3562`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(fakeTrashDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3569`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(settingsDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3576`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3583`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "name: params.name,",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3590`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.rmSync(stateDir, { recursive: true, force: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3597`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(uploads, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3604`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(outside, \"secret\", \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3611`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3618`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3625`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3632`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(settingsDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3639`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3646`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3653`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(imagesDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3660`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(outsideDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3667`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(outsideFile, \"not-allowed\", \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3674`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.rmSync(symlinkPath, { force: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3681`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3688`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3695`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3702`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3709`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3716`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3723`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3730`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3737`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3744`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3751`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3758`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3765`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "received.push({ __connect: true, path: url.pathname, token: url.searchParams.get(\"token\") });",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3772`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "expect(url.searchParams.get(\"channel\")).toBe(\"hermes3d\");",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3779`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "expect(url.searchParams.get(\"token\")).toBe(\"secret\");",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3786`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "expect(url.searchParams.has(\"token\")).toBe(false);",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3793`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(path.join(tempHome, \"Documents\"), { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3800`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(path.join(tempHome, \"Downloads\"), { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3807`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(path.join(tempHome, \"Doc.txt\"), \"doc\", \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3814`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(path.join(tempHome, \"Notes.txt\"), \"notes\", \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3821`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(path.join(tempHome, \".secret\"), \"hidden\", \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3828`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.rmSync(home, { recursive: true, force: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3835`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3842`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(storePath, \"{invalid json!!!\", \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3849`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(skillDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3856`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(path.join(skillDir, \"SKILL.md\"), \"# skill\", \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3863`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(workspaceSkillsRoot, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3870`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(nonSkillDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3877`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(settingsDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3884`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3891`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(skillDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3898`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(path.join(skillDir, \"SKILL.md\"), \"# skill\", \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3905`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(storeDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3912`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3919`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3926`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3933`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3940`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3947`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3954`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(path.join(tempDir, \"hermes3d\"), { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3961`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3968`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3975`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3982`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(root, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3989`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(root, "MACOS.md"), report);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3996`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(root, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4003`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(root, "REPORT.md"), report);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4010`
- Category: `network-egress`
- Evidence: `- Evidence: \`const socket = new WebSocket(url, { handshakeTimeout: timeoutMs });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4017`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(url, { headers, signal: controller.signal });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:4024`
- Category: `public-bind`
- Evidence: `- Evidence: \`normalizedHost !== "0.0.0.0";\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4031`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.dirname(outputPath), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4038`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(outputPath, \\`${JSON.stringify(records, null, 2)}\n\\`);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4045`
- Category: `network-egress`
- Evidence: `- Evidence: \`const res = await fetch(url, { redirect: "manual" });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4052`
- Category: `path-resolution`
- Evidence: `- Evidence: \`pattern: /(?:searchParams|get\(["']path["']\)|params\.(?:path|file|name)|formData\.get\(["'](?:file|path|name)["']\))/g,\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4059`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(outputDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4066`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(reportPath, report);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4073`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(jsonPath, \\`${JSON.stringify(output, null, 2)}\n\\`);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4080`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(settingsDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4087`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:4094`
- Category: `public-bind`
- Evidence: `- Evidence: \`url.hostname === "127.0.0.1" || url.hostname === "::1" || url.hostname === "0.0.0.0"\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4101`
- Category: `network-egress`
- Evidence: `- Evidence: \`upstreamWs = new WebSocket(upstreamUrl, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4108`
- Category: `path-resolution`
- Evidence: `- Evidence: \`parsed.searchParams.set("token", token.trim());\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4115`
- Category: `network-egress`
- Evidence: `- Evidence: \`const ws = new WebSocket(this.url, options);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4122`
- Category: `path-resolution`
- Evidence: `- Evidence: \`parsed.searchParams.set("channel", channel || DEFAULT_CHANNEL);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4129`
- Category: `path-resolution`
- Evidence: `- Evidence: \`parsed.searchParams.set("token", token.trim());\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4136`
- Category: `network-egress`
- Evidence: `- Evidence: \`const ws = new WebSocket(eventsUrl, wsOptions);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4143`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.dirname(HISTORY_FILE), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4150`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(HISTORY_FILE, JSON.stringify(data, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4157`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(CERT_DIR, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4164`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(CERT_PATH, pems.cert);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4171`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(KEY_PATH, pems.private);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:4178`
- Category: `public-bind`
- Evidence: `- Evidence: \`: hostname === "0.0.0.0" || hostname === "::"\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:4185`
- Category: `public-bind`
- Evidence: `- Evidence: \`if (normalized === "0.0.0.0" || normalized === "::") {\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4192`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`await handle.writeFile(bytes);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4199`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const file = formData.get("file");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4206`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const { searchParams } = new URL(request.url);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4213`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const rawPath = (searchParams.get("path") ?? "").trim();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4220`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(\\`${baseUrl}${pathname}\\`, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4227`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const { searchParams } = new URL(request.url);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4234`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const rawUrl = (searchParams.get("url") ?? "").trim();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4241`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const waitMsRaw = Number(searchParams.get("waitMs") ?? "");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4248`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const { searchParams } = new URL(request.url);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4255`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const repo = (searchParams.get("repo") ?? "").trim();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4262`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const number = parsePullRequestNumber(searchParams.get("number"));\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4269`
- Category: `network-egress`
- Evidence: `- Evidence: \`response = await fetch(params.layoutUrl, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4276`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const source = url.searchParams.get("source")?.trim() || "local";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4283`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const gatewayUrl = url.searchParams.get("gatewayUrl")?.trim() || "";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4290`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const source = url.searchParams.get("source")?.trim() || "local";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4297`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const workspaceId = url.searchParams.get("workspaceId")?.trim() || "default";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4304`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const workspaceId = asString(url.searchParams.get("workspaceId")) || "default";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4311`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const officeId = asString(url.searchParams.get("officeId"));\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4318`
- Category: `path-resolution`
- Evidence: `- Evidence: \`return (url.searchParams.get("gatewayUrl") ?? "").trim();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4325`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const { searchParams } = new URL(request.url);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4332`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const rawQuery = searchParams.get("q");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4339`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(\\`${runtimeUrl}${pathname}\\`, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4346`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const code = url.searchParams.get("code") ?? "";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4353`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const state = url.searchParams.get("state") ?? "";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4360`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const error = url.searchParams.get("error") ?? "";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4367`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/files/upload", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4374`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const searchParams = useSearchParams();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4381`
- Category: `path-resolution`
- Evidence: `- Evidence: \`searchParams.get(SETTINGS_ROUTE_AGENT_ID_QUERY_PARAM)\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4388`
- Category: `path-resolution`
- Evidence: `- Evidence: \`[pathname, searchParams]\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4395`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4402`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/publish", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4409`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const searchParams = new URLSearchParams({ source: "remote" });\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4416`
- Category: `path-resolution`
- Evidence: `- Evidence: \`return \\`/api/office/layout?${searchParams.toString()}\\`;\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4423`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(requestUrl, { cache: "no-store" });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4430`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const searchParams = new URLSearchParams({\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4437`
- Category: `path-resolution`
- Evidence: `- Evidence: \`return \\`/api/office/presence?${searchParams.toString()}\\`;\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4444`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(requestUrl, { cache: "no-store" });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4451`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4458`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/github", { cache: "no-store" });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4465`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4472`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/github", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4479`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/github", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4486`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const searchParams = new URL(window.location.href).searchParams;\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4493`
- Category: `path-resolution`
- Evidence: `- Evidence: \`return searchParams.has("code");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4500`
- Category: `network-egress`
- Evidence: `- Evidence: \`void fetch("/api/office/call", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4507`
- Category: `network-egress`
- Evidence: `- Evidence: \`void fetch("/api/office/call", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4514`
- Category: `network-egress`
- Evidence: `- Evidence: \`void fetch("/api/office/text", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4521`
- Category: `network-egress`
- Evidence: `- Evidence: \`void fetch("/api/office/text", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4528`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/remote-message", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4535`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/remote-handoff", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4542`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/voice/transcribe", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4549`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(\\`/api/office/browser-preview?${params.toString()}\\`, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4556`
- Category: `network-egress`
- Evidence: `- Evidence: \`void fetch("/api/office/layout", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4563`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/voice/reply", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4570`
- Category: `network-egress`
- Evidence: `- Evidence: \`const res = await fetch("https://accounts.spotify.com/api/token", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4577`
- Category: `network-egress`
- Evidence: `- Evidence: \`const res = await fetch(\\`${BASE}/me/player\\`, { headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4584`
- Category: `network-egress`
- Evidence: `- Evidence: \`const res = await fetch(\\`${BASE}/search?${params}\\`, { headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4591`
- Category: `network-egress`
- Evidence: `- Evidence: \`await fetch(\\`${BASE}/me/player/play${params}\\`, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4598`
- Category: `network-egress`
- Evidence: `- Evidence: \`await fetch(\\`${BASE}/me/player/pause\\`, { method: "PUT", headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4605`
- Category: `network-egress`
- Evidence: `- Evidence: \`await fetch(\\`${BASE}/me/player/play\\`, { method: "PUT", headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4612`
- Category: `network-egress`
- Evidence: `- Evidence: \`await fetch(\\`${BASE}/me/player/next\\`, { method: "POST", headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4619`
- Category: `network-egress`
- Evidence: `- Evidence: \`await fetch(\\`${BASE}/me/player/previous\\`, { method: "POST", headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4626`
- Category: `network-egress`
- Evidence: `- Evidence: \`await fetch(\\`${BASE}/me/player/volume?${params}\\`, { method: "PUT", headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4633`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/voice/reply", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4640`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.dirname(dest), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4647`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.renameSync(src, dest);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4654`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.join(trashDir, "agents"), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4661`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.join(trashDir, "workspaces"), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4668`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.dirname(dest), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4675`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.renameSync(src, dest);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4682`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const trimmed = params.name.trim();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4689`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const trimmed = params.name.trim();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4696`
- Category: `path-resolution`
- Evidence: `- Evidence: \`name: params.name,\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4703`
- Category: `path-resolution`
- Evidence: `- Evidence: \`name: params.name,\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4710`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const entries = Object.entries(params.files).filter(\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4717`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const payload: Record<string, unknown> = { file: params.file };\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:4724`
- Category: `public-bind`
- Evidence: `- Evidence: \`normalized === "0.0.0.0"\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4731`
- Category: `network-egress`
- Evidence: `- Evidence: \`const socket = new WebSocket(gatewayUrl);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4738`
- Category: `network-egress`
- Evidence: `- Evidence: \`this.ws = new WebSocket(this.opts.url);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4745`
- Category: `network-egress`
- Evidence: `- Evidence: \`const res = await fetch(input, init);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:4752`
- Category: `public-bind`
- Evidence: `- Evidence: \`return normalized === "0.0.0.0" ? "127.0.0.1" : hostname;\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4759`
- Category: `path-resolution`
- Evidence: `- Evidence: \`\\`path=${params.path}\\`,\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4766`
- Category: `path-resolution`
- Evidence: `- Evidence: \`parsed.searchParams.delete("source");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4773`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(dirPath, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4780`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(resolveStorePath(), JSON.stringify(store, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4787`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(presenceUrl, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4794`
- Category: `path-resolution`
- Evidence: `- Evidence: \`url.searchParams.set("maxResults", "50");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4801`
- Category: `path-resolution`
- Evidence: `- Evidence: \`url.searchParams.set("fields", "summary,status,assignee");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4808`
- Category: `path-resolution`
- Evidence: `- Evidence: \`url.searchParams.set("jql", jql);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4815`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(searchUrl, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4822`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(dirPath, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4829`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(storePath, JSON.stringify(store, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4836`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(dirPath, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4843`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(storePath, JSON.stringify(store, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4850`
- Category: `path-resolution`
- Evidence: `- Evidence: \`existing.name = params.name;\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4857`
- Category: `path-resolution`
- Evidence: `- Evidence: \`name: params.name,\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4864`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/runtime/custom", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:4871`
- Category: `public-bind`
- Evidence: `- Evidence: \`const LOOPBACK_HOSTNAMES = new Set(["localhost", "127.0.0.1", "::1", "0.0.0.0"]);\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4878`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const fileEntries = params.files\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4885`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(baseDir, { recursive: true, force: false });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4892`
- Category: `path-resolution`
- Evidence: `- Evidence: \`name: resolveRequiredValue(params.name, "Skill name is required to install dependencies."),\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4899`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(dir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4906`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:4913`
- Category: `public-bind`
- Evidence: `- Evidence: \`const LOOPBACK_HOSTNAMES = new Set(["127.0.0.1", "::1", "0.0.0.0"]);\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4920`
- Category: `network-egress`
- Evidence: `- Evidence: \`return fetch(input, { ...init, signal: controller.signal }).finally(() =>\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4927`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(dirPath, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4934`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(tmpPath, JSON.stringify(store, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4941`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.renameSync(tmpPath, storePath);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4948`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.unlinkSync(tmpPath);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4955`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4962`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(workspace, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4969`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(agentDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4976`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(workspace, "hello.txt"), "hi", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4983`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(agentDir, "state.json"), "{}", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4990`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(fakeTrashDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4997`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(settingsDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5004`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:5011`
- Category: `path-resolution`
- Evidence: `- Evidence: \`name: params.name,\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5018`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(stateDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5025`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(uploads, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5032`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(outside, "secret", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5039`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5046`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5053`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5060`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(settingsDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5067`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5074`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5081`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(imagesDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5088`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(outsideDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5095`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(outsideFile, "not-allowed", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5102`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(symlinkPath, { force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:5109`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:5116`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:5123`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:5130`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:5137`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:5144`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:5151`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:5158`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:5165`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:5172`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:5179`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:5186`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:5193`
- Category: `path-resolution`
- Evidence: `- Evidence: \`received.push({ __connect: true, path: url.pathname, token: url.searchParams.get("token") });\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:5200`
- Category: `path-resolution`
- Evidence: `- Evidence: \`expect(url.searchParams.get("channel")).toBe("hermes3d");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:5207`
- Category: `path-resolution`
- Evidence: `- Evidence: \`expect(url.searchParams.get("token")).toBe("secret");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:5214`
- Category: `path-resolution`
- Evidence: `- Evidence: \`expect(url.searchParams.has("token")).toBe(false);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5221`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.join(tempHome, "Documents"), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5228`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.join(tempHome, "Downloads"), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5235`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(tempHome, "Doc.txt"), "doc", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5242`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(tempHome, "Notes.txt"), "notes", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5249`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(tempHome, ".secret"), "hidden", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5256`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(home, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:5263`
- Category: `public-bind`
- Evidence: `- Evidence: \`resolveHosts({ HOST: "0.0.0.0", HOSTNAME: "example-host" } as unknown as NodeJS.ProcessEnv)\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:5270`
- Category: `public-bind`
- Evidence: `- Evidence: \`).toEqual(["0.0.0.0"]);\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:5277`
- Category: `public-bind`
- Evidence: `- Evidence: \`resolveHost({ HOST: "0.0.0.0", HOSTNAME: "example-host" } as unknown as NodeJS.ProcessEnv)\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:5284`
- Category: `public-bind`
- Evidence: `- Evidence: \`).toBe("0.0.0.0");\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:5291`
- Category: `public-bind`
- Evidence: `- Evidence: \`expect(isPublicHost("0.0.0.0")).toBe(true);\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:5298`
- Category: `public-bind`
- Evidence: `- Evidence: \`expect(isPublicHost("::")).toBe(true);\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:5305`
- Category: `public-bind`
- Evidence: `- Evidence: \`expect(() => assertPublicHostAllowed({ host: "0.0.0.0", studioAccessToken: "" })).toThrow(\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:5312`
- Category: `public-bind`
- Evidence: `- Evidence: \`expect(() => assertPublicHostAllowed({ host: "0.0.0.0", studioAccessToken: "   " })).toThrow(\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:5319`
- Category: `public-bind`
- Evidence: `- Evidence: \`assertPublicHostAllowed({ host: "0.0.0.0", studioAccessToken: "abc" })\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5326`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5333`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(storePath, "{invalid json!!!", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5340`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(skillDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5347`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(skillDir, "SKILL.md"), "# skill", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5354`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(workspaceSkillsRoot, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5361`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(nonSkillDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5368`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(settingsDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5375`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5382`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(skillDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5389`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(skillDir, "SKILL.md"), "# skill", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5396`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(storeDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5403`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5410`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5417`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5424`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5431`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5438`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5445`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.join(tempDir, "hermes3d"), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5452`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5459`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5466`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1590`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(root, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1600`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(path.join(root, \"MACOS.md\"), report);\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1610`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(root, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1620`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(path.join(root, \"REPORT.md\"), report);\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1630`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const socket = new WebSocket(url, { handshakeTimeout: timeoutMs });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1640`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(url, { headers, signal: controller.signal });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1660`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(path.dirname(outputPath), { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1670`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(outputPath, \\\`${JSON.stringify(records, null, 2)}\\n\\\`);\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1680`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const res = await fetch(url, { redirect: \"manual\" });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1690`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`pattern: /(?:searchParams|get\\([\"']path[\"']\\)|params\\.(?:path|file|name)|formData\\.get\\([\"'](?:file|path|name)[\"']\\))/g,\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1700`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(outputDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1710`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(reportPath, report);\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1720`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(jsonPath, \\\`${JSON.stringify(output, null, 2)}\\n\\\`);\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1730`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(settingsDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1740`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1760`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`upstreamWs = new WebSocket(upstreamUrl, {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1770`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`parsed.searchParams.set(\"token\", token.trim());\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1780`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const ws = new WebSocket(this.url, options);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1790`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`parsed.searchParams.set(\"channel\", channel || DEFAULT_CHANNEL);\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1800`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`parsed.searchParams.set(\"token\", token.trim());\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1810`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const ws = new WebSocket(eventsUrl, wsOptions);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1820`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(path.dirname(HISTORY_FILE), { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1830`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(HISTORY_FILE, JSON.stringify(data, null, 2), \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1840`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(CERT_DIR, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1850`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(CERT_PATH, pems.cert);\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1860`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(KEY_PATH, pems.private);\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1890`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`await handle.writeFile(bytes);\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1910`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const { searchParams } = new URL(request.url);\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1920`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const rawPath = (searchParams.get(\"path\") ?? \"\").trim();\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1930`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\\\`${baseUrl}${pathname}\\\`, {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1940`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const { searchParams } = new URL(request.url);\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1950`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const rawUrl = (searchParams.get(\"url\") ?? \"\").trim();\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1960`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const waitMsRaw = Number(searchParams.get(\"waitMs\") ?? \"\");\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1970`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const { searchParams } = new URL(request.url);\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1980`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const repo = (searchParams.get(\"repo\") ?? \"\").trim();\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1990`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const number = parsePullRequestNumber(searchParams.get(\"number\"));\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2000`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`response = await fetch(params.layoutUrl, {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2010`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const source = url.searchParams.get(\"source\")?.trim() || \"local\";\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2020`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const gatewayUrl = url.searchParams.get(\"gatewayUrl\")?.trim() || \"\";\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2030`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const source = url.searchParams.get(\"source\")?.trim() || \"local\";\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2040`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const workspaceId = url.searchParams.get(\"workspaceId\")?.trim() || \"default\";\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2050`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const workspaceId = asString(url.searchParams.get(\"workspaceId\")) || \"default\";\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2060`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const officeId = asString(url.searchParams.get(\"officeId\"));\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2070`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`return (url.searchParams.get(\"gatewayUrl\") ?? \"\").trim();\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2080`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const { searchParams } = new URL(request.url);\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2090`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const rawQuery = searchParams.get(\"q\");\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2100`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\\\`${runtimeUrl}${pathname}\\\`, {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2110`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const code = url.searchParams.get(\"code\") ?? \"\";\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2120`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const state = url.searchParams.get(\"state\") ?? \"\";\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2130`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const error = url.searchParams.get(\"error\") ?? \"\";\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2140`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\"/api/files/upload\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2150`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const searchParams = useSearchParams();\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2160`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`searchParams.get(SETTINGS_ROUTE_AGENT_ID_QUERY_PARAM)\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2170`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`[pathname, searchParams]\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2180`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\"/api/office\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2190`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\"/api/office/publish\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2200`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const searchParams = new URLSearchParams({ source: \"remote\" });\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2210`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`return \\\`/api/office/layout?${searchParams.toString()}\\\`;\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2220`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(requestUrl, { cache: \"no-store\" });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2230`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const searchParams = new URLSearchParams({\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2240`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`return \\\`/api/office/presence?${searchParams.toString()}\\\`;\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2250`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(requestUrl, { cache: \"no-store\" });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2260`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2270`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\"/api/office/github\", { cache: \"no-store\" });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2280`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2290`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\"/api/office/github\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2300`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\"/api/office/github\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2310`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const searchParams = new URL(window.location.href).searchParams;\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2320`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`return searchParams.has(\"code\");\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2330`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`void fetch(\"/api/office/call\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2340`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`void fetch(\"/api/office/call\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2350`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`void fetch(\"/api/office/text\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2360`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`void fetch(\"/api/office/text\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2370`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\"/api/office/remote-message\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2380`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\"/api/office/remote-handoff\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2390`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\"/api/office/voice/transcribe\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2400`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\\\`/api/office/browser-preview?${params.toString()}\\\`, {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2410`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`void fetch(\"/api/office/layout\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2420`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\"/api/office/voice/reply\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2430`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const res = await fetch(\"https://accounts.spotify.com/api/token\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2440`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const res = await fetch(\\\`${BASE}/me/player\\\`, { headers: headers(token) });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2450`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const res = await fetch(\\\`${BASE}/search?${params}\\\`, { headers: headers(token) });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2460`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`await fetch(\\\`${BASE}/me/player/play${params}\\\`, {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2470`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`await fetch(\\\`${BASE}/me/player/pause\\\`, { method: \"PUT\", headers: headers(token) });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2480`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`await fetch(\\\`${BASE}/me/player/play\\\`, { method: \"PUT\", headers: headers(token) });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2490`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`await fetch(\\\`${BASE}/me/player/next\\\`, { method: \"POST\", headers: headers(token) });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2500`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`await fetch(\\\`${BASE}/me/player/previous\\\`, { method: \"POST\", headers: headers(token) });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2510`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`await fetch(\\\`${BASE}/me/player/volume?${params}\\\`, { method: \"PUT\", headers: headers(token) });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2520`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\"/api/office/voice/reply\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2530`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(path.dirname(dest), { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2540`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.renameSync(src, dest);\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2550`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(path.join(trashDir, \"agents\"), { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2560`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(path.join(trashDir, \"workspaces\"), { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2570`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(path.dirname(dest), { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2580`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.renameSync(src, dest);\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2590`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const trimmed = params.name.trim();\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2600`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const trimmed = params.name.trim();\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2610`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`name: params.name,\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2620`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`name: params.name,\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2630`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const entries = Object.entries(params.files).filter(\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2640`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const payload: Record<string, unknown> = { file: params.file };\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2660`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const socket = new WebSocket(gatewayUrl);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2670`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`this.ws = new WebSocket(this.opts.url);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2680`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const res = await fetch(input, init);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2700`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`\\\`path=${params.path}\\\`,\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2710`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`parsed.searchParams.delete(\"source\");\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2720`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(dirPath, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2730`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(resolveStorePath(), JSON.stringify(store, null, 2), \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2740`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(presenceUrl, {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2750`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`url.searchParams.set(\"maxResults\", \"50\");\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2760`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`url.searchParams.set(\"fields\", \"summary,status,assignee\");\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2770`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`url.searchParams.set(\"jql\", jql);\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2780`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(searchUrl, {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2790`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(dirPath, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2800`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(storePath, JSON.stringify(store, null, 2), \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2810`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(dirPath, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2820`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(storePath, JSON.stringify(store, null, 2), \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2830`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`existing.name = params.name;\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2840`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`name: params.name,\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2850`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\"/api/runtime/custom\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2870`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const fileEntries = params.files\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2880`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.rmSync(baseDir, { recursive: true, force: false });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2890`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`name: resolveRequiredValue(params.name, \"Skill name is required to install dependencies.\"),\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2900`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(dir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2910`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2930`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`return fetch(input, { ...init, signal: controller.signal }).finally(() =>\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2940`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(dirPath, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2950`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(tmpPath, JSON.stringify(store, null, 2), \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2960`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.renameSync(tmpPath, storePath);\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2970`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.unlinkSync(tmpPath);\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2980`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2990`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(workspace, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3000`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(agentDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3010`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(path.join(workspace, \"hello.txt\"), \"hi\", \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3020`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(path.join(agentDir, \"state.json\"), \"{}\", \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3030`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(fakeTrashDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3040`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(settingsDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3050`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3060`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`name: params.name,\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3070`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.rmSync(stateDir, { recursive: true, force: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3080`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(uploads, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3090`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(outside, \"secret\", \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3100`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3110`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3120`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3130`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(settingsDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3140`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3150`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3160`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(imagesDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3170`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(outsideDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3180`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(outsideFile, \"not-allowed\", \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3190`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.rmSync(symlinkPath, { force: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3200`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3210`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3220`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3230`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3240`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3250`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3260`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3270`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3280`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3290`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3300`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3310`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3320`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`received.push({ __connect: true, path: url.pathname, token: url.searchParams.get(\"token\") });\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3330`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`expect(url.searchParams.get(\"channel\")).toBe(\"hermes3d\");\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3340`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`expect(url.searchParams.get(\"token\")).toBe(\"secret\");\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3350`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`expect(url.searchParams.has(\"token\")).toBe(false);\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3360`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(path.join(tempHome, \"Documents\"), { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3370`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(path.join(tempHome, \"Downloads\"), { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3380`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(path.join(tempHome, \"Doc.txt\"), \"doc\", \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3390`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(path.join(tempHome, \"Notes.txt\"), \"notes\", \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3400`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(path.join(tempHome, \".secret\"), \"hidden\", \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3410`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.rmSync(home, { recursive: true, force: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3510`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3520`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(storePath, \"{invalid json!!!\", \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3530`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(skillDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3540`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(path.join(skillDir, \"SKILL.md\"), \"# skill\", \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3550`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(workspaceSkillsRoot, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3560`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(nonSkillDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3570`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(settingsDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3580`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3590`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(skillDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3600`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(path.join(skillDir, \"SKILL.md\"), \"# skill\", \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3610`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(storeDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3620`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3630`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3640`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3650`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3660`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3670`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3680`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(path.join(tempDir, \"hermes3d\"), { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3690`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3700`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3710`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3720`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(root, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3730`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(path.join(root, \\\"MACOS.md\\\"), report);\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3740`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(root, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3750`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(path.join(root, \\\"REPORT.md\\\"), report);\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3760`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const socket = new WebSocket(url, { handshakeTimeout: timeoutMs });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3770`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(url, { headers, signal: controller.signal });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3780`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(path.dirname(outputPath), { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3790`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(outputPath, \`${JSON.stringify(records, null, 2)}\\\\n\`);\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3800`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const res = await fetch(url, { redirect: \\\"manual\\\" });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3810`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"pattern: /(?:searchParams|get\\\\([\\\"']path[\\\"']\\\\)|params\\\\.(?:path|file|name)|formData\\\\.get\\\\([\\\"'](?:file|path|name)[\\\"']\\\\))/g,\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3820`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(outputDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3830`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(reportPath, report);\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3840`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(jsonPath, \`${JSON.stringify(output, null, 2)}\\\\n\`);\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3850`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(settingsDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3860`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3870`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"upstreamWs = new WebSocket(upstreamUrl, {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3880`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"parsed.searchParams.set(\\\"token\\\", token.trim());\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3890`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const ws = new WebSocket(this.url, options);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3900`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"parsed.searchParams.set(\\\"channel\\\", channel || DEFAULT_CHANNEL);\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3910`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"parsed.searchParams.set(\\\"token\\\", token.trim());\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3920`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const ws = new WebSocket(eventsUrl, wsOptions);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3930`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(path.dirname(HISTORY_FILE), { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3940`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(HISTORY_FILE, JSON.stringify(data, null, 2), \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3950`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(CERT_DIR, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3960`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(CERT_PATH, pems.cert);\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3970`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(KEY_PATH, pems.private);\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3980`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"await handle.writeFile(bytes);\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3990`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const { searchParams } = new URL(request.url);\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4000`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const rawPath = (searchParams.get(\\\"path\\\") ?? \\\"\\\").trim();\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4010`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\`${baseUrl}${pathname}\`, {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4020`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const { searchParams } = new URL(request.url);\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4030`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const rawUrl = (searchParams.get(\\\"url\\\") ?? \\\"\\\").trim();\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4040`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const waitMsRaw = Number(searchParams.get(\\\"waitMs\\\") ?? \\\"\\\");\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4050`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const { searchParams } = new URL(request.url);\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4060`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const repo = (searchParams.get(\\\"repo\\\") ?? \\\"\\\").trim();\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4070`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const number = parsePullRequestNumber(searchParams.get(\\\"number\\\"));\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4080`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"response = await fetch(params.layoutUrl, {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4090`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const source = url.searchParams.get(\\\"source\\\")?.trim() || \\\"local\\\";\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4100`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const gatewayUrl = url.searchParams.get(\\\"gatewayUrl\\\")?.trim() || \\\"\\\";\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4110`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const source = url.searchParams.get(\\\"source\\\")?.trim() || \\\"local\\\";\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4120`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const workspaceId = url.searchParams.get(\\\"workspaceId\\\")?.trim() || \\\"default\\\";\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4130`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const workspaceId = asString(url.searchParams.get(\\\"workspaceId\\\")) || \\\"default\\\";\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4140`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const officeId = asString(url.searchParams.get(\\\"officeId\\\"));\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4150`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"return (url.searchParams.get(\\\"gatewayUrl\\\") ?? \\\"\\\").trim();\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4160`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const { searchParams } = new URL(request.url);\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4170`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const rawQuery = searchParams.get(\\\"q\\\");\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4180`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\`${runtimeUrl}${pathname}\`, {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4190`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const code = url.searchParams.get(\\\"code\\\") ?? \\\"\\\";\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4200`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const state = url.searchParams.get(\\\"state\\\") ?? \\\"\\\";\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4210`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const error = url.searchParams.get(\\\"error\\\") ?? \\\"\\\";\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4220`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\\\"/api/files/upload\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4230`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const searchParams = useSearchParams();\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4240`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"searchParams.get(SETTINGS_ROUTE_AGENT_ID_QUERY_PARAM)\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4250`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"[pathname, searchParams]\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4260`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\\\"/api/office\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4270`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\\\"/api/office/publish\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4280`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const searchParams = new URLSearchParams({ source: \\\"remote\\\" });\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4290`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"return \`/api/office/layout?${searchParams.toString()}\`;\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4300`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(requestUrl, { cache: \\\"no-store\\\" });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4310`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const searchParams = new URLSearchParams({\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4320`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"return \`/api/office/presence?${searchParams.toString()}\`;\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4330`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(requestUrl, { cache: \\\"no-store\\\" });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4340`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4350`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\\\"/api/office/github\\\", { cache: \\\"no-store\\\" });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4360`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4370`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\\\"/api/office/github\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4380`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\\\"/api/office/github\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4390`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const searchParams = new URL(window.location.href).searchParams;\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4400`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"return searchParams.has(\\\"code\\\");\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4410`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"void fetch(\\\"/api/office/call\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4420`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"void fetch(\\\"/api/office/call\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4430`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"void fetch(\\\"/api/office/text\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4440`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"void fetch(\\\"/api/office/text\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4450`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\\\"/api/office/remote-message\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4460`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\\\"/api/office/remote-handoff\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4470`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\\\"/api/office/voice/transcribe\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4480`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\`/api/office/browser-preview?${params.toString()}\`, {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4490`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"void fetch(\\\"/api/office/layout\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4500`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\\\"/api/office/voice/reply\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4510`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const res = await fetch(\\\"https://accounts.spotify.com/api/token\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4520`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const res = await fetch(\`${BASE}/me/player\`, { headers: headers(token) });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4530`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const res = await fetch(\`${BASE}/search?${params}\`, { headers: headers(token) });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4540`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"await fetch(\`${BASE}/me/player/play${params}\`, {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4550`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"await fetch(\`${BASE}/me/player/pause\`, { method: \\\"PUT\\\", headers: headers(token) });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4560`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"await fetch(\`${BASE}/me/player/play\`, { method: \\\"PUT\\\", headers: headers(token) });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4570`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"await fetch(\`${BASE}/me/player/next\`, { method: \\\"POST\\\", headers: headers(token) });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4580`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"await fetch(\`${BASE}/me/player/previous\`, { method: \\\"POST\\\", headers: headers(token) });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4590`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"await fetch(\`${BASE}/me/player/volume?${params}\`, { method: \\\"PUT\\\", headers: headers(token) });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4600`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\\\"/api/office/voice/reply\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4610`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(path.dirname(dest), { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4620`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.renameSync(src, dest);\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4630`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(path.join(trashDir, \\\"agents\\\"), { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4640`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(path.join(trashDir, \\\"workspaces\\\"), { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4650`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(path.dirname(dest), { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4660`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.renameSync(src, dest);\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4670`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const trimmed = params.name.trim();\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4680`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const trimmed = params.name.trim();\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4690`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"name: params.name,\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4700`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"name: params.name,\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4710`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const entries = Object.entries(params.files).filter(\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4720`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const payload: Record<string, unknown> = { file: params.file };\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4730`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const socket = new WebSocket(gatewayUrl);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4740`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"this.ws = new WebSocket(this.opts.url);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4750`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const res = await fetch(input, init);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4760`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"\`path=${params.path}\`,\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4770`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"parsed.searchParams.delete(\\\"source\\\");\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4780`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(dirPath, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4790`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(resolveStorePath(), JSON.stringify(store, null, 2), \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4800`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(presenceUrl, {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4810`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"url.searchParams.set(\\\"maxResults\\\", \\\"50\\\");\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4820`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"url.searchParams.set(\\\"fields\\\", \\\"summary,status,assignee\\\");\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4830`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"url.searchParams.set(\\\"jql\\\", jql);\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4840`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(searchUrl, {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4850`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(dirPath, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4860`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(storePath, JSON.stringify(store, null, 2), \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4870`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(dirPath, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4880`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(storePath, JSON.stringify(store, null, 2), \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4890`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"existing.name = params.name;\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4900`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"name: params.name,\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4910`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\\\"/api/runtime/custom\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4920`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const fileEntries = params.files\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4930`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.rmSync(baseDir, { recursive: true, force: false });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4940`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"name: resolveRequiredValue(params.name, \\\"Skill name is required to install dependencies.\\\"),\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4950`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(dir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4960`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4970`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"return fetch(input, { ...init, signal: controller.signal }).finally(() =>\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4980`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(dirPath, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4990`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(tmpPath, JSON.stringify(store, null, 2), \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5000`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.renameSync(tmpPath, storePath);\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5010`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.unlinkSync(tmpPath);\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5020`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5030`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(workspace, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5040`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(agentDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5050`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(path.join(workspace, \\\"hello.txt\\\"), \\\"hi\\\", \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5060`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(path.join(agentDir, \\\"state.json\\\"), \\\"{}\\\", \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5070`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(fakeTrashDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5080`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(settingsDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5090`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5100`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"name: params.name,\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5110`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.rmSync(stateDir, { recursive: true, force: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5120`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(uploads, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5130`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(outside, \\\"secret\\\", \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5140`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5150`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5160`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5170`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(settingsDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5180`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5190`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.rmSync(tempDir, { recursive: true, force: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5200`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(imagesDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5210`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(outsideDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5220`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(outsideFile, \\\"not-allowed\\\", \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5230`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.rmSync(symlinkPath, { force: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5240`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5250`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5260`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5270`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5280`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5290`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5300`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5310`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5320`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5330`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5340`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5350`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5360`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"received.push({ __connect: true, path: url.pathname, token: url.searchParams.get(\\\"token\\\") });\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5370`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"expect(url.searchParams.get(\\\"channel\\\")).toBe(\\\"hermes3d\\\");\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5380`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"expect(url.searchParams.get(\\\"token\\\")).toBe(\\\"secret\\\");\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5390`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"expect(url.searchParams.has(\\\"token\\\")).toBe(false);\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5400`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(path.join(tempHome, \\\"Documents\\\"), { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5410`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(path.join(tempHome, \\\"Downloads\\\"), { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5420`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(path.join(tempHome, \\\"Doc.txt\\\"), \\\"doc\\\", \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5430`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(path.join(tempHome, \\\"Notes.txt\\\"), \\\"notes\\\", \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5440`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(path.join(tempHome, \\\".secret\\\"), \\\"hidden\\\", \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5450`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.rmSync(home, { recursive: true, force: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5460`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.rmSync(tempDir, { recursive: true, force: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5470`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(storePath, \\\"{invalid json!!!\\\", \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5480`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(skillDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5490`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(path.join(skillDir, \\\"SKILL.md\\\"), \\\"# skill\\\", \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5500`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(workspaceSkillsRoot, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5510`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(nonSkillDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5520`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(settingsDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5530`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5540`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(skillDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5550`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(path.join(skillDir, \\\"SKILL.md\\\"), \\\"# skill\\\", \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5560`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(storeDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5570`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5580`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.rmSync(tempDir, { recursive: true, force: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5590`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.rmSync(tempDir, { recursive: true, force: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5600`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5610`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.rmSync(tempDir, { recursive: true, force: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5620`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5630`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(path.join(tempDir, \\\"hermes3d\\\"), { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5640`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5650`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5660`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.rmSync(tempDir, { recursive: true, force: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5670`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(root, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5680`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(root, \"MACOS.md\"), report);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5690`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(root, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5700`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(root, \"REPORT.md\"), report);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5710`
- Category: `network-egress`
- Evidence: `"snippet": "const socket = new WebSocket(url, { handshakeTimeout: timeoutMs });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5720`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(url, { headers, signal: controller.signal });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5740`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.dirname(outputPath), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5750`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(outputPath, \`${JSON.stringify(records, null, 2)}\\n\`);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5760`
- Category: `network-egress`
- Evidence: `"snippet": "const res = await fetch(url, { redirect: \"manual\" });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5770`
- Category: `path-resolution`
- Evidence: `"snippet": "pattern: /(?:searchParams|get\\([\"']path[\"']\\)|params\\.(?:path|file|name)|formData\\.get\\([\"'](?:file|path|name)[\"']\\))/g,",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5780`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(outputDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5790`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(reportPath, report);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5800`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(jsonPath, \`${JSON.stringify(output, null, 2)}\\n\`);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5810`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(settingsDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5820`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5840`
- Category: `network-egress`
- Evidence: `"snippet": "upstreamWs = new WebSocket(upstreamUrl, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5850`
- Category: `path-resolution`
- Evidence: `"snippet": "parsed.searchParams.set(\"token\", token.trim());",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5860`
- Category: `network-egress`
- Evidence: `"snippet": "const ws = new WebSocket(this.url, options);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5870`
- Category: `path-resolution`
- Evidence: `"snippet": "parsed.searchParams.set(\"channel\", channel || DEFAULT_CHANNEL);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5880`
- Category: `path-resolution`
- Evidence: `"snippet": "parsed.searchParams.set(\"token\", token.trim());",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5890`
- Category: `network-egress`
- Evidence: `"snippet": "const ws = new WebSocket(eventsUrl, wsOptions);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5900`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.dirname(HISTORY_FILE), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5910`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(HISTORY_FILE, JSON.stringify(data, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5920`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(CERT_DIR, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5930`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(CERT_PATH, pems.cert);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5940`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(KEY_PATH, pems.private);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5970`
- Category: `filesystem-write`
- Evidence: `"snippet": "await handle.writeFile(bytes);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5990`
- Category: `path-resolution`
- Evidence: `"snippet": "const { searchParams } = new URL(request.url);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6000`
- Category: `path-resolution`
- Evidence: `"snippet": "const rawPath = (searchParams.get(\"path\") ?? \"\").trim();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6010`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\`${baseUrl}${pathname}\`, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6020`
- Category: `path-resolution`
- Evidence: `"snippet": "const { searchParams } = new URL(request.url);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6030`
- Category: `path-resolution`
- Evidence: `"snippet": "const rawUrl = (searchParams.get(\"url\") ?? \"\").trim();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6040`
- Category: `path-resolution`
- Evidence: `"snippet": "const waitMsRaw = Number(searchParams.get(\"waitMs\") ?? \"\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6050`
- Category: `path-resolution`
- Evidence: `"snippet": "const { searchParams } = new URL(request.url);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6060`
- Category: `path-resolution`
- Evidence: `"snippet": "const repo = (searchParams.get(\"repo\") ?? \"\").trim();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6070`
- Category: `path-resolution`
- Evidence: `"snippet": "const number = parsePullRequestNumber(searchParams.get(\"number\"));",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6080`
- Category: `network-egress`
- Evidence: `"snippet": "response = await fetch(params.layoutUrl, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6090`
- Category: `path-resolution`
- Evidence: `"snippet": "const source = url.searchParams.get(\"source\")?.trim() || \"local\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6100`
- Category: `path-resolution`
- Evidence: `"snippet": "const gatewayUrl = url.searchParams.get(\"gatewayUrl\")?.trim() || \"\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6110`
- Category: `path-resolution`
- Evidence: `"snippet": "const source = url.searchParams.get(\"source\")?.trim() || \"local\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6120`
- Category: `path-resolution`
- Evidence: `"snippet": "const workspaceId = url.searchParams.get(\"workspaceId\")?.trim() || \"default\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6130`
- Category: `path-resolution`
- Evidence: `"snippet": "const workspaceId = asString(url.searchParams.get(\"workspaceId\")) || \"default\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6140`
- Category: `path-resolution`
- Evidence: `"snippet": "const officeId = asString(url.searchParams.get(\"officeId\"));",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6150`
- Category: `path-resolution`
- Evidence: `"snippet": "return (url.searchParams.get(\"gatewayUrl\") ?? \"\").trim();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6160`
- Category: `path-resolution`
- Evidence: `"snippet": "const { searchParams } = new URL(request.url);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6170`
- Category: `path-resolution`
- Evidence: `"snippet": "const rawQuery = searchParams.get(\"q\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6180`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\`${runtimeUrl}${pathname}\`, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6190`
- Category: `path-resolution`
- Evidence: `"snippet": "const code = url.searchParams.get(\"code\") ?? \"\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6200`
- Category: `path-resolution`
- Evidence: `"snippet": "const state = url.searchParams.get(\"state\") ?? \"\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6210`
- Category: `path-resolution`
- Evidence: `"snippet": "const error = url.searchParams.get(\"error\") ?? \"\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6220`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/files/upload\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6230`
- Category: `path-resolution`
- Evidence: `"snippet": "const searchParams = useSearchParams();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6240`
- Category: `path-resolution`
- Evidence: `"snippet": "searchParams.get(SETTINGS_ROUTE_AGENT_ID_QUERY_PARAM)",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6250`
- Category: `path-resolution`
- Evidence: `"snippet": "[pathname, searchParams]",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6260`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6270`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/publish\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6280`
- Category: `path-resolution`
- Evidence: `"snippet": "const searchParams = new URLSearchParams({ source: \"remote\" });",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6290`
- Category: `path-resolution`
- Evidence: `"snippet": "return \`/api/office/layout?${searchParams.toString()}\`;",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6300`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(requestUrl, { cache: \"no-store\" });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6310`
- Category: `path-resolution`
- Evidence: `"snippet": "const searchParams = new URLSearchParams({",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6320`
- Category: `path-resolution`
- Evidence: `"snippet": "return \`/api/office/presence?${searchParams.toString()}\`;",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6330`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(requestUrl, { cache: \"no-store\" });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6340`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6350`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/github\", { cache: \"no-store\" });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6360`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6370`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/github\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6380`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/github\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6390`
- Category: `path-resolution`
- Evidence: `"snippet": "const searchParams = new URL(window.location.href).searchParams;",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6400`
- Category: `path-resolution`
- Evidence: `"snippet": "return searchParams.has(\"code\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6410`
- Category: `network-egress`
- Evidence: `"snippet": "void fetch(\"/api/office/call\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6420`
- Category: `network-egress`
- Evidence: `"snippet": "void fetch(\"/api/office/call\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6430`
- Category: `network-egress`
- Evidence: `"snippet": "void fetch(\"/api/office/text\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6440`
- Category: `network-egress`
- Evidence: `"snippet": "void fetch(\"/api/office/text\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6450`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/remote-message\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6460`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/remote-handoff\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6470`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/voice/transcribe\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6480`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\`/api/office/browser-preview?${params.toString()}\`, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6490`
- Category: `network-egress`
- Evidence: `"snippet": "void fetch(\"/api/office/layout\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6500`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/voice/reply\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6510`
- Category: `network-egress`
- Evidence: `"snippet": "const res = await fetch(\"https://accounts.spotify.com/api/token\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6520`
- Category: `network-egress`
- Evidence: `"snippet": "const res = await fetch(\`${BASE}/me/player\`, { headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6530`
- Category: `network-egress`
- Evidence: `"snippet": "const res = await fetch(\`${BASE}/search?${params}\`, { headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6540`
- Category: `network-egress`
- Evidence: `"snippet": "await fetch(\`${BASE}/me/player/play${params}\`, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6550`
- Category: `network-egress`
- Evidence: `"snippet": "await fetch(\`${BASE}/me/player/pause\`, { method: \"PUT\", headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6560`
- Category: `network-egress`
- Evidence: `"snippet": "await fetch(\`${BASE}/me/player/play\`, { method: \"PUT\", headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6570`
- Category: `network-egress`
- Evidence: `"snippet": "await fetch(\`${BASE}/me/player/next\`, { method: \"POST\", headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6580`
- Category: `network-egress`
- Evidence: `"snippet": "await fetch(\`${BASE}/me/player/previous\`, { method: \"POST\", headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6590`
- Category: `network-egress`
- Evidence: `"snippet": "await fetch(\`${BASE}/me/player/volume?${params}\`, { method: \"PUT\", headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6600`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/voice/reply\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6610`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.dirname(dest), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6620`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.renameSync(src, dest);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6630`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.join(trashDir, \"agents\"), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6640`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.join(trashDir, \"workspaces\"), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6650`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.dirname(dest), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6660`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.renameSync(src, dest);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6670`
- Category: `path-resolution`
- Evidence: `"snippet": "const trimmed = params.name.trim();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6680`
- Category: `path-resolution`
- Evidence: `"snippet": "const trimmed = params.name.trim();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6690`
- Category: `path-resolution`
- Evidence: `"snippet": "name: params.name,",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6700`
- Category: `path-resolution`
- Evidence: `"snippet": "name: params.name,",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6710`
- Category: `path-resolution`
- Evidence: `"snippet": "const entries = Object.entries(params.files).filter(",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6720`
- Category: `path-resolution`
- Evidence: `"snippet": "const payload: Record<string, unknown> = { file: params.file };",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6740`
- Category: `network-egress`
- Evidence: `"snippet": "const socket = new WebSocket(gatewayUrl);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6750`
- Category: `network-egress`
- Evidence: `"snippet": "this.ws = new WebSocket(this.opts.url);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6760`
- Category: `network-egress`
- Evidence: `"snippet": "const res = await fetch(input, init);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6780`
- Category: `path-resolution`
- Evidence: `"snippet": "\`path=${params.path}\`,",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6790`
- Category: `path-resolution`
- Evidence: `"snippet": "parsed.searchParams.delete(\"source\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6800`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(dirPath, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6810`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(resolveStorePath(), JSON.stringify(store, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6820`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(presenceUrl, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6830`
- Category: `path-resolution`
- Evidence: `"snippet": "url.searchParams.set(\"maxResults\", \"50\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6840`
- Category: `path-resolution`
- Evidence: `"snippet": "url.searchParams.set(\"fields\", \"summary,status,assignee\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6850`
- Category: `path-resolution`
- Evidence: `"snippet": "url.searchParams.set(\"jql\", jql);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6860`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(searchUrl, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6870`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(dirPath, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6880`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(storePath, JSON.stringify(store, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6890`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(dirPath, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6900`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(storePath, JSON.stringify(store, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6910`
- Category: `path-resolution`
- Evidence: `"snippet": "existing.name = params.name;",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6920`
- Category: `path-resolution`
- Evidence: `"snippet": "name: params.name,",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6930`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/runtime/custom\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6950`
- Category: `path-resolution`
- Evidence: `"snippet": "const fileEntries = params.files",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6960`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(baseDir, { recursive: true, force: false });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6970`
- Category: `path-resolution`
- Evidence: `"snippet": "name: resolveRequiredValue(params.name, \"Skill name is required to install dependencies.\"),",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6980`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(dir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6990`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7010`
- Category: `network-egress`
- Evidence: `"snippet": "return fetch(input, { ...init, signal: controller.signal }).finally(() =>",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7020`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(dirPath, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7030`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(tmpPath, JSON.stringify(store, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7040`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.renameSync(tmpPath, storePath);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7050`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.unlinkSync(tmpPath);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7060`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7070`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(workspace, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7080`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(agentDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7090`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(workspace, \"hello.txt\"), \"hi\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7100`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(agentDir, \"state.json\"), \"{}\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7110`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(fakeTrashDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7120`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(settingsDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7130`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:7140`
- Category: `path-resolution`
- Evidence: `"snippet": "name: params.name,",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7150`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(stateDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7160`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(uploads, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7170`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(outside, \"secret\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7180`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7190`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7200`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7210`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(settingsDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7220`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7230`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7240`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(imagesDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7250`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(outsideDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7260`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(outsideFile, \"not-allowed\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7270`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(symlinkPath, { force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7280`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7290`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7300`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7310`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7320`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7330`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7340`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7350`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7360`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7370`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7380`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7390`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:7400`
- Category: `path-resolution`
- Evidence: `"snippet": "received.push({ __connect: true, path: url.pathname, token: url.searchParams.get(\"token\") });",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:7410`
- Category: `path-resolution`
- Evidence: `"snippet": "expect(url.searchParams.get(\"channel\")).toBe(\"hermes3d\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:7420`
- Category: `path-resolution`
- Evidence: `"snippet": "expect(url.searchParams.get(\"token\")).toBe(\"secret\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:7430`
- Category: `path-resolution`
- Evidence: `"snippet": "expect(url.searchParams.has(\"token\")).toBe(false);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7440`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.join(tempHome, \"Documents\"), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7450`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.join(tempHome, \"Downloads\"), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7460`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(tempHome, \"Doc.txt\"), \"doc\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7470`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(tempHome, \"Notes.txt\"), \"notes\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7480`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(tempHome, \".secret\"), \"hidden\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7490`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(home, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7590`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7600`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(storePath, \"{invalid json!!!\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7610`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(skillDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7620`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(skillDir, \"SKILL.md\"), \"# skill\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7630`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(workspaceSkillsRoot, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7640`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(nonSkillDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7650`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(settingsDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7660`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7670`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(skillDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7680`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(skillDir, \"SKILL.md\"), \"# skill\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7690`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(storeDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7700`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7710`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7720`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7730`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7740`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7750`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7760`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.join(tempDir, \"hermes3d\"), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7770`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7780`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7790`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `scripts/generate-ci-report.mjs:94`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(root, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `scripts/generate-ci-report.mjs:95`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(path.join(root, "MACOS.md"), report);`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

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

### MEDIUM — Filesystem mutation boundary

- Location: `src/app/api/files/upload/route.ts:149`
- Category: `filesystem-write`
- Evidence: `await handle.writeFile(bytes);`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/app/api/files/upload/route.ts:171`
- Category: `path-resolution`
- Evidence: `const file = formData.get("file");`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

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

- Location: `tests/unit/filesRoutes.test.ts:41`
- Category: `filesystem-write`
- Evidence: `fs.rmSync(stateDir, { recursive: true, force: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/filesRoutes.test.ts:137`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(uploads, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/filesRoutes.test.ts:138`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(outside, "secret", "utf8");`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

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

- Location: `tests/unit/gatewayMediaRoute.test.ts:157`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(imagesDir, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/gatewayMediaRoute.test.ts:158`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(outsideDir, { recursive: true });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/gatewayMediaRoute.test.ts:161`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(outsideFile, "not-allowed", "utf8");`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `tests/unit/gatewayMediaRoute.test.ts:178`
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
| `.github/workflows/ci.yml:102` | `actions/upload-artifact@043fb46d1a93c77aae656e7c1c64a875d1fc6a0a` | Yes |
| `.github/workflows/ci.yml:155` | `actions/checkout@fbc6f3992d24b796d5a048ff273f7fcc4a7b6c09` | Yes |
| `.github/workflows/ci.yml:160` | `actions/setup-node@a0853c24544627f65ddf259abe73b1d18a591444` | Yes |
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
