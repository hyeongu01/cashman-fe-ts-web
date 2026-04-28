"use client";

import styles from "./TransactionList.module.css";
import { useState, useEffect } from "react";
import { useApi } from "@/lib/api";
import { Icon } from "@iconify/react";
import { useTransaction } from "@/services/transaction";

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
    iconKey: string;
    iconColor: string;
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
  const api = useApi();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const { getTransactions } = useTransaction();

  useEffect(() => {
    getTransactions({ sortBy: "transactionDate" }).then((data) => {
      setTransactions(data.items);
    });
  }, [getTransactions]);

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
              <Icon
                icon={tx.category?.iconKey ?? "lucide-lab:tab"}
                width={20}
                height={20}
              />
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
