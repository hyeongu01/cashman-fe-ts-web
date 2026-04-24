import { type JSX } from "react";
import styles from "./page.module.css";
import TransactionList from "./components/TransactionList";
import CurrentBudgetList from "./components/CurrentBudgetList";

export default function Home(): JSX.Element {
  return (
    <div className={styles.contentBox}>
      {/* 헤더 */}
      <div className={styles.headerBox}>
        <p className={styles.mainTitle}>대시보드</p>
        <button className={styles.addButton}>
          <p>+</p>
          <p>거래 추가</p>
        </button>
      </div>

      {/* 가계부 요약 */}
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

      {/* 가계부 상세 */}
      <div className={styles.detailBox}>
        {/* 최근 거래 */}
        <TransactionList />

        {/* 이번달 예산 */}
        <CurrentBudgetList />
      </div>
    </div>
  );
}
