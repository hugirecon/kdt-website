import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "contact@knightdivisiontactical.com";
const FROM_EMAIL = "KDT Website <onboarding@resend.dev>";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      organization,
      industry,
      jobTitle,
      email,
      phone,
      extension,
      address,
      threatLevel,
      details,
    } = body;

    if (!organization || !email || !phone || !jobTitle) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const isPlaceholder =
      !process.env.RESEND_API_KEY ||
      process.env.RESEND_API_KEY === "re_placeholder_key";

    if (isPlaceholder) {
      console.log("[Hire Form] Resend key not configured — logging submission:");
      console.log(body);
      return NextResponse.json({ success: true, mode: "dev" });
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Quote Request from ${organization}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Industry:</strong> ${industry || "N/A"}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}${extension ? ` ext. ${extension}` : ""}</p>
        <p><strong>Address:</strong> ${address || "N/A"}</p>
        <p><strong>Threat Level:</strong> ${threatLevel || "N/A"}</p>
        <hr />
        <p><strong>Additional Details:</strong></p>
        <p>${details ? details.replace(/\n/g, "<br />") : "None provided"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Hire Form] Error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
