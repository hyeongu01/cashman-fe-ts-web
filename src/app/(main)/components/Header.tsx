"use client";

import styles from "./Header.module.css";
import { useState, useEffect, useCallback } from "react";
import Modal from "@/components/Modal";
import { useCategory, type Category } from "@/services/category";

const accountOptions = [
  { value: "default", label: "생활 계좌" },
  { value: "saving", label: "저축" },
  { value: "investment", label: "투자" },
];

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpense, setIsExpense] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [categories, setCategories] = useState<Category[]>([]);
  const [errors, setErrors] = useState<string | null>(null);
  const { getCategories } = useCategory();

  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((e) => setErrors("카테고리를 불러오지 못했습니다."));
  }, [getCategories]);

  useEffect(() => {
    if (!errors) return;
    alert(errors);
  }, [errors]);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function handleToggleExpense() {}

  const handleToggleModal = useCallback((target: boolean) => {
    setIsExpense(target);
  }, []);

  return (
    <div className={styles.headerBox}>
      <p className={styles.mainTitle}>대시보드</p>
      <button className={styles.addButton} onClick={openModal}>
        <p>+</p>
        <p>거래 추가</p>
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={"거래 추가"}>
        <div className={styles.tabCard}>
          <div
            className={`${styles.tabComponent} ${isExpense ? styles.tabComponentActive : ""}`}
            onClick={() => handleToggleModal(true)}
          >
            <p
              className={`${isExpense ? styles.tabComponentRedTextActive : ""}`}
            >
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
              {accountOptions.map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.label}
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
              onChange={(e) => setStartDate(new Date(e.target.value))}
            />
          </div>

          <div className={styles.transactionInfoElement}>
            <p>메모</p>
            <input />
          </div>
        </div>

        {/* 저장하기 버튼 */}
        <button className={styles.saveButton}>저장하기</button>
      </Modal>
    </div>
  );
}
export default Header;
