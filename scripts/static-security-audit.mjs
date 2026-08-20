import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const outputDir = path.join(root, "audit", "security");
const reportPath = path.join(outputDir, "STATIC_AUDIT.md");
const jsonPath = path.join(outputDir, "static-audit.json");

const textExtensions = new Set([
  ".cjs",
  ".css",
  ".dockerignore",
  ".env",
  ".example",
  ".gitignore",
  ".html",
  ".js",
  ".json",
  ".jsx",
  ".md",
  ".mjs",
  ".sh",
  ".toml",
  ".ts",
  ".tsx",
  ".txt",
  ".yaml",
  ".yml",
]);

const basenameTextFiles = new Set([
  "Dockerfile",
  "LICENSE",
  "Makefile",
  "Procfile",
]);

const severityRank = { critical: 0, high: 1, medium: 2, low: 3, info: 4 };
const findings = [];
const environmentVariables = new Set();
const apiRoutes = [];
const packageScripts = [];
const workflowActions = [];

const runGit = (args) =>
  execFileSync("git", args, {
    cwd: root,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });

const trackedFiles = runGit(["ls-files", "-z"])
  .split("\0")
  .filter(Boolean)
  .sort();

const stageEntries = runGit(["ls-files", "-s", "-z"])
  .split("\0")
  .filter(Boolean)
  .map((entry) => {
    const tab = entry.indexOf("\t");
    const metadata = entry.slice(0, tab).split(/\s+/);
    return {
      mode: metadata[0] ?? "",
      object: metadata[1] ?? "",
      stage: metadata[2] ?? "",
      file: entry.slice(tab + 1),
    };
  });

const addFinding = ({
  severity,
  category,
  title,
  file,
  line,
  snippet,
  blocking = false,
  recommendation,
}) => {
  findings.push({
    severity,
    category,
    title,
    file: file ?? "(repository)",
    line: line ?? null,
    snippet: snippet ?? "",
    blocking,
    recommendation: recommendation ?? "Review this boundary and document why it is required.",
  });
};

const redact = (value) =>
  String(value)
    .replace(/-----BEGIN [A-Z0-9 ]+PRIVATE KEY-----/g, "[PRIVATE KEY HEADER]")
    .replace(/\bAKIA[0-9A-Z]{16}\b/g, "AKIA[REDACTED]")
    .replace(/\b(?:gh[pousr]_[A-Za-z0-9_]{20,}|github_pat_[A-Za-z0-9_]{20,})\b/g, "[GITHUB TOKEN]")
    .replace(/\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}\b/g, "[API KEY]")
    .trim();

const isProbablyText = (file, buffer) => {
  if (buffer.includes(0)) return false;
  const base = path.basename(file);
  if (basenameTextFiles.has(base)) return true;
  const extension = path.extname(file).toLowerCase();
  if (textExtensions.has(extension)) return true;
  return buffer.length < 128 * 1024 && /^[\x09\x0A\x0D\x20-\x7E\u0080-\uFFFF]*$/u.test(buffer.toString("utf8"));
};

