# Static Security Audit

Generated from tracked source only. The scanner does not install dependencies, execute repository scripts, start services, or access developer credentials. Pattern matches identify review surfaces; they are not automatically proof of a vulnerability.

## Summary

- Tracked files inspected: **643**
- API route handlers inventoried: **25**
- Environment variable names referenced: **33**
- Blocking findings: **0**
- Critical: **0**
- High: **157**
- Medium: **642**
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

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:55`
- Category: `host-mutation`
- Evidence: `- Evidence: \`COPY --chown=node:node --from=builder /app/.next ./.next\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:62`
- Category: `host-mutation`
- Evidence: `- Evidence: \`COPY --chown=node:node --from=builder /app/public ./public\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:69`
- Category: `host-mutation`
- Evidence: `- Evidence: \`COPY --chown=node:node --from=builder /app/server ./server\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:76`
- Category: `host-mutation`
- Evidence: `- Evidence: \`COPY --chown=node:node --from=deps /app/node_modules ./node_modules\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:83`
- Category: `host-mutation`
- Evidence: `- Evidence: \`COPY --chown=node:node --from=builder /app/package.json ./package.json\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:90`
- Category: `host-mutation`
- Evidence: `- Evidence: \`COPY --chown=node:node --from=builder /app/next.config.ts ./next.config.ts\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:97`
- Category: `host-mutation`
- Evidence: `- Evidence: \`launchctl load ~/Library/LaunchAgents/dev.hermes3d.serve.plist\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:104`
- Category: `host-mutation`
- Evidence: `- Evidence: \`systemctl --user enable --now hermes-serve\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:111`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { spawnSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:118`
- Category: `command-execution`
- Evidence: `- Evidence: \`return spawnSync(command, args, { encoding: "utf8" });\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:125`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { execFileSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:132`
- Category: `command-execution`
- Evidence: `- Evidence: \`const branch = execFileSync("git", ["rev-parse", "--abbrev-ref", "HEAD"], {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:139`
- Category: `command-execution`
- Evidence: `- Evidence: \`execFileSync("git", ["status", "--porcelain"], {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:146`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { spawn } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:153`
- Category: `command-execution`
- Evidence: `- Evidence: \`const child = spawn(process.execPath, ["server/index.js", "--dev"], {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:160`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { execFileSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:167`
- Category: `command-execution`
- Evidence: `- Evidence: \`execFileSync("git", args, {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:174`
- Category: `command-execution`
- Evidence: `- Evidence: \`pattern: /(?:node:child_process|child_process|\bexecFileSync\s*\(|\bexecFile\s*\(|\bexecSync\s*\(|\bspawnSync\s*\(|\bspawn\s*\(|\bfork\s*\()/g,\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:181`
- Category: `host-mutation`
- Evidence: `- Evidence: \`pattern: /\b(?:sudo|launchctl|systemctl|crontab|defaults\s+write|security\s+add-trusted-cert|chmod\s+[0-7]{3,4}|chown)\b/g,\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:188`
- Category: `credential-access`
- Evidence: `- Evidence: \`pattern: /(?:~\/|\/Users\/[^/]+\/|process\.env\.HOME[^\n]{0,120})?(?:\.ssh|\.aws|\.gnupg|Keychains|id_rsa|id_ed25519)/g,\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:195`
- Category: `host-mutation`
- Evidence: `- Evidence: \`console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\`);\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:195`
- Category: `credential-access`
- Evidence: `- Evidence: \`console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\`);\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:202`
- Category: `host-mutation`
- Evidence: `- Evidence: \`console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\`);\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:202`
- Category: `credential-access`
- Evidence: `- Evidence: \`console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\`);\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:209`
- Category: `command-execution`
- Evidence: `- Evidence: \`import * as childProcess from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:216`
- Category: `command-execution`
- Evidence: `- Evidence: \`const result = childProcess.spawnSync(command, args, {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:223`
- Category: `credential-access`
- Evidence: `- Evidence: \`sshTarget: params.sshTarget,\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:230`
- Category: `credential-access`
- Evidence: `- Evidence: \`sshTarget: params.sshTarget,\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:237`
- Category: `command-execution`
- Evidence: `- Evidence: \`import * as childProcess from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:244`
- Category: `credential-access`
- Evidence: `- Evidence: \`const sshTarget = assertSafeSshTarget(params.sshTarget);\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:251`
- Category: `credential-access`
- Evidence: `- Evidence: \`params.sshPort !== undefined &&\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:258`
- Category: `credential-access`
- Evidence: `- Evidence: \`params.sshPort !== null &&\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:265`
- Category: `credential-access`
- Evidence: `- Evidence: \`(!Number.isInteger(params.sshPort) || params.sshPort < 1 || params.sshPort > 65_535)\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:272`
- Category: `credential-access`
- Evidence: `- Evidence: \`if (typeof params.sshPort === "number") {\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:279`
- Category: `credential-access`
- Evidence: `- Evidence: \`sshArgs.push("-p", String(params.sshPort));\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:286`
- Category: `command-execution`
- Evidence: `- Evidence: \`const result = childProcess.spawnSync("ssh", sshArgs, options);\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:293`
- Category: `credential-access`
- Evidence: `- Evidence: \`sshTarget: params.sshTarget,\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:300`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { spawnSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:307`
- Category: `command-execution`
- Evidence: `- Evidence: \`vi.mock("node:child_process", () => {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:314`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { spawnSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:321`
- Category: `command-execution`
- Evidence: `- Evidence: \`vi.mock("node:child_process", async () => {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:328`
- Category: `command-execution`
- Evidence: `- Evidence: \`const actual = await vi.importActual<typeof import("node:child_process")>(\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:335`
- Category: `command-execution`
- Evidence: `- Evidence: \`"node:child_process"\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:342`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { spawnSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:349`
- Category: `command-execution`
- Evidence: `- Evidence: \`vi.mock("node:child_process", async () => {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:356`
- Category: `command-execution`
- Evidence: `- Evidence: \`const actual = await vi.importActual<typeof import("node:child_process")>(\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:363`
- Category: `command-execution`
- Evidence: `- Evidence: \`"node:child_process"\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:370`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { spawnSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:377`
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

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:60`
- Category: `host-mutation`
- Evidence: `"snippet": "COPY --chown=node:node --from=builder /app/.next ./.next",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:70`
- Category: `host-mutation`
- Evidence: `"snippet": "COPY --chown=node:node --from=builder /app/public ./public",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:80`
- Category: `host-mutation`
- Evidence: `"snippet": "COPY --chown=node:node --from=builder /app/server ./server",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:90`
- Category: `host-mutation`
- Evidence: `"snippet": "COPY --chown=node:node --from=deps /app/node_modules ./node_modules",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:100`
- Category: `host-mutation`
- Evidence: `"snippet": "COPY --chown=node:node --from=builder /app/package.json ./package.json",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:110`
- Category: `host-mutation`
- Evidence: `"snippet": "COPY --chown=node:node --from=builder /app/next.config.ts ./next.config.ts",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:120`
- Category: `host-mutation`
- Evidence: `"snippet": "launchctl load ~/Library/LaunchAgents/dev.hermes3d.serve.plist",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:130`
- Category: `host-mutation`
- Evidence: `"snippet": "systemctl --user enable --now hermes-serve",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:140`
- Category: `command-execution`
- Evidence: `"snippet": "import { spawnSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:150`
- Category: `command-execution`
- Evidence: `"snippet": "return spawnSync(command, args, { encoding: \"utf8\" });",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:160`
- Category: `command-execution`
- Evidence: `"snippet": "import { execFileSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:170`
- Category: `command-execution`
- Evidence: `"snippet": "const branch = execFileSync(\"git\", [\"rev-parse\", \"--abbrev-ref\", \"HEAD\"], {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:180`
- Category: `command-execution`
- Evidence: `"snippet": "execFileSync(\"git\", [\"status\", \"--porcelain\"], {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:190`
- Category: `command-execution`
- Evidence: `"snippet": "import { spawn } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:200`
- Category: `command-execution`
- Evidence: `"snippet": "const child = spawn(process.execPath, [\"server/index.js\", \"--dev\"], {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:210`
- Category: `command-execution`
- Evidence: `"snippet": "import { execFileSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:220`
- Category: `command-execution`
- Evidence: `"snippet": "execFileSync(\"git\", args, {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:230`
- Category: `command-execution`
- Evidence: `"snippet": "pattern: /(?:node:child_process|child_process|\\bexecFileSync\\s*\\(|\\bexecFile\\s*\\(|\\bexecSync\\s*\\(|\\bspawnSync\\s*\\(|\\bspawn\\s*\\(|\\bfork\\s*\\()/g,",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:240`
- Category: `host-mutation`
- Evidence: `"snippet": "pattern: /\\b(?:sudo|launchctl|systemctl|crontab|defaults\\s+write|security\\s+add-trusted-cert|chmod\\s+[0-7]{3,4}|chown)\\b/g,",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:250`
- Category: `credential-access`
- Evidence: `"snippet": "pattern: /(?:~\\/|\\/Users\\/[^/]+\\/|process\\.env\\.HOME[^\\n]{0,120})?(?:\\.ssh|\\.aws|\\.gnupg|Keychains|id_rsa|id_ed25519)/g,",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:260`
- Category: `host-mutation`
- Evidence: `"snippet": "console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\`);",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:260`
- Category: `credential-access`
- Evidence: `"snippet": "console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\`);",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:270`
- Category: `host-mutation`
- Evidence: `"snippet": "console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\`);",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:270`
- Category: `credential-access`
- Evidence: `"snippet": "console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\`);",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:280`
- Category: `command-execution`
- Evidence: `"snippet": "import * as childProcess from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:290`
- Category: `command-execution`
- Evidence: `"snippet": "const result = childProcess.spawnSync(command, args, {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:300`
- Category: `credential-access`
- Evidence: `"snippet": "sshTarget: params.sshTarget,",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:310`
- Category: `credential-access`
- Evidence: `"snippet": "sshTarget: params.sshTarget,",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:320`
- Category: `command-execution`
- Evidence: `"snippet": "import * as childProcess from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:330`
- Category: `credential-access`
- Evidence: `"snippet": "const sshTarget = assertSafeSshTarget(params.sshTarget);",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:340`
- Category: `credential-access`
- Evidence: `"snippet": "params.sshPort !== undefined &&",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:350`
- Category: `credential-access`
- Evidence: `"snippet": "params.sshPort !== null &&",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:360`
- Category: `credential-access`
- Evidence: `"snippet": "(!Number.isInteger(params.sshPort) || params.sshPort < 1 || params.sshPort > 65_535)",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:370`
- Category: `credential-access`
- Evidence: `"snippet": "if (typeof params.sshPort === \"number\") {",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:380`
- Category: `credential-access`
- Evidence: `"snippet": "sshArgs.push(\"-p\", String(params.sshPort));",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:390`
- Category: `command-execution`
- Evidence: `"snippet": "const result = childProcess.spawnSync(\"ssh\", sshArgs, options);",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:400`
- Category: `credential-access`
- Evidence: `"snippet": "sshTarget: params.sshTarget,",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:410`
- Category: `command-execution`
- Evidence: `"snippet": "import { spawnSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:420`
- Category: `command-execution`
- Evidence: `"snippet": "vi.mock(\"node:child_process\", () => {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:430`
- Category: `command-execution`
- Evidence: `"snippet": "import { spawnSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:440`
- Category: `command-execution`
- Evidence: `"snippet": "vi.mock(\"node:child_process\", async () => {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:450`
- Category: `command-execution`
- Evidence: `"snippet": "const actual = await vi.importActual<typeof import(\"node:child_process\")>(",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:460`
- Category: `command-execution`
- Evidence: `"snippet": "\"node:child_process\"",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:470`
- Category: `command-execution`
- Evidence: `"snippet": "import { spawnSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:480`
- Category: `command-execution`
- Evidence: `"snippet": "vi.mock(\"node:child_process\", async () => {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:490`
- Category: `command-execution`
- Evidence: `"snippet": "const actual = await vi.importActual<typeof import(\"node:child_process\")>(",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:500`
- Category: `command-execution`
- Evidence: `"snippet": "\"node:child_process\"",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:510`
- Category: `command-execution`
- Evidence: `"snippet": "import { spawnSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:520`
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

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:384`
- Category: `network-egress`
- Evidence: `- Evidence: \`const request = http.request(\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:391`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(root, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:398`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(root, "MACOS.md"), report);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:405`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(root, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:412`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(root, "REPORT.md"), report);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:419`
- Category: `network-egress`
- Evidence: `- Evidence: \`const socket = new WebSocket(url, { handshakeTimeout: timeoutMs });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:426`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(url, { headers, signal: controller.signal });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:433`
- Category: `public-bind`
- Evidence: `- Evidence: \`normalizedHost !== "0.0.0.0";\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:440`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.dirname(outputPath), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:447`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(outputPath, \\`${JSON.stringify(records, null, 2)}\n\\`);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:454`
- Category: `network-egress`
- Evidence: `- Evidence: \`const res = await fetch(url, { redirect: "manual" });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:461`
- Category: `path-resolution`
- Evidence: `- Evidence: \`pattern: /(?:searchParams|get\(["']path["']\)|params\.(?:path|file|name)|formData\.get\(["'](?:file|path|name)["']\))/g,\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:468`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(outputDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:475`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(reportPath, report);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:482`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(jsonPath, \\`${JSON.stringify(output, null, 2)}\n\\`);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:489`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(settingsDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:496`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:503`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(directory, { recursive: true, mode: 0o700 });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:510`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.chmodSync(directory, 0o700);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:517`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(tempPath, \\`${token}\n\\`, { encoding: "utf8", mode: 0o600, flag: "wx" });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:524`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.renameSync(tempPath, tokenFile);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:531`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.chmodSync(tokenFile, 0o600);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:538`
- Category: `public-bind`
- Evidence: `- Evidence: \`url.hostname === "127.0.0.1" || url.hostname === "::1" || url.hostname === "0.0.0.0"\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:545`
- Category: `network-egress`
- Evidence: `- Evidence: \`upstreamWs = new WebSocket(upstreamUrl, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:552`
- Category: `path-resolution`
- Evidence: `- Evidence: \`parsed.searchParams.set("token", token.trim());\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:559`
- Category: `network-egress`
- Evidence: `- Evidence: \`const ws = new WebSocket(this.url, options);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:566`
- Category: `path-resolution`
- Evidence: `- Evidence: \`parsed.searchParams.set("channel", channel || DEFAULT_CHANNEL);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:573`
- Category: `path-resolution`
- Evidence: `- Evidence: \`parsed.searchParams.set("token", token.trim());\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:580`
- Category: `network-egress`
- Evidence: `- Evidence: \`const ws = new WebSocket(eventsUrl, wsOptions);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:587`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.dirname(HISTORY_FILE), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:594`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(HISTORY_FILE, JSON.stringify(data, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:601`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(CERT_DIR, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:608`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(CERT_PATH, pems.cert);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:615`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(KEY_PATH, pems.private);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:622`
- Category: `public-bind`
- Evidence: `- Evidence: \`: hostname === "0.0.0.0" || hostname === "::"\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:629`
- Category: `public-bind`
- Evidence: `- Evidence: \`if (normalized === "0.0.0.0" || normalized === "::") {\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:636`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`await handle.writeFile(bytes);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:643`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const file = formData.get("file");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:650`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const { searchParams } = new URL(request.url);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:657`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const rawPath = (searchParams.get("path") ?? "").trim();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:664`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(\\`${baseUrl}${pathname}\\`, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:671`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const { searchParams } = new URL(request.url);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:678`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const rawUrl = (searchParams.get("url") ?? "").trim();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:685`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const waitMsRaw = Number(searchParams.get("waitMs") ?? "");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:692`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const { searchParams } = new URL(request.url);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:699`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const repo = (searchParams.get("repo") ?? "").trim();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:706`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const number = parsePullRequestNumber(searchParams.get("number"));\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:713`
- Category: `network-egress`
- Evidence: `- Evidence: \`response = await fetch(params.layoutUrl, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:720`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const source = url.searchParams.get("source")?.trim() || "local";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:727`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const gatewayUrl = url.searchParams.get("gatewayUrl")?.trim() || "";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:734`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const source = url.searchParams.get("source")?.trim() || "local";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:741`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const workspaceId = url.searchParams.get("workspaceId")?.trim() || "default";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:748`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const workspaceId = asString(url.searchParams.get("workspaceId")) || "default";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:755`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const officeId = asString(url.searchParams.get("officeId"));\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:762`
- Category: `path-resolution`
- Evidence: `- Evidence: \`return (url.searchParams.get("gatewayUrl") ?? "").trim();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:769`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const { searchParams } = new URL(request.url);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:776`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const rawQuery = searchParams.get("q");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:783`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(\\`${runtimeUrl}${pathname}\\`, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:790`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const code = url.searchParams.get("code") ?? "";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:797`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const state = url.searchParams.get("state") ?? "";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:804`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const error = url.searchParams.get("error") ?? "";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:811`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/files/upload", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:818`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const searchParams = useSearchParams();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:825`
- Category: `path-resolution`
- Evidence: `- Evidence: \`searchParams.get(SETTINGS_ROUTE_AGENT_ID_QUERY_PARAM)\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:832`
- Category: `path-resolution`
- Evidence: `- Evidence: \`[pathname, searchParams]\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:839`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:846`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/publish", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:853`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const searchParams = new URLSearchParams({ source: "remote" });\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:860`
- Category: `path-resolution`
- Evidence: `- Evidence: \`return \\`/api/office/layout?${searchParams.toString()}\\`;\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:867`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(requestUrl, { cache: "no-store" });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:874`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const searchParams = new URLSearchParams({\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:881`
- Category: `path-resolution`
- Evidence: `- Evidence: \`return \\`/api/office/presence?${searchParams.toString()}\\`;\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:888`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(requestUrl, { cache: "no-store" });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:895`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:902`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/github", { cache: "no-store" });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:909`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:916`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/github", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:923`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/github", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:930`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const searchParams = new URL(window.location.href).searchParams;\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:937`
- Category: `path-resolution`
- Evidence: `- Evidence: \`return searchParams.has("code");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:944`
- Category: `network-egress`
- Evidence: `- Evidence: \`void fetch("/api/office/call", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:951`
- Category: `network-egress`
- Evidence: `- Evidence: \`void fetch("/api/office/call", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:958`
- Category: `network-egress`
- Evidence: `- Evidence: \`void fetch("/api/office/text", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:965`
- Category: `network-egress`
- Evidence: `- Evidence: \`void fetch("/api/office/text", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:972`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/remote-message", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:979`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/remote-handoff", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:986`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/voice/transcribe", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:993`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(\\`/api/office/browser-preview?${params.toString()}\\`, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1000`
- Category: `network-egress`
- Evidence: `- Evidence: \`void fetch("/api/office/layout", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1007`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/voice/reply", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1014`
- Category: `network-egress`
- Evidence: `- Evidence: \`const res = await fetch("https://accounts.spotify.com/api/token", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1021`
- Category: `network-egress`
- Evidence: `- Evidence: \`const res = await fetch(\\`${BASE}/me/player\\`, { headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1028`
- Category: `network-egress`
- Evidence: `- Evidence: \`const res = await fetch(\\`${BASE}/search?${params}\\`, { headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1035`
- Category: `network-egress`
- Evidence: `- Evidence: \`await fetch(\\`${BASE}/me/player/play${params}\\`, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1042`
- Category: `network-egress`
- Evidence: `- Evidence: \`await fetch(\\`${BASE}/me/player/pause\\`, { method: "PUT", headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1049`
- Category: `network-egress`
- Evidence: `- Evidence: \`await fetch(\\`${BASE}/me/player/play\\`, { method: "PUT", headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1056`
- Category: `network-egress`
- Evidence: `- Evidence: \`await fetch(\\`${BASE}/me/player/next\\`, { method: "POST", headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1063`
- Category: `network-egress`
- Evidence: `- Evidence: \`await fetch(\\`${BASE}/me/player/previous\\`, { method: "POST", headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1070`
- Category: `network-egress`
- Evidence: `- Evidence: \`await fetch(\\`${BASE}/me/player/volume?${params}\\`, { method: "PUT", headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1077`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/voice/reply", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1084`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.dirname(dest), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1091`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.renameSync(src, dest);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1098`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.join(trashDir, "agents"), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1105`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.join(trashDir, "workspaces"), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1112`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.dirname(dest), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1119`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.renameSync(src, dest);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1126`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const trimmed = params.name.trim();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1133`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const trimmed = params.name.trim();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1140`
- Category: `path-resolution`
- Evidence: `- Evidence: \`name: params.name,\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1147`
- Category: `path-resolution`
- Evidence: `- Evidence: \`name: params.name,\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1154`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const entries = Object.entries(params.files).filter(\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1161`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const payload: Record<string, unknown> = { file: params.file };\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1168`
- Category: `public-bind`
- Evidence: `- Evidence: \`normalized === "0.0.0.0"\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1175`
- Category: `network-egress`
- Evidence: `- Evidence: \`const socket = new WebSocket(gatewayUrl);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1182`
- Category: `network-egress`
- Evidence: `- Evidence: \`this.ws = new WebSocket(this.opts.url);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1189`
- Category: `network-egress`
- Evidence: `- Evidence: \`const res = await fetch(input, init);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1196`
- Category: `public-bind`
- Evidence: `- Evidence: \`return normalized === "0.0.0.0" ? "127.0.0.1" : hostname;\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1203`
- Category: `path-resolution`
- Evidence: `- Evidence: \`\\`path=${params.path}\\`,\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1210`
- Category: `path-resolution`
- Evidence: `- Evidence: \`parsed.searchParams.delete("source");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1217`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(dirPath, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1224`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(resolveStorePath(), JSON.stringify(store, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1231`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(presenceUrl, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1238`
- Category: `path-resolution`
- Evidence: `- Evidence: \`url.searchParams.set("maxResults", "50");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1245`
- Category: `path-resolution`
- Evidence: `- Evidence: \`url.searchParams.set("fields", "summary,status,assignee");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1252`
- Category: `path-resolution`
- Evidence: `- Evidence: \`url.searchParams.set("jql", jql);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1259`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(searchUrl, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1266`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(dirPath, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1273`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(storePath, JSON.stringify(store, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1280`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(dirPath, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1287`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(storePath, JSON.stringify(store, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1294`
- Category: `path-resolution`
- Evidence: `- Evidence: \`existing.name = params.name;\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1301`
- Category: `path-resolution`
- Evidence: `- Evidence: \`name: params.name,\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1308`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/runtime/custom", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1315`
- Category: `public-bind`
- Evidence: `- Evidence: \`const LOOPBACK_HOSTNAMES = new Set(["localhost", "127.0.0.1", "::1", "0.0.0.0"]);\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1322`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const fileEntries = params.files\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1329`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(baseDir, { recursive: true, force: false });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1336`
- Category: `path-resolution`
- Evidence: `- Evidence: \`name: resolveRequiredValue(params.name, "Skill name is required to install dependencies."),\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1343`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(dir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1350`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1357`
- Category: `public-bind`
- Evidence: `- Evidence: \`const LOOPBACK_HOSTNAMES = new Set(["127.0.0.1", "::1", "0.0.0.0"]);\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1364`
- Category: `network-egress`
- Evidence: `- Evidence: \`return fetch(input, { ...init, signal: controller.signal }).finally(() =>\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1371`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(dirPath, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1378`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(tmpPath, JSON.stringify(store, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1385`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.renameSync(tmpPath, storePath);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1392`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.unlinkSync(tmpPath);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1399`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1406`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(workspace, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1413`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(agentDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1420`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(workspace, "hello.txt"), "hi", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1427`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(agentDir, "state.json"), "{}", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1434`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(fakeTrashDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1441`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(settingsDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1448`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1455`
- Category: `path-resolution`
- Evidence: `- Evidence: \`name: params.name,\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1462`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(stateDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1469`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(uploads, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1476`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(outside, "secret", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1483`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1490`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1497`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1504`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(settingsDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1511`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1518`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1525`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(imagesDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1532`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(outsideDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1539`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(outsideFile, "not-allowed", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1546`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(symlinkPath, { force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1553`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1560`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1567`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1574`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1581`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1588`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1595`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1602`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1609`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1616`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1623`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1630`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1637`
- Category: `path-resolution`
- Evidence: `- Evidence: \`received.push({ __connect: true, path: url.pathname, token: url.searchParams.get("token") });\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1644`
- Category: `path-resolution`
- Evidence: `- Evidence: \`expect(url.searchParams.get("channel")).toBe("hermes3d");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1651`
- Category: `path-resolution`
- Evidence: `- Evidence: \`expect(url.searchParams.get("token")).toBe("secret");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1658`
- Category: `path-resolution`
- Evidence: `- Evidence: \`expect(url.searchParams.has("token")).toBe(false);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1665`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.join(tempHome, "Documents"), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1672`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.join(tempHome, "Downloads"), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1679`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(tempHome, "Doc.txt"), "doc", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1686`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(tempHome, "Notes.txt"), "notes", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1693`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(tempHome, ".secret"), "hidden", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1700`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(home, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1707`
- Category: `public-bind`
- Evidence: `- Evidence: \`resolveHosts({ HOST: "0.0.0.0", HOSTNAME: "example-host" } as unknown as NodeJS.ProcessEnv)\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1714`
- Category: `public-bind`
- Evidence: `- Evidence: \`).toEqual(["0.0.0.0"]);\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1721`
- Category: `public-bind`
- Evidence: `- Evidence: \`resolveHost({ HOST: "0.0.0.0", HOSTNAME: "example-host" } as unknown as NodeJS.ProcessEnv)\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1728`
- Category: `public-bind`
- Evidence: `- Evidence: \`).toBe("0.0.0.0");\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1735`
- Category: `public-bind`
- Evidence: `- Evidence: \`expect(isPublicHost("0.0.0.0")).toBe(true);\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1742`
- Category: `public-bind`
- Evidence: `- Evidence: \`expect(isPublicHost("::")).toBe(true);\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1749`
- Category: `public-bind`
- Evidence: `- Evidence: \`expect(() => assertPublicHostAllowed({ host: "0.0.0.0", studioAccessToken: "" })).toThrow(\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1756`
- Category: `public-bind`
- Evidence: `- Evidence: \`expect(() => assertPublicHostAllowed({ host: "0.0.0.0", studioAccessToken: "   " })).toThrow(\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1763`
- Category: `public-bind`
- Evidence: `- Evidence: \`assertPublicHostAllowed({ host: "0.0.0.0", studioAccessToken: "abc" })\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1770`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1777`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(storePath, "{invalid json!!!", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1784`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(skillDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1791`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(skillDir, "SKILL.md"), "# skill", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1798`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(workspaceSkillsRoot, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1805`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(nonSkillDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1812`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(settingsDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1819`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1826`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(skillDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1833`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(skillDir, "SKILL.md"), "# skill", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1840`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(storeDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1847`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1854`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1861`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1868`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1875`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1882`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1889`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.join(tempDir, "hermes3d"), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1896`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1903`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1910`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:530`
- Category: `network-egress`
- Evidence: `"snippet": "const request = http.request(",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:540`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(root, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:550`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(root, \"MACOS.md\"), report);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:560`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(root, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:570`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(root, \"REPORT.md\"), report);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:580`
- Category: `network-egress`
- Evidence: `"snippet": "const socket = new WebSocket(url, { handshakeTimeout: timeoutMs });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:590`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(url, { headers, signal: controller.signal });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:610`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.dirname(outputPath), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:620`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(outputPath, \`${JSON.stringify(records, null, 2)}\\n\`);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:630`
- Category: `network-egress`
- Evidence: `"snippet": "const res = await fetch(url, { redirect: \"manual\" });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:640`
- Category: `path-resolution`
- Evidence: `"snippet": "pattern: /(?:searchParams|get\\([\"']path[\"']\\)|params\\.(?:path|file|name)|formData\\.get\\([\"'](?:file|path|name)[\"']\\))/g,",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:650`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(outputDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:660`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(reportPath, report);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:670`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(jsonPath, \`${JSON.stringify(output, null, 2)}\\n\`);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:680`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(settingsDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:690`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:700`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(directory, { recursive: true, mode: 0o700 });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:710`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.chmodSync(directory, 0o700);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:720`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(tempPath, \`${token}\\n\`, { encoding: \"utf8\", mode: 0o600, flag: \"wx\" });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:730`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.renameSync(tempPath, tokenFile);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:740`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.chmodSync(tokenFile, 0o600);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:760`
- Category: `network-egress`
- Evidence: `"snippet": "upstreamWs = new WebSocket(upstreamUrl, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:770`
- Category: `path-resolution`
- Evidence: `"snippet": "parsed.searchParams.set(\"token\", token.trim());",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:780`
- Category: `network-egress`
- Evidence: `"snippet": "const ws = new WebSocket(this.url, options);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:790`
- Category: `path-resolution`
- Evidence: `"snippet": "parsed.searchParams.set(\"channel\", channel || DEFAULT_CHANNEL);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:800`
- Category: `path-resolution`
- Evidence: `"snippet": "parsed.searchParams.set(\"token\", token.trim());",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:810`
- Category: `network-egress`
- Evidence: `"snippet": "const ws = new WebSocket(eventsUrl, wsOptions);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:820`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.dirname(HISTORY_FILE), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:830`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(HISTORY_FILE, JSON.stringify(data, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:840`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(CERT_DIR, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:850`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(CERT_PATH, pems.cert);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:860`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(KEY_PATH, pems.private);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:890`
- Category: `filesystem-write`
- Evidence: `"snippet": "await handle.writeFile(bytes);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:910`
- Category: `path-resolution`
- Evidence: `"snippet": "const { searchParams } = new URL(request.url);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:920`
- Category: `path-resolution`
- Evidence: `"snippet": "const rawPath = (searchParams.get(\"path\") ?? \"\").trim();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:930`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\`${baseUrl}${pathname}\`, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:940`
- Category: `path-resolution`
- Evidence: `"snippet": "const { searchParams } = new URL(request.url);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:950`
- Category: `path-resolution`
- Evidence: `"snippet": "const rawUrl = (searchParams.get(\"url\") ?? \"\").trim();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:960`
- Category: `path-resolution`
- Evidence: `"snippet": "const waitMsRaw = Number(searchParams.get(\"waitMs\") ?? \"\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:970`
- Category: `path-resolution`
- Evidence: `"snippet": "const { searchParams } = new URL(request.url);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:980`
- Category: `path-resolution`
- Evidence: `"snippet": "const repo = (searchParams.get(\"repo\") ?? \"\").trim();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:990`
- Category: `path-resolution`
- Evidence: `"snippet": "const number = parsePullRequestNumber(searchParams.get(\"number\"));",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1000`
- Category: `network-egress`
- Evidence: `"snippet": "response = await fetch(params.layoutUrl, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1010`
- Category: `path-resolution`
- Evidence: `"snippet": "const source = url.searchParams.get(\"source\")?.trim() || \"local\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1020`
- Category: `path-resolution`
- Evidence: `"snippet": "const gatewayUrl = url.searchParams.get(\"gatewayUrl\")?.trim() || \"\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1030`
- Category: `path-resolution`
- Evidence: `"snippet": "const source = url.searchParams.get(\"source\")?.trim() || \"local\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1040`
- Category: `path-resolution`
- Evidence: `"snippet": "const workspaceId = url.searchParams.get(\"workspaceId\")?.trim() || \"default\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1050`
- Category: `path-resolution`
- Evidence: `"snippet": "const workspaceId = asString(url.searchParams.get(\"workspaceId\")) || \"default\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1060`
- Category: `path-resolution`
- Evidence: `"snippet": "const officeId = asString(url.searchParams.get(\"officeId\"));",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1070`
- Category: `path-resolution`
- Evidence: `"snippet": "return (url.searchParams.get(\"gatewayUrl\") ?? \"\").trim();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1080`
- Category: `path-resolution`
- Evidence: `"snippet": "const { searchParams } = new URL(request.url);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1090`
- Category: `path-resolution`
- Evidence: `"snippet": "const rawQuery = searchParams.get(\"q\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1100`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\`${runtimeUrl}${pathname}\`, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1110`
- Category: `path-resolution`
- Evidence: `"snippet": "const code = url.searchParams.get(\"code\") ?? \"\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1120`
- Category: `path-resolution`
- Evidence: `"snippet": "const state = url.searchParams.get(\"state\") ?? \"\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1130`
- Category: `path-resolution`
- Evidence: `"snippet": "const error = url.searchParams.get(\"error\") ?? \"\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1140`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/files/upload\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1150`
- Category: `path-resolution`
- Evidence: `"snippet": "const searchParams = useSearchParams();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1160`
- Category: `path-resolution`
- Evidence: `"snippet": "searchParams.get(SETTINGS_ROUTE_AGENT_ID_QUERY_PARAM)",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1170`
- Category: `path-resolution`
- Evidence: `"snippet": "[pathname, searchParams]",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1180`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1190`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/publish\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1200`
- Category: `path-resolution`
- Evidence: `"snippet": "const searchParams = new URLSearchParams({ source: \"remote\" });",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1210`
- Category: `path-resolution`
- Evidence: `"snippet": "return \`/api/office/layout?${searchParams.toString()}\`;",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1220`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(requestUrl, { cache: \"no-store\" });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1230`
- Category: `path-resolution`
- Evidence: `"snippet": "const searchParams = new URLSearchParams({",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1240`
- Category: `path-resolution`
- Evidence: `"snippet": "return \`/api/office/presence?${searchParams.toString()}\`;",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1250`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(requestUrl, { cache: \"no-store\" });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1260`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1270`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/github\", { cache: \"no-store\" });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1280`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1290`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/github\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1300`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/github\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1310`
- Category: `path-resolution`
- Evidence: `"snippet": "const searchParams = new URL(window.location.href).searchParams;",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1320`
- Category: `path-resolution`
- Evidence: `"snippet": "return searchParams.has(\"code\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1330`
- Category: `network-egress`
- Evidence: `"snippet": "void fetch(\"/api/office/call\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1340`
- Category: `network-egress`
- Evidence: `"snippet": "void fetch(\"/api/office/call\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1350`
- Category: `network-egress`
- Evidence: `"snippet": "void fetch(\"/api/office/text\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1360`
- Category: `network-egress`
- Evidence: `"snippet": "void fetch(\"/api/office/text\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1370`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/remote-message\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1380`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/remote-handoff\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1390`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/voice/transcribe\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1400`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\`/api/office/browser-preview?${params.toString()}\`, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1410`
- Category: `network-egress`
- Evidence: `"snippet": "void fetch(\"/api/office/layout\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1420`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/voice/reply\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1430`
- Category: `network-egress`
- Evidence: `"snippet": "const res = await fetch(\"https://accounts.spotify.com/api/token\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1440`
- Category: `network-egress`
- Evidence: `"snippet": "const res = await fetch(\`${BASE}/me/player\`, { headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1450`
- Category: `network-egress`
- Evidence: `"snippet": "const res = await fetch(\`${BASE}/search?${params}\`, { headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1460`
- Category: `network-egress`
- Evidence: `"snippet": "await fetch(\`${BASE}/me/player/play${params}\`, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1470`
- Category: `network-egress`
- Evidence: `"snippet": "await fetch(\`${BASE}/me/player/pause\`, { method: \"PUT\", headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1480`
- Category: `network-egress`
- Evidence: `"snippet": "await fetch(\`${BASE}/me/player/play\`, { method: \"PUT\", headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1490`
- Category: `network-egress`
- Evidence: `"snippet": "await fetch(\`${BASE}/me/player/next\`, { method: \"POST\", headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1500`
- Category: `network-egress`
- Evidence: `"snippet": "await fetch(\`${BASE}/me/player/previous\`, { method: \"POST\", headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1510`
- Category: `network-egress`
- Evidence: `"snippet": "await fetch(\`${BASE}/me/player/volume?${params}\`, { method: \"PUT\", headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1520`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/voice/reply\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1530`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.dirname(dest), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1540`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.renameSync(src, dest);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1550`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.join(trashDir, \"agents\"), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1560`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.join(trashDir, \"workspaces\"), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1570`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.dirname(dest), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1580`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.renameSync(src, dest);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1590`
- Category: `path-resolution`
- Evidence: `"snippet": "const trimmed = params.name.trim();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1600`
- Category: `path-resolution`
- Evidence: `"snippet": "const trimmed = params.name.trim();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1610`
- Category: `path-resolution`
- Evidence: `"snippet": "name: params.name,",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1620`
- Category: `path-resolution`
- Evidence: `"snippet": "name: params.name,",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1630`
- Category: `path-resolution`
- Evidence: `"snippet": "const entries = Object.entries(params.files).filter(",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1640`
- Category: `path-resolution`
- Evidence: `"snippet": "const payload: Record<string, unknown> = { file: params.file };",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1660`
- Category: `network-egress`
- Evidence: `"snippet": "const socket = new WebSocket(gatewayUrl);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1670`
- Category: `network-egress`
- Evidence: `"snippet": "this.ws = new WebSocket(this.opts.url);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1680`
- Category: `network-egress`
- Evidence: `"snippet": "const res = await fetch(input, init);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1700`
- Category: `path-resolution`
- Evidence: `"snippet": "\`path=${params.path}\`,",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1710`
- Category: `path-resolution`
- Evidence: `"snippet": "parsed.searchParams.delete(\"source\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1720`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(dirPath, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1730`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(resolveStorePath(), JSON.stringify(store, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1740`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(presenceUrl, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1750`
- Category: `path-resolution`
- Evidence: `"snippet": "url.searchParams.set(\"maxResults\", \"50\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1760`
- Category: `path-resolution`
- Evidence: `"snippet": "url.searchParams.set(\"fields\", \"summary,status,assignee\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1770`
- Category: `path-resolution`
- Evidence: `"snippet": "url.searchParams.set(\"jql\", jql);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1780`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(searchUrl, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1790`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(dirPath, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1800`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(storePath, JSON.stringify(store, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1810`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(dirPath, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1820`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(storePath, JSON.stringify(store, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1830`
- Category: `path-resolution`
- Evidence: `"snippet": "existing.name = params.name;",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1840`
- Category: `path-resolution`
- Evidence: `"snippet": "name: params.name,",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1850`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/runtime/custom\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1870`
- Category: `path-resolution`
- Evidence: `"snippet": "const fileEntries = params.files",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1880`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(baseDir, { recursive: true, force: false });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1890`
- Category: `path-resolution`
- Evidence: `"snippet": "name: resolveRequiredValue(params.name, \"Skill name is required to install dependencies.\"),",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1900`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(dir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1910`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1930`
- Category: `network-egress`
- Evidence: `"snippet": "return fetch(input, { ...init, signal: controller.signal }).finally(() =>",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1940`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(dirPath, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1950`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(tmpPath, JSON.stringify(store, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1960`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.renameSync(tmpPath, storePath);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1970`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.unlinkSync(tmpPath);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1980`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1990`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(workspace, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2000`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(agentDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2010`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(workspace, \"hello.txt\"), \"hi\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2020`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(agentDir, \"state.json\"), \"{}\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2030`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(fakeTrashDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2040`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(settingsDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2050`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2060`
- Category: `path-resolution`
- Evidence: `"snippet": "name: params.name,",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2070`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(stateDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2080`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(uploads, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2090`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(outside, \"secret\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2100`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2110`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2120`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2130`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(settingsDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2140`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2150`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2160`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(imagesDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2170`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(outsideDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2180`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(outsideFile, \"not-allowed\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2190`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(symlinkPath, { force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2200`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2210`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2220`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2230`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2240`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2250`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2260`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2270`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2280`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2290`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2300`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2310`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2320`
- Category: `path-resolution`
- Evidence: `"snippet": "received.push({ __connect: true, path: url.pathname, token: url.searchParams.get(\"token\") });",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2330`
- Category: `path-resolution`
- Evidence: `"snippet": "expect(url.searchParams.get(\"channel\")).toBe(\"hermes3d\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2340`
- Category: `path-resolution`
- Evidence: `"snippet": "expect(url.searchParams.get(\"token\")).toBe(\"secret\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2350`
- Category: `path-resolution`
- Evidence: `"snippet": "expect(url.searchParams.has(\"token\")).toBe(false);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2360`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.join(tempHome, \"Documents\"), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2370`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.join(tempHome, \"Downloads\"), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2380`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(tempHome, \"Doc.txt\"), \"doc\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2390`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(tempHome, \"Notes.txt\"), \"notes\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2400`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(tempHome, \".secret\"), \"hidden\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2410`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(home, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2510`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2520`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(storePath, \"{invalid json!!!\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2530`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(skillDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2540`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(skillDir, \"SKILL.md\"), \"# skill\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2550`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(workspaceSkillsRoot, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2560`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(nonSkillDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2570`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(settingsDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2580`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2590`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(skillDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2600`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(skillDir, \"SKILL.md\"), \"# skill\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2610`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(storeDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2620`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2630`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2640`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2650`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2660`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2670`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2680`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.join(tempDir, \"hermes3d\"), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2690`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2700`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2710`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `scripts/codex-hook-bridge.mjs:131`
- Category: `network-egress`
- Evidence: `const request = http.request(`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

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

### MEDIUM — Filesystem mutation boundary

- Location: `scripts/install-codex-hooks.mjs:74`
- Category: `filesystem-write`
- Evidence: `await fs.writeFile(backupPath, raw, { mode: 0o600, flag: "wx" });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `scripts/install-codex-hooks.mjs:82`
- Category: `filesystem-write`
- Evidence: `await fs.writeFile(tempPath, \`${JSON.stringify(value, null, 2)}\n\`, {`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `scripts/install-codex-hooks.mjs:101`
- Category: `filesystem-write`
- Evidence: `await fs.writeFile(tokenPath, \`${crypto.randomBytes(32).toString("hex")}\n\`, {`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

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

### MEDIUM — Filesystem mutation boundary

- Location: `server/codex-observer-adapter.js:67`
- Category: `filesystem-write`
- Evidence: `fs.mkdirSync(directory, { recursive: true, mode: 0o700 });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `server/codex-observer-adapter.js:69`
- Category: `filesystem-write`
- Evidence: `fs.chmodSync(directory, 0o700);`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `server/codex-observer-adapter.js:89`
- Category: `filesystem-write`
- Evidence: `fs.writeFileSync(tempPath, \`${token}\n\`, { encoding: "utf8", mode: 0o600, flag: "wx" });`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `server/codex-observer-adapter.js:90`
- Category: `filesystem-write`
- Evidence: `fs.renameSync(tempPath, tokenFile);`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `server/codex-observer-adapter.js:94`
- Category: `filesystem-write`
- Evidence: `fs.chmodSync(tokenFile, 0o600);`
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
| `.github/workflows/materialize-worktree.yml:20` | `actions/checkout@fbc6f3992d24b796d5a048ff273f7fcc4a7b6c09` | Yes |
| `.github/workflows/materialize-worktree.yml:35` | `actions/upload-artifact@043fb46d1a93c77aae656e7c1c64a875d1fc6a0a` | Yes |
| `.github/workflows/static-security-audit.yml:24` | `actions/checkout@fbc6f3992d24b796d5a048ff273f7fcc4a7b6c09` | Yes |
| `.github/workflows/static-security-audit.yml:30` | `actions/setup-node@a0853c24544627f65ddf259abe73b1d18a591444` | Yes |
| `.github/workflows/static-security-audit.yml:39` | `actions/upload-artifact@043fb46d1a93c77aae656e7c1c64a875d1fc6a0a` | Yes |

## Referenced environment variables

- `CI`
- `CODEX_HOME`
- `CODEX_OBSERVER_TOKEN_FILE`
- `CUSTOM_RUNTIME_ALLOWLIST`
- `DEBUG`
- `DEMO_ADAPTER_PORT`
- `ELEVENLABS_API_KEY`
- `ELEVENLABS_MODEL_ID`
- `ELEVENLABS_VOICE_ID`
- `HERMES3D_CODEX_OBSERVER_URL`
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
