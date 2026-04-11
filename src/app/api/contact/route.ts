import { NextRequest, NextResponse } from "next/server";

const TO_EMAIL = "contact@knightdivisiontactical.com";
const FROM_EMAIL = "KDT Website <onboarding@resend.dev>";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message } = body;

    if (!email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const name = [firstName, lastName].filter(Boolean).join(" ") || "Unknown";

    // Only send email if Resend key is configured
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_placeholder_key") {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `<h2>New Contact Form Submission</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br />")}</p>`,
      });
    } else {
      console.log("[Contact Form] No Resend key — logging:", { name, email, message });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact Form] Error:", error);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
