"use client";

import { type JSX } from "react";
import styles from "./page.module.css";
import { useAuth } from "@/contexts/AuthContext";

const ACCOUNT_ITEMS = ["생활 계좌 설정", "저축 계좌 설정", "투자 계좌 설정"];
const APP_ITEMS = ["알림 설정", "카테고리 관리", "데이터 내보내기"];
const INFO_ITEMS = ["앱 정보", "개인정보처리방침", "이용약관"];

function MenuList({ items }: { items: string[] }) {
  return (
    <>
      {items.map((label, i) => (
        <div key={label}>
          {i > 0 && <div className={styles.divider} />}
          <div className={styles.menuItem}>
            <span className={styles.menuLabel}>{label}</span>
            <span className={styles.chevron}>›</span>
          </div>
        </div>
      ))}
    </>
  );
}

function SettingPage(): JSX.Element {
  const { user } = useAuth();

  return (
    <div className={styles.contentBox}>
      <h1 className={styles.title}>설정</h1>

      {/* 프로필 */}
      <div className={styles.profileCard}>
        <div className={styles.profileIcon}>
          {user?.name.charAt(0) ?? "?"}
        </div>
        <div>
          <p className={styles.profileName}>{user?.name ?? ""}</p>
          <p className={styles.profileEmail}>{user?.email ?? ""}</p>
        </div>
      </div>

      {/* 계좌 관리 */}
      <div className={styles.section}>
        <p className={styles.sectionLabel}>계좌 관리</p>
        <MenuList items={ACCOUNT_ITEMS} />
      </div>

      {/* 앱 설정 */}
      <div className={styles.section}>
        <p className={styles.sectionLabel}>앱 설정</p>
        <MenuList items={APP_ITEMS} />
      </div>

      {/* 정보 + 로그아웃 */}
      <div className={styles.section}>
        <p className={styles.sectionLabel}>정보</p>
        <MenuList items={INFO_ITEMS} />
        <div className={styles.divider} />
        <button className={styles.logoutButton}>로그아웃</button>
      </div>
    </div>
  );
}

export default SettingPage;