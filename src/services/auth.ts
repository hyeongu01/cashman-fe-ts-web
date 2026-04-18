import { useApi } from "@/lib/api";
import { useCallback } from "react";

export function useAuthService() {
  const api = useApi();

  return useCallback(async (provider: string) => {
    switch (provider) {
      case 'naver':
        return api<{ url: string }>(`/auth/naver/login?redirectUrl=${window.location.origin}/callback`);
      default:
        return null;
    }
  }, [api])
}
