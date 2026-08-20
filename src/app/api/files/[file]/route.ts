import { constants as fsConstants } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";

import { NextResponse } from "next/server";

import { resolveStateDir } from "@/lib/hermes/paths";

export const runtime = "nodejs";

const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;
const STORED_FILE_PATTERN = /^[a-f0-9]{16,32}-[a-zA-Z0-9][a-zA-Z0-9._-]{0,150}$/;
const CONTENT_TYPE_BY_EXT: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".pdf": "application/pdf",
  ".md": "text/markdown; charset=utf-8",
  ".markdown": "text/markdown; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".csv": "text/csv; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".js": "text/plain; charset=utf-8",
  ".jsx": "text/plain; charset=utf-8",
  ".ts": "text/plain; charset=utf-8",
  ".tsx": "text/plain; charset=utf-8",
  ".py": "text/plain; charset=utf-8",
  ".rb": "text/plain; charset=utf-8",
  ".go": "text/plain; charset=utf-8",
  ".rs": "text/plain; charset=utf-8",
  ".java": "text/plain; charset=utf-8",
  ".kt": "text/plain; charset=utf-8",
  ".sql": "text/plain; charset=utf-8",
  ".html": "text/plain; charset=utf-8",
  ".css": "text/plain; charset=utf-8",
  ".yaml": "text/plain; charset=utf-8",
  ".yml": "text/plain; charset=utf-8",
  ".log": "text/plain; charset=utf-8",
};

const uploadsDir = () => path.join(resolveStateDir(), "hermes3d", "uploads");

const isWithin = (candidate: string, root: string): boolean => {
  const relative = path.relative(root, candidate);
  return relative === "" || (!relative.startsWith("..") && !path.isAbsolute(relative));
};

const safeStoredFileName = (value: string): string | null => {
  let decoded: string;
  try {
    decoded = decodeURIComponent(value);
  } catch {
    return null;
  }
  if (
    decoded !== path.basename(decoded) ||
    decoded.length > 184 ||
    !STORED_FILE_PATTERN.test(decoded)
  ) {
    return null;
  }
  return decoded;
};

const safeContentDispositionName = (fileName: string): string =>
  fileName.replace(/[^a-zA-Z0-9._-]/g, "-").slice(0, 160) || "upload";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ file: string }> }
) {
  try {
    const { file } = await params;
    const safeFile = safeStoredFileName(file);
    if (!safeFile) {
      return NextResponse.json({ error: "Invalid file path." }, { status: 400 });
    }

    const extension = path.extname(safeFile).toLowerCase();
    const contentType = CONTENT_TYPE_BY_EXT[extension];
    if (!contentType) {
      return NextResponse.json({ error: "Unsupported stored file type." }, { status: 400 });
    }

    const targetDir = uploadsDir();
    const targetDirEntry = await fs.lstat(targetDir);
    if (!targetDirEntry.isDirectory() || targetDirEntry.isSymbolicLink()) {
      throw new Error("Unsafe upload directory.");
    }

    const realUploads = await fs.realpath(targetDir);
    const targetPath = path.join(realUploads, safeFile);
    if (!isWithin(targetPath, realUploads)) {
      return NextResponse.json({ error: "Invalid file path." }, { status: 400 });
    }

    const entry = await fs.lstat(targetPath);
    if (!entry.isFile() || entry.isSymbolicLink()) {
      return NextResponse.json({ error: "File not found." }, { status: 404 });
    }
    if (entry.size < 0 || entry.size > MAX_UPLOAD_BYTES) {
      return NextResponse.json({ error: "Stored file exceeds the size limit." }, { status: 413 });
    }

    const realTarget = await fs.realpath(targetPath);
    if (!isWithin(realTarget, realUploads)) {
      return NextResponse.json({ error: "Invalid file path." }, { status: 400 });
    }

    const flags = fsConstants.O_RDONLY | (fsConstants.O_NOFOLLOW ?? 0);
    const handle = await fs.open(realTarget, flags);
    let bytes: Buffer;
    try {
      const stat = await handle.stat();
      if (!stat.isFile() || stat.size !== entry.size || stat.size > MAX_UPLOAD_BYTES) {
        throw new Error("Stored file changed during validation.");
      }
      bytes = await handle.readFile();
    } finally {
      await handle.close();
    }

    if (bytes.length !== entry.size) {
      throw new Error("Stored file size changed during read.");
    }

    return new Response(new Blob([Uint8Array.from(bytes)], { type: contentType }), {
      headers: {
        "Content-Type": contentType,
        "Content-Length": String(bytes.length),
        "Content-Disposition": `inline; filename="${safeContentDispositionName(safeFile)}"`,
        "Cache-Control": "private, no-store",
        "X-Content-Type-Options": "nosniff",
        "Content-Security-Policy": "default-src 'none'; sandbox",
        "Cross-Origin-Resource-Policy": "same-origin",
      },
    });
  } catch (error) {
    const code = error && typeof error === "object" && "code" in error ? String(error.code) : "";
    if (code === "ENOENT" || code === "ENOTDIR") {
      return NextResponse.json({ error: "File not found." }, { status: 404 });
    }
    console.error("Stored file read failed.");
    return NextResponse.json({ error: "File could not be read safely." }, { status: 500 });
  }
}
