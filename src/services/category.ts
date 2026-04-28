import { GroupTypes } from "../common/constraints";
import { useApi } from "@/lib/api";
import { useCallback } from "react";

export type Category = {
  id: string;
  groupType: (typeof GroupTypes)[keyof typeof GroupTypes];
  name: string;
  iconKey: string;
  iconColor: string;
};

type ResponseType = Category[];

export function useCategory() {
  const api = useApi();

  const getCategories = useCallback(async (): Promise<ResponseType> => {
    return api<ResponseType>("/categories", {
      method: "GET",
    });
  }, [api]);

  return { getCategories };
}
