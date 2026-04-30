import React, { type JSX, useState, useEffect, useCallback } from "react";
import styles from "./AddTransaction.module.css";
import { useCategory, type Category } from "@/services/category";
import { useAccount, type Account } from "@/services/account";
import { GroupTypes } from "@/common/constraints";

type AddTransactionProps = {
  onClose?: () => void;
};

const accountOptions = [
  { value: "default", label: "생활 계좌" },
  { value: "saving", label: "저축" },
  { value: "investment", label: "투자" },
];

function AddTransaction({ onClose }: AddTransactionProps): JSX.Element {
  const [isExpense, setIsExpense] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [categories, setCategories] = useState<Category[]>([]);
  const [accounts, setAccounts] = useState<Account[]>([]);

  const { getCategories } = useCategory();
  const { getAccounts } = useAccount();

  // 카테고리, 계좌 API 호출
  useEffect(() => {
    Promise.all([getCategories(), getAccounts()])
      .then(([categories, accounts]) => {
        setCategories(categories);
        setAccounts(accounts.items);
      })
      .catch((e) => console.error(e));
  }, [getCategories, getAccounts]);

  const handleToggleModal = useCallback((target: boolean) => {
    setIsExpense(target);
  }, []);

  return (
    <>
      <div className={styles.tabCard}>
        <div
          className={`${styles.tabComponent} ${isExpense ? styles.tabComponentActive : ""}`}
          onClick={() => handleToggleModal(true)}
        >
          <p className={`${isExpense ? styles.tabComponentRedTextActive : ""}`}>
            지출
          </p>
        </div>
        <div
          className={`${styles.tabComponent} ${isExpense ? "" : styles.tabComponentActive}`}
          onClick={() => handleToggleModal(false)}
        >
          <p
            className={`${isExpense ? "" : styles.tabComponentGreenTextActive}`}
          >
            수입
          </p>
        </div>
      </div>
      {/* 금액  */}
      <div className={styles.amountBox}>
        <p>금액</p>
        <input />
      </div>
      {/* 계좌 & 카테고리 */}
      <div className={styles.transactionInfoBox}>
        <div className={styles.transactionInfoElement}>
          <p>계좌</p>
          <select>
            {accounts.map((account: Account): JSX.Element => {
              return (
                <option key={account.id} value={account.groupType}>
                  {account.groupType}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styles.transactionInfoElement}>
          <p>카테고리</p>
          <select>
            <option value={"none"}>없음</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* 날짜 & 메모 */}
      <div className={styles.transactionInfoBox}>
        <div className={styles.transactionInfoElement}>
          <p>날짜</p>
          <input
            type={"date"}
            value={startDate.toISOString()}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setStartDate(new Date(e.target.value))
            }
          />
        </div>

        <div className={styles.transactionInfoElement}>
          <p>메모</p>
          <input />
        </div>
      </div>
      {/* 저장하기 버튼 */}
      <button className={styles.saveButton}>저장하기</button>
    </>
  );
}

export default AddTransaction;
