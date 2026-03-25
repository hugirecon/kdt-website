"use client";

import Link from "next/link";
import Nav from "@/components/Nav";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#030305]">
      <Nav activePath="/store" />

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-[600px] mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-[#f97316]/10 flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
            </svg>
          </div>

          <h1 className="text-[36px] md:text-[44px] font-bold text-white mb-4">
            Checkout Coming Soon
          </h1>
          <p className="text-[16px] text-gray-400 leading-relaxed mb-8">
            Stripe integration is pending. Online checkout will be available soon.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/store/cart"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-black bg-[#f97316] rounded-lg px-6 py-3 hover:bg-[#ea580c] transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Cart
            </Link>
            <Link
              href="/store"
              className="inline-flex items-center gap-2 text-[15px] text-gray-400 hover:text-white transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[900px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-[14px] text-gray-500">
              Copyright © {new Date().getFullYear()} Knight Division Tactical. All rights reserved.
            </span>
            <div className="flex flex-wrap items-center gap-6 text-[14px]">
              <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
