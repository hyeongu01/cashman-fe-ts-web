"use client";

import { type JSX, useState, useCallback } from "react";
import styles from "./AddCategory.module.css";
import { GroupTypes } from "@/common/constraints";
import { useCategory } from "@/services/category";

type AddCategoryProps = {
  groupType: (typeof GroupTypes)[keyof typeof GroupTypes];
  transactionType: 0 | 1; // 0: 지출, 1: 수입
};

function AddCategory({
  groupType,
  transactionType,
}: AddCategoryProps): JSX.Element | null {
  const { addCategory } = useCategory();

  const [categoryName, setCategoryName] = useState("");

  const handleAddBtn = useCallback(() => {
    addCategory(groupType, transactionType, categoryName);
  }, [addCategory, categoryName]);

  return (
    <>
      {/*카테고리 이름 입력*/}
      <>
        <p className={styles.sectionLabel}>카테고리 이름</p>
        <input
          className={styles.nameInput}
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
      </>

      {/*추가하기 버튼*/}
      <button className={styles.addBtn} onClick={handleAddBtn}>
        추가하기
      </button>
    </>
  );
}
export default AddCategory;
