const DISCORD_CLIENT_ID = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID || "";
const DISCORD_REDIRECT_URI = process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI || "http://localhost:3000/account/discord-callback";

export interface DiscordUser {
  id: string;
  username: string;
  avatar: string | null;
  email: string | null;
  global_name: string | null;
}

/**
 * Generate the Discord OAuth2 authorization URL.
 * Scopes: identify + email
 */
export function getDiscordAuthUrl(state?: string): string {
  const params = new URLSearchParams({
    client_id: DISCORD_CLIENT_ID,
    redirect_uri: DISCORD_REDIRECT_URI,
    response_type: "code",
    scope: "identify email",
  });
  if (state) {
    params.set("state", state);
  }
  return `https://discord.com/api/oauth2/authorize?${params.toString()}`;
}

/**
 * Get the Discord avatar URL for a user.
 */
export function getDiscordAvatarUrl(userId: string, avatarHash: string | null, size = 128): string {
  if (avatarHash) {
    return `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}.png?size=${size}`;
  }
  // Default avatar based on user id
  const defaultIndex = (parseInt(userId) >> 22) % 6;
  return `https://cdn.discordapp.com/embed/avatars/${Math.abs(defaultIndex)}.png`;
}

/** localStorage key for linked Discord profile */
export const DISCORD_PROFILE_KEY = "kdt_discord_profile";