const patternRules = [
  {
    severity: "critical",
    category: "secret",
    title: "Private key material appears to be tracked",
    pattern: /-----BEGIN (?:RSA |EC |OPENSSH |DSA |PGP )?PRIVATE KEY-----/g,
    blocking: true,
    recommendation: "Remove the key from the repository and rotate it before any further use.",
  },
  {
    severity: "critical",
    category: "secret",
    title: "AWS access-key-shaped value appears to be tracked",
    pattern: /\bAKIA[0-9A-Z]{16}\b/g,
    blocking: true,
    recommendation: "Confirm whether this is a real key; if so, revoke it and purge it from history.",
  },
  {
    severity: "critical",
    category: "secret",
    title: "GitHub token-shaped value appears to be tracked",
    pattern: /\b(?:gh[pousr]_[A-Za-z0-9_]{20,}|github_pat_[A-Za-z0-9_]{20,})\b/g,
    blocking: true,
    recommendation: "Revoke the token and remove it from the repository history.",
  },
  {
    severity: "critical",
    category: "secret",
    title: "API-key-shaped value appears to be tracked",
    pattern: /\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}\b/g,
    blocking: true,
    recommendation: "Verify whether this is a live credential; rotate and remove it if it is.",
  },
  {
    severity: "critical",
    category: "remote-shell",
    title: "Remote content is piped directly into a shell or interpreter",
    pattern: /(?:curl|wget)[^\n|]{0,300}\|\s*(?:ba)?sh\b|(?:curl|wget)[^\n|]{0,300}\|\s*(?:node|python\d*|ruby|perl)\b/g,
    blocking: true,
    recommendation: "Download, checksum, inspect, and execute pinned content in separate steps.",
  },
  {
    severity: "high",
    category: "dynamic-code",
    title: "Dynamic code evaluation boundary",
    pattern: /\b(?:eval\s*\(|new\s+Function\s*\(|vm\.(?:runIn|runInNew|runInThis|compileFunction))/g,
    blocking: true,
    recommendation: "Remove dynamic evaluation or constrain it to immutable trusted input with tests.",
  },
  {
    severity: "high",
    category: "transport",
    title: "TLS certificate verification appears disabled",
    pattern: /rejectUnauthorized\s*:\s*false|NODE_TLS_REJECT_UNAUTHORIZED\s*=\s*["']?0/g,
    blocking: true,
    recommendation: "Restore certificate verification and trust only an explicit certificate or CA.",
  },
  {
    severity: "high",
    category: "command-execution",
    title: "Host command-execution boundary",
    pattern: /(?:node:child_process|child_process|\bexecFileSync\s*\(|\bexecFile\s*\(|\bexecSync\s*\(|\bspawnSync\s*\(|\bspawn\s*\(|\bfork\s*\()/g,
    recommendation: "Confirm arguments are structured, shell mode is disabled, and user input cannot reach command text.",
  },
  {
    severity: "high",
    category: "command-execution",
    title: "Shell execution is explicitly enabled",
    pattern: /shell\s*:\s*true/g,
    recommendation: "Prefer direct executable/argument invocation; otherwise strictly validate every interpolated value.",
  },
  {
    severity: "high",
    category: "host-mutation",
    title: "Persistent or privileged host mutation command",
    pattern: /\b(?:sudo|launchctl|systemctl|crontab|defaults\s+write|security\s+add-trusted-cert|chmod\s+[0-7]{3,4}|chown)\b/g,
    recommendation: "Keep this opt-in, show the exact command, and avoid executing it from normal application startup.",
  },
  {
    severity: "high",
    category: "credential-access",
    title: "Sensitive host credential path is referenced",
    pattern: /(?:~\/|\/Users\/[^/]+\/|process\.env\.HOME[^\n]{0,120})?(?:\.ssh|\.aws|\.gnupg|Keychains|id_rsa|id_ed25519)/g,
    recommendation: "Remove broad credential access or scope it to an explicit user-selected file with clear consent.",
  },
  {
    severity: "medium",
    category: "filesystem-write",
    title: "Filesystem mutation boundary",
    pattern: /\b(?:writeFile|writeFileSync|appendFile|appendFileSync|rmSync|unlinkSync|renameSync|mkdirSync|chmodSync|copyFileSync)\s*\(/g,
    recommendation: "Verify canonical-path containment, symlink handling, size limits, and authorization before mutation.",
  },
  {
    severity: "medium",
    category: "network-egress",
    title: "Outbound network boundary",
    pattern: /\b(?:fetch\s*\(|https?\.request\s*\(|new\s+WebSocket\s*\(|net\.connect\s*\(|tls\.connect\s*\()/g,
    recommendation: "Require an explicit allowlist, constrain protocols, redact credentials, and set timeouts/size limits.",
  },
  {
    severity: "medium",
    category: "public-bind",
    title: "Public network bind literal",
    pattern: /["'](?:0\.0\.0\.0|::)["']/g,
    recommendation: "Default to loopback and require authentication before allowing a public bind.",
  },
  {
    severity: "medium",
    category: "path-resolution",
    title: "User-controlled path or URL input requires containment review",
    pattern: /(?:searchParams|get\(["']path["']\)|params\.(?:path|file|name)|formData\.get\(["'](?:file|path|name)["']\))/g,
    recommendation: "Normalize once, reject traversal/symlinks, and verify the real path remains under an approved root.",
  },
];

for (const entry of stageEntries) {
  if (entry.mode === "120000") {
    addFinding({
      severity: "high",
      category: "symlink",
      title: "Tracked symbolic link",
      file: entry.file,
      recommendation: "Inspect the target and ensure packaging or file APIs cannot follow it outside the repository.",
    });
  }
  if (entry.mode === "100755") {
    addFinding({
      severity: "info",
      category: "executable",
      title: "Tracked executable file",
      file: entry.file,
      recommendation: "Confirm the executable is expected and never runs automatically during install or startup.",
    });
  }
}

for (const file of trackedFiles) {
  const absolute = path.join(root, file);
  let stat;
  try {
    stat = fs.statSync(absolute);
  } catch {
    continue;
  }
  if (!stat.isFile() || stat.size > 2 * 1024 * 1024) continue;

  let buffer;
  try {
    buffer = fs.readFileSync(absolute);
  } catch {
    continue;
  }
  if (!isProbablyText(file, buffer)) continue;

  const text = buffer.toString("utf8");
  const lines = text.split(/\r?\n/);

  for (const match of text.matchAll(/process\.env\.([A-Z][A-Z0-9_]*)|process\.env\[["']([A-Z][A-Z0-9_]*)["']\]/g)) {
    environmentVariables.add(match[1] ?? match[2]);
  }

  if (/^src\/app\/api\/.+\/route\.(?:ts|js)$/.test(file)) {
    const methods = [...text.matchAll(/export\s+(?:async\s+)?function\s+(GET|POST|PUT|PATCH|DELETE|OPTIONS|HEAD)\b/g)].map(
      (match) => match[1],
    );
    apiRoutes.push({ file, methods: [...new Set(methods)].sort() });
  }

  if (/^\.github\/workflows\/.+\.ya?ml$/.test(file)) {
    for (let index = 0; index < lines.length; index += 1) {
      const match = lines[index].match(/^\s*uses:\s*([^\s#]+)\s*/);
      if (!match) continue;
      const action = match[1];
      const ref = action.includes("@") ? action.slice(action.lastIndexOf("@") + 1) : "";
      const local = action.startsWith("./");
      const pinned = local || /^[0-9a-f]{40}$/i.test(ref);
      workflowActions.push({ file, line: index + 1, action, pinned });
      if (!pinned) {
        addFinding({
          severity: "medium",
          category: "supply-chain",
          title: "GitHub Action is pinned to a movable tag instead of a commit SHA",
          file,
          line: index + 1,
          snippet: lines[index],
          recommendation: "Pin third-party actions to a reviewed full commit SHA and record the human-readable release in a comment.",
        });
      }
    }
  }

  for (const rule of patternRules) {
    for (const match of text.matchAll(rule.pattern)) {
      const prefix = text.slice(0, match.index);
      const lineNumber = prefix.split(/\r?\n/).length;
      const lineText = lines[lineNumber - 1] ?? "";
      addFinding({
        severity: rule.severity,
        category: rule.category,
        title: rule.title,
        file,
        line: lineNumber,
        snippet: redact(lineText.slice(0, 320)),
        blocking: rule.blocking,
        recommendation: rule.recommendation,
      });
    }
  }
}

const packageJsonPath = path.join(root, "package.json");
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  for (const [name, command] of Object.entries(packageJson.scripts ?? {})) {
    packageScripts.push({ name, command });
    if (["preinstall", "install", "postinstall", "prepare"].includes(name)) {
      addFinding({
        severity: "high",
        category: "install-script",
        title: `Root npm lifecycle script: ${name}`,
        file: "package.json",
        snippet: `${name}: ${command}`,
        recommendation: "Remove automatic install-time execution or make the operation explicit and independently reviewable.",
      });
    }
  }
}

for (const file of trackedFiles) {
  const base = path.basename(file);
  if ((base === ".env" || base.startsWith(".env.")) && !/(?:example|sample|template)$/i.test(base)) {
    addFinding({
      severity: "critical",
      category: "secret",
      title: "Environment file is tracked",
      file,
      blocking: true,
      recommendation: "Remove the environment file, rotate contained credentials, and keep only a redacted template.",
    });
  }
}

const dockerfile = trackedFiles.find((file) => path.basename(file) === "Dockerfile");
if (dockerfile) {
  const dockerText = fs.readFileSync(path.join(root, dockerfile), "utf8");
  if (!/^\s*USER\s+\S+/im.test(dockerText)) {
    addFinding({
      severity: "medium",
      category: "container",
      title: "Container runtime does not declare a non-root USER",
      file: dockerfile,
      recommendation: "Create a dedicated unprivileged runtime user and copy only required artifacts with appropriate ownership.",
    });
  }
  if (!/npm\s+ci[^\n]*--ignore-scripts/.test(dockerText)) {
    addFinding({
      severity: "medium",
      category: "supply-chain",
      title: "Container dependency install does not explicitly disable lifecycle scripts",
      file: dockerfile,
      recommendation: "Install with lifecycle scripts disabled, inventory required native builds, and rebuild only approved packages.",
    });
  }
}

const dedupeKey = (finding) =>
  [finding.severity, finding.category, finding.title, finding.file, finding.line, finding.snippet].join("|");
const uniqueFindings = [...new Map(findings.map((finding) => [dedupeKey(finding), finding])).values()];
uniqueFindings.sort((left, right) => {
  const severity = severityRank[left.severity] - severityRank[right.severity];
  if (severity !== 0) return severity;
  const file = left.file.localeCompare(right.file);
  if (file !== 0) return file;
  return (left.line ?? 0) - (right.line ?? 0);
});

const counts = Object.fromEntries(
  Object.keys(severityRank).map((severity) => [
    severity,
    uniqueFindings.filter((finding) => finding.severity === severity).length,
  ]),
);
const blockingFindings = uniqueFindings.filter((finding) => finding.blocking);

const formatLocation = (finding) =>
  finding.line ? `\`${finding.file}:${finding.line}\`` : `\`${finding.file}\``;

const renderFindings = (items) => {
  if (items.length === 0) return "None detected.";
  return items
    .map(
      (finding) =>
        `### ${finding.severity.toUpperCase()} — ${finding.title}\n\n` +
        `- Location: ${formatLocation(finding)}\n` +
        `- Category: \`${finding.category}\`\n` +
        `${finding.snippet ? `- Evidence: \`${finding.snippet.replace(/`/g, "\\`")}\`\n` : ""}` +
        `- Review: ${finding.recommendation}`,
    )
    .join("\n\n");
};

const routeRows = apiRoutes.length
  ? apiRoutes
      .sort((left, right) => left.file.localeCompare(right.file))
      .map(({ file, methods }) => `| \`${file}\` | ${methods.join(", ") || "dynamic/unknown"} |`)
      .join("\n")
  : "| None found | — |";

const envRows = [...environmentVariables].sort().length
  ? [...environmentVariables].sort().map((name) => `- \`${name}\``).join("\n")
  : "None found.";

const scriptRows = packageScripts.length
  ? packageScripts.map(({ name, command }) => `| \`${name}\` | \`${String(command).replace(/`/g, "\\`")}\` |`).join("\n")
  : "| None | — |";

const actionRows = workflowActions.length
  ? workflowActions
      .sort((left, right) => left.file.localeCompare(right.file) || left.line - right.line)
      .map(({ file, line, action, pinned }) => `| \`${file}:${line}\` | \`${action}\` | ${pinned ? "Yes" : "No"} |`)
      .join("\n")
  : "| None | — | — |";

const report = `# Static Security Audit

Generated from tracked source only. The scanner does not install dependencies, execute repository scripts, start services, or access developer credentials. Pattern matches identify review surfaces; they are not automatically proof of a vulnerability.

## Summary

- Tracked files inspected: **${trackedFiles.length}**
- API route handlers inventoried: **${apiRoutes.length}**
- Environment variable names referenced: **${environmentVariables.size}**
- Blocking findings: **${blockingFindings.length}**
- Critical: **${counts.critical}**
- High: **${counts.high}**
- Medium: **${counts.medium}**
- Low: **${counts.low}**
- Informational: **${counts.info}**

## Blocking findings

${renderFindings(blockingFindings)}

## Review findings and security-sensitive boundaries

${renderFindings(uniqueFindings.filter((finding) => !finding.blocking))}

## Server API surface

| Route file | Exported methods |
| --- | --- |
${routeRows}

## Root npm scripts

| Script | Command |
| --- | --- |
${scriptRows}

## GitHub Actions dependencies

| Location | Action | Commit-SHA pinned |
| --- | --- | --- |
${actionRows}

## Referenced environment variables

${envRows}

## Interpretation

A clean blocking result means the scanner did not find tracked credentials, direct remote-code piping, dynamic evaluation, or explicit TLS verification bypasses matching its rules. Command execution, SSH helpers, filesystem writes, network egress, API routes, and public-binding literals remain manual-review surfaces and must be evaluated in context.
`;

const output = {
  generatedAt: new Date().toISOString(),
  commit: runGit(["rev-parse", "HEAD"]).trim(),
  trackedFileCount: trackedFiles.length,
  counts,
  blockingCount: blockingFindings.length,
  findings: uniqueFindings,
  apiRoutes,
  environmentVariables: [...environmentVariables].sort(),
  packageScripts,
  workflowActions,
};

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(reportPath, report);
fs.writeFileSync(jsonPath, `${JSON.stringify(output, null, 2)}\n`);
console.log(`Static security audit: ${blockingFindings.length} blocking, ${uniqueFindings.length} total findings.`);
