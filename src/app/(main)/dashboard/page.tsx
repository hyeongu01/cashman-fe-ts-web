import { type JSX } from "react";
import styles from "./page.module.css";
import TransactionList from "./components/TransactionList";
import CurrentBudgetList from "./components/CurrentBudgetList";
import BudgetSummary from "./components/BudgetSummary";
import Header from "./components/Header";

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
