import { NextRequest, NextResponse } from "next/server";

// Application submissions will be routed to the Selection Specialist bot API
// when it comes online. For now, we accept and log the submission.
// See RECRUITMENT-INTEGRATION.md for the full integration plan.

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

    // TODO: When Selection Specialist bot is online, POST to its API:
    // const res = await fetch(`${SELECTION_API_URL}/applications`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ role, ...formData }),
    // });

    console.log(`[Application] Received: ${role} — ${name}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Application Form] Error:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
