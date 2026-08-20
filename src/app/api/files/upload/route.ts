import crypto from "node:crypto";
import { constants as fsConstants } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";

import { NextResponse } from "next/server";

import { resolveStateDir } from "@/lib/hermes/paths";

export const runtime = "nodejs";

const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;
const MAX_MULTIPART_OVERHEAD_BYTES = 512 * 1024;
const MAX_STORED_NAME_BYTES = 180;
const CONTENT_TYPE_BY_EXT: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".txt": "text/plain",
  ".md": "text/markdown",
  ".markdown": "text/markdown",
  ".csv": "text/csv",
  ".json": "application/json",
  ".xml": "application/xml",
  ".pdf": "application/pdf",
  ".js": "text/plain",
  ".jsx": "text/plain",
  ".ts": "text/plain",
  ".tsx": "text/plain",
  ".py": "text/plain",
  ".rb": "text/plain",
  ".go": "text/plain",
  ".rs": "text/plain",
  ".java": "text/plain",
  ".kt": "text/plain",
  ".sql": "text/plain",
  ".html": "text/plain",
  ".css": "text/plain",
  ".yaml": "text/plain",
  ".yml": "text/plain",
  ".log": "text/plain",
};
const GENERIC_UPLOAD_CONTENT_TYPES = new Set(["", "application/octet-stream"]);
const TEXT_CONTENT_TYPES = new Set([
  "text/plain",
  "text/markdown",
  "text/csv",
  "application/json",
  "application/xml",
]);

const uploadsDir = () => path.join(resolveStateDir(), "hermes3d", "uploads");

const isWithin = (candidate: string, root: string): boolean => {
  const relative = path.relative(root, candidate);
  return relative === "" || (!relative.startsWith("..") && !path.isAbsolute(relative));
};

const prepareUploadsDir = async (): Promise<string> => {
  const stateDir = resolveStateDir();
  const targetDir = uploadsDir();
  await fs.mkdir(stateDir, { recursive: true, mode: 0o700 });
  await fs.mkdir(targetDir, { recursive: true, mode: 0o700 });

  const targetEntry = await fs.lstat(targetDir);
  if (!targetEntry.isDirectory() || targetEntry.isSymbolicLink()) {
    throw new Error("Upload directory is not a safe local directory.");
  }

  const [realStateDir, realTargetDir] = await Promise.all([
    fs.realpath(stateDir),
    fs.realpath(targetDir),
  ]);
  if (!isWithin(realTargetDir, realStateDir)) {
    throw new Error("Upload directory escapes the configured state directory.");
  }
  return realTargetDir;
};

const sanitizeStem = (input: string): string => {
  const cleaned = input
    .normalize("NFKC")
    .replace(/[^a-zA-Z0-9_-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 96);
  return cleaned || "upload";
};

const matchesMagic = (bytes: Buffer, extension: string): boolean => {
  switch (extension) {
    case ".png":
      return bytes.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
    case ".jpg":
    case ".jpeg":
      return bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
    case ".gif": {
      const header = bytes.subarray(0, 6).toString("ascii");
      return header === "GIF87a" || header === "GIF89a";
    }
    case ".webp":
      return (
        bytes.length >= 12 &&
        bytes.subarray(0, 4).toString("ascii") === "RIFF" &&
        bytes.subarray(8, 12).toString("ascii") === "WEBP"
      );
    case ".pdf":
      return bytes.subarray(0, 5).toString("ascii") === "%PDF-";
    default:
      return true;
  }
};

const decodeText = (bytes: Buffer): string => {
  if (bytes.includes(0)) {
    throw new Error("Text uploads may not contain NUL bytes.");
  }
  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  } catch {
    throw new Error("Text upload is not valid UTF-8.");
  }
};

const validateText = (contentType: string, bytes: Buffer): string => {
  const text = decodeText(bytes);
  if (contentType === "application/json") {
    try {
      JSON.parse(text);
    } catch {
      throw new Error("JSON upload is not valid JSON.");
    }
  }
  return text;
};

