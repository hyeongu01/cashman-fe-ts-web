import React, { type JSX, useState, useEffect, useCallback } from "react";
import styles from "./AddTransaction.module.css";
import { useCategory, type Category } from "@/services/category";
import { useAccount, type Account } from "@/services/account";
import { GroupTypes } from "@/common/constraints";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Wallet } from "lucide-react";
import { CreateTransaction, useTransaction } from "@/services/transaction";

type AddTransactionProps = {
  onClose?: () => void;
};

const accountLabels = ["생활 계좌", "저축", "투자"];

function AddTransaction({ onClose }: AddTransactionProps): JSX.Element {
  const [isExpense, setIsExpense] = useState(true);
  const [amount, setAmount] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [accounts, setAccounts] = useState<Account[]>([]);

  const { getCategories } = useCategory();
  const { getAccounts } = useAccount();
  const { postTransaction } = useTransaction();

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

  const handleSaveBtn = () => {
    if (onClose) onClose();
  };

  return (
    <form>
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
        <div className={styles.amountInputWrapper}>
          <Wallet className={styles.amountIcon} size={18} />
          <input
            inputMode="numeric"
            placeholder="0"
            value={amount ? Number(amount).toLocaleString("ko-KR") : ""}
            onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ""))}
          />
        </div>
      </div>
      {/* 계좌 & 카테고리 */}
      <div className={styles.transactionInfoBox}>
        <div className={styles.transactionInfoElement}>
          <p>계좌</p>
          <select>
            {accounts.map((account: Account): JSX.Element => {
              return (
                <option key={account.id} value={account.groupType}>
                  {accountLabels[account.groupType]}
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
          {/* 여기 react-datepicker 로 변경 */}
          <DatePicker
            showIcon
            toggleCalendarOnIconClick
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date)}
            isClearable
            placeholderText="choose date"
            closeOnScroll
          />
        </div>

        <div className={styles.transactionInfoElement}>
          <p>메모</p>
          <input />
        </div>
      </div>
      {/* 저장하기 버튼 */}
      <button className={styles.saveButton} onClick={handleSaveBtn}>
        저장하기
      </button>
    </form>
  );
}

export default AddTransaction;
