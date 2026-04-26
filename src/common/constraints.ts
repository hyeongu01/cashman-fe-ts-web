export const GroupTypes = {
  DEFAULT: 0,
  DEPOSIT: 1,
  INVESTMENT: 2,
} as const;

export const Timezone = {
  SEOUL: "Asia/Seoul",
} as const;

export const CurrencyCode = {
  KRW: "KRW", // 한국 (원)
  // USD: "USD", // 미국 (달러)
  // JPY: "JPY" // 일본 (엔)
} as const;
