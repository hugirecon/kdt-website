import { NextRequest, NextResponse } from "next/server";
import { validateUpload } from "@/lib/validate-upload";

// Max resume size: 10 MB
const MAX_BYTES = 10 * 1024 * 1024;

export const runtime = "nodejs";

/**
 * POST /api/upload/resume
 *
 * Accepts a single file as multipart/form-data (field: "file").
 * Validates the file with Google Magika before accepting it. Disguised
 * files (e.g., .exe renamed to .pdf) are rejected here, never reach disk.
 *
 * Returns a token the client can reference in the application form.
 * In the current implementation, the file is held in memory and a
 * reference is logged. When the Selection Specialist bot API is online,
 * this endpoint will forward validated bytes directly to it.
 */
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || typeof file === "string") {
      return NextResponse.json(
        { error: "Missing file in form data" },
        { status: 400 }
      );
    }

    const bytes = new Uint8Array(await (file as File).arrayBuffer());

    const result = await validateUpload(bytes, "resume", MAX_BYTES);

    if (!result.ok) {
      console.warn(
        `[Resume Upload] REJECTED — filename="${(file as File).name}" detected="${result.detected}" score=${result.score} error="${result.error}"`
      );
      return NextResponse.json(
        {
          error: result.error || "File type not allowed",
          detected: result.detected,
        },
        { status: 400 }
      );
    }

    // Validated. Log and return a placeholder token.
    // TODO: forward to Selection Specialist bot API when online, or
    // upload to secure object storage (S3, R2) here.
    const token = `resume_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    console.log(
      `[Resume Upload] ACCEPTED — filename="${(file as File).name}" detected="${result.detected}" bytes=${bytes.length} token=${token}`
    );

    return NextResponse.json({
      success: true,
      token,
      filename: (file as File).name,
      detected: result.detected,
      size: bytes.length,
    });
  } catch (error) {
    console.error("[Resume Upload] Error:", error);
    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}
