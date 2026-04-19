"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000";
const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "";
const REGION_ID = "reg_01KMHD7MMJHAHGSHKE21D6YSB5";
const CART_ID_KEY = "kdt_cart_id";

interface CartLineItem {
  id: string;
  title: string;
  quantity: number;
  unit_price: number;
  subtotal: number;
  thumbnail: string | null;
  variant: {
    id: string;
    title: string;
    product: {
      title: string;
      handle: string;
      thumbnail: string | null;
    };
  };
}

interface Cart {
  id: string;
  items: CartLineItem[];
  subtotal: number;
  total: number;
  shipping_total: number;
  region: { currency_code: string };
}

interface ToastEvent {
  id: number;
  productName: string;
}

interface CartContextType {
  cart: Cart | null;
  cartCount: number;
  loading: boolean;
  addToCart: (variantId: string, quantity?: number, productName?: string) => Promise<void>;
  removeFromCart: (lineItemId: string) => Promise<void>;
  updateQuantity: (lineItemId: string, quantity: number) => Promise<void>;
  lastAddedToast: ToastEvent | null;
  dismissToast: () => void;
}

const CartContext = createContext<CartContextType>({
  cart: null,
  cartCount: 0,
  loading: true,
  addToCart: async () => {},
  removeFromCart: async () => {},
  updateQuantity: async () => {},
  lastAddedToast: null,
  dismissToast: () => {},
});

export function useCart() {
  return useContext(CartContext);
}

async function cartFetch(path: string, options: RequestInit = {}) {
  const res = await fetch(`${BACKEND_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "x-publishable-api-key": PUBLISHABLE_KEY,
      ...(options.headers || {}),
    },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Cart API error ${res.status}: ${text}`);
  }
  // DELETE returns no body
  if (res.status === 204 || options.method === "DELETE") return null;
  return res.json();
}

async function createCart(): Promise<Cart> {
  const data = await cartFetch("/store/carts", {
    method: "POST",
    body: JSON.stringify({ region_id: REGION_ID }),
  });
  return data.cart;
}

async function getCart(cartId: string): Promise<Cart | null> {
  try {
    const data = await cartFetch(`/store/carts/${cartId}`);
    return data.cart;
  } catch {
    return null;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastAddedToast, setLastAddedToast] = useState<ToastEvent | null>(null);

  const cartCount = cart?.items?.reduce((sum, item) => sum + item.quantity, 0) ?? 0;

  const dismissToast = useCallback(() => setLastAddedToast(null), []);

  // Initialize cart on mount
  useEffect(() => {
    async function init() {
      try {
        const storedId = localStorage.getItem(CART_ID_KEY);
        if (storedId) {
          const existing = await getCart(storedId);
          if (existing) {
            setCart(existing);
            setLoading(false);
            return;
          }
          // Cart expired or invalid — remove stale id
          localStorage.removeItem(CART_ID_KEY);
        }
        // Don't auto-create a cart until the user adds something
      } catch (err) {
        console.error("Cart init error:", err);
      }
      setLoading(false);
    }
    init();
  }, []);

  const ensureCart = useCallback(async (): Promise<string> => {
    if (cart?.id) return cart.id;
    const newCart = await createCart();
    localStorage.setItem(CART_ID_KEY, newCart.id);
    setCart(newCart);
    return newCart.id;
  }, [cart]);

  const refreshCart = useCallback(async (cartId: string) => {
    const fresh = await getCart(cartId);
    if (fresh) setCart(fresh);
  }, []);

  const addToCart = useCallback(async (variantId: string, quantity = 1, productName?: string) => {
    setLoading(true);
    try {
      const cartId = await ensureCart();
      await cartFetch(`/store/carts/${cartId}/line-items`, {
        method: "POST",
        body: JSON.stringify({ variant_id: variantId, quantity }),
      });
      await refreshCart(cartId);
      // Fire toast
      setLastAddedToast({ id: Date.now(), productName: productName || "Item" });
    } catch (err) {
      console.error("Add to cart error:", err);
    } finally {
      setLoading(false);
    }
  }, [ensureCart, refreshCart]);

  const removeFromCart = useCallback(async (lineItemId: string) => {
    if (!cart?.id) return;
    setLoading(true);
    try {
      await cartFetch(`/store/carts/${cart.id}/line-items/${lineItemId}`, {
        method: "DELETE",
      });
      await refreshCart(cart.id);
    } catch (err) {
      console.error("Remove from cart error:", err);
    } finally {
      setLoading(false);
    }
  }, [cart, refreshCart]);

  const updateQuantity = useCallback(async (lineItemId: string, quantity: number) => {
    if (!cart?.id) return;
    setLoading(true);
    try {
      await cartFetch(`/store/carts/${cart.id}/line-items/${lineItemId}`, {
        method: "POST",
        body: JSON.stringify({ quantity }),
      });
      await refreshCart(cart.id);
    } catch (err) {
      console.error("Update quantity error:", err);
    } finally {
      setLoading(false);
    }
  }, [cart, refreshCart]);

  return (
    <CartContext.Provider value={{ cart, cartCount, loading, addToCart, removeFromCart, updateQuantity, lastAddedToast, dismissToast }}>
      {children}
    </CartContext.Provider>
  );
}
