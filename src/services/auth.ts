import { api } from "@/lib/api";

export const getLoginUrl = (provider: string) => {
  console.log(`${window.location.origin}/callback`);
  switch (provider) {
    case 'naver':
      return api(`/auth/naver/login?redirectUrl=${window.location.origin}/callback`);
    default:
      return null;
  }
};
