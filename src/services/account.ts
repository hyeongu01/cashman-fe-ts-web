import { GroupTypes, CurrencyCode } from "@/common/constraints";
import { useApi } from "@/lib/api";
import { useCallback } from "react";

export type Account = {
  id: string;
  groupType: (typeof GroupTypes)[keyof typeof GroupTypes];
  userId: string;
  currency: (typeof CurrencyCode)[keyof typeof CurrencyCode];
  balance: number;
};

type ResponseType = {
  items: Account[];
  meta: {
    page: number;
    limit: number;
    totalCount: number;
    totalPage: number;
    sortBy: string;
    sortOrder: "asc" | "desc";
  };
};

export function useAccount() {
  const api = useApi();

  const getAccounts = useCallback(() => {
    return api<ResponseType>("/accounts", { method: "GET" });
  }, [api]);

  return { getAccounts };
}
