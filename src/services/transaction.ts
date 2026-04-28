import { useApi } from "@/lib/api";
import { useCallback } from "react";
import { type PaginationParams } from "../common/types";

export type Transaction = {
  id: string;
  name: string;
  amount: number;
  type: number; // 0: 수입, 1: 지출, 2: 저축 추가, 3: 저축 취소, 4: 투자 추가, 5: 투자 취소
  transactionDate: string; // ISO8601 포맷 ("YYYY-MM-ddThh:mm:ss")
  category?: {
    id: string;
    groupType: number;
    name: string;
    iconKey: string;
    iconColor: string;
  };
};

type ResponseType = {
  items: Transaction[];
  meta: {
    limit: number;
    page: number;
    sortBy: string;
    sortOrder: string;
    totalCount: number;
    totalPages: number;
  };
};

export function useTransaction() {
  const api = useApi();
  const getTransactions = useCallback(
    async (params: PaginationParams): Promise<ResponseType> => {
      const searchParams = new URLSearchParams();
      searchParams.append("page", String(params.page ?? 1));
      searchParams.append("limit", String(params.limit ?? 8));
      searchParams.append("sortBy", params.sortBy ?? "createdAt");
      searchParams.append("sortOrder", params.sortOrder ?? "desc");

      return api<ResponseType>(`/transactions?${searchParams}`, { method: "GET" });
    },
    [api],
  );

  return { getTransactions };
}
