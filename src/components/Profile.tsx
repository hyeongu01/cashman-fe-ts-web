"use client";

import styles from "./Profile.module.css";
import { useAuth } from "@/contexts/AuthContext";

function Profile() {
  const { user, isInitialized } = useAuth();

  if (!isInitialized || !user)
    return (
      <div className={styles.card}>
        <div className={styles.spinner} />
      </div>
    );

  return (
    <div className={styles.card}>
      <div className={styles.profileIcon}>{user?.name.split("")[0] ?? ""}</div>
      <div>
        <p className={styles.name}>{user?.name ?? ""}</p>
        <p className={styles.email}>{user?.email ?? ""}</p>
      </div>
    </div>
  );
}
export default Profile;
