"use client";

import { type JSX, useState, useCallback, useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { GroupTypes } from "@/common/constraints";
import { useCategory, type Category } from "@/services/category";
import AddCategory from "@/components/AddCategory";
import Modal from "@/components/Modal";
import { Icon } from "@/common/iconList";
import { iconName } from "../../../../common/iconList";

function CategoryPage(): JSX.Element {
  const { getCategories } = useCategory();

  const [currentGroup, setCurrentGroup] =
    useState<(typeof GroupTypes)[keyof typeof GroupTypes]>(0);
  const [currentTransactionType, setCurrentTransactionType] = useState<0 | 1>(
    0,
  );
  const [categories, setCategories] = useState<Category[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <div className={styles.container}>
      {/*헤더*/}
      <div className={styles.headerBox}>
        <Link href={"/settings"} className={styles.backBtn}>
          ←
        </Link>
        <p>카테고리 관리</p>
      </div>

      {/*본문*/}
      <div className={styles.categoryCard}>
        {/*본문 - 헤더*/}
        <div className={styles.cardHeader}>
          <p
            className={`${styles.groupCard} ${currentGroup === 0 ? styles.groupCardActive : ""}`}
            onClick={() => setCurrentGroup(0)}
          >
            생활
          </p>
          <p
            className={`${styles.groupCard} ${currentGroup === 1 ? styles.groupCardActive : ""}`}
            onClick={() => setCurrentGroup(1)}
          >
            저축
          </p>
          <p
            className={`${styles.groupCard} ${currentGroup === 2 ? styles.groupCardActive : ""}`}
            onClick={() => setCurrentGroup(2)}
          >
            투자
          </p>
        </div>

        <div className={styles.transactionInfoBox}>
          <p
            className={
              currentTransactionType === 0
                ? styles.transactionInfoCardExpenseActive
                : ""
            }
            onClick={() => setCurrentTransactionType(0)}
          >
            지출 (-)
          </p>
          <p
            className={
              currentTransactionType === 1
                ? styles.transactionInfoCardSaveActive
                : ""
            }
            onClick={() => setCurrentTransactionType(1)}
          >
            수입 (-)
          </p>
        </div>

        {/*본문 - 카테고리 리스트*/}
        {categories.map((category) => (
          <div key={category.id} className={styles.categoryItem}>
            <div className={styles.categoryItemFront}>
              <button>≡</button>
              <Icon
                name={category.iconKey as iconName}
                size={28}
                color={"white"}
                className={styles.categoryItemIcon}
                style={{ backgroundColor: category.iconColor }}
              />
              <p>{category.name}</p>
            </div>
            <button>편집</button>
          </div>
        ))}

        {/*본문 - 카테고리 추가*/}
        <button
          className={styles.categoryAddBtn}
          onClick={() => setIsAddModalOpen(true)}
        >
          <p>+ 지출 카테고리 추가</p>
          <Modal
            isOpen={isAddModalOpen}
            onClose={() => setIsAddModalOpen(false)}
            title={"카테고리 추가"}
          >
            <AddCategory
              groupType={currentGroup}
              transactionType={currentTransactionType}
              onSuccess={() => {
                setIsAddModalOpen(false);
                getCategories().then(setCategories);
              }}
            />
          </Modal>
        </button>
      </div>
    </div>
  );
}
export default CategoryPage;
