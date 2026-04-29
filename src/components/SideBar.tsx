"use client";
import { type JSX } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SideBar.module.css";
import Profile from "@/components/Profile";
import AppLogo from "@/components/AppLogo";

const NAV_ITEMS = [
  { icon: "🏠", label: "대시보드", href: "/dashboard" },
  { icon: "📋", label: "거래 내역", href: "/transactions" },
  { icon: "📊", label: "예산", href: "/budget" },
  { icon: "⚙️", label: "설정", href: "/settings" },
];

function SideBar(): JSX.Element {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.logoRow}>
        <AppLogo size={32} />
        <p className={styles.appName}>내 가계부</p>
      </div>

      <nav className={styles.nav}>
        {NAV_ITEMS.map(({ icon, label, href }) => (
          <Link
            key={href}
            href={href}
            className={`${styles.navItem} ${pathname.startsWith(href) ? styles.navItemActive : ""}`}
          >
            <span className={styles.navIcon}>{icon}</span>
            <span className={styles.navLabel}>{label}</span>
          </Link>
        ))}
      </nav>

      <div className={styles.spacer} />
      <Profile />
    </div>
  );
}

export default SideBar;
