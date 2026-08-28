import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const outputDir = path.join(rootDir, "public");
const outputFile = path.join(outputDir, "build-info.json");

function getGitCommits() {
  try {
    const rawLog = execSync(
      'git log -n 10 --pretty=format:"%h%x09%s%x09%an%x09%ad" --date=iso',
      { encoding: "utf-8", cwd: rootDir, stdio: ["ignore", "pipe", "ignore"] }
    ).trim();

    if (!rawLog) return [];

    return rawLog.split("\n").map((line) => {
      const [hash, message, author, date] = line.split("\t");
      return {
        hash: hash || "unknown",
        message: message || "No message",
        author: author || "Unknown",
        date: date || new Date().toISOString(),
      };
    });
  } catch {
    return [];
  }
}

function getFallbackCommit() {
  const sha = process.env.VERCEL_GIT_COMMIT_SHA || process.env.GITHUB_SHA || "local-dev";
  const message =
    process.env.VERCEL_GIT_COMMIT_MESSAGE ||
    process.env.GITHUB_COMMIT_MESSAGE ||
    "Local development build";
  const author =
    process.env.VERCEL_GIT_COMMIT_AUTHOR_NAME ||
    process.env.GITHUB_ACTOR ||
    "Developer";

  return [
    {
      hash: sha.substring(0, 7),
      message,
      author,
      date: new Date().toISOString(),
    },
  ];
}

function getPackageVersion() {
  try {
    const pkgPath = path.join(rootDir, "package.json");
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
    return pkg.version || "0.1.0";
  } catch {
    return "0.1.0";
  }
}

function main() {
  let commits = getGitCommits();
  if (!commits || commits.length === 0) {
    commits = getFallbackCommit();
  }

  const latestCommit = commits[0] || {
    hash: "dev",
    message: "Local build",
    author: "Developer",
    date: new Date().toISOString(),
  };

  const buildInfo = {
    version: getPackageVersion(),
    buildTime: new Date().toISOString(),
    environment:
      process.env.VERCEL_ENV ||
      process.env.NODE_ENV ||
      "development",
    latestCommit,
    recentCommits: commits,
  };

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputFile, JSON.stringify(buildInfo, null, 2), "utf-8");
  console.log(`[build-info] Successfully generated build metadata to ${outputFile}`);
}

main();
