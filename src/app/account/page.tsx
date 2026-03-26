"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import { useAuth } from "@/lib/auth-context";
import { getDiscordAuthUrl } from "@/lib/discord-oauth";

export default function AccountPage() {
  const router = useRouter();
  const { isLoggedIn, loading: authLoading, login, register } = useAuth();
  const [tab, setTab] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Redirect if already logged in
  if (!authLoading && isLoggedIn) {
    router.replace("/account/dashboard");
    return null;
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await login(email, password);
      router.push("/account/dashboard");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    setSubmitting(true);
    try {
      await register(email, password, firstName, lastName);
      router.push("/account/dashboard");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#030305]">
      <Nav />

      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          {/* Tabs */}
          <div className="flex mb-8 border-b border-white/[0.08]">
            <button
              onClick={() => { setTab("login"); setError(""); }}
              className={`flex-1 pb-3 text-sm font-medium tracking-widest uppercase transition-colors ${
                tab === "login"
                  ? "text-[#f97316] border-b-2 border-[#f97316]"
                  : "text-[#78716c] hover:text-[#fafaf9]"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => { setTab("register"); setError(""); }}
              className={`flex-1 pb-3 text-sm font-medium tracking-widest uppercase transition-colors ${
                tab === "register"
                  ? "text-[#f97316] border-b-2 border-[#f97316]"
                  : "text-[#78716c] hover:text-[#fafaf9]"
              }`}
            >
              Register
            </button>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 p-3 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Login Form */}
          {tab === "login" && (
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-xs text-[#78716c] uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded px-4 py-3 text-[#fafaf9] placeholder-[#78716c] focus:outline-none focus:border-[#f97316]/50 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-xs text-[#78716c] uppercase tracking-wider mb-2">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded px-4 py-3 text-[#fafaf9] placeholder-[#78716c] focus:outline-none focus:border-[#f97316]/50 transition-colors"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#f97316] hover:bg-[#ea580c] disabled:opacity-50 text-black font-semibold py-3 rounded transition-colors"
              >
                {submitting ? "Signing in..." : "Sign In"}
              </button>
            </form>
          )}

          {/* Register Form */}
          {tab === "register" && (
            <form onSubmit={handleRegister} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#78716c] uppercase tracking-wider mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded px-4 py-3 text-[#fafaf9] placeholder-[#78716c] focus:outline-none focus:border-[#f97316]/50 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#78716c] uppercase tracking-wider mb-2">Last Name</label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded px-4 py-3 text-[#fafaf9] placeholder-[#78716c] focus:outline-none focus:border-[#f97316]/50 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#78716c] uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded px-4 py-3 text-[#fafaf9] placeholder-[#78716c] focus:outline-none focus:border-[#f97316]/50 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-xs text-[#78716c] uppercase tracking-wider mb-2">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded px-4 py-3 text-[#fafaf9] placeholder-[#78716c] focus:outline-none focus:border-[#f97316]/50 transition-colors"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="block text-xs text-[#78716c] uppercase tracking-wider mb-2">Confirm Password</label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded px-4 py-3 text-[#fafaf9] placeholder-[#78716c] focus:outline-none focus:border-[#f97316]/50 transition-colors"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#f97316] hover:bg-[#ea580c] disabled:opacity-50 text-black font-semibold py-3 rounded transition-colors"
              >
                {submitting ? "Creating account..." : "Create Account"}
              </button>
            </form>
          )}

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-white/[0.08]" />
            <span className="text-xs text-[#78716c] uppercase tracking-wider">or</span>
            <div className="flex-1 h-px bg-white/[0.08]" />
          </div>

          {/* Discord OAuth */}
          <button
            onClick={() => {
              window.location.href = getDiscordAuthUrl();
            }}
            className="w-full flex items-center justify-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold py-3 rounded transition-colors"
          >
            <svg width="20" height="16" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3## 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="currentColor"/>
            </svg>
            Sign in with Discord
          </button>
        </div>
      </div>
    </div>
  );
}
