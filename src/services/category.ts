import { GroupTypes } from "../common/constraints";
import { useApi } from "@/lib/api";

type Category = {
  id: string;
  groupType: Object.values<GroupTypes>;
  name: string;
  iconKey: string;
  iconColor: string;
};

export function useCategory() {
  const api = useApi();
}
