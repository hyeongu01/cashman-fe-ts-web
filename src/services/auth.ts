import { api } from "@/lib/api";

export const getLoginUrl = (provider: string) => {
  switch (provider) {
    case 'naver':
      return api('/auth/naver/login');
    default:
      return null;
  }
};
