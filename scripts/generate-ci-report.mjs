import fs from "node:fs";
import path from "node:path";

const root = path.join("audit", "ci");
const logs = path.join(root, "logs");

const read = (file) => {
  try {
    return fs.readFileSync(file, "utf8").trim();
  } catch {
    return "";
  }
};

const parseCodes = (text) =>
  Object.fromEntries(
    text
      .split(/\r?\n/)
      .filter(Boolean)
      .map((line) => {
        const separator = line.indexOf("=");
        return separator === -1
          ? [line, ""]
          : [line.slice(0, separator), line.slice(separator + 1)];
      }),
  );

const tail = (name, lines = 100) => {
  const text = read(path.join(logs, name));
  if (!text) return "No log was produced.";
  return text.split(/\r?\n/).slice(-lines).join("\n");
};

const codes = parseCodes(read(path.join(root, "exit-codes.txt")));
const labels = {
  install: "Install with lifecycle scripts disabled",
  rebuild: "Explicit lifecycle rebuild",
  dependency_tree: "Dependency tree",
  audit: "npm audit",
  lint: "Lint",
  typecheck: "Typecheck",
  test: "Unit tests",
  build: "Production build",
  smoke: "Development server smoke test",
};
const logFiles = {
  install: "install.log",
  rebuild: "rebuild.log",
  dependency_tree: "dependency-tree.log",
  audit: "audit.log",
  lint: "lint.log",
  typecheck: "typecheck.log",
  test: "test.log",
  build: "build.log",
  smoke: "smoke.log",
};

const status = (code) => (String(code) === "0" ? "PASS" : "FAIL");
const rows = Object.entries(labels).map(
  ([key, label]) => `| ${label} | ${status(codes[key])} | ${codes[key] ?? "missing"} |`,
);
const failures = Object.entries(labels)
  .filter(([key]) => String(codes[key]) !== "0")
  .map(
    ([key, label]) =>
      `### ${label} — exit ${codes[key] ?? "missing"}\n\n\`\`\`text\n${tail(logFiles[key])}\n\`\`\``,
  );

const report = `# macOS Verification Report

Generated on a disposable GitHub-hosted Apple Silicon runner. No verification command in this report ran on the developer workstation.

## Toolchain

\`\`\`
${read(path.join(root, "toolchain.txt")) || "missing"}
\`\`\`

## Results

| Gate | Result | Exit code |
| --- | --- | ---: |
${rows.join("\n")}

## Failure diagnostics

${failures.length > 0 ? failures.join("\n\n") : "All macOS verification gates passed."}

## Raw evidence

The workflow artifact \`hermes3d-macos-verification\` contains every full log and the exit-code record.
`;

fs.mkdirSync(root, { recursive: true });
fs.writeFileSync(path.join(root, "MACOS.md"), report);
