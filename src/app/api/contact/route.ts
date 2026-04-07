import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "contact@knightdivisiontactical.com";
const FROM_EMAIL = "KDT Website <onboarding@resend.dev>"; // Change to verified domain later

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, subject, message } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const name = `${firstName} ${lastName}`;
    const isPlaceholder =
      !process.env.RESEND_API_KEY ||
      process.env.RESEND_API_KEY === "re_placeholder_key";

    if (isPlaceholder) {
      console.log("[Contact Form] Resend key not configured — logging submission:");
      console.log({ name, email, subject, message });
      return NextResponse.json({ success: true, mode: "dev" });
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "N/A"}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact Form] Error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
