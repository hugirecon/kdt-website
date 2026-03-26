"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import { useAuth } from "@/lib/auth-context";

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
        </div>
      </div>
    </div>
  );
}
