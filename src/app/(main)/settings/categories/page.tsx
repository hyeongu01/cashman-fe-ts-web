import { type JSX } from "react";
import styles from "./page.module.css";
import Link from "next/link";

function CategoryPage(): JSX.Element {
  return (
    <div className={styles.container}>
      {/*헤더*/}
      <div className={styles.headerBox}>
        <Link href={"/settings"} className={styles.backBtn}>
          ←
        </Link>
        <p>카테고리 관리</p>
      </div>

      <div className={styles.categoryCard}></div>
    </div>
  );
}
export default CategoryPage;
