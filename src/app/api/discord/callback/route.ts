import { NextRequest, NextResponse } from "next/server";

const DISCORD_CLIENT_ID = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID || "";
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET || "";
const DISCORD_REDIRECT_URI = process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI || "http://localhost:3000/account/discord-callback";

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code) {
      return NextResponse.json({ error: "Missing authorization code" }, { status: 400 });
    }

    // Exchange code for access token
    const tokenRes = await fetch("https://discord.com/api/v10/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: DISCORD_CLIENT_ID,
        client_secret: DISCORD_CLIENT_SECRET,
        grant_type: "authorization_code",
        code,
        redirect_uri: DISCORD_REDIRECT_URI,
      }),
    });

    if (!tokenRes.ok) {
      const err = await tokenRes.text();
      console.error("Discord token exchange failed:", err);
      return NextResponse.json({ error: "Failed to exchange authorization code" }, { status: 400 });
    }

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    // Fetch Discord user profile
    const userRes = await fetch("https://discord.com/api/v10/users/@me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!userRes.ok) {
      return NextResponse.json({ error: "Failed to fetch Discord user" }, { status: 400 });
    }

    const discordUser = await userRes.json();

    return NextResponse.json({
      id: discordUser.id,
      username: discordUser.username,
      global_name: discordUser.global_name,
      avatar: discordUser.avatar,
      email: discordUser.email,
    });
  } catch (error) {
    console.error("Discord callback error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
