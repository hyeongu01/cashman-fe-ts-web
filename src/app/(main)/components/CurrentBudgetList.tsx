import styles from "./CurrentBudgetList.module.css";

const BUDGET_ITEMS = [
  { name: "식비", spent: 520000, total: 600000, color: "var(--expense)" },
  { name: "주거", spent: 650000, total: 700000, color: "var(--text-strong)" },
  { name: "교통", spent: 180000, total: 200000, color: "var(--budget-yellow)" },
  { name: "의료", spent: 85000, total: 150000, color: "var(--budget-green)" },
  { name: "기타", spent: 120000, total: 350000, color: "var(--budget-purple)" },
];

function CurrentBudgetList() {
  return (
    <div className={styles.currentBudgetBox}>
      <p className={styles.panelTitle}>이번달 예산</p>

      <div className={styles.budgetTotal}>
        <div className={styles.budgetTotalHeader}>
          <p className={styles.budgetAmount}>₩1,555,000 / ₩2,000,000</p>
          <p className={styles.budgetPercent}>77.8%</p>
        </div>
        <div className={styles.track}>
          <div
            className={styles.fill}
            style={{ width: "77.8%", backgroundColor: "var(--expense)" }}
          />
        </div>
      </div>

      <ul className={styles.budgetList}>
        {BUDGET_ITEMS.map(({ name, spent, total, color }) => (
          <li key={name} className={styles.budgetItem}>
            <div className={styles.budgetItemHeader}>
              <p className={styles.budgetItemName}>{name}</p>
              <p className={styles.budgetItemAmount}>
                ₩{spent.toLocaleString("ko-KR")} / ₩
                {total.toLocaleString("ko-KR")}
              </p>
            </div>
            <div className={styles.smallTrack}>
              <div
                className={styles.fill}
                style={{
                  width: `${Math.round((spent / total) * 100)}%`,
                  backgroundColor: color,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CurrentBudgetList;
