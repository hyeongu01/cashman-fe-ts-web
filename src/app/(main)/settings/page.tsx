"use client";

import { type JSX } from "react";
import styles from "./page.module.css";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

type MenuItem = { label: string; href: string };

const ACCOUNT_ITEMS: MenuItem[] = [
  { label: "생활 계좌 설정", href: "/settings/accounts/living" },
  { label: "저축 계좌 설정", href: "/settings/accounts/saving" },
  { label: "투자 계좌 설정", href: "/settings/accounts/investment" },
];

const APP_ITEMS: MenuItem[] = [
  { label: "알림 설정", href: "/settings/notifications" },
  { label: "카테고리 관리", href: "/settings/categories" },
  { label: "데이터 내보내기", href: "/settings/export" },
];

const INFO_ITEMS: MenuItem[] = [
  { label: "앱 정보", href: "/settings/about" },
  { label: "개인정보처리방침", href: "/settings/privacy" },
  { label: "이용약관", href: "/settings/terms" },
];

function MenuList({ items }: { items: MenuItem[] }) {
  return (
    <>
      {items.map(({ label, href }, i) => (
        <div key={href}>
          {i > 0 && <div className={styles.divider} />}
          <Link href={href} className={styles.menuItem}>
            <span className={styles.menuLabel}>{label}</span>
            <span className={styles.chevron}>›</span>
          </Link>
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
        <div className={styles.profileIcon}>{user?.name.charAt(0) ?? "?"}</div>
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
