import { type iconName } from "@/common/iconList";
import { GroupTypes } from "../common/constraints";
import { useApi } from "@/lib/api";
import { useCallback } from "react";

export type Category = {
  id: string;
  groupType: (typeof GroupTypes)[keyof typeof GroupTypes];
  transactionType: 0 | 1;
  name: string;
  iconKey: string;
  iconColor: string;
};

type ResponseType = Category[];

export function useCategory() {
  const api = useApi();

  const getCategories = useCallback((): Promise<ResponseType> => {
    return api<ResponseType>("/categories", {
      method: "GET",
    });
  }, [api]);

  const addCategory = useCallback(
    async (
      groupType: number,
      transactionType: number,
      name: string,
      iconKey: iconName,
      iconColor: string,
    ): Promise<void> => {
      await api<object>("/categories", {
        method: "POST",
        body: JSON.stringify({
          groupType: groupType,
          transactionType: transactionType,
          name: name,
          iconKey: iconKey,
          iconColor: iconColor,
        }),
      });
    },
    [api],
  );

  return { getCategories, addCategory };
}
