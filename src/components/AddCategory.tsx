"use client";

import { type JSX, useState } from "react";
import styles from "./AddCategory.module.css";

type AddCategoryProps = {
  groupType: number;
  transactionType: number;
};

function AddCategory(): JSX.Element | null {
  const [categoryName, setCategoryName] = useState("");

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
      <button className={styles.addBtn}>추가하기</button>
    </>
  );
}
export default AddCategory;
