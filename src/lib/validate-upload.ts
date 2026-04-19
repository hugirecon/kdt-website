/**
 * File upload validation using Google Magika.
 *
 * Magika uses an AI model to detect the true content type of a file,
 * bypassing tricks like renaming `.exe` to `.pdf`. This is our first line
 * of defense against disguised-filetype attacks on the application form,
 * candidate portal, and any other upload surface.
 *
 * See ARCHITECTURE.md § File Upload Security and
 * RECRUITMENT-INTEGRATION.md § File Upload Validation for rationale.
 */

import { Magika } from "magika";

// Map form field purpose → allowed Magika content labels
// Magika labels: https://github.com/google/magika/blob/main/docs/types_list.md
export const UPLOAD_WHITELISTS = {
  resume: new Set(["pdf", "docx", "doc", "odt", "rtf", "txt", "markdown"]),
  document: new Set([
    "pdf",
    "docx",
    "doc",
    "odt",
    "rtf",
    "txt",
    "markdown",
    "jpeg",
    "png",
    "webp",
    "heic",
    "heif",
  ]),
  image: new Set(["jpeg", "png", "webp", "gif", "heic", "heif", "tiff", "bmp", "svg"]),
  // Add more purposes as needed
} as const;

export type UploadPurpose = keyof typeof UPLOAD_WHITELISTS;

export interface ValidationResult {
  ok: boolean;
  detected: string;
  label: string;
  score: number;
  error?: string;
}

// Reuse the Magika instance across requests
let magikaPromise: Promise<Magika> | null = null;

async function getMagika(): Promise<Magika> {
  if (!magikaPromise) {
    magikaPromise = Magika.create();
  }
  return magikaPromise;
}

/**
 * Validate an uploaded file against a purpose's whitelist.
 *
 * @param bytes The raw file bytes (Uint8Array or Buffer)
 * @param purpose Which form is this for? Determines the allowed types.
 * @param maxBytes Optional max size (default 10MB)
 * @returns ValidationResult with ok flag and details
 */
export async function validateUpload(
  bytes: Uint8Array,
  purpose: UploadPurpose,
  maxBytes: number = 10 * 1024 * 1024
): Promise<ValidationResult> {
  if (bytes.length === 0) {
    return { ok: false, detected: "", label: "empty", score: 0, error: "Empty file" };
  }
  if (bytes.length > maxBytes) {
    return {
      ok: false,
      detected: "",
      label: "too-large",
      score: 0,
      error: `File too large (${bytes.length} bytes, max ${maxBytes})`,
    };
  }

  const magika = await getMagika();
  const result = await magika.identifyBytes(bytes);
  const detected = result.prediction?.output?.label || "unknown";
  const score = result.prediction?.score ?? 0;

  const whitelist = UPLOAD_WHITELISTS[purpose];
  const ok = whitelist.has(detected);

  return {
    ok,
    detected,
    label: detected,
    score,
    error: ok ? undefined : `File type "${detected}" not allowed for ${purpose} uploads`,
  };
}
