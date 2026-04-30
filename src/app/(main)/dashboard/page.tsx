import { type JSX } from "react";
import styles from "./page.module.css";
import TransactionList from "./TransactionList";
import CurrentBudgetList from "./CurrentBudgetList";
import BudgetSummary from "./BudgetSummary";
import Header from "./Header";

export default function Home(): JSX.Element {
  return (
    <div className={styles.contentBox}>
      {/* 헤더 */}
      <Header />
      {/* 자산 요약 */}
      <BudgetSummary />
      {/* 가계부 상세 */}
      <div className={styles.detailBox}>
        <TransactionList />
        <CurrentBudgetList />
      </div>
    </div>
  );
}
