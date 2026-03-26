"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
  items?: { id: string; title: string; quantity: number; unit_price: number }[];
}

export default function OrdersPage() {
  const router = useRouter();
  const { isLoggedIn, loading, token } = useAuth();
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
        <h1 className="text-2xl font-semibold text-[#fafaf9] mb-8">Order History</h1>

        {ordersLoading ? (
          <div className="flex justify-center py-12">
            <div className="w-6 h-6 border-2 border-[#f97316] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center py-16">
            <svg className="w-16 h-16 text-[#78716c]/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p className="text-[#78716c]">No orders yet</p>
            <p className="text-[#78716c]/60 text-sm mt-1">Your orders will appear here after your first purchase</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-[#fafaf9] font-medium">Order #{order.display_id}</span>
                    <span className="ml-3 text-xs px-2 py-0.5 rounded-full bg-white/[0.06] text-[#78716c] uppercase tracking-wider">
                      {order.status}
                    </span>
                  </div>
                  <span className="text-[#fafaf9] font-medium">
                    {(order.total / 100).toLocaleString("en-US", {
                      style: "currency",
                      currency: order.currency_code || "usd",
                    })}
                  </span>
                </div>
                <p className="text-sm text-[#78716c]">
                  {new Date(order.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                {order.items && order.items.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-white/[0.05]">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm text-[#78716c]">
                        <span>{item.title} × {item.quantity}</span>
                        <span>
                          {((item.unit_price * item.quantity) / 100).toLocaleString("en-US", {
                            style: "currency",
                            currency: order.currency_code || "usd",
                          })}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
