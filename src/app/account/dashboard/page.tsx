"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import { useAuth } from "@/lib/auth-context";

const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000";
const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "";

interface Order {
  id: string;
  display_id: number;
  status: string;
  total: number;
  currency_code: string;
  created_at: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const { customer, isLoggedIn, loading, token, logout } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(true);

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.replace("/account");
    }
  }, [loading, isLoggedIn, router]);

  useEffect(() => {
    if (!token) return;
    async function loadOrders() {
      try {
        const res = await fetch(`${BACKEND_URL}/store/orders`, {
          headers: {
            "Content-Type": "application/json",
            "x-publishable-api-key": PUBLISHABLE_KEY,
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.ok) {
          const data = await res.json();
          setOrders(data.orders || []);
        }
      } catch {
        // silently fail
      } finally {
        setOrdersLoading(false);
      }
    }
    loadOrders();
  }, [token]);

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

      <div className="pt-20 px-6 pb-24 max-w-4xl mx-auto">
        {/* Welcome */}
        <div className="mb-10">
          <h1 className="text-2xl font-semibold text-[#fafaf9]">
            Welcome back, {customer?.first_name || "Operator"}
          </h1>
          <p className="text-[#78716c] text-sm mt-1">Manage your account and orders</p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Profile card */}
          <Link
            href="/account/profile"
            className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-6 hover:border-[#f97316]/30 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#f97316]/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-[#fafaf9] font-medium group-hover:text-[#f97316] transition-colors">Profile</h2>
            </div>
            <p className="text-sm text-[#78716c]">
              {customer?.first_name} {customer?.last_name}
            </p>
            <p className="text-sm text-[#78716c]">{customer?.email}</p>
          </Link>

          {/* Orders card */}
          <Link
            href="/account/orders"
            className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-6 hover:border-[#f97316]/30 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#f97316]/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-[#fafaf9] font-medium group-hover:text-[#f97316] transition-colors">Orders</h2>
            </div>
            {ordersLoading ? (
              <p className="text-sm text-[#78716c]">Loading...</p>
            ) : orders.length > 0 ? (
              <p className="text-sm text-[#78716c]">{orders.length} order{orders.length !== 1 ? "s" : ""}</p>
            ) : (
              <p className="text-sm text-[#78716c]">No orders yet</p>
            )}
          </Link>

          {/* Addresses card (placeholder) */}
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-6 opacity-60">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#78716c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-[#78716c] font-medium">Addresses</h2>
            </div>
            <p className="text-sm text-[#78716c]">Coming soon</p>
          </div>
        </div>

        {/* Logout button (mobile-friendly) */}
        <div className="mt-10 md:hidden">
          <button
            onClick={() => { logout(); router.push("/account"); }}
            className="w-full py-3 border border-white/[0.08] rounded text-[#78716c] hover:text-red-400 hover:border-red-400/30 transition-colors text-sm"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
