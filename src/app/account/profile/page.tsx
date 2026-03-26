"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import { useAuth } from "@/lib/auth-context";

const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000";
const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "";

export default function ProfilePage() {
  const router = useRouter();
  const { customer, isLoggedIn, loading, token } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.replace("/account");
    }
  }, [loading, isLoggedIn, router]);

  useEffect(() => {
    if (customer) {
      setFirstName(customer.first_name || "");
      setLastName(customer.last_name || "");
    }
  }, [customer]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!token) return;
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch(`${BACKEND_URL}/store/customers/me`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-publishable-api-key": PUBLISHABLE_KEY,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ first_name: firstName, last_name: lastName }),
      });
      if (!res.ok) {
        throw new Error("Failed to update profile");
      }
      setMessage({ type: "success", text: "Profile updated" });
    } catch (err: unknown) {
      setMessage({ type: "error", text: err instanceof Error ? err.message : "Update failed" });
    } finally {
      setSaving(false);
    }
  }

  if (loading || !isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#030305] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#f97316] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030305]">
      <Nav />

      <div className="pt-20 px-6 pb-24 max-w-lg mx-auto">
        <h1 className="text-2xl font-semibold text-[#fafaf9] mb-8">Edit Profile</h1>

        {message && (
          <div
            className={`mb-6 p-3 rounded text-sm border ${
              message.type === "success"
                ? "bg-green-500/10 border-green-500/30 text-green-400"
                : "bg-red-500/10 border-red-500/30 text-red-400"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-6">
          <div>
            <label className="block text-xs text-[#78716c] uppercase tracking-wider mb-2">First Name</label>
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded px-4 py-3 text-[#fafaf9] focus:outline-none focus:border-[#f97316]/50 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs text-[#78716c] uppercase tracking-wider mb-2">Last Name</label>
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded px-4 py-3 text-[#fafaf9] focus:outline-none focus:border-[#f97316]/50 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs text-[#78716c] uppercase tracking-wider mb-2">Email</label>
            <input
              type="email"
              disabled
              value={customer?.email || ""}
              className="w-full bg-white/[0.02] border border-white/[0.05] rounded px-4 py-3 text-[#78716c] cursor-not-allowed"
            />
            <p className="text-xs text-[#78716c] mt-1">Email cannot be changed</p>
          </div>
          <button
            type="submit"
            disabled={saving}
            className="w-full bg-[#f97316] hover:bg-[#ea580c] disabled:opacity-50 text-black font-semibold py-3 rounded transition-colors"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}
