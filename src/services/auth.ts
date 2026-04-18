import { useApi } from "@/lib/api";
import { useCallback } from "react";

export function useAuthService() {
  const api = useApi();

  return useCallback(async (provider: string) => {
    switch (provider) {
      case 'naver':
        const params = new URLSearchParams({
          redirectUrl: `${window.location.origin}/callback`,
        })
        return api<{ url: string }>(`/auth/naver/login?${params}`);
      default:
        return null;
    }
  }, [api])
}