const writePrivateFile = async (targetPath: string, bytes: Buffer): Promise<void> => {
  const flags =
    fsConstants.O_WRONLY |
    fsConstants.O_CREAT |
    fsConstants.O_EXCL |
    (fsConstants.O_NOFOLLOW ?? 0);
  const handle = await fs.open(targetPath, flags, 0o600);
  try {
    await handle.writeFile(bytes);
    await handle.sync();
  } finally {
    await handle.close();
  }
};

export async function POST(request: Request) {
  try {
    const rawLength = request.headers.get("content-length")?.trim() ?? "";
    if (rawLength) {
      const contentLength = Number(rawLength);
      if (
        !Number.isSafeInteger(contentLength) ||
        contentLength < 0 ||
        contentLength > MAX_UPLOAD_BYTES + MAX_MULTIPART_OVERHEAD_BYTES
      ) {
        return NextResponse.json({ error: "Upload request is too large." }, { status: 413 });
      }
    }

    const formData = await request.formData();
    const file = formData.get("file");
    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
    }
    if (file.size <= 0) {
      return NextResponse.json({ error: "Uploaded file is empty." }, { status: 400 });
    }
    if (file.size > MAX_UPLOAD_BYTES) {
      return NextResponse.json({ error: "File exceeds 10 MB limit." }, { status: 413 });
    }

    const originalName = path.basename(file.name || "upload");
    const extension = path.extname(originalName).toLowerCase();
    const contentType = CONTENT_TYPE_BY_EXT[extension];
    if (!contentType) {
      return NextResponse.json(
        { error: `Unsupported file extension: ${extension || "(none)"}` },
        { status: 400 },
      );
    }

    const declaredContentType = file.type.trim().toLowerCase();
    if (
      !GENERIC_UPLOAD_CONTENT_TYPES.has(declaredContentType) &&
      declaredContentType !== contentType
    ) {
      return NextResponse.json(
        { error: "Declared file type does not match the file extension." },
        { status: 400 },
      );
    }

    const bytes = Buffer.from(await file.arrayBuffer());
    if (bytes.length !== file.size || bytes.length > MAX_UPLOAD_BYTES) {
      return NextResponse.json({ error: "Uploaded file size is invalid." }, { status: 400 });
    }
    if (!matchesMagic(bytes, extension)) {
      return NextResponse.json(
        { error: "File contents do not match the file extension." },
        { status: 400 },
      );
    }

    let normalizedText: string | undefined;
    if (TEXT_CONTENT_TYPES.has(contentType)) {
      normalizedText = validateText(contentType, bytes).trim();
    }

    const originalStem = path.basename(originalName, extension);
    const safeStem = sanitizeStem(originalStem);
    const fileId = crypto.randomBytes(16).toString("hex");
    const storedName = `${fileId}-${safeStem}${extension}`;
    if (Buffer.byteLength(storedName, "utf8") > MAX_STORED_NAME_BYTES) {
      throw new Error("Stored upload name is too long.");
    }

    const targetDir = await prepareUploadsDir();
    const targetPath = path.join(targetDir, storedName);
    if (!isWithin(targetPath, targetDir)) {
      throw new Error("Upload path escaped the upload directory.");
    }
    await writePrivateFile(targetPath, bytes);

    let extractedText: string | undefined;
    if (normalizedText) {
      extractedText =
        normalizedText.length > 12_000
          ? `${normalizedText.slice(0, 12_000).trimEnd()}\n[Truncated]`
          : normalizedText;
    }

    return NextResponse.json({
      id: fileId,
      name: originalName,
      url: `/api/files/${storedName}`,
      contentType,
      extractedText,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Upload failed.";
    console.error("File upload failed:", message);
    return NextResponse.json({ error: "Upload failed validation or storage." }, { status: 500 });
  }
}
