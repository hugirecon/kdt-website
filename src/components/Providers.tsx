"use client";

import { SessionProvider } from "next-auth/react";
import { CartProvider } from "@/lib/cart-context";
import { AuthProvider } from "@/lib/auth-context";
import GlobalCartToast from "./GlobalCartToast";
import type { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <AuthProvider>
        <CartProvider>
          {children}
          <GlobalCartToast />
        </CartProvider>
      </AuthProvider>
    </SessionProvider>
  );
}
