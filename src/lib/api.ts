'use client';

import { useAuth } from "@/contexts/AuthContext";
import { useCallback } from "react";
const BASE_URL = '/api';

type ApiResponse<T> = {
  data: T;
  message: string;
  statusCode: number;
  timestamp: string;
}

export function useApi() {
  const { accessToken, tokenType } = useAuth();

  return useCallback(async <T>(path: string, options?: RequestInit) => {
    const res = await fetch(`${BASE_URL}${path}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken && { Authorization: `${tokenType} ${accessToken}` }),
        ...options?.headers,
      }
    });

    if (!res.ok) throw new Error(`Api error: ${res.body}`);

    const body: ApiResponse<T> = await res.json();
    return body.data;
  }, [accessToken, tokenType]);
}
