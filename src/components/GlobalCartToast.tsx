"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart-context";
import { CartToast } from "./StatusTag";

/**
 * GlobalCartToast — renders a single toast anywhere in the app whenever
 * something is added to the cart. Listens to `lastAddedToast` from the
 * CartProvider and auto-dismisses after 3 seconds.
 */
export default function GlobalCartToast() {
  const { lastAddedToast, dismissToast } = useCart();
  const [visible, setVisible] = useState(false);
  const [productName, setProductName] = useState("");

  useEffect(() => {
    if (!lastAddedToast) return;
    setProductName(lastAddedToast.productName);
    setVisible(true);
    // Fade out after 3s (CartToast also auto-calls onClose)
    const timer = setTimeout(() => {
      setVisible(false);
      // Clear the event slightly after the fade-out so fast re-adds re-trigger
      setTimeout(dismissToast, 400);
    }, 3000);
    return () => clearTimeout(timer);
  }, [lastAddedToast, dismissToast]);

  return (
    <CartToast
      show={visible}
      productName={productName}
      onClose={() => {
        setVisible(false);
        setTimeout(dismissToast, 400);
      }}
    />
  );
}
