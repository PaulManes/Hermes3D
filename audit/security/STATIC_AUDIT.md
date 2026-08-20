# Static Security Audit

Generated from tracked source only. The scanner does not install dependencies, execute repository scripts, start services, or access developer credentials. Pattern matches identify review surfaces; they are not automatically proof of a vulnerability.

## Summary

- Tracked files inspected: **634**
- API route handlers inventoried: **25**
- Environment variable names referenced: **31**
- Blocking findings: **0**
- Critical: **0**
- High: **133**
- Medium: **616**
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
- Evidence: `- Evidence: \`launchctl load ~/Library/LaunchAgents/dev.hermes3d.serve.plist\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:62`
- Category: `host-mutation`
- Evidence: `- Evidence: \`systemctl --user enable --now hermes-serve\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:69`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { spawnSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:76`
- Category: `command-execution`
- Evidence: `- Evidence: \`return spawnSync(command, args, { encoding: "utf8" });\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:83`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { execFileSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:90`
- Category: `command-execution`
- Evidence: `- Evidence: \`const branch = execFileSync("git", ["rev-parse", "--abbrev-ref", "HEAD"], {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:97`
- Category: `command-execution`
- Evidence: `- Evidence: \`execFileSync("git", ["status", "--porcelain"], {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:104`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { spawn } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:111`
- Category: `command-execution`
- Evidence: `- Evidence: \`const child = spawn(process.execPath, ["server/index.js", "--dev"], {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:118`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { execFileSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:125`
- Category: `command-execution`
- Evidence: `- Evidence: \`execFileSync("git", args, {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:132`
- Category: `command-execution`
- Evidence: `- Evidence: \`pattern: /(?:node:child_process|child_process|\bexecFileSync\s*\(|\bexecFile\s*\(|\bexecSync\s*\(|\bspawnSync\s*\(|\bspawn\s*\(|\bfork\s*\()/g,\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:139`
- Category: `host-mutation`
- Evidence: `- Evidence: \`pattern: /\b(?:sudo|launchctl|systemctl|crontab|defaults\s+write|security\s+add-trusted-cert|chmod\s+[0-7]{3,4}|chown)\b/g,\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:146`
- Category: `credential-access`
- Evidence: `- Evidence: \`pattern: /(?:~\/|\/Users\/[^/]+\/|process\.env\.HOME[^\n]{0,120})?(?:\.ssh|\.aws|\.gnupg|Keychains|id_rsa|id_ed25519)/g,\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:153`
- Category: `host-mutation`
- Evidence: `- Evidence: \`console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\`);\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:153`
- Category: `credential-access`
- Evidence: `- Evidence: \`console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\`);\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:160`
- Category: `host-mutation`
- Evidence: `- Evidence: \`console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\`);\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:160`
- Category: `credential-access`
- Evidence: `- Evidence: \`console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\`);\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:167`
- Category: `command-execution`
- Evidence: `- Evidence: \`import * as childProcess from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:174`
- Category: `command-execution`
- Evidence: `- Evidence: \`const result = childProcess.spawnSync(command, args, {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:181`
- Category: `credential-access`
- Evidence: `- Evidence: \`sshTarget: params.sshTarget,\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:188`
- Category: `credential-access`
- Evidence: `- Evidence: \`sshTarget: params.sshTarget,\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:195`
- Category: `command-execution`
- Evidence: `- Evidence: \`import * as childProcess from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:202`
- Category: `credential-access`
- Evidence: `- Evidence: \`if (typeof params.sshPort === "number") {\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:209`
- Category: `credential-access`
- Evidence: `- Evidence: \`sshArgs.push("-p", String(params.sshPort));\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:216`
- Category: `credential-access`
- Evidence: `- Evidence: \`sshArgs.push(params.sshTarget, ...params.argv);\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:223`
- Category: `command-execution`
- Evidence: `- Evidence: \`const result = childProcess.spawnSync("ssh", sshArgs, { ...options });\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:230`
- Category: `credential-access`
- Evidence: `- Evidence: \`sshTarget: params.sshTarget,\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:237`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { spawnSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:244`
- Category: `command-execution`
- Evidence: `- Evidence: \`vi.mock("node:child_process", () => {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:251`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { spawnSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:258`
- Category: `command-execution`
- Evidence: `- Evidence: \`vi.mock("node:child_process", async () => {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:265`
- Category: `command-execution`
- Evidence: `- Evidence: \`const actual = await vi.importActual<typeof import("node:child_process")>(\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:272`
- Category: `command-execution`
- Evidence: `- Evidence: \`"node:child_process"\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:279`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { spawnSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:286`
- Category: `command-execution`
- Evidence: `- Evidence: \`vi.mock("node:child_process", async () => {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:293`
- Category: `command-execution`
- Evidence: `- Evidence: \`const actual = await vi.importActual<typeof import("node:child_process")>(\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:300`
- Category: `command-execution`
- Evidence: `- Evidence: \`"node:child_process"\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:307`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { spawnSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:314`
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
- Evidence: `"snippet": "launchctl load ~/Library/LaunchAgents/dev.hermes3d.serve.plist",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:70`
- Category: `host-mutation`
- Evidence: `"snippet": "systemctl --user enable --now hermes-serve",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:80`
- Category: `command-execution`
- Evidence: `"snippet": "import { spawnSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:90`
- Category: `command-execution`
- Evidence: `"snippet": "return spawnSync(command, args, { encoding: \"utf8\" });",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:100`
- Category: `command-execution`
- Evidence: `"snippet": "import { execFileSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:110`
- Category: `command-execution`
- Evidence: `"snippet": "const branch = execFileSync(\"git\", [\"rev-parse\", \"--abbrev-ref\", \"HEAD\"], {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:120`
- Category: `command-execution`
- Evidence: `"snippet": "execFileSync(\"git\", [\"status\", \"--porcelain\"], {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:130`
- Category: `command-execution`
- Evidence: `"snippet": "import { spawn } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:140`
- Category: `command-execution`
- Evidence: `"snippet": "const child = spawn(process.execPath, [\"server/index.js\", \"--dev\"], {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:150`
- Category: `command-execution`
- Evidence: `"snippet": "import { execFileSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:160`
- Category: `command-execution`
- Evidence: `"snippet": "execFileSync(\"git\", args, {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:170`
- Category: `command-execution`
- Evidence: `"snippet": "pattern: /(?:node:child_process|child_process|\\bexecFileSync\\s*\\(|\\bexecFile\\s*\\(|\\bexecSync\\s*\\(|\\bspawnSync\\s*\\(|\\bspawn\\s*\\(|\\bfork\\s*\\()/g,",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:180`
- Category: `host-mutation`
- Evidence: `"snippet": "pattern: /\\b(?:sudo|launchctl|systemctl|crontab|defaults\\s+write|security\\s+add-trusted-cert|chmod\\s+[0-7]{3,4}|chown)\\b/g,",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:190`
- Category: `credential-access`
- Evidence: `"snippet": "pattern: /(?:~\\/|\\/Users\\/[^/]+\\/|process\\.env\\.HOME[^\\n]{0,120})?(?:\\.ssh|\\.aws|\\.gnupg|Keychains|id_rsa|id_ed25519)/g,",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:200`
- Category: `host-mutation`
- Evidence: `"snippet": "console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\`);",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:200`
- Category: `credential-access`
- Evidence: `"snippet": "console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\`);",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:210`
- Category: `host-mutation`
- Evidence: `"snippet": "console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\`);",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:210`
- Category: `credential-access`
- Evidence: `"snippet": "console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\`);",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:220`
- Category: `command-execution`
- Evidence: `"snippet": "import * as childProcess from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:230`
- Category: `command-execution`
- Evidence: `"snippet": "const result = childProcess.spawnSync(command, args, {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:240`
- Category: `credential-access`
- Evidence: `"snippet": "sshTarget: params.sshTarget,",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:250`
- Category: `credential-access`
- Evidence: `"snippet": "sshTarget: params.sshTarget,",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:260`
- Category: `command-execution`
- Evidence: `"snippet": "import * as childProcess from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:270`
- Category: `credential-access`
- Evidence: `"snippet": "if (typeof params.sshPort === \"number\") {",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:280`
- Category: `credential-access`
- Evidence: `"snippet": "sshArgs.push(\"-p\", String(params.sshPort));",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:290`
- Category: `credential-access`
- Evidence: `"snippet": "sshArgs.push(params.sshTarget, ...params.argv);",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:300`
- Category: `command-execution`
- Evidence: `"snippet": "const result = childProcess.spawnSync(\"ssh\", sshArgs, { ...options });",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:310`
- Category: `credential-access`
- Evidence: `"snippet": "sshTarget: params.sshTarget,",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:320`
- Category: `command-execution`
- Evidence: `"snippet": "import { spawnSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:330`
- Category: `command-execution`
- Evidence: `"snippet": "vi.mock(\"node:child_process\", () => {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:340`
- Category: `command-execution`
- Evidence: `"snippet": "import { spawnSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:350`
- Category: `command-execution`
- Evidence: `"snippet": "vi.mock(\"node:child_process\", async () => {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:360`
- Category: `command-execution`
- Evidence: `"snippet": "const actual = await vi.importActual<typeof import(\"node:child_process\")>(",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:370`
- Category: `command-execution`
- Evidence: `"snippet": "\"node:child_process\"",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:380`
- Category: `command-execution`
- Evidence: `"snippet": "import { spawnSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:390`
- Category: `command-execution`
- Evidence: `"snippet": "vi.mock(\"node:child_process\", async () => {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:400`
- Category: `command-execution`
- Evidence: `"snippet": "const actual = await vi.importActual<typeof import(\"node:child_process\")>(",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:410`
- Category: `command-execution`
- Evidence: `"snippet": "\"node:child_process\"",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:420`
- Category: `command-execution`
- Evidence: `"snippet": "import { spawnSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:430`
- Category: `command-execution`
- Evidence: `"snippet": "vi.mock(\"node:child_process\", () => {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

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

### MEDIUM — GitHub Action is pinned to a movable tag instead of a commit SHA

- Location: `.github/workflows/dependency-refresh.yml:31`
- Category: `supply-chain`
- Evidence: `        uses: actions/checkout@v5`
- Review: Pin third-party actions to a reviewed full commit SHA and record the human-readable release in a comment.

### MEDIUM — GitHub Action is pinned to a movable tag instead of a commit SHA

- Location: `.github/workflows/dependency-refresh.yml:37`
- Category: `supply-chain`
- Evidence: `        uses: actions/setup-node@v5`
- Review: Pin third-party actions to a reviewed full commit SHA and record the human-readable release in a comment.

### MEDIUM — GitHub Action is pinned to a movable tag instead of a commit SHA

- Location: `.github/workflows/dependency-refresh.yml:159`
- Category: `supply-chain`
- Evidence: `        uses: actions/upload-artifact@v7`
- Review: Pin third-party actions to a reviewed full commit SHA and record the human-readable release in a comment.

### MEDIUM — GitHub Action is pinned to a movable tag instead of a commit SHA

- Location: `.github/workflows/docker-publish.yml:26`
- Category: `supply-chain`
- Evidence: `        uses: actions/checkout@v4`
- Review: Pin third-party actions to a reviewed full commit SHA and record the human-readable release in a comment.

### MEDIUM — GitHub Action is pinned to a movable tag instead of a commit SHA

- Location: `.github/workflows/docker-publish.yml:29`
- Category: `supply-chain`
- Evidence: `        uses: docker/setup-buildx-action@v3`
- Review: Pin third-party actions to a reviewed full commit SHA and record the human-readable release in a comment.

### MEDIUM — GitHub Action is pinned to a movable tag instead of a commit SHA

- Location: `.github/workflows/docker-publish.yml:32`
- Category: `supply-chain`
- Evidence: `        uses: docker/login-action@v3`
- Review: Pin third-party actions to a reviewed full commit SHA and record the human-readable release in a comment.

### MEDIUM — GitHub Action is pinned to a movable tag instead of a commit SHA

- Location: `.github/workflows/docker-publish.yml:62`
- Category: `supply-chain`
- Evidence: `        uses: docker/build-push-action@v6`
- Review: Pin third-party actions to a reviewed full commit SHA and record the human-readable release in a comment.

### MEDIUM — GitHub Action is pinned to a movable tag instead of a commit SHA

- Location: `.github/workflows/export-audit-worktree.yml:19`
- Category: `supply-chain`
- Evidence: `        uses: actions/checkout@v5`
- Review: Pin third-party actions to a reviewed full commit SHA and record the human-readable release in a comment.

### MEDIUM — GitHub Action is pinned to a movable tag instead of a commit SHA

- Location: `.github/workflows/export-audit-worktree.yml:27`
- Category: `supply-chain`
- Evidence: `        uses: actions/upload-artifact@v4`
- Review: Pin third-party actions to a reviewed full commit SHA and record the human-readable release in a comment.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:390`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(root, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:397`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(root, "REPORT.md"), report);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:404`
- Category: `network-egress`
- Evidence: `- Evidence: \`const socket = new WebSocket(url, { handshakeTimeout: timeoutMs });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:411`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(url, { headers, signal: controller.signal });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:418`
- Category: `public-bind`
- Evidence: `- Evidence: \`normalizedHost !== "0.0.0.0";\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:425`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.dirname(outputPath), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:432`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(outputPath, \\`${JSON.stringify(records, null, 2)}\n\\`);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:439`
- Category: `network-egress`
- Evidence: `- Evidence: \`const res = await fetch(url, { redirect: "manual" });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:446`
- Category: `path-resolution`
- Evidence: `- Evidence: \`pattern: /(?:searchParams|get\(["']path["']\)|params\.(?:path|file|name)|formData\.get\(["'](?:file|path|name)["']\))/g,\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:453`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(outputDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:460`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(reportPath, report);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:467`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(jsonPath, \\`${JSON.stringify(output, null, 2)}\n\\`);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:474`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(settingsDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:481`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:488`
- Category: `public-bind`
- Evidence: `- Evidence: \`url.hostname === "127.0.0.1" || url.hostname === "::1" || url.hostname === "0.0.0.0"\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:495`
- Category: `network-egress`
- Evidence: `- Evidence: \`upstreamWs = new WebSocket(upstreamUrl, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:502`
- Category: `path-resolution`
- Evidence: `- Evidence: \`parsed.searchParams.set("token", token.trim());\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:509`
- Category: `network-egress`
- Evidence: `- Evidence: \`const ws = new WebSocket(this.url, options);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:516`
- Category: `path-resolution`
- Evidence: `- Evidence: \`parsed.searchParams.set("channel", channel || DEFAULT_CHANNEL);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:523`
- Category: `path-resolution`
- Evidence: `- Evidence: \`parsed.searchParams.set("token", token.trim());\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:530`
- Category: `network-egress`
- Evidence: `- Evidence: \`const ws = new WebSocket(eventsUrl, wsOptions);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:537`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.dirname(HISTORY_FILE), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:544`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(HISTORY_FILE, JSON.stringify(data, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:551`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(CERT_DIR, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:558`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(CERT_PATH, pems.cert);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:565`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(KEY_PATH, pems.private);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:572`
- Category: `public-bind`
- Evidence: `- Evidence: \`: hostname === "0.0.0.0" || hostname === "::"\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:579`
- Category: `public-bind`
- Evidence: `- Evidence: \`if (normalized === "0.0.0.0" || normalized === "::") {\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:586`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const file = formData.get("file");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:593`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`await fs.writeFile(targetPath, bytes);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:600`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const { searchParams } = new URL(request.url);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:607`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const rawPath = (searchParams.get("path") ?? "").trim();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:614`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(\\`${baseUrl}${pathname}\\`, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:621`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const { searchParams } = new URL(request.url);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:628`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const rawUrl = (searchParams.get("url") ?? "").trim();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:635`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const waitMsRaw = Number(searchParams.get("waitMs") ?? "");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:642`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const { searchParams } = new URL(request.url);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:649`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const repo = (searchParams.get("repo") ?? "").trim();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:656`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const number = parsePullRequestNumber(searchParams.get("number"));\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:663`
- Category: `network-egress`
- Evidence: `- Evidence: \`response = await fetch(params.layoutUrl, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:670`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const source = url.searchParams.get("source")?.trim() || "local";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:677`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const gatewayUrl = url.searchParams.get("gatewayUrl")?.trim() || "";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:684`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const source = url.searchParams.get("source")?.trim() || "local";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:691`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const workspaceId = url.searchParams.get("workspaceId")?.trim() || "default";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:698`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const workspaceId = asString(url.searchParams.get("workspaceId")) || "default";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:705`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const officeId = asString(url.searchParams.get("officeId"));\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:712`
- Category: `path-resolution`
- Evidence: `- Evidence: \`return (url.searchParams.get("gatewayUrl") ?? "").trim();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:719`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const { searchParams } = new URL(request.url);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:726`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const rawQuery = searchParams.get("q");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:733`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(\\`${runtimeUrl}${pathname}\\`, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:740`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const code = url.searchParams.get("code") ?? "";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:747`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const state = url.searchParams.get("state") ?? "";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:754`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const error = url.searchParams.get("error") ?? "";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:761`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/files/upload", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:768`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const searchParams = useSearchParams();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:775`
- Category: `path-resolution`
- Evidence: `- Evidence: \`searchParams.get(SETTINGS_ROUTE_AGENT_ID_QUERY_PARAM)\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:782`
- Category: `path-resolution`
- Evidence: `- Evidence: \`[pathname, searchParams]\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:789`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:796`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/publish", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:803`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const searchParams = new URLSearchParams({ source: "remote" });\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:810`
- Category: `path-resolution`
- Evidence: `- Evidence: \`return \\`/api/office/layout?${searchParams.toString()}\\`;\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:817`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(requestUrl, { cache: "no-store" });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:824`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const searchParams = new URLSearchParams({\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:831`
- Category: `path-resolution`
- Evidence: `- Evidence: \`return \\`/api/office/presence?${searchParams.toString()}\\`;\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:838`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(requestUrl, { cache: "no-store" });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:845`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:852`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/github", { cache: "no-store" });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:859`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:866`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/github", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:873`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/github", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:880`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const searchParams = new URL(window.location.href).searchParams;\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:887`
- Category: `path-resolution`
- Evidence: `- Evidence: \`return searchParams.has("code");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:894`
- Category: `network-egress`
- Evidence: `- Evidence: \`void fetch("/api/office/call", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:901`
- Category: `network-egress`
- Evidence: `- Evidence: \`void fetch("/api/office/call", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:908`
- Category: `network-egress`
- Evidence: `- Evidence: \`void fetch("/api/office/text", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:915`
- Category: `network-egress`
- Evidence: `- Evidence: \`void fetch("/api/office/text", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:922`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/remote-message", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:929`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/remote-handoff", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:936`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/voice/transcribe", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:943`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(\\`/api/office/browser-preview?${params.toString()}\\`, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:950`
- Category: `network-egress`
- Evidence: `- Evidence: \`void fetch("/api/office/layout", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:957`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/voice/reply", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:964`
- Category: `network-egress`
- Evidence: `- Evidence: \`const res = await fetch("https://accounts.spotify.com/api/token", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:971`
- Category: `network-egress`
- Evidence: `- Evidence: \`const res = await fetch(\\`${BASE}/me/player\\`, { headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:978`
- Category: `network-egress`
- Evidence: `- Evidence: \`const res = await fetch(\\`${BASE}/search?${params}\\`, { headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:985`
- Category: `network-egress`
- Evidence: `- Evidence: \`await fetch(\\`${BASE}/me/player/play${params}\\`, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:992`
- Category: `network-egress`
- Evidence: `- Evidence: \`await fetch(\\`${BASE}/me/player/pause\\`, { method: "PUT", headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:999`
- Category: `network-egress`
- Evidence: `- Evidence: \`await fetch(\\`${BASE}/me/player/play\\`, { method: "PUT", headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1006`
- Category: `network-egress`
- Evidence: `- Evidence: \`await fetch(\\`${BASE}/me/player/next\\`, { method: "POST", headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1013`
- Category: `network-egress`
- Evidence: `- Evidence: \`await fetch(\\`${BASE}/me/player/previous\\`, { method: "POST", headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1020`
- Category: `network-egress`
- Evidence: `- Evidence: \`await fetch(\\`${BASE}/me/player/volume?${params}\\`, { method: "PUT", headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1027`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/voice/reply", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1034`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.dirname(dest), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1041`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.renameSync(src, dest);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1048`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.join(trashDir, "agents"), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1055`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.join(trashDir, "workspaces"), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1062`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.dirname(dest), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1069`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.renameSync(src, dest);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1076`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const trimmed = params.name.trim();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1083`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const trimmed = params.name.trim();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1090`
- Category: `path-resolution`
- Evidence: `- Evidence: \`name: params.name,\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1097`
- Category: `path-resolution`
- Evidence: `- Evidence: \`name: params.name,\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1104`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const entries = Object.entries(params.files).filter(\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1111`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const payload: Record<string, unknown> = { file: params.file };\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1118`
- Category: `public-bind`
- Evidence: `- Evidence: \`normalized === "0.0.0.0"\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1125`
- Category: `network-egress`
- Evidence: `- Evidence: \`const socket = new WebSocket(gatewayUrl);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1132`
- Category: `network-egress`
- Evidence: `- Evidence: \`this.ws = new WebSocket(this.opts.url);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1139`
- Category: `network-egress`
- Evidence: `- Evidence: \`const res = await fetch(input, init);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1146`
- Category: `public-bind`
- Evidence: `- Evidence: \`return normalized === "0.0.0.0" ? "127.0.0.1" : hostname;\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1153`
- Category: `path-resolution`
- Evidence: `- Evidence: \`\\`path=${params.path}\\`,\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1160`
- Category: `path-resolution`
- Evidence: `- Evidence: \`parsed.searchParams.delete("source");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1167`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(dirPath, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1174`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(resolveStorePath(), JSON.stringify(store, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1181`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(presenceUrl, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1188`
- Category: `path-resolution`
- Evidence: `- Evidence: \`url.searchParams.set("maxResults", "50");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1195`
- Category: `path-resolution`
- Evidence: `- Evidence: \`url.searchParams.set("fields", "summary,status,assignee");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1202`
- Category: `path-resolution`
- Evidence: `- Evidence: \`url.searchParams.set("jql", jql);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1209`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(searchUrl, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1216`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(dirPath, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1223`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(storePath, JSON.stringify(store, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1230`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(dirPath, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1237`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(storePath, JSON.stringify(store, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1244`
- Category: `path-resolution`
- Evidence: `- Evidence: \`existing.name = params.name;\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1251`
- Category: `path-resolution`
- Evidence: `- Evidence: \`name: params.name,\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1258`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/runtime/custom", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1265`
- Category: `public-bind`
- Evidence: `- Evidence: \`const LOOPBACK_HOSTNAMES = new Set(["localhost", "127.0.0.1", "::1", "0.0.0.0"]);\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1272`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const fileEntries = params.files\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1279`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(baseDir, { recursive: true, force: false });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1286`
- Category: `path-resolution`
- Evidence: `- Evidence: \`name: resolveRequiredValue(params.name, "Skill name is required to install dependencies."),\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1293`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(dir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1300`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1307`
- Category: `public-bind`
- Evidence: `- Evidence: \`const LOOPBACK_HOSTNAMES = new Set(["127.0.0.1", "::1", "0.0.0.0"]);\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1314`
- Category: `network-egress`
- Evidence: `- Evidence: \`return fetch(input, { ...init, signal: controller.signal }).finally(() =>\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1321`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(dirPath, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1328`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(tmpPath, JSON.stringify(store, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1335`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.renameSync(tmpPath, storePath);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1342`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.unlinkSync(tmpPath);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1349`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1356`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(workspace, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1363`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(agentDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1370`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(workspace, "hello.txt"), "hi", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1377`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(agentDir, "state.json"), "{}", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1384`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(fakeTrashDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1391`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(settingsDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1398`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1405`
- Category: `path-resolution`
- Evidence: `- Evidence: \`name: params.name,\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1412`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1419`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1426`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1433`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(settingsDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1440`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1447`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1454`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(imagesDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1461`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(outsideDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1468`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(outsideFile, "not-allowed", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1475`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(symlinkPath, { force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1482`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1489`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1496`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1503`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1510`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1517`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1524`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1531`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1538`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1545`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1552`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1559`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1566`
- Category: `path-resolution`
- Evidence: `- Evidence: \`received.push({ __connect: true, path: url.pathname, token: url.searchParams.get("token") });\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1573`
- Category: `path-resolution`
- Evidence: `- Evidence: \`expect(url.searchParams.get("channel")).toBe("hermes3d");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1580`
- Category: `path-resolution`
- Evidence: `- Evidence: \`expect(url.searchParams.get("token")).toBe("secret");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1587`
- Category: `path-resolution`
- Evidence: `- Evidence: \`expect(url.searchParams.has("token")).toBe(false);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1594`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.join(tempHome, "Documents"), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1601`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.join(tempHome, "Downloads"), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1608`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(tempHome, "Doc.txt"), "doc", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1615`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(tempHome, "Notes.txt"), "notes", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1622`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(tempHome, ".secret"), "hidden", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1629`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(home, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1636`
- Category: `public-bind`
- Evidence: `- Evidence: \`resolveHosts({ HOST: "0.0.0.0", HOSTNAME: "example-host" } as unknown as NodeJS.ProcessEnv)\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1643`
- Category: `public-bind`
- Evidence: `- Evidence: \`).toEqual(["0.0.0.0"]);\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1650`
- Category: `public-bind`
- Evidence: `- Evidence: \`resolveHost({ HOST: "0.0.0.0", HOSTNAME: "example-host" } as unknown as NodeJS.ProcessEnv)\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1657`
- Category: `public-bind`
- Evidence: `- Evidence: \`).toBe("0.0.0.0");\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1664`
- Category: `public-bind`
- Evidence: `- Evidence: \`expect(isPublicHost("0.0.0.0")).toBe(true);\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1671`
- Category: `public-bind`
- Evidence: `- Evidence: \`expect(isPublicHost("::")).toBe(true);\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1678`
- Category: `public-bind`
- Evidence: `- Evidence: \`expect(() => assertPublicHostAllowed({ host: "0.0.0.0", studioAccessToken: "" })).toThrow(\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1685`
- Category: `public-bind`
- Evidence: `- Evidence: \`expect(() => assertPublicHostAllowed({ host: "0.0.0.0", studioAccessToken: "   " })).toThrow(\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1692`
- Category: `public-bind`
- Evidence: `- Evidence: \`assertPublicHostAllowed({ host: "0.0.0.0", studioAccessToken: "abc" })\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1699`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1706`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(storePath, "{invalid json!!!", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1713`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(skillDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1720`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(skillDir, "SKILL.md"), "# skill", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1727`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(workspaceSkillsRoot, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1734`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(nonSkillDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1741`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(settingsDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1748`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1755`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(skillDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1762`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(skillDir, "SKILL.md"), "# skill", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1769`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(storeDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1776`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1783`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1790`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1797`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1804`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1811`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1818`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.join(tempDir, "hermes3d"), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1825`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1832`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1839`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:540`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(root, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:550`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(root, \"REPORT.md\"), report);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:560`
- Category: `network-egress`
- Evidence: `"snippet": "const socket = new WebSocket(url, { handshakeTimeout: timeoutMs });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:570`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(url, { headers, signal: controller.signal });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:590`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.dirname(outputPath), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:600`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(outputPath, \`${JSON.stringify(records, null, 2)}\\n\`);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:610`
- Category: `network-egress`
- Evidence: `"snippet": "const res = await fetch(url, { redirect: \"manual\" });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:620`
- Category: `path-resolution`
- Evidence: `"snippet": "pattern: /(?:searchParams|get\\([\"']path[\"']\\)|params\\.(?:path|file|name)|formData\\.get\\([\"'](?:file|path|name)[\"']\\))/g,",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:630`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(outputDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:640`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(reportPath, report);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:650`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(jsonPath, \`${JSON.stringify(output, null, 2)}\\n\`);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:660`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(settingsDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:670`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:690`
- Category: `network-egress`
- Evidence: `"snippet": "upstreamWs = new WebSocket(upstreamUrl, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:700`
- Category: `path-resolution`
- Evidence: `"snippet": "parsed.searchParams.set(\"token\", token.trim());",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:710`
- Category: `network-egress`
- Evidence: `"snippet": "const ws = new WebSocket(this.url, options);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:720`
- Category: `path-resolution`
- Evidence: `"snippet": "parsed.searchParams.set(\"channel\", channel || DEFAULT_CHANNEL);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:730`
- Category: `path-resolution`
- Evidence: `"snippet": "parsed.searchParams.set(\"token\", token.trim());",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:740`
- Category: `network-egress`
- Evidence: `"snippet": "const ws = new WebSocket(eventsUrl, wsOptions);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:750`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.dirname(HISTORY_FILE), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:760`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(HISTORY_FILE, JSON.stringify(data, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:770`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(CERT_DIR, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:780`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(CERT_PATH, pems.cert);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:790`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(KEY_PATH, pems.private);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:830`
- Category: `filesystem-write`
- Evidence: `"snippet": "await fs.writeFile(targetPath, bytes);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:840`
- Category: `path-resolution`
- Evidence: `"snippet": "const { searchParams } = new URL(request.url);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:850`
- Category: `path-resolution`
- Evidence: `"snippet": "const rawPath = (searchParams.get(\"path\") ?? \"\").trim();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:860`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\`${baseUrl}${pathname}\`, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:870`
- Category: `path-resolution`
- Evidence: `"snippet": "const { searchParams } = new URL(request.url);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:880`
- Category: `path-resolution`
- Evidence: `"snippet": "const rawUrl = (searchParams.get(\"url\") ?? \"\").trim();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:890`
- Category: `path-resolution`
- Evidence: `"snippet": "const waitMsRaw = Number(searchParams.get(\"waitMs\") ?? \"\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:900`
- Category: `path-resolution`
- Evidence: `"snippet": "const { searchParams } = new URL(request.url);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:910`
- Category: `path-resolution`
- Evidence: `"snippet": "const repo = (searchParams.get(\"repo\") ?? \"\").trim();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:920`
- Category: `path-resolution`
- Evidence: `"snippet": "const number = parsePullRequestNumber(searchParams.get(\"number\"));",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:930`
- Category: `network-egress`
- Evidence: `"snippet": "response = await fetch(params.layoutUrl, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:940`
- Category: `path-resolution`
- Evidence: `"snippet": "const source = url.searchParams.get(\"source\")?.trim() || \"local\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:950`
- Category: `path-resolution`
- Evidence: `"snippet": "const gatewayUrl = url.searchParams.get(\"gatewayUrl\")?.trim() || \"\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:960`
- Category: `path-resolution`
- Evidence: `"snippet": "const source = url.searchParams.get(\"source\")?.trim() || \"local\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:970`
- Category: `path-resolution`
- Evidence: `"snippet": "const workspaceId = url.searchParams.get(\"workspaceId\")?.trim() || \"default\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:980`
- Category: `path-resolution`
- Evidence: `"snippet": "const workspaceId = asString(url.searchParams.get(\"workspaceId\")) || \"default\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:990`
- Category: `path-resolution`
- Evidence: `"snippet": "const officeId = asString(url.searchParams.get(\"officeId\"));",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1000`
- Category: `path-resolution`
- Evidence: `"snippet": "return (url.searchParams.get(\"gatewayUrl\") ?? \"\").trim();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1010`
- Category: `path-resolution`
- Evidence: `"snippet": "const { searchParams } = new URL(request.url);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1020`
- Category: `path-resolution`
- Evidence: `"snippet": "const rawQuery = searchParams.get(\"q\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1030`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\`${runtimeUrl}${pathname}\`, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1040`
- Category: `path-resolution`
- Evidence: `"snippet": "const code = url.searchParams.get(\"code\") ?? \"\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1050`
- Category: `path-resolution`
- Evidence: `"snippet": "const state = url.searchParams.get(\"state\") ?? \"\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1060`
- Category: `path-resolution`
- Evidence: `"snippet": "const error = url.searchParams.get(\"error\") ?? \"\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1070`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/files/upload\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1080`
- Category: `path-resolution`
- Evidence: `"snippet": "const searchParams = useSearchParams();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1090`
- Category: `path-resolution`
- Evidence: `"snippet": "searchParams.get(SETTINGS_ROUTE_AGENT_ID_QUERY_PARAM)",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1100`
- Category: `path-resolution`
- Evidence: `"snippet": "[pathname, searchParams]",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1110`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1120`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/publish\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1130`
- Category: `path-resolution`
- Evidence: `"snippet": "const searchParams = new URLSearchParams({ source: \"remote\" });",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1140`
- Category: `path-resolution`
- Evidence: `"snippet": "return \`/api/office/layout?${searchParams.toString()}\`;",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1150`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(requestUrl, { cache: \"no-store\" });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1160`
- Category: `path-resolution`
- Evidence: `"snippet": "const searchParams = new URLSearchParams({",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1170`
- Category: `path-resolution`
- Evidence: `"snippet": "return \`/api/office/presence?${searchParams.toString()}\`;",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1180`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(requestUrl, { cache: \"no-store\" });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1190`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1200`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/github\", { cache: \"no-store\" });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1210`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1220`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/github\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1230`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/github\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1240`
- Category: `path-resolution`
- Evidence: `"snippet": "const searchParams = new URL(window.location.href).searchParams;",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1250`
- Category: `path-resolution`
- Evidence: `"snippet": "return searchParams.has(\"code\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1260`
- Category: `network-egress`
- Evidence: `"snippet": "void fetch(\"/api/office/call\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1270`
- Category: `network-egress`
- Evidence: `"snippet": "void fetch(\"/api/office/call\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1280`
- Category: `network-egress`
- Evidence: `"snippet": "void fetch(\"/api/office/text\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1290`
- Category: `network-egress`
- Evidence: `"snippet": "void fetch(\"/api/office/text\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1300`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/remote-message\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1310`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/remote-handoff\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1320`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/voice/transcribe\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1330`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\`/api/office/browser-preview?${params.toString()}\`, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1340`
- Category: `network-egress`
- Evidence: `"snippet": "void fetch(\"/api/office/layout\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1350`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/voice/reply\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1360`
- Category: `network-egress`
- Evidence: `"snippet": "const res = await fetch(\"https://accounts.spotify.com/api/token\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1370`
- Category: `network-egress`
- Evidence: `"snippet": "const res = await fetch(\`${BASE}/me/player\`, { headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1380`
- Category: `network-egress`
- Evidence: `"snippet": "const res = await fetch(\`${BASE}/search?${params}\`, { headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1390`
- Category: `network-egress`
- Evidence: `"snippet": "await fetch(\`${BASE}/me/player/play${params}\`, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1400`
- Category: `network-egress`
- Evidence: `"snippet": "await fetch(\`${BASE}/me/player/pause\`, { method: \"PUT\", headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1410`
- Category: `network-egress`
- Evidence: `"snippet": "await fetch(\`${BASE}/me/player/play\`, { method: \"PUT\", headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1420`
- Category: `network-egress`
- Evidence: `"snippet": "await fetch(\`${BASE}/me/player/next\`, { method: \"POST\", headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1430`
- Category: `network-egress`
- Evidence: `"snippet": "await fetch(\`${BASE}/me/player/previous\`, { method: \"POST\", headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1440`
- Category: `network-egress`
- Evidence: `"snippet": "await fetch(\`${BASE}/me/player/volume?${params}\`, { method: \"PUT\", headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1450`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/voice/reply\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1460`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.dirname(dest), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1470`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.renameSync(src, dest);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1480`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.join(trashDir, \"agents\"), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1490`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.join(trashDir, \"workspaces\"), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1500`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.dirname(dest), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1510`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.renameSync(src, dest);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1520`
- Category: `path-resolution`
- Evidence: `"snippet": "const trimmed = params.name.trim();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1530`
- Category: `path-resolution`
- Evidence: `"snippet": "const trimmed = params.name.trim();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1540`
- Category: `path-resolution`
- Evidence: `"snippet": "name: params.name,",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1550`
- Category: `path-resolution`
- Evidence: `"snippet": "name: params.name,",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1560`
- Category: `path-resolution`
- Evidence: `"snippet": "const entries = Object.entries(params.files).filter(",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1570`
- Category: `path-resolution`
- Evidence: `"snippet": "const payload: Record<string, unknown> = { file: params.file };",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1590`
- Category: `network-egress`
- Evidence: `"snippet": "const socket = new WebSocket(gatewayUrl);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1600`
- Category: `network-egress`
- Evidence: `"snippet": "this.ws = new WebSocket(this.opts.url);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1610`
- Category: `network-egress`
- Evidence: `"snippet": "const res = await fetch(input, init);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1630`
- Category: `path-resolution`
- Evidence: `"snippet": "\`path=${params.path}\`,",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1640`
- Category: `path-resolution`
- Evidence: `"snippet": "parsed.searchParams.delete(\"source\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1650`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(dirPath, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1660`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(resolveStorePath(), JSON.stringify(store, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1670`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(presenceUrl, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1680`
- Category: `path-resolution`
- Evidence: `"snippet": "url.searchParams.set(\"maxResults\", \"50\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1690`
- Category: `path-resolution`
- Evidence: `"snippet": "url.searchParams.set(\"fields\", \"summary,status,assignee\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1700`
- Category: `path-resolution`
- Evidence: `"snippet": "url.searchParams.set(\"jql\", jql);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1710`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(searchUrl, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1720`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(dirPath, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1730`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(storePath, JSON.stringify(store, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1740`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(dirPath, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1750`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(storePath, JSON.stringify(store, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1760`
- Category: `path-resolution`
- Evidence: `"snippet": "existing.name = params.name;",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1770`
- Category: `path-resolution`
- Evidence: `"snippet": "name: params.name,",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1780`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/runtime/custom\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1800`
- Category: `path-resolution`
- Evidence: `"snippet": "const fileEntries = params.files",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1810`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(baseDir, { recursive: true, force: false });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1820`
- Category: `path-resolution`
- Evidence: `"snippet": "name: resolveRequiredValue(params.name, \"Skill name is required to install dependencies.\"),",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1830`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(dir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1840`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1860`
- Category: `network-egress`
- Evidence: `"snippet": "return fetch(input, { ...init, signal: controller.signal }).finally(() =>",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1870`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(dirPath, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1880`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(tmpPath, JSON.stringify(store, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1890`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.renameSync(tmpPath, storePath);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1900`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.unlinkSync(tmpPath);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1910`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1920`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(workspace, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1930`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(agentDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1940`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(workspace, \"hello.txt\"), \"hi\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1950`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(agentDir, \"state.json\"), \"{}\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1960`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(fakeTrashDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1970`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(settingsDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1980`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1990`
- Category: `path-resolution`
- Evidence: `"snippet": "name: params.name,",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2000`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2010`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2020`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2030`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(settingsDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2040`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2050`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2060`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(imagesDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2070`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(outsideDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2080`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(outsideFile, \"not-allowed\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2090`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(symlinkPath, { force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2100`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2110`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2120`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2130`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2140`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2150`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2160`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2170`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2180`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2190`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

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

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2220`
- Category: `path-resolution`
- Evidence: `"snippet": "received.push({ __connect: true, path: url.pathname, token: url.searchParams.get(\"token\") });",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2230`
- Category: `path-resolution`
- Evidence: `"snippet": "expect(url.searchParams.get(\"channel\")).toBe(\"hermes3d\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2240`
- Category: `path-resolution`
- Evidence: `"snippet": "expect(url.searchParams.get(\"token\")).toBe(\"secret\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2250`
- Category: `path-resolution`
- Evidence: `"snippet": "expect(url.searchParams.has(\"token\")).toBe(false);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2260`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.join(tempHome, \"Documents\"), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2270`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.join(tempHome, \"Downloads\"), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2280`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(tempHome, \"Doc.txt\"), \"doc\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2290`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(tempHome, \"Notes.txt\"), \"notes\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2300`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(tempHome, \".secret\"), \"hidden\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2310`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(home, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2410`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2420`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(storePath, \"{invalid json!!!\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2430`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(skillDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2440`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(skillDir, \"SKILL.md\"), \"# skill\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2450`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(workspaceSkillsRoot, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2460`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(nonSkillDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2470`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(settingsDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2480`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2490`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(skillDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2500`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(skillDir, \"SKILL.md\"), \"# skill\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2510`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(storeDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2520`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2530`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2540`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2550`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2560`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2570`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2580`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.join(tempDir, \"hermes3d\"), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2590`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2600`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2610`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Container runtime does not declare a non-root USER

- Location: `Dockerfile`
- Category: `container`
- Review: Create a dedicated unprivileged runtime user and copy only required artifacts with appropriate ownership.

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

- Location: `src/app/api/gateway/media/route.ts:185`
- Category: `path-resolution`
- Evidence: `const { searchParams } = new URL(request.url);`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `src/app/api/gateway/media/route.ts:186`
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
| `.github/workflows/dependency-refresh.yml:31` | `actions/checkout@v5` | No |
| `.github/workflows/dependency-refresh.yml:37` | `actions/setup-node@v5` | No |
| `.github/workflows/dependency-refresh.yml:159` | `actions/upload-artifact@v7` | No |
| `.github/workflows/docker-publish.yml:26` | `actions/checkout@v4` | No |
| `.github/workflows/docker-publish.yml:29` | `docker/setup-buildx-action@v3` | No |
| `.github/workflows/docker-publish.yml:32` | `docker/login-action@v3` | No |
| `.github/workflows/docker-publish.yml:62` | `docker/build-push-action@v6` | No |
| `.github/workflows/export-audit-worktree.yml:19` | `actions/checkout@v5` | No |
| `.github/workflows/export-audit-worktree.yml:27` | `actions/upload-artifact@v4` | No |
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
