import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.headerBox}>
      <p className={styles.mainTitle}>대시보드</p>
      <button className={styles.addButton}>
        <p>+</p>
        <p>거래 추가</p>
      </button>
    </div>
  );
}
export default Header;
