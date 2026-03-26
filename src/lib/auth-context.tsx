"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

import { DISCORD_PROFILE_KEY, type DiscordUser } from "./discord-oauth";

const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000";
const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "";
const TOKEN_KEY = "kdt_auth_token";

interface Customer {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
}

interface AuthContextType {
  token: string | null;
  customer: Customer | null;
  isLoggedIn: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
  logout: () => void;
  discordProfile: DiscordUser | null;
  setDiscordProfile: (profile: DiscordUser | null) => void;
}

const AuthContext = createContext<AuthContextType>({
  token: null,
  customer: null,
  isLoggedIn: false,
  loading: true,
  login: async () => {},
  register: async () => {},
  logout: () => {},
  discordProfile: null,
  setDiscordProfile: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

async function authFetch(path: string, options: RequestInit = {}) {
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
    let message = `API error ${res.status}`;
    try {
      const json = JSON.parse(text);
      message = json.message || json.error || message;
    } catch {
      // use default message
    }
    throw new Error(message);
  }
  if (res.status === 204) return null;
  return res.json();
}

async function fetchCustomer(token: string): Promise<Customer | null> {
  try {
    const data = await authFetch("/store/customers/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.customer;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);
  const [discordProfile, setDiscordProfileState] = useState<DiscordUser | null>(null);

  const isLoggedIn = !!token && !!customer;

  const setDiscordProfile = useCallback((profile: DiscordUser | null) => {
    setDiscordProfileState(profile);
    if (profile) {
      localStorage.setItem(DISCORD_PROFILE_KEY, JSON.stringify(profile));
    } else {
      localStorage.removeItem(DISCORD_PROFILE_KEY);
    }
  }, []);

  // Load token + customer + discord profile on mount
  useEffect(() => {
    async function init() {
      try {
        // Load Discord profile
        const storedDiscord = localStorage.getItem(DISCORD_PROFILE_KEY);
        if (storedDiscord) {
          try {
            setDiscordProfileState(JSON.parse(storedDiscord));
          } catch {
            localStorage.removeItem(DISCORD_PROFILE_KEY);
          }
        }

        const stored = localStorage.getItem(TOKEN_KEY);
        if (stored) {
          const c = await fetchCustomer(stored);
          if (c) {
            setToken(stored);
            setCustomer(c);
          } else {
            // Token expired/invalid
            localStorage.removeItem(TOKEN_KEY);
          }
        }
      } catch {
        localStorage.removeItem(TOKEN_KEY);
      }
      setLoading(false);
    }
    init();
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const authData = await authFetch("/auth/customer/emailpass", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    const newToken = authData.token;
    localStorage.setItem(TOKEN_KEY, newToken);
    setToken(newToken);

    const c = await fetchCustomer(newToken);
    if (c) {
      setCustomer(c);
    } else {
      throw new Error("Failed to load customer profile");
    }
  }, []);

  const register = useCallback(async (email: string, password: string, firstName: string, lastName: string) => {
    // 1. Register auth identity
    const authData = await authFetch("/auth/customer/emailpass/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    const newToken = authData.token;
    localStorage.setItem(TOKEN_KEY, newToken);
    setToken(newToken);

    // 2. Create customer record
    const custData = await authFetch("/store/customers", {
      method: "POST",
      body: JSON.stringify({ email, first_name: firstName, last_name: lastName }),
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
    });
    setCustomer(custData.customer);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(DISCORD_PROFILE_KEY);
    setToken(null);
    setCustomer(null);
    setDiscordProfileState(null);
  }, []);

  return (
    <AuthContext.Provider value={{ token, customer, isLoggedIn, loading, login, register, logout, discordProfile, setDiscordProfile }}>
      {children}
    </AuthContext.Provider>
  );
}
