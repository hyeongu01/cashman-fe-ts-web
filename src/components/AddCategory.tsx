"use client";

import { type JSX, useState, useCallback } from "react";
import styles from "./AddCategory.module.css";
import { GroupTypes } from "@/common/constraints";
import { useCategory } from "@/services/category";
import { ICON_LIST, Icon, type iconName, ICON_COLORS } from "@/common/iconList";

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
  const [selectedIcon, setSelectedIcon] = useState<iconName | null>(null);

  const handleAddBtn = useCallback(() => {
    addCategory(groupType, transactionType, categoryName);
  }, [addCategory, categoryName]);

  return (
    <>
      {/* 카테고리 아이콘 선택 */}
      <>
        <p className={styles.sectionLabel}>아이콘</p>
        <div className={styles.iconContainer}>
          {ICON_LIST.filter((icon) => icon.groupType === groupType).map(
            (icon) => (
              <button
                key={icon.name}
                className={`${styles.iconItem}${selectedIcon === icon.name ? ` ${styles.selected}` : ""}`}
                onClick={() => setSelectedIcon(icon.name)}
              >
                <Icon name={icon.name} size={24} />
              </button>
            ),
          )}
        </div>
      </>
      {/*카테고리 이름 입력*/}
      <>
        <p className={styles.sectionLabel}>카테고리 이름</p>
        <input
          className={styles.nameInput}
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
      </>

      {/* 카테고리 색상 선택 */}
      <>
        <p className={styles.sectionLabel}>색상</p>
        <div className={styles.colorPickerBox}>
          {ICON_COLORS.map((color) => (
            <div
              className={styles.colorPickerItem}
              style={{ backgroundColor: color.value }}
            ></div>
          ))}
        </div>
      </>

      {/*추가하기 버튼*/}
      <button className={styles.addBtn} onClick={handleAddBtn}>
        추가하기
      </button>
    </>
  );
}
export default AddCategory;
