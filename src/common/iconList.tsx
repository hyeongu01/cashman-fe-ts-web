import { icons, LucideProps } from "lucide-react";

export type iconName = keyof typeof icons;

export interface IconProps extends LucideProps {
  name: iconName;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = icons[name];
  if (!LucideIcon) return null;
  return <LucideIcon {...props} />;
};

export const ICON_COLORS: { name: string; value: string }[] = [
  { name: "blue", value: "#3b82f6" },
  { name: "sky", value: "#0ea5e9" },
  { name: "teal", value: "#14b8a6" },
  { name: "emerald", value: "#10b981" },
  { name: "green", value: "#22c55e" },
  { name: "amber", value: "#f59e0b" },
  { name: "orange", value: "#f97316" },
  { name: "red", value: "#ef4444" },
  { name: "pink", value: "#ec4899" },
  { name: "purple", value: "#8b5cf6" },
  { name: "indigo", value: "#6366f1" },
  { name: "slate", value: "#64748b" },
];

export const ICON_LIST: { name: iconName; groupType: number }[] = [
  // 생활 (0) — 식비
  { name: "Utensils", groupType: 0 },
  { name: "Coffee", groupType: 0 },
  { name: "Pizza", groupType: 0 },
  // 생활 (0) — 교통
  { name: "Car", groupType: 0 },
  { name: "Bus", groupType: 0 },
  { name: "Plane", groupType: 0 },
  // 생활 (0) — 쇼핑
  { name: "ShoppingCart", groupType: 0 },
  { name: "ShoppingBag", groupType: 0 },
  { name: "Tag", groupType: 0 },
  // 생활 (0) — 문화/오락
  { name: "Film", groupType: 0 },
  { name: "Music", groupType: 0 },
  { name: "Gamepad2", groupType: 0 },
  // 생활 (0) — 의료/건강
  { name: "HeartPulse", groupType: 0 },
  { name: "Dumbbell", groupType: 0 },
  // 생활 (0) — 교육
  { name: "BookOpen", groupType: 0 },
  { name: "GraduationCap", groupType: 0 },
  // 생활 (0) — 주거/생활비
  { name: "House", groupType: 0 },
  { name: "Zap", groupType: 0 },
  // 생활 (0) — 여행/미용/반려동물
  { name: "Luggage", groupType: 0 },
  { name: "PawPrint", groupType: 0 },
  { name: "Gift", groupType: 0 },
  // 저축 (1)
  { name: "PiggyBank", groupType: 1 },
  { name: "Wallet", groupType: 1 },
  { name: "WalletCards", groupType: 1 },
  { name: "Coins", groupType: 1 },
  { name: "Banknote", groupType: 1 },
  { name: "Receipt", groupType: 1 },
  { name: "CreditCard", groupType: 1 },
  { name: "DollarSign", groupType: 1 },
  { name: "Landmark", groupType: 1 },
  { name: "Building2", groupType: 1 },
  { name: "HandCoins", groupType: 1 },
  { name: "Vault", groupType: 1 },
  { name: "BadgeDollarSign", groupType: 1 },
  { name: "CircleDollarSign", groupType: 1 },
  { name: "Store", groupType: 1 },
  { name: "Briefcase", groupType: 1 },
  // 투자 (2)
  { name: "ChartLine", groupType: 2 },
  { name: "ChartPie", groupType: 2 },
  { name: "TrendingUp", groupType: 2 },
  { name: "TrendingDown", groupType: 2 },
  { name: "ChartCandlestick", groupType: 2 },
  { name: "ChartColumnIncreasing", groupType: 2 },
  { name: "ChartBar", groupType: 2 },
  { name: "ChartColumn", groupType: 2 },
  { name: "ChartNoAxesColumn", groupType: 2 },
  { name: "Percent", groupType: 2 },
  { name: "Scale", groupType: 2 },
  { name: "Bitcoin", groupType: 2 },
  { name: "ArrowUpDown", groupType: 2 },
  { name: "Gem", groupType: 2 },
];
