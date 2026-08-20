import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const nodeModulesRoot = path.join(projectRoot, "node_modules");
const lifecycleNames = new Set([
  "preinstall",
  "install",
  "postinstall",
  "preprepare",
  "prepare",
  "postprepare",
]);

const records = [];
const seenManifests = new Set();

const readManifest = (packageDir) => {
  const manifestPath = path.join(packageDir, "package.json");
  if (!fs.existsSync(manifestPath)) return;

  let realManifestPath;
  try {
    realManifestPath = fs.realpathSync(manifestPath);
  } catch {
    realManifestPath = manifestPath;
  }
  if (seenManifests.has(realManifestPath)) return;
  seenManifests.add(realManifestPath);

  let manifest;
  try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  } catch {
    return;
  }

  const scripts =
    manifest.scripts && typeof manifest.scripts === "object"
      ? manifest.scripts
      : {};
  const lifecycleScripts = Object.fromEntries(
    Object.entries(scripts)
      .filter(([name, command]) => lifecycleNames.has(name) && typeof command === "string")
      .sort(([left], [right]) => left.localeCompare(right)),
  );

  if (Object.keys(lifecycleScripts).length > 0) {
    records.push({
      name: typeof manifest.name === "string" ? manifest.name : "(unnamed)",
      version: typeof manifest.version === "string" ? manifest.version : "(unknown)",
      path: path.relative(projectRoot, packageDir),
      lifecycleScripts,
    });
  }
};

const visitPackage = (packageDir) => {
  readManifest(packageDir);
  visitNodeModules(path.join(packageDir, "node_modules"));
};

const visitNodeModules = (nodeModulesDir) => {
  if (!fs.existsSync(nodeModulesDir)) return;

  let entries;
  try {
    entries = fs.readdirSync(nodeModulesDir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith(".")) continue;
    const entryPath = path.join(nodeModulesDir, entry.name);

    if (entry.name.startsWith("@")) {
      let scopedEntries;
      try {
        scopedEntries = fs.readdirSync(entryPath, { withFileTypes: true });
      } catch {
        continue;
      }
      for (const scopedEntry of scopedEntries) {
        if (!scopedEntry.isDirectory() || scopedEntry.name.startsWith(".")) continue;
        visitPackage(path.join(entryPath, scopedEntry.name));
      }
      continue;
    }

    visitPackage(entryPath);
  }
};

visitNodeModules(nodeModulesRoot);
records.sort((left, right) => {
  const byName = left.name.localeCompare(right.name);
  if (byName !== 0) return byName;
  const byVersion = left.version.localeCompare(right.version);
  if (byVersion !== 0) return byVersion;
  return left.path.localeCompare(right.path);
});

const outputPath = path.join(
  projectRoot,
  "audit",
  "dependencies",
  "packages-with-scripts.json",
);
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(records, null, 2)}\n`);
console.log(`Recorded ${records.length} packages with install-time lifecycle scripts.`);
