import styles from "./BudgetSummary.module.css";
import { type JSX } from "react";

function BudgetSummary(): JSX.Element {
  return (
    <div className={styles.summaryBox}>
      <div className={styles.totalBudgetBox}>
        <p className={styles.cardLabel}>전체 자산</p>
        <p className={styles.totalValue}>₩ 34,820,000</p>
      </div>

      <div className={`${styles.categoryCard} ${styles.coral}`}>
        <div className={styles.cardHeader}>
          <span>🏠</span>
          <p className={`${styles.cardLabel} ${styles.coralText}`}>생활</p>
        </div>
        <p className={`${styles.categoryValue} ${styles.coralText}`}>
          ₩8,420,000
        </p>
        <p className={`${styles.cardSub} ${styles.coralText}`}>
          이번달 -1,240,000
        </p>
      </div>

      <div className={`${styles.categoryCard} ${styles.green}`}>
        <div className={styles.cardHeader}>
          <span>🏦</span>
          <p className={`${styles.cardLabel} ${styles.greenText}`}>저축</p>
        </div>
        <p className={`${styles.categoryValue} ${styles.greenText}`}>
          ₩18,000,000
        </p>
        <p className={`${styles.cardSub} ${styles.greenText}`}>
          이번달 +500,000
        </p>
      </div>

      <div className={`${styles.categoryCard} ${styles.blue}`}>
        <div className={styles.cardHeader}>
          <span>📈</span>
          <p className={`${styles.cardLabel} ${styles.blueText}`}>투자</p>
        </div>
        <p className={`${styles.categoryValue} ${styles.blueText}`}>
          ₩8,400,000
        </p>
        <p className={`${styles.cardSub} ${styles.blueText}`}>
          이번달 +320,000
        </p>
      </div>
    </div>
  );
}
export default BudgetSummary;
