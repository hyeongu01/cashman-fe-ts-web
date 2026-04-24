import styles from "./TransactionList.module.css";

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

function fmt(n: number) {
  return Math.abs(n).toLocaleString("ko-KR");
}

function TransactionList() {
  return (
    <div className={styles.recentTransactionBox}>
      <div className={styles.panelHeader}>
        <p className={styles.panelTitle}>최근 거래</p>
        <p className={styles.viewAll}>전체보기 →</p>
      </div>
      <ul className={styles.txList}>
        {TRANSACTIONS.map((tx) => (
          <li key={tx.name + tx.date} className={styles.txItem}>
            <div className={styles.txLeft}>
              <span className={styles.txIcon}>{tx.icon}</span>
              <div>
                <p className={styles.txName}>{tx.name}</p>
                <div className={styles.txMeta}>
                  <span className={styles.txMetaText}>{tx.category}</span>
                  <span className={styles.txTag}>{tx.tag}</span>
                  <span className={styles.txMetaText}>{tx.date}</span>
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
