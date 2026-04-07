import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "careers@knightdivisiontactical.com";
const FROM_EMAIL = "KDT Website <onboarding@resend.dev>";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { role, ...formData } = body;

    if (!role) {
      return NextResponse.json(
        { error: "Missing role" },
        { status: 400 }
      );
    }

    const name =
      formData.fullName ||
      [formData.firstName, formData.lastName].filter(Boolean).join(" ") ||
      "Unknown";

    const isPlaceholder =
      !process.env.RESEND_API_KEY ||
      process.env.RESEND_API_KEY === "re_placeholder_key";

    if (isPlaceholder) {
      console.log("[Application Form] Resend key not configured — logging submission:");
      console.log({ role, name, ...formData });
      return NextResponse.json({ success: true, mode: "dev" });
    }

    // Build a readable HTML table of all fields
    const rows = Object.entries(formData)
      .filter(([, v]) => v !== undefined && v !== "")
      .map(
        ([key, value]) =>
          `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;vertical-align:top">${key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())}</td><td style="padding:4px 0">${String(value).replace(/\n/g, "<br />")}</td></tr>`
      )
      .join("");

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: formData.email || undefined,
      subject: `New Application: ${role} — ${name}`,
      html: `
        <h2>New Application for ${role}</h2>
        <table style="border-collapse:collapse">${rows}</table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Application Form] Error:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
