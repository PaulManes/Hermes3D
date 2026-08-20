# Static Security Audit

Generated from tracked source only. The scanner does not install dependencies, execute repository scripts, start services, or access developer credentials. Pattern matches identify review surfaces; they are not automatically proof of a vulnerability.

## Summary

- Tracked files inspected: **634**
- API route handlers inventoried: **25**
- Environment variable names referenced: **31**
- Blocking findings: **0**
- Critical: **0**
- High: **331**
- Medium: **1394**
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
- Evidence: `- Evidence: \`- Evidence: \\`launchctl load ~/Library/LaunchAgents/dev.hermes3d.serve.plist\\`\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:90`
- Category: `host-mutation`
- Evidence: `- Evidence: \`- Evidence: \\`systemctl --user enable --now hermes-serve\\`\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:97`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`import { spawnSync } from "node:child_process";\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:104`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`return spawnSync(command, args, { encoding: "utf8" });\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:111`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`import { execFileSync } from "node:child_process";\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:118`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`const branch = execFileSync("git", ["rev-parse", "--abbrev-ref", "HEAD"], {\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:125`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`execFileSync("git", ["status", "--porcelain"], {\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:132`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`import { spawn } from "node:child_process";\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:139`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`const child = spawn(process.execPath, ["server/index.js", "--dev"], {\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:146`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`import { execFileSync } from "node:child_process";\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:153`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`execFileSync("git", args, {\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:160`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`pattern: /(?:node:child_process|child_process|\bexecFileSync\s*\(|\bexecFile\s*\(|\bexecSync\s*\(|\bspawnSync\s*\(|\bspawn\s*\(|\bfork\s*\()/g,\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:167`
- Category: `host-mutation`
- Evidence: `- Evidence: \`- Evidence: \\`pattern: /\b(?:sudo|launchctl|systemctl|crontab|defaults\s+write|security\s+add-trusted-cert|chmod\s+[0-7]{3,4}|chown)\b/g,\\`\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:174`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`pattern: /(?:~\/|\/Users\/[^/]+\/|process\.env\.HOME[^\n]{0,120})?(?:\.ssh|\.aws|\.gnupg|Keychains|id_rsa|id_ed25519)/g,\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:181`
- Category: `host-mutation`
- Evidence: `- Evidence: \`- Evidence: \\`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\\`);\\`\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:181`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\\`);\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:188`
- Category: `host-mutation`
- Evidence: `- Evidence: \`- Evidence: \\`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\\`);\\`\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:188`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\\`);\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:195`
- Category: `host-mutation`
- Evidence: `- Evidence: \`- Evidence: \\`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\\`);\\`\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:195`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\\`);\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:202`
- Category: `host-mutation`
- Evidence: `- Evidence: \`- Evidence: \\`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\\`);\\`\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:202`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\\`);\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:209`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`import * as childProcess from "node:child_process";\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:216`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`const result = childProcess.spawnSync(command, args, {\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:223`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`sshTarget: params.sshTarget,\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:230`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`sshTarget: params.sshTarget,\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:237`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`import * as childProcess from "node:child_process";\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:244`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`if (typeof params.sshPort === "number") {\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:251`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`sshArgs.push("-p", String(params.sshPort));\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:258`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`sshArgs.push(params.sshTarget, ...params.argv);\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:265`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`const result = childProcess.spawnSync("ssh", sshArgs, { ...options });\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:272`
- Category: `credential-access`
- Evidence: `- Evidence: \`- Evidence: \\`sshTarget: params.sshTarget,\\`\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:279`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`import { spawnSync } from "node:child_process";\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:286`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`vi.mock("node:child_process", () => {\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:293`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`import { spawnSync } from "node:child_process";\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:300`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`vi.mock("node:child_process", async () => {\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:307`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`const actual = await vi.importActual<typeof import("node:child_process")>(\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:314`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`"node:child_process"\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:321`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`import { spawnSync } from "node:child_process";\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:328`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`vi.mock("node:child_process", async () => {\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:335`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`const actual = await vi.importActual<typeof import("node:child_process")>(\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:342`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`"node:child_process"\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:349`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`import { spawnSync } from "node:child_process";\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:356`
- Category: `command-execution`
- Evidence: `- Evidence: \`- Evidence: \\`vi.mock("node:child_process", () => {\\`\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:363`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "id_rsa",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:370`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "id_rsa.pub",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:377`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "id_ed25519",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:384`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "id_ed25519.pub",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:391`
- Category: `host-mutation`
- Evidence: `- Evidence: \`"snippet": "launchctl load ~/Library/LaunchAgents/dev.hermes3d.serve.plist",\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:398`
- Category: `host-mutation`
- Evidence: `- Evidence: \`"snippet": "systemctl --user enable --now hermes-serve",\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:405`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "import { spawnSync } from \"node:child_process\";",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:412`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "return spawnSync(command, args, { encoding: \"utf8\" });",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:419`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "import { execFileSync } from \"node:child_process\";",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:426`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "const branch = execFileSync(\"git\", [\"rev-parse\", \"--abbrev-ref\", \"HEAD\"], {",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:433`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "execFileSync(\"git\", [\"status\", \"--porcelain\"], {",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:440`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "import { spawn } from \"node:child_process\";",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:447`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "const child = spawn(process.execPath, [\"server/index.js\", \"--dev\"], {",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:454`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "import { execFileSync } from \"node:child_process\";",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:461`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "execFileSync(\"git\", args, {",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:468`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "pattern: /(?:node:child_process|child_process|\\bexecFileSync\\s*\\(|\\bexecFile\\s*\\(|\\bexecSync\\s*\\(|\\bspawnSync\\s*\\(|\\bspawn\\s*\\(|\\bfork\\s*\\()/g,",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:475`
- Category: `host-mutation`
- Evidence: `- Evidence: \`"snippet": "pattern: /\\b(?:sudo|launchctl|systemctl|crontab|defaults\\s+write|security\\s+add-trusted-cert|chmod\\s+[0-7]{3,4}|chown)\\b/g,",\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:482`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "pattern: /(?:~\\/|\\/Users\\/[^/]+\\/|process\\.env\\.HOME[^\\n]{0,120})?(?:\\.ssh|\\.aws|\\.gnupg|Keychains|id_rsa|id_ed25519)/g,",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:489`
- Category: `host-mutation`
- Evidence: `- Evidence: \`"snippet": "console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\`);",\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:489`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\`);",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:496`
- Category: `host-mutation`
- Evidence: `- Evidence: \`"snippet": "console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\`);",\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:496`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\`);",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:503`
- Category: `host-mutation`
- Evidence: `- Evidence: \`"snippet": "console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\`);",\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:503`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\`);",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:510`
- Category: `host-mutation`
- Evidence: `- Evidence: \`"snippet": "console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\`);",\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:510`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\`);",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:517`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "import * as childProcess from \"node:child_process\";",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:524`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "const result = childProcess.spawnSync(command, args, {",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:531`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "sshTarget: params.sshTarget,",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:538`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "sshTarget: params.sshTarget,",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:545`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "import * as childProcess from \"node:child_process\";",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:552`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "if (typeof params.sshPort === \"number\") {",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:559`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "sshArgs.push(\"-p\", String(params.sshPort));",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:566`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "sshArgs.push(params.sshTarget, ...params.argv);",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:573`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "const result = childProcess.spawnSync(\"ssh\", sshArgs, { ...options });",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:580`
- Category: `credential-access`
- Evidence: `- Evidence: \`"snippet": "sshTarget: params.sshTarget,",\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:587`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "import { spawnSync } from \"node:child_process\";",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:594`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "vi.mock(\"node:child_process\", () => {",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:601`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "import { spawnSync } from \"node:child_process\";",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:608`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "vi.mock(\"node:child_process\", async () => {",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:615`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "const actual = await vi.importActual<typeof import(\"node:child_process\")>(",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:622`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "\"node:child_process\"",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:629`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "import { spawnSync } from \"node:child_process\";",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:636`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "vi.mock(\"node:child_process\", async () => {",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:643`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "const actual = await vi.importActual<typeof import(\"node:child_process\")>(",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:650`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "\"node:child_process\"",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:657`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "import { spawnSync } from \"node:child_process\";",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:664`
- Category: `command-execution`
- Evidence: `- Evidence: \`"snippet": "vi.mock(\"node:child_process\", () => {",\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:671`
- Category: `host-mutation`
- Evidence: `- Evidence: \`launchctl load ~/Library/LaunchAgents/dev.hermes3d.serve.plist\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:678`
- Category: `host-mutation`
- Evidence: `- Evidence: \`systemctl --user enable --now hermes-serve\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:685`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { spawnSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:692`
- Category: `command-execution`
- Evidence: `- Evidence: \`return spawnSync(command, args, { encoding: "utf8" });\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:699`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { execFileSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:706`
- Category: `command-execution`
- Evidence: `- Evidence: \`const branch = execFileSync("git", ["rev-parse", "--abbrev-ref", "HEAD"], {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:713`
- Category: `command-execution`
- Evidence: `- Evidence: \`execFileSync("git", ["status", "--porcelain"], {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:720`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { spawn } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:727`
- Category: `command-execution`
- Evidence: `- Evidence: \`const child = spawn(process.execPath, ["server/index.js", "--dev"], {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:734`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { execFileSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:741`
- Category: `command-execution`
- Evidence: `- Evidence: \`execFileSync("git", args, {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:748`
- Category: `command-execution`
- Evidence: `- Evidence: \`pattern: /(?:node:child_process|child_process|\bexecFileSync\s*\(|\bexecFile\s*\(|\bexecSync\s*\(|\bspawnSync\s*\(|\bspawn\s*\(|\bfork\s*\()/g,\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:755`
- Category: `host-mutation`
- Evidence: `- Evidence: \`pattern: /\b(?:sudo|launchctl|systemctl|crontab|defaults\s+write|security\s+add-trusted-cert|chmod\s+[0-7]{3,4}|chown)\b/g,\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:762`
- Category: `credential-access`
- Evidence: `- Evidence: \`pattern: /(?:~\/|\/Users\/[^/]+\/|process\.env\.HOME[^\n]{0,120})?(?:\.ssh|\.aws|\.gnupg|Keychains|id_rsa|id_ed25519)/g,\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:769`
- Category: `host-mutation`
- Evidence: `- Evidence: \`console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\`);\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:769`
- Category: `credential-access`
- Evidence: `- Evidence: \`console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\`);\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/STATIC_AUDIT.md:776`
- Category: `host-mutation`
- Evidence: `- Evidence: \`console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\`);\``
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:776`
- Category: `credential-access`
- Evidence: `- Evidence: \`console.info(\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${CERT_PATH}"\n\\`);\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:783`
- Category: `command-execution`
- Evidence: `- Evidence: \`import * as childProcess from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:790`
- Category: `command-execution`
- Evidence: `- Evidence: \`const result = childProcess.spawnSync(command, args, {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:797`
- Category: `credential-access`
- Evidence: `- Evidence: \`sshTarget: params.sshTarget,\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:804`
- Category: `credential-access`
- Evidence: `- Evidence: \`sshTarget: params.sshTarget,\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:811`
- Category: `command-execution`
- Evidence: `- Evidence: \`import * as childProcess from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:818`
- Category: `credential-access`
- Evidence: `- Evidence: \`const sshTarget = assertSafeSshTarget(params.sshTarget);\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:825`
- Category: `credential-access`
- Evidence: `- Evidence: \`params.sshPort !== undefined &&\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:832`
- Category: `credential-access`
- Evidence: `- Evidence: \`params.sshPort !== null &&\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:839`
- Category: `credential-access`
- Evidence: `- Evidence: \`(!Number.isInteger(params.sshPort) || params.sshPort < 1 || params.sshPort > 65_535)\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:846`
- Category: `credential-access`
- Evidence: `- Evidence: \`if (typeof params.sshPort === "number") {\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:853`
- Category: `credential-access`
- Evidence: `- Evidence: \`sshArgs.push("-p", String(params.sshPort));\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:860`
- Category: `command-execution`
- Evidence: `- Evidence: \`const result = childProcess.spawnSync("ssh", sshArgs, options);\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/STATIC_AUDIT.md:867`
- Category: `credential-access`
- Evidence: `- Evidence: \`sshTarget: params.sshTarget,\``
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:874`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { spawnSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:881`
- Category: `command-execution`
- Evidence: `- Evidence: \`vi.mock("node:child_process", () => {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:888`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { spawnSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:895`
- Category: `command-execution`
- Evidence: `- Evidence: \`vi.mock("node:child_process", async () => {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:902`
- Category: `command-execution`
- Evidence: `- Evidence: \`const actual = await vi.importActual<typeof import("node:child_process")>(\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:909`
- Category: `command-execution`
- Evidence: `- Evidence: \`"node:child_process"\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:916`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { spawnSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:923`
- Category: `command-execution`
- Evidence: `- Evidence: \`vi.mock("node:child_process", async () => {\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:930`
- Category: `command-execution`
- Evidence: `- Evidence: \`const actual = await vi.importActual<typeof import("node:child_process")>(\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:937`
- Category: `command-execution`
- Evidence: `- Evidence: \`"node:child_process"\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:944`
- Category: `command-execution`
- Evidence: `- Evidence: \`import { spawnSync } from "node:child_process";\``
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/STATIC_AUDIT.md:951`
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
- Evidence: `"snippet": "- Evidence: \`launchctl load ~/Library/LaunchAgents/dev.hermes3d.serve.plist\`",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:110`
- Category: `host-mutation`
- Evidence: `"snippet": "- Evidence: \`systemctl --user enable --now hermes-serve\`",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:120`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`import { spawnSync } from \"node:child_process\";\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:130`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`return spawnSync(command, args, { encoding: \"utf8\" });\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:140`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`import { execFileSync } from \"node:child_process\";\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:150`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`const branch = execFileSync(\"git\", [\"rev-parse\", \"--abbrev-ref\", \"HEAD\"], {\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:160`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`execFileSync(\"git\", [\"status\", \"--porcelain\"], {\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:170`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`import { spawn } from \"node:child_process\";\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:180`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`const child = spawn(process.execPath, [\"server/index.js\", \"--dev\"], {\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:190`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`import { execFileSync } from \"node:child_process\";\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:200`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`execFileSync(\"git\", args, {\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:210`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`pattern: /(?:node:child_process|child_process|\\bexecFileSync\\s*\\(|\\bexecFile\\s*\\(|\\bexecSync\\s*\\(|\\bspawnSync\\s*\\(|\\bspawn\\s*\\(|\\bfork\\s*\\()/g,\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:220`
- Category: `host-mutation`
- Evidence: `"snippet": "- Evidence: \`pattern: /\\b(?:sudo|launchctl|systemctl|crontab|defaults\\s+write|security\\s+add-trusted-cert|chmod\\s+[0-7]{3,4}|chown)\\b/g,\`",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:230`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`pattern: /(?:~\\/|\\/Users\\/[^/]+\\/|process\\.env\\.HOME[^\\n]{0,120})?(?:\\.ssh|\\.aws|\\.gnupg|Keychains|id_rsa|id_ed25519)/g,\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:240`
- Category: `host-mutation`
- Evidence: `"snippet": "- Evidence: \`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\\`);\`",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:240`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\\`);\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:250`
- Category: `host-mutation`
- Evidence: `"snippet": "- Evidence: \`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\\`);\`",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:250`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\\`);\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:260`
- Category: `host-mutation`
- Evidence: `"snippet": "- Evidence: \`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\\`);\`",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:260`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\\`);\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:270`
- Category: `host-mutation`
- Evidence: `"snippet": "- Evidence: \`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\\`);\`",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:270`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`console.info(\\\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\\\`);\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:280`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`import * as childProcess from \"node:child_process\";\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:290`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`const result = childProcess.spawnSync(command, args, {\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:300`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`sshTarget: params.sshTarget,\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:310`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`sshTarget: params.sshTarget,\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:320`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`import * as childProcess from \"node:child_process\";\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:330`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`if (typeof params.sshPort === \"number\") {\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:340`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`sshArgs.push(\"-p\", String(params.sshPort));\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:350`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`sshArgs.push(params.sshTarget, ...params.argv);\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:360`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`const result = childProcess.spawnSync(\"ssh\", sshArgs, { ...options });\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:370`
- Category: `credential-access`
- Evidence: `"snippet": "- Evidence: \`sshTarget: params.sshTarget,\`",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:380`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`import { spawnSync } from \"node:child_process\";\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:390`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`vi.mock(\"node:child_process\", () => {\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:400`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`import { spawnSync } from \"node:child_process\";\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:410`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`vi.mock(\"node:child_process\", async () => {\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:420`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`const actual = await vi.importActual<typeof import(\"node:child_process\")>(\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:430`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`\"node:child_process\"\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:440`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`import { spawnSync } from \"node:child_process\";\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:450`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`vi.mock(\"node:child_process\", async () => {\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:460`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`const actual = await vi.importActual<typeof import(\"node:child_process\")>(\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:470`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`\"node:child_process\"\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:480`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`import { spawnSync } from \"node:child_process\";\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:490`
- Category: `command-execution`
- Evidence: `"snippet": "- Evidence: \`vi.mock(\"node:child_process\", () => {\`",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:500`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"id_rsa\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:510`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"id_rsa.pub\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:520`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"id_ed25519\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:530`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"id_ed25519.pub\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:540`
- Category: `host-mutation`
- Evidence: `"snippet": "\"snippet\": \"launchctl load ~/Library/LaunchAgents/dev.hermes3d.serve.plist\",",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:550`
- Category: `host-mutation`
- Evidence: `"snippet": "\"snippet\": \"systemctl --user enable --now hermes-serve\",",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:560`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"import { spawnSync } from \\\"node:child_process\\\";\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:570`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"return spawnSync(command, args, { encoding: \\\"utf8\\\" });\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:580`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"import { execFileSync } from \\\"node:child_process\\\";\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:590`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"const branch = execFileSync(\\\"git\\\", [\\\"rev-parse\\\", \\\"--abbrev-ref\\\", \\\"HEAD\\\"], {\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:600`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"execFileSync(\\\"git\\\", [\\\"status\\\", \\\"--porcelain\\\"], {\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:610`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"import { spawn } from \\\"node:child_process\\\";\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:620`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"const child = spawn(process.execPath, [\\\"server/index.js\\\", \\\"--dev\\\"], {\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:630`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"import { execFileSync } from \\\"node:child_process\\\";\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:640`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"execFileSync(\\\"git\\\", args, {\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:650`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"pattern: /(?:node:child_process|child_process|\\\\bexecFileSync\\\\s*\\\\(|\\\\bexecFile\\\\s*\\\\(|\\\\bexecSync\\\\s*\\\\(|\\\\bspawnSync\\\\s*\\\\(|\\\\bspawn\\\\s*\\\\(|\\\\bfork\\\\s*\\\\()/g,\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:660`
- Category: `host-mutation`
- Evidence: `"snippet": "\"snippet\": \"pattern: /\\\\b(?:sudo|launchctl|systemctl|crontab|defaults\\\\s+write|security\\\\s+add-trusted-cert|chmod\\\\s+[0-7]{3,4}|chown)\\\\b/g,\",",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:670`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"pattern: /(?:~\\\\/|\\\\/Users\\\\/[^/]+\\\\/|process\\\\.env\\\\.HOME[^\\\\n]{0,120})?(?:\\\\.ssh|\\\\.aws|\\\\.gnupg|Keychains|id_rsa|id_ed25519)/g,\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:680`
- Category: `host-mutation`
- Evidence: `"snippet": "\"snippet\": \"console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \\\"${CERT_PATH}\\\"\\\\n\`);\",",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:680`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \\\"${CERT_PATH}\\\"\\\\n\`);\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:690`
- Category: `host-mutation`
- Evidence: `"snippet": "\"snippet\": \"console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \\\"${CERT_PATH}\\\"\\\\n\`);\",",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:690`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \\\"${CERT_PATH}\\\"\\\\n\`);\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:700`
- Category: `host-mutation`
- Evidence: `"snippet": "\"snippet\": \"console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \\\"${CERT_PATH}\\\"\\\\n\`);\",",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:700`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \\\"${CERT_PATH}\\\"\\\\n\`);\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:710`
- Category: `host-mutation`
- Evidence: `"snippet": "\"snippet\": \"console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \\\"${CERT_PATH}\\\"\\\\n\`);\",",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:710`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \\\"${CERT_PATH}\\\"\\\\n\`);\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:720`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"import * as childProcess from \\\"node:child_process\\\";\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:730`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"const result = childProcess.spawnSync(command, args, {\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:740`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"sshTarget: params.sshTarget,\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:750`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"sshTarget: params.sshTarget,\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:760`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"import * as childProcess from \\\"node:child_process\\\";\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:770`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"if (typeof params.sshPort === \\\"number\\\") {\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:780`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"sshArgs.push(\\\"-p\\\", String(params.sshPort));\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:790`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"sshArgs.push(params.sshTarget, ...params.argv);\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:800`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"const result = childProcess.spawnSync(\\\"ssh\\\", sshArgs, { ...options });\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:810`
- Category: `credential-access`
- Evidence: `"snippet": "\"snippet\": \"sshTarget: params.sshTarget,\",",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:820`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"import { spawnSync } from \\\"node:child_process\\\";\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:830`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"vi.mock(\\\"node:child_process\\\", () => {\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:840`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"import { spawnSync } from \\\"node:child_process\\\";\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:850`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"vi.mock(\\\"node:child_process\\\", async () => {\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:860`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"const actual = await vi.importActual<typeof import(\\\"node:child_process\\\")>(\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:870`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"\\\"node:child_process\\\"\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:880`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"import { spawnSync } from \\\"node:child_process\\\";\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:890`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"vi.mock(\\\"node:child_process\\\", async () => {\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:900`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"const actual = await vi.importActual<typeof import(\\\"node:child_process\\\")>(\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:910`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"\\\"node:child_process\\\"\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:920`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"import { spawnSync } from \\\"node:child_process\\\";\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:930`
- Category: `command-execution`
- Evidence: `"snippet": "\"snippet\": \"vi.mock(\\\"node:child_process\\\", () => {\",",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:940`
- Category: `host-mutation`
- Evidence: `"snippet": "launchctl load ~/Library/LaunchAgents/dev.hermes3d.serve.plist",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:950`
- Category: `host-mutation`
- Evidence: `"snippet": "systemctl --user enable --now hermes-serve",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:960`
- Category: `command-execution`
- Evidence: `"snippet": "import { spawnSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:970`
- Category: `command-execution`
- Evidence: `"snippet": "return spawnSync(command, args, { encoding: \"utf8\" });",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:980`
- Category: `command-execution`
- Evidence: `"snippet": "import { execFileSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:990`
- Category: `command-execution`
- Evidence: `"snippet": "const branch = execFileSync(\"git\", [\"rev-parse\", \"--abbrev-ref\", \"HEAD\"], {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1000`
- Category: `command-execution`
- Evidence: `"snippet": "execFileSync(\"git\", [\"status\", \"--porcelain\"], {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1010`
- Category: `command-execution`
- Evidence: `"snippet": "import { spawn } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1020`
- Category: `command-execution`
- Evidence: `"snippet": "const child = spawn(process.execPath, [\"server/index.js\", \"--dev\"], {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1030`
- Category: `command-execution`
- Evidence: `"snippet": "import { execFileSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1040`
- Category: `command-execution`
- Evidence: `"snippet": "execFileSync(\"git\", args, {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1050`
- Category: `command-execution`
- Evidence: `"snippet": "pattern: /(?:node:child_process|child_process|\\bexecFileSync\\s*\\(|\\bexecFile\\s*\\(|\\bexecSync\\s*\\(|\\bspawnSync\\s*\\(|\\bspawn\\s*\\(|\\bfork\\s*\\()/g,",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:1060`
- Category: `host-mutation`
- Evidence: `"snippet": "pattern: /\\b(?:sudo|launchctl|systemctl|crontab|defaults\\s+write|security\\s+add-trusted-cert|chmod\\s+[0-7]{3,4}|chown)\\b/g,",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:1070`
- Category: `credential-access`
- Evidence: `"snippet": "pattern: /(?:~\\/|\\/Users\\/[^/]+\\/|process\\.env\\.HOME[^\\n]{0,120})?(?:\\.ssh|\\.aws|\\.gnupg|Keychains|id_rsa|id_ed25519)/g,",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:1080`
- Category: `host-mutation`
- Evidence: `"snippet": "console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\`);",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:1080`
- Category: `credential-access`
- Evidence: `"snippet": "console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\`);",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Persistent or privileged host mutation command

- Location: `audit/security/static-audit.json:1090`
- Category: `host-mutation`
- Evidence: `"snippet": "console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\`);",`
- Review: Keep this opt-in, show the exact command, and avoid executing it from normal application startup.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:1090`
- Category: `credential-access`
- Evidence: `"snippet": "console.info(\`  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain \"${CERT_PATH}\"\\n\`);",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1100`
- Category: `command-execution`
- Evidence: `"snippet": "import * as childProcess from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1110`
- Category: `command-execution`
- Evidence: `"snippet": "const result = childProcess.spawnSync(command, args, {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:1120`
- Category: `credential-access`
- Evidence: `"snippet": "sshTarget: params.sshTarget,",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:1130`
- Category: `credential-access`
- Evidence: `"snippet": "sshTarget: params.sshTarget,",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1140`
- Category: `command-execution`
- Evidence: `"snippet": "import * as childProcess from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:1150`
- Category: `credential-access`
- Evidence: `"snippet": "const sshTarget = assertSafeSshTarget(params.sshTarget);",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:1160`
- Category: `credential-access`
- Evidence: `"snippet": "params.sshPort !== undefined &&",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:1170`
- Category: `credential-access`
- Evidence: `"snippet": "params.sshPort !== null &&",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:1180`
- Category: `credential-access`
- Evidence: `"snippet": "(!Number.isInteger(params.sshPort) || params.sshPort < 1 || params.sshPort > 65_535)",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:1190`
- Category: `credential-access`
- Evidence: `"snippet": "if (typeof params.sshPort === \"number\") {",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:1200`
- Category: `credential-access`
- Evidence: `"snippet": "sshArgs.push(\"-p\", String(params.sshPort));",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1210`
- Category: `command-execution`
- Evidence: `"snippet": "const result = childProcess.spawnSync(\"ssh\", sshArgs, options);",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Sensitive host credential path is referenced

- Location: `audit/security/static-audit.json:1220`
- Category: `credential-access`
- Evidence: `"snippet": "sshTarget: params.sshTarget,",`
- Review: Remove broad credential access or scope it to an explicit user-selected file with clear consent.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1230`
- Category: `command-execution`
- Evidence: `"snippet": "import { spawnSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1240`
- Category: `command-execution`
- Evidence: `"snippet": "vi.mock(\"node:child_process\", () => {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1250`
- Category: `command-execution`
- Evidence: `"snippet": "import { spawnSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1260`
- Category: `command-execution`
- Evidence: `"snippet": "vi.mock(\"node:child_process\", async () => {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1270`
- Category: `command-execution`
- Evidence: `"snippet": "const actual = await vi.importActual<typeof import(\"node:child_process\")>(",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1280`
- Category: `command-execution`
- Evidence: `"snippet": "\"node:child_process\"",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1290`
- Category: `command-execution`
- Evidence: `"snippet": "import { spawnSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1300`
- Category: `command-execution`
- Evidence: `"snippet": "vi.mock(\"node:child_process\", async () => {",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1310`
- Category: `command-execution`
- Evidence: `"snippet": "const actual = await vi.importActual<typeof import(\"node:child_process\")>(",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1320`
- Category: `command-execution`
- Evidence: `"snippet": "\"node:child_process\"",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1330`
- Category: `command-execution`
- Evidence: `"snippet": "import { spawnSync } from \"node:child_process\";",`
- Review: Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.

### HIGH — Host command-execution boundary

- Location: `audit/security/static-audit.json:1340`
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

- Location: `audit/security/STATIC_AUDIT.md:1021`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(root, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1028`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(path.join(root, "REPORT.md"), report);\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1035`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const socket = new WebSocket(url, { handshakeTimeout: timeoutMs });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1042`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch(url, { headers, signal: controller.signal });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1049`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`normalizedHost !== "0.0.0.0";\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1056`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(path.dirname(outputPath), { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1063`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(outputPath, \\\`${JSON.stringify(records, null, 2)}\n\\\`);\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1070`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const res = await fetch(url, { redirect: "manual" });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1077`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`pattern: /(?:searchParams|get\(["']path["']\)|params\.(?:path|file|name)|formData\.get\(["'](?:file|path|name)["']\))/g,\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1084`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(outputDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1091`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(reportPath, report);\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1098`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(jsonPath, \\\`${JSON.stringify(output, null, 2)}\n\\\`);\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1105`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(settingsDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1112`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1119`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`url.hostname === "127.0.0.1" || url.hostname === "::1" || url.hostname === "0.0.0.0"\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1126`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`upstreamWs = new WebSocket(upstreamUrl, {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1133`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`parsed.searchParams.set("token", token.trim());\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1140`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const ws = new WebSocket(this.url, options);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1147`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`parsed.searchParams.set("channel", channel || DEFAULT_CHANNEL);\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1154`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`parsed.searchParams.set("token", token.trim());\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1161`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const ws = new WebSocket(eventsUrl, wsOptions);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1168`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(path.dirname(HISTORY_FILE), { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1175`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(HISTORY_FILE, JSON.stringify(data, null, 2), "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1182`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(CERT_DIR, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1189`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(CERT_PATH, pems.cert);\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1196`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(KEY_PATH, pems.private);\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1203`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`: hostname === "0.0.0.0" || hostname === "::"\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1210`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`if (normalized === "0.0.0.0" || normalized === "::") {\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1217`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const file = formData.get("file");\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1224`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`await fs.writeFile(targetPath, bytes);\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1231`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const { searchParams } = new URL(request.url);\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1238`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const rawPath = (searchParams.get("path") ?? "").trim();\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1245`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch(\\\`${baseUrl}${pathname}\\\`, {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1252`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const { searchParams } = new URL(request.url);\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1259`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const rawUrl = (searchParams.get("url") ?? "").trim();\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1266`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const waitMsRaw = Number(searchParams.get("waitMs") ?? "");\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1273`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const { searchParams } = new URL(request.url);\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1280`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const repo = (searchParams.get("repo") ?? "").trim();\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1287`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const number = parsePullRequestNumber(searchParams.get("number"));\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1294`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`response = await fetch(params.layoutUrl, {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1301`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const source = url.searchParams.get("source")?.trim() || "local";\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1308`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const gatewayUrl = url.searchParams.get("gatewayUrl")?.trim() || "";\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1315`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const source = url.searchParams.get("source")?.trim() || "local";\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1322`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const workspaceId = url.searchParams.get("workspaceId")?.trim() || "default";\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1329`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const workspaceId = asString(url.searchParams.get("workspaceId")) || "default";\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1336`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const officeId = asString(url.searchParams.get("officeId"));\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1343`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`return (url.searchParams.get("gatewayUrl") ?? "").trim();\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1350`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const { searchParams } = new URL(request.url);\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1357`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const rawQuery = searchParams.get("q");\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1364`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch(\\\`${runtimeUrl}${pathname}\\\`, {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1371`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const code = url.searchParams.get("code") ?? "";\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1378`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const state = url.searchParams.get("state") ?? "";\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1385`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const error = url.searchParams.get("error") ?? "";\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1392`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch("/api/files/upload", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1399`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const searchParams = useSearchParams();\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1406`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`searchParams.get(SETTINGS_ROUTE_AGENT_ID_QUERY_PARAM)\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1413`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`[pathname, searchParams]\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1420`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch("/api/office", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1427`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch("/api/office/publish", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1434`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const searchParams = new URLSearchParams({ source: "remote" });\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1441`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`return \\\`/api/office/layout?${searchParams.toString()}\\\`;\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1448`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch(requestUrl, { cache: "no-store" });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1455`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const searchParams = new URLSearchParams({\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1462`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`return \\\`/api/office/presence?${searchParams.toString()}\\\`;\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1469`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch(requestUrl, { cache: "no-store" });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1476`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch(\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1483`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch("/api/office/github", { cache: "no-store" });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1490`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch(\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1497`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch("/api/office/github", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1504`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch("/api/office/github", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1511`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const searchParams = new URL(window.location.href).searchParams;\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1518`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`return searchParams.has("code");\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1525`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`void fetch("/api/office/call", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1532`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`void fetch("/api/office/call", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1539`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`void fetch("/api/office/text", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1546`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`void fetch("/api/office/text", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1553`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch("/api/office/remote-message", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1560`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch("/api/office/remote-handoff", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1567`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch("/api/office/voice/transcribe", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1574`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch(\\\`/api/office/browser-preview?${params.toString()}\\\`, {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1581`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`void fetch("/api/office/layout", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1588`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch("/api/office/voice/reply", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1595`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const res = await fetch("https://accounts.spotify.com/api/token", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1602`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const res = await fetch(\\\`${BASE}/me/player\\\`, { headers: headers(token) });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1609`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const res = await fetch(\\\`${BASE}/search?${params}\\\`, { headers: headers(token) });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1616`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`await fetch(\\\`${BASE}/me/player/play${params}\\\`, {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1623`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`await fetch(\\\`${BASE}/me/player/pause\\\`, { method: "PUT", headers: headers(token) });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1630`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`await fetch(\\\`${BASE}/me/player/play\\\`, { method: "PUT", headers: headers(token) });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1637`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`await fetch(\\\`${BASE}/me/player/next\\\`, { method: "POST", headers: headers(token) });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1644`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`await fetch(\\\`${BASE}/me/player/previous\\\`, { method: "POST", headers: headers(token) });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1651`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`await fetch(\\\`${BASE}/me/player/volume?${params}\\\`, { method: "PUT", headers: headers(token) });\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1658`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch("/api/office/voice/reply", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1665`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(path.dirname(dest), { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1672`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.renameSync(src, dest);\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1679`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(path.join(trashDir, "agents"), { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1686`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(path.join(trashDir, "workspaces"), { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1693`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(path.dirname(dest), { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1700`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.renameSync(src, dest);\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1707`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const trimmed = params.name.trim();\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1714`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const trimmed = params.name.trim();\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1721`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`name: params.name,\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1728`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`name: params.name,\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1735`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const entries = Object.entries(params.files).filter(\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1742`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const payload: Record<string, unknown> = { file: params.file };\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1749`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`normalized === "0.0.0.0"\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1756`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const socket = new WebSocket(gatewayUrl);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1763`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`this.ws = new WebSocket(this.opts.url);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1770`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const res = await fetch(input, init);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1777`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`return normalized === "0.0.0.0" ? "127.0.0.1" : hostname;\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1784`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`\\\`path=${params.path}\\\`,\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1791`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`parsed.searchParams.delete("source");\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1798`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(dirPath, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1805`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(resolveStorePath(), JSON.stringify(store, null, 2), "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1812`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch(presenceUrl, {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1819`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`url.searchParams.set("maxResults", "50");\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1826`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`url.searchParams.set("fields", "summary,status,assignee");\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1833`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`url.searchParams.set("jql", jql);\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1840`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch(searchUrl, {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1847`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(dirPath, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1854`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(storePath, JSON.stringify(store, null, 2), "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1861`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(dirPath, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1868`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(storePath, JSON.stringify(store, null, 2), "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1875`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`existing.name = params.name;\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1882`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`name: params.name,\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1889`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch("/api/runtime/custom", {\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1896`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`const LOOPBACK_HOSTNAMES = new Set(["localhost", "127.0.0.1", "::1", "0.0.0.0"]);\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1903`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`const fileEntries = params.files\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1910`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.rmSync(baseDir, { recursive: true, force: false });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:1917`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`name: resolveRequiredValue(params.name, "Skill name is required to install dependencies."),\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1924`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(dir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1931`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:1938`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`const LOOPBACK_HOSTNAMES = new Set(["127.0.0.1", "::1", "0.0.0.0"]);\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1945`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`return fetch(input, { ...init, signal: controller.signal }).finally(() =>\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1952`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(dirPath, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1959`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(tmpPath, JSON.stringify(store, null, 2), "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1966`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.renameSync(tmpPath, storePath);\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1973`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.unlinkSync(tmpPath);\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:1980`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const response = await fetch(\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1987`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(workspace, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:1994`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(agentDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2001`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(path.join(workspace, "hello.txt"), "hi", "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2008`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(path.join(agentDir, "state.json"), "{}", "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2015`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(fakeTrashDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2022`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(settingsDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2029`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2036`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`name: params.name,\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2043`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2050`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2057`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2064`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(settingsDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2071`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2078`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.rmSync(tempDir, { recursive: true, force: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2085`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(imagesDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2092`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(outsideDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2099`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(outsideFile, "not-allowed", "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2106`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.rmSync(symlinkPath, { force: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2113`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2120`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2127`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2134`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2141`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2148`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2155`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2162`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2169`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2176`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2183`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2190`
- Category: `network-egress`
- Evidence: `- Evidence: \`- Evidence: \\`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\\`\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2197`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`received.push({ __connect: true, path: url.pathname, token: url.searchParams.get("token") });\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2204`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`expect(url.searchParams.get("channel")).toBe("hermes3d");\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2211`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`expect(url.searchParams.get("token")).toBe("secret");\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2218`
- Category: `path-resolution`
- Evidence: `- Evidence: \`- Evidence: \\`expect(url.searchParams.has("token")).toBe(false);\\`\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2225`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(path.join(tempHome, "Documents"), { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2232`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(path.join(tempHome, "Downloads"), { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2239`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(path.join(tempHome, "Doc.txt"), "doc", "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2246`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(path.join(tempHome, "Notes.txt"), "notes", "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2253`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(path.join(tempHome, ".secret"), "hidden", "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2260`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.rmSync(home, { recursive: true, force: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:2267`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`resolveHosts({ HOST: "0.0.0.0", HOSTNAME: "example-host" } as unknown as NodeJS.ProcessEnv)\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:2274`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`).toEqual(["0.0.0.0"]);\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:2281`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`resolveHost({ HOST: "0.0.0.0", HOSTNAME: "example-host" } as unknown as NodeJS.ProcessEnv)\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:2288`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`).toBe("0.0.0.0");\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:2295`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`expect(isPublicHost("0.0.0.0")).toBe(true);\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:2302`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`expect(isPublicHost("::")).toBe(true);\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:2309`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`expect(() => assertPublicHostAllowed({ host: "0.0.0.0", studioAccessToken: "" })).toThrow(\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:2316`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`expect(() => assertPublicHostAllowed({ host: "0.0.0.0", studioAccessToken: "   " })).toThrow(\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:2323`
- Category: `public-bind`
- Evidence: `- Evidence: \`- Evidence: \\`assertPublicHostAllowed({ host: "0.0.0.0", studioAccessToken: "abc" })\\`\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2330`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.rmSync(tempDir, { recursive: true, force: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2337`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(storePath, "{invalid json!!!", "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2344`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(skillDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2351`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(path.join(skillDir, "SKILL.md"), "# skill", "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2358`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(workspaceSkillsRoot, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2365`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(nonSkillDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2372`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(settingsDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2379`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2386`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(skillDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2393`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(path.join(skillDir, "SKILL.md"), "# skill", "utf8");\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2400`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(storeDir, { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2407`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2414`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.rmSync(tempDir, { recursive: true, force: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2421`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.rmSync(tempDir, { recursive: true, force: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2428`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2435`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.rmSync(tempDir, { recursive: true, force: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2442`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2449`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.mkdirSync(path.join(tempDir, "hermes3d"), { recursive: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2456`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2463`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.writeFileSync(\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2470`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`- Evidence: \\`fs.rmSync(tempDir, { recursive: true, force: true });\\`\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2477`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(root, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2484`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(path.join(root, \"REPORT.md\"), report);",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2491`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const socket = new WebSocket(url, { handshakeTimeout: timeoutMs });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2498`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(url, { headers, signal: controller.signal });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2505`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(path.dirname(outputPath), { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2512`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(outputPath, \\`${JSON.stringify(records, null, 2)}\\n\\`);",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2519`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const res = await fetch(url, { redirect: \"manual\" });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2526`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "pattern: /(?:searchParams|get\\([\"']path[\"']\\)|params\\.(?:path|file|name)|formData\\.get\\([\"'](?:file|path|name)[\"']\\))/g,",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2533`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(outputDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2540`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(reportPath, report);",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2547`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(jsonPath, \\`${JSON.stringify(output, null, 2)}\\n\\`);",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2554`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(settingsDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2561`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2568`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "upstreamWs = new WebSocket(upstreamUrl, {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2575`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "parsed.searchParams.set(\"token\", token.trim());",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2582`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const ws = new WebSocket(this.url, options);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2589`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "parsed.searchParams.set(\"channel\", channel || DEFAULT_CHANNEL);",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2596`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "parsed.searchParams.set(\"token\", token.trim());",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2603`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const ws = new WebSocket(eventsUrl, wsOptions);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2610`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(path.dirname(HISTORY_FILE), { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2617`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(HISTORY_FILE, JSON.stringify(data, null, 2), \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2624`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(CERT_DIR, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2631`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(CERT_PATH, pems.cert);",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2638`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(KEY_PATH, pems.private);",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:2645`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "await fs.writeFile(targetPath, bytes);",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2652`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const { searchParams } = new URL(request.url);",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2659`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const rawPath = (searchParams.get(\"path\") ?? \"\").trim();",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2666`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\\`${baseUrl}${pathname}\\`, {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2673`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const { searchParams } = new URL(request.url);",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2680`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const rawUrl = (searchParams.get(\"url\") ?? \"\").trim();",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2687`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const waitMsRaw = Number(searchParams.get(\"waitMs\") ?? \"\");",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2694`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const { searchParams } = new URL(request.url);",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2701`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const repo = (searchParams.get(\"repo\") ?? \"\").trim();",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2708`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const number = parsePullRequestNumber(searchParams.get(\"number\"));",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2715`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "response = await fetch(params.layoutUrl, {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2722`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const source = url.searchParams.get(\"source\")?.trim() || \"local\";",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2729`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const gatewayUrl = url.searchParams.get(\"gatewayUrl\")?.trim() || \"\";",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2736`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const source = url.searchParams.get(\"source\")?.trim() || \"local\";",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2743`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const workspaceId = url.searchParams.get(\"workspaceId\")?.trim() || \"default\";",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2750`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const workspaceId = asString(url.searchParams.get(\"workspaceId\")) || \"default\";",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2757`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const officeId = asString(url.searchParams.get(\"officeId\"));",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2764`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "return (url.searchParams.get(\"gatewayUrl\") ?? \"\").trim();",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2771`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const { searchParams } = new URL(request.url);",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2778`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const rawQuery = searchParams.get(\"q\");",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2785`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\\`${runtimeUrl}${pathname}\\`, {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2792`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const code = url.searchParams.get(\"code\") ?? \"\";",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2799`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const state = url.searchParams.get(\"state\") ?? \"\";",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2806`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const error = url.searchParams.get(\"error\") ?? \"\";",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2813`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\"/api/files/upload\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2820`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const searchParams = useSearchParams();",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2827`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "searchParams.get(SETTINGS_ROUTE_AGENT_ID_QUERY_PARAM)",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2834`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "[pathname, searchParams]",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2841`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\"/api/office\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2848`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\"/api/office/publish\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2855`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const searchParams = new URLSearchParams({ source: \"remote\" });",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2862`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "return \\`/api/office/layout?${searchParams.toString()}\\`;",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2869`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(requestUrl, { cache: \"no-store\" });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2876`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const searchParams = new URLSearchParams({",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2883`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "return \\`/api/office/presence?${searchParams.toString()}\\`;",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2890`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(requestUrl, { cache: \"no-store\" });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2897`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2904`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\"/api/office/github\", { cache: \"no-store\" });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2911`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2918`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\"/api/office/github\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2925`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\"/api/office/github\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2932`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const searchParams = new URL(window.location.href).searchParams;",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:2939`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "return searchParams.has(\"code\");",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2946`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "void fetch(\"/api/office/call\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2953`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "void fetch(\"/api/office/call\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2960`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "void fetch(\"/api/office/text\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2967`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "void fetch(\"/api/office/text\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2974`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\"/api/office/remote-message\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2981`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\"/api/office/remote-handoff\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2988`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\"/api/office/voice/transcribe\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:2995`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\\`/api/office/browser-preview?${params.toString()}\\`, {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3002`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "void fetch(\"/api/office/layout\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3009`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\"/api/office/voice/reply\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3016`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const res = await fetch(\"https://accounts.spotify.com/api/token\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3023`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const res = await fetch(\\`${BASE}/me/player\\`, { headers: headers(token) });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3030`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const res = await fetch(\\`${BASE}/search?${params}\\`, { headers: headers(token) });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3037`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "await fetch(\\`${BASE}/me/player/play${params}\\`, {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3044`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "await fetch(\\`${BASE}/me/player/pause\\`, { method: \"PUT\", headers: headers(token) });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3051`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "await fetch(\\`${BASE}/me/player/play\\`, { method: \"PUT\", headers: headers(token) });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3058`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "await fetch(\\`${BASE}/me/player/next\\`, { method: \"POST\", headers: headers(token) });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3065`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "await fetch(\\`${BASE}/me/player/previous\\`, { method: \"POST\", headers: headers(token) });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3072`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "await fetch(\\`${BASE}/me/player/volume?${params}\\`, { method: \"PUT\", headers: headers(token) });",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3079`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\"/api/office/voice/reply\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3086`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(path.dirname(dest), { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3093`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.renameSync(src, dest);",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3100`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(path.join(trashDir, \"agents\"), { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3107`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(path.join(trashDir, \"workspaces\"), { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3114`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(path.dirname(dest), { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3121`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.renameSync(src, dest);",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3128`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const trimmed = params.name.trim();",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3135`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const trimmed = params.name.trim();",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3142`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "name: params.name,",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3149`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "name: params.name,",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3156`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const entries = Object.entries(params.files).filter(",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3163`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const payload: Record<string, unknown> = { file: params.file };",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3170`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const socket = new WebSocket(gatewayUrl);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3177`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "this.ws = new WebSocket(this.opts.url);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3184`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const res = await fetch(input, init);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3191`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "\\`path=${params.path}\\`,",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3198`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "parsed.searchParams.delete(\"source\");",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3205`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(dirPath, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3212`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(resolveStorePath(), JSON.stringify(store, null, 2), \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3219`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(presenceUrl, {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3226`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "url.searchParams.set(\"maxResults\", \"50\");",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3233`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "url.searchParams.set(\"fields\", \"summary,status,assignee\");",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3240`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "url.searchParams.set(\"jql\", jql);",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3247`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(searchUrl, {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3254`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(dirPath, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3261`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(storePath, JSON.stringify(store, null, 2), \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3268`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(dirPath, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3275`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(storePath, JSON.stringify(store, null, 2), \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3282`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "existing.name = params.name;",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3289`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "name: params.name,",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3296`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(\"/api/runtime/custom\", {",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3303`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "const fileEntries = params.files",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3310`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.rmSync(baseDir, { recursive: true, force: false });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3317`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "name: resolveRequiredValue(params.name, \"Skill name is required to install dependencies.\"),",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3324`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(dir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3331`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3338`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "return fetch(input, { ...init, signal: controller.signal }).finally(() =>",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3345`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(dirPath, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3352`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(tmpPath, JSON.stringify(store, null, 2), \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3359`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.renameSync(tmpPath, storePath);",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3366`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.unlinkSync(tmpPath);",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3373`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const response = await fetch(",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3380`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(workspace, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3387`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(agentDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3394`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(path.join(workspace, \"hello.txt\"), \"hi\", \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3401`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(path.join(agentDir, \"state.json\"), \"{}\", \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3408`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(fakeTrashDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3415`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(settingsDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3422`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3429`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "name: params.name,",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3436`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3443`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3450`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3457`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(settingsDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3464`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3471`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3478`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(imagesDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3485`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(outsideDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3492`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(outsideFile, \"not-allowed\", \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3499`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.rmSync(symlinkPath, { force: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3506`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3513`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3520`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3527`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3534`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3541`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3548`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3555`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3562`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3569`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3576`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3583`
- Category: `network-egress`
- Evidence: `- Evidence: \`"snippet": "const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);",\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3590`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "received.push({ __connect: true, path: url.pathname, token: url.searchParams.get(\"token\") });",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3597`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "expect(url.searchParams.get(\"channel\")).toBe(\"hermes3d\");",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3604`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "expect(url.searchParams.get(\"token\")).toBe(\"secret\");",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3611`
- Category: `path-resolution`
- Evidence: `- Evidence: \`"snippet": "expect(url.searchParams.has(\"token\")).toBe(false);",\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3618`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(path.join(tempHome, \"Documents\"), { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3625`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(path.join(tempHome, \"Downloads\"), { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3632`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(path.join(tempHome, \"Doc.txt\"), \"doc\", \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3639`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(path.join(tempHome, \"Notes.txt\"), \"notes\", \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3646`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(path.join(tempHome, \".secret\"), \"hidden\", \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3653`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.rmSync(home, { recursive: true, force: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3660`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3667`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(storePath, \"{invalid json!!!\", \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3674`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(skillDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3681`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(path.join(skillDir, \"SKILL.md\"), \"# skill\", \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3688`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(workspaceSkillsRoot, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3695`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(nonSkillDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3702`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(settingsDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3709`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3716`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(skillDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3723`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(path.join(skillDir, \"SKILL.md\"), \"# skill\", \"utf8\");",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3730`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(storeDir, { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3737`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3744`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3751`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3758`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3765`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3772`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3779`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.mkdirSync(path.join(tempDir, \"hermes3d\"), { recursive: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3786`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3793`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.writeFileSync(",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3800`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3813`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(root, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3820`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(root, "REPORT.md"), report);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3827`
- Category: `network-egress`
- Evidence: `- Evidence: \`const socket = new WebSocket(url, { handshakeTimeout: timeoutMs });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3834`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(url, { headers, signal: controller.signal });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:3841`
- Category: `public-bind`
- Evidence: `- Evidence: \`normalizedHost !== "0.0.0.0";\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3848`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.dirname(outputPath), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3855`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(outputPath, \\`${JSON.stringify(records, null, 2)}\n\\`);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3862`
- Category: `network-egress`
- Evidence: `- Evidence: \`const res = await fetch(url, { redirect: "manual" });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3869`
- Category: `path-resolution`
- Evidence: `- Evidence: \`pattern: /(?:searchParams|get\(["']path["']\)|params\.(?:path|file|name)|formData\.get\(["'](?:file|path|name)["']\))/g,\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3876`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(outputDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3883`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(reportPath, report);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3890`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(jsonPath, \\`${JSON.stringify(output, null, 2)}\n\\`);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3897`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(settingsDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3904`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:3911`
- Category: `public-bind`
- Evidence: `- Evidence: \`url.hostname === "127.0.0.1" || url.hostname === "::1" || url.hostname === "0.0.0.0"\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3918`
- Category: `network-egress`
- Evidence: `- Evidence: \`upstreamWs = new WebSocket(upstreamUrl, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3925`
- Category: `path-resolution`
- Evidence: `- Evidence: \`parsed.searchParams.set("token", token.trim());\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3932`
- Category: `network-egress`
- Evidence: `- Evidence: \`const ws = new WebSocket(this.url, options);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3939`
- Category: `path-resolution`
- Evidence: `- Evidence: \`parsed.searchParams.set("channel", channel || DEFAULT_CHANNEL);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:3946`
- Category: `path-resolution`
- Evidence: `- Evidence: \`parsed.searchParams.set("token", token.trim());\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:3953`
- Category: `network-egress`
- Evidence: `- Evidence: \`const ws = new WebSocket(eventsUrl, wsOptions);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3960`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.dirname(HISTORY_FILE), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3967`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(HISTORY_FILE, JSON.stringify(data, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3974`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(CERT_DIR, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3981`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(CERT_PATH, pems.cert);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:3988`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(KEY_PATH, pems.private);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:3995`
- Category: `public-bind`
- Evidence: `- Evidence: \`: hostname === "0.0.0.0" || hostname === "::"\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:4002`
- Category: `public-bind`
- Evidence: `- Evidence: \`if (normalized === "0.0.0.0" || normalized === "::") {\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4009`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const file = formData.get("file");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4016`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`await fs.writeFile(targetPath, bytes);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4023`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const { searchParams } = new URL(request.url);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4030`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const rawPath = (searchParams.get("path") ?? "").trim();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4037`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(\\`${baseUrl}${pathname}\\`, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4044`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const { searchParams } = new URL(request.url);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4051`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const rawUrl = (searchParams.get("url") ?? "").trim();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4058`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const waitMsRaw = Number(searchParams.get("waitMs") ?? "");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4065`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const { searchParams } = new URL(request.url);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4072`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const repo = (searchParams.get("repo") ?? "").trim();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4079`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const number = parsePullRequestNumber(searchParams.get("number"));\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4086`
- Category: `network-egress`
- Evidence: `- Evidence: \`response = await fetch(params.layoutUrl, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4093`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const source = url.searchParams.get("source")?.trim() || "local";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4100`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const gatewayUrl = url.searchParams.get("gatewayUrl")?.trim() || "";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4107`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const source = url.searchParams.get("source")?.trim() || "local";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4114`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const workspaceId = url.searchParams.get("workspaceId")?.trim() || "default";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4121`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const workspaceId = asString(url.searchParams.get("workspaceId")) || "default";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4128`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const officeId = asString(url.searchParams.get("officeId"));\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4135`
- Category: `path-resolution`
- Evidence: `- Evidence: \`return (url.searchParams.get("gatewayUrl") ?? "").trim();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4142`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const { searchParams } = new URL(request.url);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4149`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const rawQuery = searchParams.get("q");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4156`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(\\`${runtimeUrl}${pathname}\\`, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4163`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const code = url.searchParams.get("code") ?? "";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4170`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const state = url.searchParams.get("state") ?? "";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4177`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const error = url.searchParams.get("error") ?? "";\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4184`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/files/upload", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4191`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const searchParams = useSearchParams();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4198`
- Category: `path-resolution`
- Evidence: `- Evidence: \`searchParams.get(SETTINGS_ROUTE_AGENT_ID_QUERY_PARAM)\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4205`
- Category: `path-resolution`
- Evidence: `- Evidence: \`[pathname, searchParams]\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4212`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4219`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/publish", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4226`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const searchParams = new URLSearchParams({ source: "remote" });\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4233`
- Category: `path-resolution`
- Evidence: `- Evidence: \`return \\`/api/office/layout?${searchParams.toString()}\\`;\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4240`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(requestUrl, { cache: "no-store" });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4247`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const searchParams = new URLSearchParams({\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4254`
- Category: `path-resolution`
- Evidence: `- Evidence: \`return \\`/api/office/presence?${searchParams.toString()}\\`;\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4261`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(requestUrl, { cache: "no-store" });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4268`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4275`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/github", { cache: "no-store" });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4282`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4289`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/github", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4296`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/github", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4303`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const searchParams = new URL(window.location.href).searchParams;\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4310`
- Category: `path-resolution`
- Evidence: `- Evidence: \`return searchParams.has("code");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4317`
- Category: `network-egress`
- Evidence: `- Evidence: \`void fetch("/api/office/call", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4324`
- Category: `network-egress`
- Evidence: `- Evidence: \`void fetch("/api/office/call", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4331`
- Category: `network-egress`
- Evidence: `- Evidence: \`void fetch("/api/office/text", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4338`
- Category: `network-egress`
- Evidence: `- Evidence: \`void fetch("/api/office/text", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4345`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/remote-message", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4352`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/remote-handoff", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4359`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/voice/transcribe", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4366`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(\\`/api/office/browser-preview?${params.toString()}\\`, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4373`
- Category: `network-egress`
- Evidence: `- Evidence: \`void fetch("/api/office/layout", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4380`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/voice/reply", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4387`
- Category: `network-egress`
- Evidence: `- Evidence: \`const res = await fetch("https://accounts.spotify.com/api/token", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4394`
- Category: `network-egress`
- Evidence: `- Evidence: \`const res = await fetch(\\`${BASE}/me/player\\`, { headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4401`
- Category: `network-egress`
- Evidence: `- Evidence: \`const res = await fetch(\\`${BASE}/search?${params}\\`, { headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4408`
- Category: `network-egress`
- Evidence: `- Evidence: \`await fetch(\\`${BASE}/me/player/play${params}\\`, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4415`
- Category: `network-egress`
- Evidence: `- Evidence: \`await fetch(\\`${BASE}/me/player/pause\\`, { method: "PUT", headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4422`
- Category: `network-egress`
- Evidence: `- Evidence: \`await fetch(\\`${BASE}/me/player/play\\`, { method: "PUT", headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4429`
- Category: `network-egress`
- Evidence: `- Evidence: \`await fetch(\\`${BASE}/me/player/next\\`, { method: "POST", headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4436`
- Category: `network-egress`
- Evidence: `- Evidence: \`await fetch(\\`${BASE}/me/player/previous\\`, { method: "POST", headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4443`
- Category: `network-egress`
- Evidence: `- Evidence: \`await fetch(\\`${BASE}/me/player/volume?${params}\\`, { method: "PUT", headers: headers(token) });\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4450`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/office/voice/reply", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4457`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.dirname(dest), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4464`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.renameSync(src, dest);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4471`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.join(trashDir, "agents"), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4478`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.join(trashDir, "workspaces"), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4485`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.dirname(dest), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4492`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.renameSync(src, dest);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4499`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const trimmed = params.name.trim();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4506`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const trimmed = params.name.trim();\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4513`
- Category: `path-resolution`
- Evidence: `- Evidence: \`name: params.name,\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4520`
- Category: `path-resolution`
- Evidence: `- Evidence: \`name: params.name,\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4527`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const entries = Object.entries(params.files).filter(\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4534`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const payload: Record<string, unknown> = { file: params.file };\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:4541`
- Category: `public-bind`
- Evidence: `- Evidence: \`normalized === "0.0.0.0"\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4548`
- Category: `network-egress`
- Evidence: `- Evidence: \`const socket = new WebSocket(gatewayUrl);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4555`
- Category: `network-egress`
- Evidence: `- Evidence: \`this.ws = new WebSocket(this.opts.url);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4562`
- Category: `network-egress`
- Evidence: `- Evidence: \`const res = await fetch(input, init);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:4569`
- Category: `public-bind`
- Evidence: `- Evidence: \`return normalized === "0.0.0.0" ? "127.0.0.1" : hostname;\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4576`
- Category: `path-resolution`
- Evidence: `- Evidence: \`\\`path=${params.path}\\`,\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4583`
- Category: `path-resolution`
- Evidence: `- Evidence: \`parsed.searchParams.delete("source");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4590`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(dirPath, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4597`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(resolveStorePath(), JSON.stringify(store, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4604`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(presenceUrl, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4611`
- Category: `path-resolution`
- Evidence: `- Evidence: \`url.searchParams.set("maxResults", "50");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4618`
- Category: `path-resolution`
- Evidence: `- Evidence: \`url.searchParams.set("fields", "summary,status,assignee");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4625`
- Category: `path-resolution`
- Evidence: `- Evidence: \`url.searchParams.set("jql", jql);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4632`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(searchUrl, {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4639`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(dirPath, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4646`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(storePath, JSON.stringify(store, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4653`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(dirPath, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4660`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(storePath, JSON.stringify(store, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4667`
- Category: `path-resolution`
- Evidence: `- Evidence: \`existing.name = params.name;\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4674`
- Category: `path-resolution`
- Evidence: `- Evidence: \`name: params.name,\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4681`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch("/api/runtime/custom", {\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:4688`
- Category: `public-bind`
- Evidence: `- Evidence: \`const LOOPBACK_HOSTNAMES = new Set(["localhost", "127.0.0.1", "::1", "0.0.0.0"]);\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4695`
- Category: `path-resolution`
- Evidence: `- Evidence: \`const fileEntries = params.files\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4702`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(baseDir, { recursive: true, force: false });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4709`
- Category: `path-resolution`
- Evidence: `- Evidence: \`name: resolveRequiredValue(params.name, "Skill name is required to install dependencies."),\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4716`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(dir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4723`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:4730`
- Category: `public-bind`
- Evidence: `- Evidence: \`const LOOPBACK_HOSTNAMES = new Set(["127.0.0.1", "::1", "0.0.0.0"]);\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4737`
- Category: `network-egress`
- Evidence: `- Evidence: \`return fetch(input, { ...init, signal: controller.signal }).finally(() =>\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4744`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(dirPath, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4751`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(tmpPath, JSON.stringify(store, null, 2), "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4758`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.renameSync(tmpPath, storePath);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4765`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.unlinkSync(tmpPath);\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4772`
- Category: `network-egress`
- Evidence: `- Evidence: \`const response = await fetch(\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4779`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(workspace, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4786`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(agentDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4793`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(workspace, "hello.txt"), "hi", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4800`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(agentDir, "state.json"), "{}", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4807`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(fakeTrashDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4814`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(settingsDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4821`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4828`
- Category: `path-resolution`
- Evidence: `- Evidence: \`name: params.name,\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4835`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4842`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4849`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4856`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(settingsDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4863`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4870`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4877`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(imagesDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4884`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(outsideDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4891`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(outsideFile, "not-allowed", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:4898`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(symlinkPath, { force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4905`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4912`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4919`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4926`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4933`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4940`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4947`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4954`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4961`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4968`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4975`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/STATIC_AUDIT.md:4982`
- Category: `network-egress`
- Evidence: `- Evidence: \`const browser = new WebSocket(\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\`);\``
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4989`
- Category: `path-resolution`
- Evidence: `- Evidence: \`received.push({ __connect: true, path: url.pathname, token: url.searchParams.get("token") });\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:4996`
- Category: `path-resolution`
- Evidence: `- Evidence: \`expect(url.searchParams.get("channel")).toBe("hermes3d");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:5003`
- Category: `path-resolution`
- Evidence: `- Evidence: \`expect(url.searchParams.get("token")).toBe("secret");\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/STATIC_AUDIT.md:5010`
- Category: `path-resolution`
- Evidence: `- Evidence: \`expect(url.searchParams.has("token")).toBe(false);\``
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5017`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.join(tempHome, "Documents"), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5024`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.join(tempHome, "Downloads"), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5031`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(tempHome, "Doc.txt"), "doc", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5038`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(tempHome, "Notes.txt"), "notes", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5045`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(tempHome, ".secret"), "hidden", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5052`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(home, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:5059`
- Category: `public-bind`
- Evidence: `- Evidence: \`resolveHosts({ HOST: "0.0.0.0", HOSTNAME: "example-host" } as unknown as NodeJS.ProcessEnv)\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:5066`
- Category: `public-bind`
- Evidence: `- Evidence: \`).toEqual(["0.0.0.0"]);\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:5073`
- Category: `public-bind`
- Evidence: `- Evidence: \`resolveHost({ HOST: "0.0.0.0", HOSTNAME: "example-host" } as unknown as NodeJS.ProcessEnv)\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:5080`
- Category: `public-bind`
- Evidence: `- Evidence: \`).toBe("0.0.0.0");\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:5087`
- Category: `public-bind`
- Evidence: `- Evidence: \`expect(isPublicHost("0.0.0.0")).toBe(true);\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:5094`
- Category: `public-bind`
- Evidence: `- Evidence: \`expect(isPublicHost("::")).toBe(true);\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:5101`
- Category: `public-bind`
- Evidence: `- Evidence: \`expect(() => assertPublicHostAllowed({ host: "0.0.0.0", studioAccessToken: "" })).toThrow(\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:5108`
- Category: `public-bind`
- Evidence: `- Evidence: \`expect(() => assertPublicHostAllowed({ host: "0.0.0.0", studioAccessToken: "   " })).toThrow(\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Public network bind literal

- Location: `audit/security/STATIC_AUDIT.md:5115`
- Category: `public-bind`
- Evidence: `- Evidence: \`assertPublicHostAllowed({ host: "0.0.0.0", studioAccessToken: "abc" })\``
- Review: Default to loopback and require authentication before allowing a public bind.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5122`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5129`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(storePath, "{invalid json!!!", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5136`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(skillDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5143`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(skillDir, "SKILL.md"), "# skill", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5150`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(workspaceSkillsRoot, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5157`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(nonSkillDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5164`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(settingsDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5171`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5178`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(skillDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5185`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(path.join(skillDir, "SKILL.md"), "# skill", "utf8");\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5192`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(storeDir, { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5199`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5206`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5213`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5220`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5227`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5234`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5241`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.mkdirSync(path.join(tempDir, "hermes3d"), { recursive: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5248`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5255`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.writeFileSync(\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/STATIC_AUDIT.md:5262`
- Category: `filesystem-write`
- Evidence: `- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\``
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1440`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(root, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1450`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(path.join(root, \"REPORT.md\"), report);\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1460`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const socket = new WebSocket(url, { handshakeTimeout: timeoutMs });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1470`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(url, { headers, signal: controller.signal });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1490`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(path.dirname(outputPath), { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1500`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(outputPath, \\\`${JSON.stringify(records, null, 2)}\\n\\\`);\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1510`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const res = await fetch(url, { redirect: \"manual\" });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1520`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`pattern: /(?:searchParams|get\\([\"']path[\"']\\)|params\\.(?:path|file|name)|formData\\.get\\([\"'](?:file|path|name)[\"']\\))/g,\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1530`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(outputDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1540`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(reportPath, report);\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1550`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(jsonPath, \\\`${JSON.stringify(output, null, 2)}\\n\\\`);\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1560`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(settingsDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1570`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1590`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`upstreamWs = new WebSocket(upstreamUrl, {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1600`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`parsed.searchParams.set(\"token\", token.trim());\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1610`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const ws = new WebSocket(this.url, options);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1620`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`parsed.searchParams.set(\"channel\", channel || DEFAULT_CHANNEL);\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1630`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`parsed.searchParams.set(\"token\", token.trim());\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1640`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const ws = new WebSocket(eventsUrl, wsOptions);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1650`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(path.dirname(HISTORY_FILE), { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1660`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(HISTORY_FILE, JSON.stringify(data, null, 2), \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1670`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(CERT_DIR, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1680`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(CERT_PATH, pems.cert);\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1690`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(KEY_PATH, pems.private);\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:1730`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`await fs.writeFile(targetPath, bytes);\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1740`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const { searchParams } = new URL(request.url);\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1750`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const rawPath = (searchParams.get(\"path\") ?? \"\").trim();\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1760`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\\\`${baseUrl}${pathname}\\\`, {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1770`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const { searchParams } = new URL(request.url);\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1780`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const rawUrl = (searchParams.get(\"url\") ?? \"\").trim();\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1790`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const waitMsRaw = Number(searchParams.get(\"waitMs\") ?? \"\");\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1800`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const { searchParams } = new URL(request.url);\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1810`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const repo = (searchParams.get(\"repo\") ?? \"\").trim();\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1820`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const number = parsePullRequestNumber(searchParams.get(\"number\"));\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1830`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`response = await fetch(params.layoutUrl, {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1840`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const source = url.searchParams.get(\"source\")?.trim() || \"local\";\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1850`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const gatewayUrl = url.searchParams.get(\"gatewayUrl\")?.trim() || \"\";\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1860`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const source = url.searchParams.get(\"source\")?.trim() || \"local\";\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1870`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const workspaceId = url.searchParams.get(\"workspaceId\")?.trim() || \"default\";\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1880`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const workspaceId = asString(url.searchParams.get(\"workspaceId\")) || \"default\";\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1890`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const officeId = asString(url.searchParams.get(\"officeId\"));\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1900`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`return (url.searchParams.get(\"gatewayUrl\") ?? \"\").trim();\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1910`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const { searchParams } = new URL(request.url);\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1920`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const rawQuery = searchParams.get(\"q\");\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1930`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\\\`${runtimeUrl}${pathname}\\\`, {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1940`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const code = url.searchParams.get(\"code\") ?? \"\";\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1950`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const state = url.searchParams.get(\"state\") ?? \"\";\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1960`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const error = url.searchParams.get(\"error\") ?? \"\";\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:1970`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\"/api/files/upload\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1980`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const searchParams = useSearchParams();\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:1990`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`searchParams.get(SETTINGS_ROUTE_AGENT_ID_QUERY_PARAM)\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2000`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`[pathname, searchParams]\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2010`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\"/api/office\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2020`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\"/api/office/publish\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2030`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const searchParams = new URLSearchParams({ source: \"remote\" });\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2040`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`return \\\`/api/office/layout?${searchParams.toString()}\\\`;\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2050`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(requestUrl, { cache: \"no-store\" });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2060`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const searchParams = new URLSearchParams({\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2070`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`return \\\`/api/office/presence?${searchParams.toString()}\\\`;\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2080`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(requestUrl, { cache: \"no-store\" });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2090`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2100`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\"/api/office/github\", { cache: \"no-store\" });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2110`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2120`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\"/api/office/github\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2130`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\"/api/office/github\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2140`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const searchParams = new URL(window.location.href).searchParams;\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2150`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`return searchParams.has(\"code\");\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2160`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`void fetch(\"/api/office/call\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2170`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`void fetch(\"/api/office/call\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2180`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`void fetch(\"/api/office/text\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2190`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`void fetch(\"/api/office/text\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2200`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\"/api/office/remote-message\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2210`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\"/api/office/remote-handoff\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2220`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\"/api/office/voice/transcribe\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2230`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\\\`/api/office/browser-preview?${params.toString()}\\\`, {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2240`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`void fetch(\"/api/office/layout\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2250`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\"/api/office/voice/reply\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2260`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const res = await fetch(\"https://accounts.spotify.com/api/token\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2270`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const res = await fetch(\\\`${BASE}/me/player\\\`, { headers: headers(token) });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2280`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const res = await fetch(\\\`${BASE}/search?${params}\\\`, { headers: headers(token) });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2290`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`await fetch(\\\`${BASE}/me/player/play${params}\\\`, {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2300`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`await fetch(\\\`${BASE}/me/player/pause\\\`, { method: \"PUT\", headers: headers(token) });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2310`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`await fetch(\\\`${BASE}/me/player/play\\\`, { method: \"PUT\", headers: headers(token) });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2320`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`await fetch(\\\`${BASE}/me/player/next\\\`, { method: \"POST\", headers: headers(token) });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2330`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`await fetch(\\\`${BASE}/me/player/previous\\\`, { method: \"POST\", headers: headers(token) });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2340`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`await fetch(\\\`${BASE}/me/player/volume?${params}\\\`, { method: \"PUT\", headers: headers(token) });\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2350`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\"/api/office/voice/reply\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2360`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(path.dirname(dest), { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2370`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.renameSync(src, dest);\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2380`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(path.join(trashDir, \"agents\"), { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2390`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(path.join(trashDir, \"workspaces\"), { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2400`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(path.dirname(dest), { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2410`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.renameSync(src, dest);\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2420`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const trimmed = params.name.trim();\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2430`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const trimmed = params.name.trim();\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2440`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`name: params.name,\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2450`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`name: params.name,\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2460`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const entries = Object.entries(params.files).filter(\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2470`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const payload: Record<string, unknown> = { file: params.file };\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2490`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const socket = new WebSocket(gatewayUrl);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2500`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`this.ws = new WebSocket(this.opts.url);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2510`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const res = await fetch(input, init);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2530`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`\\\`path=${params.path}\\\`,\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2540`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`parsed.searchParams.delete(\"source\");\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2550`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(dirPath, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2560`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(resolveStorePath(), JSON.stringify(store, null, 2), \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2570`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(presenceUrl, {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2580`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`url.searchParams.set(\"maxResults\", \"50\");\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2590`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`url.searchParams.set(\"fields\", \"summary,status,assignee\");\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2600`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`url.searchParams.set(\"jql\", jql);\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2610`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(searchUrl, {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2620`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(dirPath, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2630`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(storePath, JSON.stringify(store, null, 2), \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2640`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(dirPath, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2650`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(storePath, JSON.stringify(store, null, 2), \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2660`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`existing.name = params.name;\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2670`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`name: params.name,\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2680`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\"/api/runtime/custom\", {\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2700`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`const fileEntries = params.files\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2710`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.rmSync(baseDir, { recursive: true, force: false });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2720`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`name: resolveRequiredValue(params.name, \"Skill name is required to install dependencies.\"),\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2730`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(dir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2740`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2760`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`return fetch(input, { ...init, signal: controller.signal }).finally(() =>\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2770`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(dirPath, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2780`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(tmpPath, JSON.stringify(store, null, 2), \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2790`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.renameSync(tmpPath, storePath);\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2800`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.unlinkSync(tmpPath);\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:2810`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const response = await fetch(\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2820`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(workspace, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2830`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(agentDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2840`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(path.join(workspace, \"hello.txt\"), \"hi\", \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2850`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(path.join(agentDir, \"state.json\"), \"{}\", \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2860`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(fakeTrashDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2870`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(settingsDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2880`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:2890`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`name: params.name,\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2900`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2910`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2920`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2930`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(settingsDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2940`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2950`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2960`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(imagesDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2970`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(outsideDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2980`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(outsideFile, \"not-allowed\", \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:2990`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.rmSync(symlinkPath, { force: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3000`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3010`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3020`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3030`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3040`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3050`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3060`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3070`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3080`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3090`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3100`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3110`
- Category: `network-egress`
- Evidence: `"snippet": "- Evidence: \`const browser = new WebSocket(\\\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\\\`);\`",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3120`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`received.push({ __connect: true, path: url.pathname, token: url.searchParams.get(\"token\") });\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3130`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`expect(url.searchParams.get(\"channel\")).toBe(\"hermes3d\");\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3140`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`expect(url.searchParams.get(\"token\")).toBe(\"secret\");\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3150`
- Category: `path-resolution`
- Evidence: `"snippet": "- Evidence: \`expect(url.searchParams.has(\"token\")).toBe(false);\`",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3160`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(path.join(tempHome, \"Documents\"), { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3170`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(path.join(tempHome, \"Downloads\"), { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3180`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(path.join(tempHome, \"Doc.txt\"), \"doc\", \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3190`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(path.join(tempHome, \"Notes.txt\"), \"notes\", \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3200`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(path.join(tempHome, \".secret\"), \"hidden\", \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3210`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.rmSync(home, { recursive: true, force: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3310`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3320`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(storePath, \"{invalid json!!!\", \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3330`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(skillDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3340`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(path.join(skillDir, \"SKILL.md\"), \"# skill\", \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3350`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(workspaceSkillsRoot, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3360`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(nonSkillDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3370`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(settingsDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3380`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3390`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(skillDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3400`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(path.join(skillDir, \"SKILL.md\"), \"# skill\", \"utf8\");\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3410`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(storeDir, { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3420`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3430`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3440`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3450`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3460`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3470`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3480`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.mkdirSync(path.join(tempDir, \"hermes3d\"), { recursive: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3490`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3500`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.writeFileSync(\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3510`
- Category: `filesystem-write`
- Evidence: `"snippet": "- Evidence: \`fs.rmSync(tempDir, { recursive: true, force: true });\`",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3520`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(root, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3530`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(path.join(root, \\\"REPORT.md\\\"), report);\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3540`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const socket = new WebSocket(url, { handshakeTimeout: timeoutMs });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3550`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(url, { headers, signal: controller.signal });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3560`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(path.dirname(outputPath), { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3570`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(outputPath, \`${JSON.stringify(records, null, 2)}\\\\n\`);\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3580`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const res = await fetch(url, { redirect: \\\"manual\\\" });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3590`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"pattern: /(?:searchParams|get\\\\([\\\"']path[\\\"']\\\\)|params\\\\.(?:path|file|name)|formData\\\\.get\\\\([\\\"'](?:file|path|name)[\\\"']\\\\))/g,\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3600`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(outputDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3610`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(reportPath, report);\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3620`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(jsonPath, \`${JSON.stringify(output, null, 2)}\\\\n\`);\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3630`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(settingsDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3640`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3650`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"upstreamWs = new WebSocket(upstreamUrl, {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3660`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"parsed.searchParams.set(\\\"token\\\", token.trim());\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3670`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const ws = new WebSocket(this.url, options);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3680`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"parsed.searchParams.set(\\\"channel\\\", channel || DEFAULT_CHANNEL);\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3690`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"parsed.searchParams.set(\\\"token\\\", token.trim());\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3700`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const ws = new WebSocket(eventsUrl, wsOptions);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3710`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(path.dirname(HISTORY_FILE), { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3720`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(HISTORY_FILE, JSON.stringify(data, null, 2), \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3730`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(CERT_DIR, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3740`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(CERT_PATH, pems.cert);\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3750`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(KEY_PATH, pems.private);\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:3760`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"await fs.writeFile(targetPath, bytes);\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3770`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const { searchParams } = new URL(request.url);\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3780`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const rawPath = (searchParams.get(\\\"path\\\") ?? \\\"\\\").trim();\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3790`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\`${baseUrl}${pathname}\`, {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3800`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const { searchParams } = new URL(request.url);\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3810`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const rawUrl = (searchParams.get(\\\"url\\\") ?? \\\"\\\").trim();\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3820`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const waitMsRaw = Number(searchParams.get(\\\"waitMs\\\") ?? \\\"\\\");\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3830`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const { searchParams } = new URL(request.url);\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3840`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const repo = (searchParams.get(\\\"repo\\\") ?? \\\"\\\").trim();\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3850`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const number = parsePullRequestNumber(searchParams.get(\\\"number\\\"));\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3860`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"response = await fetch(params.layoutUrl, {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3870`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const source = url.searchParams.get(\\\"source\\\")?.trim() || \\\"local\\\";\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3880`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const gatewayUrl = url.searchParams.get(\\\"gatewayUrl\\\")?.trim() || \\\"\\\";\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3890`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const source = url.searchParams.get(\\\"source\\\")?.trim() || \\\"local\\\";\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3900`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const workspaceId = url.searchParams.get(\\\"workspaceId\\\")?.trim() || \\\"default\\\";\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3910`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const workspaceId = asString(url.searchParams.get(\\\"workspaceId\\\")) || \\\"default\\\";\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3920`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const officeId = asString(url.searchParams.get(\\\"officeId\\\"));\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3930`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"return (url.searchParams.get(\\\"gatewayUrl\\\") ?? \\\"\\\").trim();\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3940`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const { searchParams } = new URL(request.url);\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3950`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const rawQuery = searchParams.get(\\\"q\\\");\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:3960`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\`${runtimeUrl}${pathname}\`, {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3970`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const code = url.searchParams.get(\\\"code\\\") ?? \\\"\\\";\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3980`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const state = url.searchParams.get(\\\"state\\\") ?? \\\"\\\";\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:3990`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const error = url.searchParams.get(\\\"error\\\") ?? \\\"\\\";\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4000`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\\\"/api/files/upload\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4010`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const searchParams = useSearchParams();\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4020`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"searchParams.get(SETTINGS_ROUTE_AGENT_ID_QUERY_PARAM)\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4030`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"[pathname, searchParams]\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4040`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\\\"/api/office\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4050`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\\\"/api/office/publish\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4060`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const searchParams = new URLSearchParams({ source: \\\"remote\\\" });\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4070`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"return \`/api/office/layout?${searchParams.toString()}\`;\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4080`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(requestUrl, { cache: \\\"no-store\\\" });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4090`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const searchParams = new URLSearchParams({\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4100`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"return \`/api/office/presence?${searchParams.toString()}\`;\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4110`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(requestUrl, { cache: \\\"no-store\\\" });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4120`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4130`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\\\"/api/office/github\\\", { cache: \\\"no-store\\\" });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4140`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4150`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\\\"/api/office/github\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4160`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\\\"/api/office/github\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4170`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const searchParams = new URL(window.location.href).searchParams;\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4180`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"return searchParams.has(\\\"code\\\");\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4190`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"void fetch(\\\"/api/office/call\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4200`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"void fetch(\\\"/api/office/call\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4210`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"void fetch(\\\"/api/office/text\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4220`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"void fetch(\\\"/api/office/text\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4230`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\\\"/api/office/remote-message\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4240`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\\\"/api/office/remote-handoff\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4250`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\\\"/api/office/voice/transcribe\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4260`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\`/api/office/browser-preview?${params.toString()}\`, {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4270`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"void fetch(\\\"/api/office/layout\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4280`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\\\"/api/office/voice/reply\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4290`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const res = await fetch(\\\"https://accounts.spotify.com/api/token\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4300`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const res = await fetch(\`${BASE}/me/player\`, { headers: headers(token) });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4310`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const res = await fetch(\`${BASE}/search?${params}\`, { headers: headers(token) });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4320`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"await fetch(\`${BASE}/me/player/play${params}\`, {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4330`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"await fetch(\`${BASE}/me/player/pause\`, { method: \\\"PUT\\\", headers: headers(token) });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4340`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"await fetch(\`${BASE}/me/player/play\`, { method: \\\"PUT\\\", headers: headers(token) });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4350`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"await fetch(\`${BASE}/me/player/next\`, { method: \\\"POST\\\", headers: headers(token) });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4360`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"await fetch(\`${BASE}/me/player/previous\`, { method: \\\"POST\\\", headers: headers(token) });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4370`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"await fetch(\`${BASE}/me/player/volume?${params}\`, { method: \\\"PUT\\\", headers: headers(token) });\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4380`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\\\"/api/office/voice/reply\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4390`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(path.dirname(dest), { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4400`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.renameSync(src, dest);\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4410`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(path.join(trashDir, \\\"agents\\\"), { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4420`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(path.join(trashDir, \\\"workspaces\\\"), { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4430`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(path.dirname(dest), { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4440`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.renameSync(src, dest);\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4450`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const trimmed = params.name.trim();\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4460`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const trimmed = params.name.trim();\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4470`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"name: params.name,\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4480`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"name: params.name,\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4490`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const entries = Object.entries(params.files).filter(\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4500`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const payload: Record<string, unknown> = { file: params.file };\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4510`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const socket = new WebSocket(gatewayUrl);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4520`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"this.ws = new WebSocket(this.opts.url);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4530`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const res = await fetch(input, init);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4540`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"\`path=${params.path}\`,\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4550`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"parsed.searchParams.delete(\\\"source\\\");\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4560`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(dirPath, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4570`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(resolveStorePath(), JSON.stringify(store, null, 2), \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4580`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(presenceUrl, {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4590`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"url.searchParams.set(\\\"maxResults\\\", \\\"50\\\");\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4600`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"url.searchParams.set(\\\"fields\\\", \\\"summary,status,assignee\\\");\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4610`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"url.searchParams.set(\\\"jql\\\", jql);\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4620`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(searchUrl, {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4630`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(dirPath, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4640`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(storePath, JSON.stringify(store, null, 2), \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4650`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(dirPath, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4660`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(storePath, JSON.stringify(store, null, 2), \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4670`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"existing.name = params.name;\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4680`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"name: params.name,\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4690`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\\\"/api/runtime/custom\\\", {\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4700`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"const fileEntries = params.files\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4710`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.rmSync(baseDir, { recursive: true, force: false });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4720`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"name: resolveRequiredValue(params.name, \\\"Skill name is required to install dependencies.\\\"),\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4730`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(dir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4740`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4750`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"return fetch(input, { ...init, signal: controller.signal }).finally(() =>\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4760`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(dirPath, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4770`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(tmpPath, JSON.stringify(store, null, 2), \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4780`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.renameSync(tmpPath, storePath);\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4790`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.unlinkSync(tmpPath);\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4800`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const response = await fetch(\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4810`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(workspace, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4820`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(agentDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4830`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(path.join(workspace, \\\"hello.txt\\\"), \\\"hi\\\", \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4840`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(path.join(agentDir, \\\"state.json\\\"), \\\"{}\\\", \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4850`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(fakeTrashDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4860`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(settingsDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4870`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:4880`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"name: params.name,\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4890`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4900`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4910`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4920`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(settingsDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4930`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4940`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.rmSync(tempDir, { recursive: true, force: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4950`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(imagesDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4960`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(outsideDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4970`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(outsideFile, \\\"not-allowed\\\", \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:4980`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.rmSync(symlinkPath, { force: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:4990`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5000`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5010`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5020`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5030`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5040`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5050`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5060`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5070`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5080`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5090`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5100`
- Category: `network-egress`
- Evidence: `"snippet": "\"snippet\": \"const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);\",",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5110`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"received.push({ __connect: true, path: url.pathname, token: url.searchParams.get(\\\"token\\\") });\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5120`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"expect(url.searchParams.get(\\\"channel\\\")).toBe(\\\"hermes3d\\\");\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5130`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"expect(url.searchParams.get(\\\"token\\\")).toBe(\\\"secret\\\");\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5140`
- Category: `path-resolution`
- Evidence: `"snippet": "\"snippet\": \"expect(url.searchParams.has(\\\"token\\\")).toBe(false);\",",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5150`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(path.join(tempHome, \\\"Documents\\\"), { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5160`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(path.join(tempHome, \\\"Downloads\\\"), { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5170`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(path.join(tempHome, \\\"Doc.txt\\\"), \\\"doc\\\", \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5180`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(path.join(tempHome, \\\"Notes.txt\\\"), \\\"notes\\\", \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5190`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(path.join(tempHome, \\\".secret\\\"), \\\"hidden\\\", \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5200`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.rmSync(home, { recursive: true, force: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5210`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.rmSync(tempDir, { recursive: true, force: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5220`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(storePath, \\\"{invalid json!!!\\\", \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5230`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(skillDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5240`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(path.join(skillDir, \\\"SKILL.md\\\"), \\\"# skill\\\", \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5250`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(workspaceSkillsRoot, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5260`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(nonSkillDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5270`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(settingsDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5280`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5290`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(skillDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5300`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(path.join(skillDir, \\\"SKILL.md\\\"), \\\"# skill\\\", \\\"utf8\\\");\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5310`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(storeDir, { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5320`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5330`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.rmSync(tempDir, { recursive: true, force: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5340`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.rmSync(tempDir, { recursive: true, force: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5350`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5360`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.rmSync(tempDir, { recursive: true, force: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5370`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5380`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.mkdirSync(path.join(tempDir, \\\"hermes3d\\\"), { recursive: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5390`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5400`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.writeFileSync(\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5410`
- Category: `filesystem-write`
- Evidence: `"snippet": "\"snippet\": \"fs.rmSync(tempDir, { recursive: true, force: true });\",",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5430`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(root, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5440`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(root, \"REPORT.md\"), report);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5450`
- Category: `network-egress`
- Evidence: `"snippet": "const socket = new WebSocket(url, { handshakeTimeout: timeoutMs });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5460`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(url, { headers, signal: controller.signal });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5480`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.dirname(outputPath), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5490`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(outputPath, \`${JSON.stringify(records, null, 2)}\\n\`);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5500`
- Category: `network-egress`
- Evidence: `"snippet": "const res = await fetch(url, { redirect: \"manual\" });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5510`
- Category: `path-resolution`
- Evidence: `"snippet": "pattern: /(?:searchParams|get\\([\"']path[\"']\\)|params\\.(?:path|file|name)|formData\\.get\\([\"'](?:file|path|name)[\"']\\))/g,",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5520`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(outputDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5530`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(reportPath, report);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5540`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(jsonPath, \`${JSON.stringify(output, null, 2)}\\n\`);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5550`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(settingsDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5560`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5580`
- Category: `network-egress`
- Evidence: `"snippet": "upstreamWs = new WebSocket(upstreamUrl, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5590`
- Category: `path-resolution`
- Evidence: `"snippet": "parsed.searchParams.set(\"token\", token.trim());",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5600`
- Category: `network-egress`
- Evidence: `"snippet": "const ws = new WebSocket(this.url, options);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5610`
- Category: `path-resolution`
- Evidence: `"snippet": "parsed.searchParams.set(\"channel\", channel || DEFAULT_CHANNEL);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5620`
- Category: `path-resolution`
- Evidence: `"snippet": "parsed.searchParams.set(\"token\", token.trim());",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5630`
- Category: `network-egress`
- Evidence: `"snippet": "const ws = new WebSocket(eventsUrl, wsOptions);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5640`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.dirname(HISTORY_FILE), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5650`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(HISTORY_FILE, JSON.stringify(data, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5660`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(CERT_DIR, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5670`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(CERT_PATH, pems.cert);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5680`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(KEY_PATH, pems.private);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:5720`
- Category: `filesystem-write`
- Evidence: `"snippet": "await fs.writeFile(targetPath, bytes);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5730`
- Category: `path-resolution`
- Evidence: `"snippet": "const { searchParams } = new URL(request.url);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5740`
- Category: `path-resolution`
- Evidence: `"snippet": "const rawPath = (searchParams.get(\"path\") ?? \"\").trim();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5750`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\`${baseUrl}${pathname}\`, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5760`
- Category: `path-resolution`
- Evidence: `"snippet": "const { searchParams } = new URL(request.url);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5770`
- Category: `path-resolution`
- Evidence: `"snippet": "const rawUrl = (searchParams.get(\"url\") ?? \"\").trim();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5780`
- Category: `path-resolution`
- Evidence: `"snippet": "const waitMsRaw = Number(searchParams.get(\"waitMs\") ?? \"\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5790`
- Category: `path-resolution`
- Evidence: `"snippet": "const { searchParams } = new URL(request.url);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5800`
- Category: `path-resolution`
- Evidence: `"snippet": "const repo = (searchParams.get(\"repo\") ?? \"\").trim();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5810`
- Category: `path-resolution`
- Evidence: `"snippet": "const number = parsePullRequestNumber(searchParams.get(\"number\"));",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5820`
- Category: `network-egress`
- Evidence: `"snippet": "response = await fetch(params.layoutUrl, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5830`
- Category: `path-resolution`
- Evidence: `"snippet": "const source = url.searchParams.get(\"source\")?.trim() || \"local\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5840`
- Category: `path-resolution`
- Evidence: `"snippet": "const gatewayUrl = url.searchParams.get(\"gatewayUrl\")?.trim() || \"\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5850`
- Category: `path-resolution`
- Evidence: `"snippet": "const source = url.searchParams.get(\"source\")?.trim() || \"local\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5860`
- Category: `path-resolution`
- Evidence: `"snippet": "const workspaceId = url.searchParams.get(\"workspaceId\")?.trim() || \"default\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5870`
- Category: `path-resolution`
- Evidence: `"snippet": "const workspaceId = asString(url.searchParams.get(\"workspaceId\")) || \"default\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5880`
- Category: `path-resolution`
- Evidence: `"snippet": "const officeId = asString(url.searchParams.get(\"officeId\"));",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5890`
- Category: `path-resolution`
- Evidence: `"snippet": "return (url.searchParams.get(\"gatewayUrl\") ?? \"\").trim();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5900`
- Category: `path-resolution`
- Evidence: `"snippet": "const { searchParams } = new URL(request.url);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5910`
- Category: `path-resolution`
- Evidence: `"snippet": "const rawQuery = searchParams.get(\"q\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5920`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\`${runtimeUrl}${pathname}\`, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5930`
- Category: `path-resolution`
- Evidence: `"snippet": "const code = url.searchParams.get(\"code\") ?? \"\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5940`
- Category: `path-resolution`
- Evidence: `"snippet": "const state = url.searchParams.get(\"state\") ?? \"\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5950`
- Category: `path-resolution`
- Evidence: `"snippet": "const error = url.searchParams.get(\"error\") ?? \"\";",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:5960`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/files/upload\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5970`
- Category: `path-resolution`
- Evidence: `"snippet": "const searchParams = useSearchParams();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5980`
- Category: `path-resolution`
- Evidence: `"snippet": "searchParams.get(SETTINGS_ROUTE_AGENT_ID_QUERY_PARAM)",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:5990`
- Category: `path-resolution`
- Evidence: `"snippet": "[pathname, searchParams]",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6000`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6010`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/publish\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6020`
- Category: `path-resolution`
- Evidence: `"snippet": "const searchParams = new URLSearchParams({ source: \"remote\" });",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6030`
- Category: `path-resolution`
- Evidence: `"snippet": "return \`/api/office/layout?${searchParams.toString()}\`;",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6040`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(requestUrl, { cache: \"no-store\" });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6050`
- Category: `path-resolution`
- Evidence: `"snippet": "const searchParams = new URLSearchParams({",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6060`
- Category: `path-resolution`
- Evidence: `"snippet": "return \`/api/office/presence?${searchParams.toString()}\`;",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6070`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(requestUrl, { cache: \"no-store\" });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6080`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6090`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/github\", { cache: \"no-store\" });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6100`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6110`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/github\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6120`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/github\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6130`
- Category: `path-resolution`
- Evidence: `"snippet": "const searchParams = new URL(window.location.href).searchParams;",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6140`
- Category: `path-resolution`
- Evidence: `"snippet": "return searchParams.has(\"code\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6150`
- Category: `network-egress`
- Evidence: `"snippet": "void fetch(\"/api/office/call\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6160`
- Category: `network-egress`
- Evidence: `"snippet": "void fetch(\"/api/office/call\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6170`
- Category: `network-egress`
- Evidence: `"snippet": "void fetch(\"/api/office/text\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6180`
- Category: `network-egress`
- Evidence: `"snippet": "void fetch(\"/api/office/text\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6190`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/remote-message\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6200`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/remote-handoff\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6210`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/voice/transcribe\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6220`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\`/api/office/browser-preview?${params.toString()}\`, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6230`
- Category: `network-egress`
- Evidence: `"snippet": "void fetch(\"/api/office/layout\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6240`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/voice/reply\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6250`
- Category: `network-egress`
- Evidence: `"snippet": "const res = await fetch(\"https://accounts.spotify.com/api/token\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6260`
- Category: `network-egress`
- Evidence: `"snippet": "const res = await fetch(\`${BASE}/me/player\`, { headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6270`
- Category: `network-egress`
- Evidence: `"snippet": "const res = await fetch(\`${BASE}/search?${params}\`, { headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6280`
- Category: `network-egress`
- Evidence: `"snippet": "await fetch(\`${BASE}/me/player/play${params}\`, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6290`
- Category: `network-egress`
- Evidence: `"snippet": "await fetch(\`${BASE}/me/player/pause\`, { method: \"PUT\", headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6300`
- Category: `network-egress`
- Evidence: `"snippet": "await fetch(\`${BASE}/me/player/play\`, { method: \"PUT\", headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6310`
- Category: `network-egress`
- Evidence: `"snippet": "await fetch(\`${BASE}/me/player/next\`, { method: \"POST\", headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6320`
- Category: `network-egress`
- Evidence: `"snippet": "await fetch(\`${BASE}/me/player/previous\`, { method: \"POST\", headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6330`
- Category: `network-egress`
- Evidence: `"snippet": "await fetch(\`${BASE}/me/player/volume?${params}\`, { method: \"PUT\", headers: headers(token) });",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6340`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/office/voice/reply\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6350`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.dirname(dest), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6360`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.renameSync(src, dest);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6370`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.join(trashDir, \"agents\"), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6380`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.join(trashDir, \"workspaces\"), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6390`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.dirname(dest), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6400`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.renameSync(src, dest);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6410`
- Category: `path-resolution`
- Evidence: `"snippet": "const trimmed = params.name.trim();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6420`
- Category: `path-resolution`
- Evidence: `"snippet": "const trimmed = params.name.trim();",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6430`
- Category: `path-resolution`
- Evidence: `"snippet": "name: params.name,",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6440`
- Category: `path-resolution`
- Evidence: `"snippet": "name: params.name,",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6450`
- Category: `path-resolution`
- Evidence: `"snippet": "const entries = Object.entries(params.files).filter(",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6460`
- Category: `path-resolution`
- Evidence: `"snippet": "const payload: Record<string, unknown> = { file: params.file };",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6480`
- Category: `network-egress`
- Evidence: `"snippet": "const socket = new WebSocket(gatewayUrl);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6490`
- Category: `network-egress`
- Evidence: `"snippet": "this.ws = new WebSocket(this.opts.url);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6500`
- Category: `network-egress`
- Evidence: `"snippet": "const res = await fetch(input, init);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6520`
- Category: `path-resolution`
- Evidence: `"snippet": "\`path=${params.path}\`,",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6530`
- Category: `path-resolution`
- Evidence: `"snippet": "parsed.searchParams.delete(\"source\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6540`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(dirPath, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6550`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(resolveStorePath(), JSON.stringify(store, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6560`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(presenceUrl, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6570`
- Category: `path-resolution`
- Evidence: `"snippet": "url.searchParams.set(\"maxResults\", \"50\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6580`
- Category: `path-resolution`
- Evidence: `"snippet": "url.searchParams.set(\"fields\", \"summary,status,assignee\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6590`
- Category: `path-resolution`
- Evidence: `"snippet": "url.searchParams.set(\"jql\", jql);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6600`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(searchUrl, {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6610`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(dirPath, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6620`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(storePath, JSON.stringify(store, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6630`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(dirPath, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6640`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(storePath, JSON.stringify(store, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6650`
- Category: `path-resolution`
- Evidence: `"snippet": "existing.name = params.name;",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6660`
- Category: `path-resolution`
- Evidence: `"snippet": "name: params.name,",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6670`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(\"/api/runtime/custom\", {",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6690`
- Category: `path-resolution`
- Evidence: `"snippet": "const fileEntries = params.files",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6700`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(baseDir, { recursive: true, force: false });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6710`
- Category: `path-resolution`
- Evidence: `"snippet": "name: resolveRequiredValue(params.name, \"Skill name is required to install dependencies.\"),",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6720`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(dir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6730`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6750`
- Category: `network-egress`
- Evidence: `"snippet": "return fetch(input, { ...init, signal: controller.signal }).finally(() =>",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6760`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(dirPath, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6770`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(tmpPath, JSON.stringify(store, null, 2), \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6780`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.renameSync(tmpPath, storePath);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6790`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.unlinkSync(tmpPath);",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6800`
- Category: `network-egress`
- Evidence: `"snippet": "const response = await fetch(",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6810`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(workspace, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6820`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(agentDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6830`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(workspace, \"hello.txt\"), \"hi\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6840`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(agentDir, \"state.json\"), \"{}\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6850`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(fakeTrashDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6860`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(settingsDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6870`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:6880`
- Category: `path-resolution`
- Evidence: `"snippet": "name: params.name,",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6890`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6900`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6910`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6920`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(settingsDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6930`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6940`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6950`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(imagesDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6960`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(outsideDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6970`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(outsideFile, \"not-allowed\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:6980`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(symlinkPath, { force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:6990`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7000`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7010`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7020`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7030`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7040`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7050`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7060`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7070`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7080`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7090`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — Outbound network boundary

- Location: `audit/security/static-audit.json:7100`
- Category: `network-egress`
- Evidence: `"snippet": "const browser = new WebSocket(\`ws://127.0.0.1:${proxyAddr.port}/api/gateway/ws\`);",`
- Review: Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:7110`
- Category: `path-resolution`
- Evidence: `"snippet": "received.push({ __connect: true, path: url.pathname, token: url.searchParams.get(\"token\") });",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:7120`
- Category: `path-resolution`
- Evidence: `"snippet": "expect(url.searchParams.get(\"channel\")).toBe(\"hermes3d\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:7130`
- Category: `path-resolution`
- Evidence: `"snippet": "expect(url.searchParams.get(\"token\")).toBe(\"secret\");",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — User-controlled path or URL input requires containment review

- Location: `audit/security/static-audit.json:7140`
- Category: `path-resolution`
- Evidence: `"snippet": "expect(url.searchParams.has(\"token\")).toBe(false);",`
- Review: Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7150`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.join(tempHome, \"Documents\"), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7160`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.join(tempHome, \"Downloads\"), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7170`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(tempHome, \"Doc.txt\"), \"doc\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7180`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(tempHome, \"Notes.txt\"), \"notes\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7190`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(tempHome, \".secret\"), \"hidden\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7200`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(home, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7300`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7310`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(storePath, \"{invalid json!!!\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7320`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(skillDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7330`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(skillDir, \"SKILL.md\"), \"# skill\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7340`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(workspaceSkillsRoot, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7350`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(nonSkillDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7360`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(settingsDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7370`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7380`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(skillDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7390`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(path.join(skillDir, \"SKILL.md\"), \"# skill\", \"utf8\");",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7400`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(storeDir, { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7410`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7420`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7430`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7440`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7450`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.rmSync(tempDir, { recursive: true, force: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7460`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7470`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.mkdirSync(path.join(tempDir, \"hermes3d\"), { recursive: true });",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7480`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7490`
- Category: `filesystem-write`
- Evidence: `"snippet": "fs.writeFileSync(",`
- Review: Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.

### MEDIUM — Filesystem mutation boundary

- Location: `audit/security/static-audit.json:7500`
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
