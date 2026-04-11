import { NextRequest, NextResponse } from "next/server";

const TO_EMAIL = "schulz@knightdivisiontactical.com";
const FROM_EMAIL = "KDT Website <onboarding@resend.dev>";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { organization, contactName, title, email, phone, service, message } = body;

    if (!email || !organization) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_placeholder_key") {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      const rows = Object.entries(body)
        .filter(([, v]) => v !== undefined && v !== "")
        .map(([key, value]) => `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;vertical-align:top">${key}</td><td style="padding:4px 0">${String(value).replace(/\n/g, "<br />")}</td></tr>`)
        .join("");

      await resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        replyTo: email,
        subject: `New Quote Request from ${organization}`,
        html: `<h2>New Quote Request</h2><table style="border-collapse:collapse">${rows}</table>`,
      });
    } else {
      console.log("[Hire Form] No Resend key — logging:", body);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Hire Form] Error:", error);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
