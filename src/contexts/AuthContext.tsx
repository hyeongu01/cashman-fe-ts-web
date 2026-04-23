"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type AuthState = {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  refresh: () => Promise<string | null>;
  isInitialized: boolean;
};

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const accessTokenRef = useRef<string | null>(null);

  useEffect(() => {
    accessTokenRef.current = accessToken;
  }, [accessToken]);

  const refresh = useCallback(async (): Promise<string | null> => {
    try {
      const res = await fetch("/api/auth/refresh", {
        method: "POST",
        credentials: "include",
      });
      if (!res.ok) return null;
      const body = await res.json();
      const token: string = body.data.accessToken;
      setAccessToken(token);
      return token;
    } catch {
      return null;
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    // 초기 refresh로 accessToken 복구 — setState는 promise 체인 내부라 cascading 아님
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refresh().finally(() => {
      if (!cancelled) setIsInitialized(true);
    });
    return () => {
      cancelled = true;
    };
  }, [refresh]);

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
        refresh,
        isInitialized,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
