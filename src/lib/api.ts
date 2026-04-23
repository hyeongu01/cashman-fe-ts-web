"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useCallback } from "react";

const BASE_URL = "/api";
const TOKEN_TYPE = "bearer";

type ApiResponse<T> = {
  data: T;
  message: string;
  statusCode: number;
  timestamp: string;
};

export function useApi() {
  const { accessToken, refresh } = useAuth();

  return useCallback(
    async <T>(path: string, options?: RequestInit) => {
      const doFetch = (token: string | null) =>
        fetch(`${BASE_URL}${path}`, {
          ...options,
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `${TOKEN_TYPE} ${token}` }),
            ...options?.headers,
          },
        });

      let res = await doFetch(accessToken);

      if (res.status === 401) {
        const newToken = await refresh();
        if (!newToken) throw new Error("서버 인증 실패");
        res = await doFetch(newToken);
      }

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`Api error ${res.status}: ${text}`);
      }

      const body: ApiResponse<T> = await res.json();
      return body.data;
    },
    [accessToken, refresh],
  );
}
