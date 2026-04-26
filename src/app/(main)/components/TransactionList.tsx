"use client";

import styles from "./TransactionList.module.css";
import { useState, useEffect } from "react";
import { useApi } from "@/lib/api";

const TRANSACTIONS = [
  {
    icon: "🍔",
    name: "버거킹",
    category: "식비",
    tag: "생활",
    date: "04/16",
    amount: -12500,
  },
  {
    icon: "🏠",
    name: "월세",
    category: "주거",
    tag: "생활",
    date: "04/15",
    amount: -650000,
  },
  {
    icon: "💰",
    name: "월급",
    category: "급여",
    tag: "생활",
    date: "04/15",
    amount: 3200000,
  },
  {
    icon: "🚌",
    name: "교통카드",
    category: "교통",
    tag: "생활",
    date: "04/14",
    amount: -50000,
  },
  {
    icon: "💊",
    name: "약국",
    category: "의료",
    tag: "생활",
    date: "04/13",
    amount: -8900,
  },
  {
    icon: "📈",
    name: "ETF 수익",
    category: "투자",
    tag: "투자",
    date: "04/12",
    amount: 320000,
  },
];

type Transaction = {
  id: string;
  name: string;
  amount: number;
  type: number; // 0: 수입, 1: 지출, 2: 저축 추가, 3: 저축 취소, 4: 투자 추가, 5: 투자 취소
  transactionDate: string; // ISO8601 포맷 ("YYYY-MM-ddThh:mm:ss")
  category?: {
    id: string;
    groupType: number;
    name: string;
  };
};

type ResponseBody = {
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

function fmt(n: number) {
  return Math.abs(n).toLocaleString("ko-KR");
}

function TransactionList() {
  const api = useApi<ResponseBody>();
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const params = new URLSearchParams();
    params.append("page", "1");
    params.append("limit", "8");
    params.append("sortBy", "transactionDate");
    params.append("sortOrder", "desc");

    api(`/transactions?${params}`, { method: "GET" }).then((res) => {
      setTransactions(res.items);
    });
  }, []);

  return (
    <div className={styles.recentTransactionBox}>
      <div className={styles.panelHeader}>
        <p className={styles.panelTitle}>최근 거래</p>
        <p className={styles.viewAll}>전체보기 →</p>
      </div>
      <ul className={styles.txList}>
        {transactions.map((tx) => (
          <li key={tx.id} className={styles.txItem}>
            <div className={styles.txLeft}>
              <span className={styles.txIcon}>{"📚"}</span>
              <div>
                <p className={styles.txName}>{tx.name}</p>
                <div className={styles.txMeta}>
                  <span className={styles.txMetaText}>
                    {tx.category?.name ?? "-"}
                  </span>
                  <span className={styles.txTag}>
                    {tx.category?.groupType === 0 ? "생활" : "저축"}
                  </span>
                  <span className={styles.txMetaText}>
                    {tx.transactionDate}
                  </span>
                </div>
              </div>
            </div>
            <p
              className={`${styles.txAmount} ${tx.amount > 0 ? styles.income : styles.expense}`}
            >
              {tx.amount > 0 ? "+" : "-"}
              {fmt(tx.amount)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TransactionList;
