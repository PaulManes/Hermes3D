// @vitest-environment node

import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

const ORIGINAL_ENV = { ...process.env };

let POST: typeof import("@/app/api/files/upload/route")["POST"];
let GET: typeof import("@/app/api/files/[file]/route")["GET"];

beforeAll(async () => {
  ({ POST } = await import("@/app/api/files/upload/route"));
  ({ GET } = await import("@/app/api/files/[file]/route"));
});

const uploadRequest = (file: File): Request => {
  const form = new FormData();
  form.set("file", file);
  return new Request("http://localhost/api/files/upload", {
    method: "POST",
    body: form,
  });
};

describe("local upload and stored-file routes", () => {
  let stateDir: string;
  const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

  beforeEach(() => {
    process.env = { ...ORIGINAL_ENV };
    stateDir = fs.mkdtempSync(path.join(os.tmpdir(), "hermes3d-files-"));
    process.env.HERMES_STATE_DIR = stateDir;
    consoleError.mockClear();
  });

  afterEach(() => {
    process.env = { ...ORIGINAL_ENV };
    fs.rmSync(stateDir, { recursive: true, force: true });
  });

  it("stores a valid text upload privately and serves it with safe headers", async () => {
    const response = await POST(
      uploadRequest(
        new File([JSON.stringify({ ok: true })], "../notes.json", {
          type: "application/json",
        }),
      ),
    );
    const result = (await response.json()) as {
      id: string;
      name: string;
      url: string;
      contentType: string;
      extractedText?: string;
    };

    expect(response.status).toBe(200);
    expect(result.id).toMatch(/^[a-f0-9]{32}$/);
    expect(result.name).toBe("notes.json");
    expect(result.contentType).toBe("application/json");
    expect(result.extractedText).toBe('{"ok":true}');

    const storedName = result.url.split("/").at(-1) ?? "";
    const storedPath = path.join(stateDir, "hermes3d", "uploads", storedName);
    const stat = fs.statSync(storedPath);
    expect(stat.isFile()).toBe(true);
    expect(stat.mode & 0o777).toBe(0o600);

    const download = await GET(new Request(`http://localhost${result.url}`), {
      params: Promise.resolve({ file: storedName }),
    });
    expect(download.status).toBe(200);
    expect(download.headers.get("Content-Type")).toContain("application/json");
    expect(download.headers.get("X-Content-Type-Options")).toBe("nosniff");
    expect(download.headers.get("Cross-Origin-Resource-Policy")).toBe("same-origin");
    expect(await download.text()).toBe('{"ok":true}');
  });

  it("rejects image-extension spoofing before writing a file", async () => {
    const response = await POST(
      uploadRequest(new File(["<script>alert(1)</script>"], "avatar.png", { type: "image/png" })),
    );
    const body = (await response.json()) as { error?: string };

    expect(response.status).toBe(400);
    expect(body.error).toMatch(/contents do not match/i);
    expect(fs.existsSync(path.join(stateDir, "hermes3d", "uploads"))).toBe(false);
  });

  it("rejects mismatched declared MIME types", async () => {
    const response = await POST(
      uploadRequest(new File(["hello"], "notes.txt", { type: "image/png" })),
    );
    const body = (await response.json()) as { error?: string };

    expect(response.status).toBe(400);
    expect(body.error).toMatch(/does not match/i);
  });

  it("rejects invalid JSON as a client validation error", async () => {
    const response = await POST(
      uploadRequest(new File(["{not-json"], "notes.json", { type: "application/json" })),
    );
    const body = (await response.json()) as { error?: string };

    expect(response.status).toBe(400);
    expect(body.error).toMatch(/valid JSON/i);
  });

  it("rejects a request whose declared body size exceeds the upload budget", async () => {
    const response = await POST(
      new Request("http://localhost/api/files/upload", {
        method: "POST",
        headers: {
          "content-type": "multipart/form-data; boundary=x",
          "content-length": String(11 * 1024 * 1024),
        },
        body: "--x--",
      }),
    );

    expect(response.status).toBe(413);
  });

  it("rejects path traversal and symlinked stored files", async () => {
    const traversal = await GET(new Request("http://localhost/api/files/nope"), {
      params: Promise.resolve({ file: "../0123456789abcdef-secret.txt" }),
    });
    expect(traversal.status).toBe(400);

    const uploads = path.join(stateDir, "hermes3d", "uploads");
    const outside = path.join(stateDir, "outside.txt");
    const storedName = "0123456789abcdef-linked.txt";
    fs.mkdirSync(uploads, { recursive: true });
    fs.writeFileSync(outside, "secret", "utf8");
    fs.symlinkSync(outside, path.join(uploads, storedName));

    const symlink = await GET(new Request(`http://localhost/api/files/${storedName}`), {
      params: Promise.resolve({ file: storedName }),
    });
    expect(symlink.status).toBe(404);
  });
});
