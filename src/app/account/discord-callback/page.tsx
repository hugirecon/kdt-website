"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Nav from "@/components/Nav";
import { useAuth } from "@/lib/auth-context";
import type { DiscordUser } from "@/lib/discord-oauth";

export default function DiscordCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isLoggedIn, login, setDiscordProfile } = useAuth();
  const [status, setStatus] = useState<"loading" | "error" | "success">("loading");
  const [errorMsg, setErrorMsg] = useState("");
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const code = searchParams.get("code");
    const error = searchParams.get("error");

    if (error) {
      setStatus("error");
      setErrorMsg(error === "access_denied" ? "You denied access to your Discord account." : `Discord error: ${error}`);
      return;
    }

    if (!code) {
      setStatus("error");
      setErrorMsg("No authorization code received from Discord.");
      return;
    }

    handleCallback(code);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleCallback(code: string) {
    try {
      // Exchange code for Discord user via our API route
      const res = await fetch("/api/discord/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to authenticate with Discord");
      }

      const discordUser: DiscordUser = await res.json();

      if (isLoggedIn) {
        // User is already logged in — link Discord to their account
        setDiscordProfile(discordUser);
        setStatus("success");
        setTimeout(() => router.push("/account/profile"), 1500);
      } else {
        // Not logged in — try to sign in with Discord email
        if (!discordUser.email) {
          setStatus("error");
          setErrorMsg(
            "Your Discord account doesn't have a verified email. Please log in with your email and password, then link Discord from your profile."
          );
          return;
        }

        // Save Discord profile regardless
        setDiscordProfile(discordUser);

        // Try to log in with a placeholder approach
        // Since we can't create a session without a password, redirect to login with email prefilled
        setStatus("error");
        setErrorMsg(
          `Discord connected! Your Discord email is ${discordUser.email}. Please sign in with your store password to complete the link. If you don't have an account, register with this email first.`
        );
        setTimeout(() => router.push("/account"), 4000);
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <div className="min-h-screen bg-[#030305]">
      <Nav />

      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-md text-center">
          {status === "loading" && (
            <div className="space-y-4">
              <div className="w-10 h-10 border-2 border-[#5865F2] border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-[#78716c]">Connecting with Discord...</p>
            </div>
          )}

          {status === "success" && (
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#5865F2]/10 border border-[#5865F2]/30 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-[#5865F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-[#fafaf9] font-medium">Discord linked successfully!</p>
              <p className="text-[#78716c] text-sm">Redirecting to your profile...</p>
            </div>
          )}

          {status === "error" && (
            <div className="space-y-4">
              <div className="w-16 h-16 bg-red-500/10 border border-red-500/30 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-red-400 text-sm">{errorMsg}</p>
              <button
                onClick={() => router.push("/account")}
                className="mt-4 px-6 py-2 bg-white/[0.05] border border-white/[0.08] rounded text-[#fafaf9] hover:bg-white/[0.08] transition-colors text-sm"
              >
                Back to Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
