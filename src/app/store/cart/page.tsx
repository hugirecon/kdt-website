"use client";

import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import { useCart } from "@/lib/cart-context";

function formatPrice(cents: number): string {
  const amount = cents / 100;
  return amount % 1 === 0 ? `$${amount}` : `$${amount.toFixed(2)}`;
}

export default function CartPage() {
  const { cart, cartCount, loading, removeFromCart, updateQuantity } = useCart();

  const items = cart?.items ?? [];
  const isEmpty = items.length === 0;

  return (
    <main className="min-h-screen bg-[#030305]">
      <Nav activePath="/store" />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-2 text-[13px] text-gray-500">
            <Link href="/store" className="hover:text-white transition-colors">Store</Link>
            <span>/</span>
            <span className="text-gray-400">Cart</span>
          </div>
        </div>
      </div>

      <section className="pb-24 px-6">
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-[36px] md:text-[44px] font-bold text-white mb-8">
            Your Cart
            {cartCount > 0 && (
              <span className="text-[20px] text-gray-500 font-normal ml-3">
                ({cartCount} {cartCount === 1 ? "item" : "items"})
              </span>
            )}
          </h1>

          {loading && isEmpty ? (
            <div className="text-center py-20">
              <div className="inline-block w-8 h-8 border-2 border-[#f97316]/30 border-t-[#f97316] rounded-full animate-spin" />
              <p className="text-gray-500 text-[14px] mt-4">Loading cart...</p>
            </div>
          ) : isEmpty ? (
            <div className="text-center py-20">
              <svg className="w-20 h-20 text-white/10 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <p className="text-gray-400 text-[18px] mb-2">Your cart is empty</p>
              <p className="text-gray-600 text-[14px] mb-8">Browse the store and add some gear.</p>
              <Link
                href="/store"
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-black bg-[#f97316] rounded-lg px-6 py-3 hover:bg-[#ea580c] transition-all"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => {
                  const thumb = item.thumbnail || item.variant?.product?.thumbnail;
                  const productTitle = item.variant?.product?.title || item.title;
                  const variantTitle = item.variant?.title && item.variant.title !== "Default" ? item.variant.title : null;
                  const isExternal = thumb?.startsWith("http");

                  return (
                    <div
                      key={item.id}
                      className="flex gap-4 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02]"
                    >
                      {/* Thumbnail */}
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-white/[0.04] shrink-0">
                        {thumb ? (
                          <Image
                            src={thumb}
                            alt={productTitle}
                            fill
                            className="object-cover"
                            {...(isExternal ? { unoptimized: true } : {})}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-white/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[15px] font-semibold text-white truncate">{productTitle}</h3>
                        {variantTitle && (
                          <p className="text-[13px] text-gray-500 mt-0.5">{variantTitle}</p>
                        )}
                        <p className="text-[15px] text-[#f97316] font-semibold mt-1">
                          {formatPrice(item.unit_price)}
                        </p>
                      </div>

                      {/* Quantity + Remove */}
                      <div className="flex flex-col items-end gap-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-600 hover:text-red-400 transition-colors p-1"
                          title="Remove item"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                        <div className="flex items-center gap-1 border border-white/[0.1] rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            disabled={item.quantity <= 1}
                            className="px-2 py-1 text-gray-400 hover:text-white disabled:opacity-30 transition-colors text-[14px]"
                          >
                            −
                          </button>
                          <span className="px-2 py-1 text-[14px] text-white min-w-[28px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 text-gray-400 hover:text-white transition-colors text-[14px]"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 sticky top-24">
                  <h2 className="text-[18px] font-bold text-white mb-6">Order Summary</h2>

                  <div className="space-y-3 text-[14px]">
                    <div className="flex justify-between text-gray-400">
                      <span>Subtotal</span>
                      <span>{formatPrice(cart?.subtotal ?? 0)}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Shipping</span>
                      <span className="text-gray-500">Calculated at checkout</span>
                    </div>
                    <div className="border-t border-white/[0.08] pt-3 flex justify-between text-white font-semibold text-[16px]">
                      <span>Total</span>
                      <span className="text-[#f97316]">{formatPrice(cart?.total ?? cart?.subtotal ?? 0)}</span>
                    </div>
                  </div>

                  <Link
                    href="/store/checkout"
                    className="mt-6 flex items-center justify-center text-[15px] font-semibold text-black bg-[#f97316] rounded-lg px-6 py-3.5 hover:bg-[#ea580c] transition-all w-full"
                  >
                    Proceed to Checkout
                  </Link>

                  <Link
                    href="/store"
                    className="mt-3 flex items-center justify-center gap-2 text-[14px] text-gray-500 hover:text-[#f97316] transition-colors w-full py-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
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
