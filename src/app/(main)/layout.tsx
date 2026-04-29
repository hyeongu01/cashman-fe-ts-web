"use client";

import React, { type JSX, useState } from "react";
import SideBar from "@/components/SideBar";
import { useAuth } from "@/contexts/AuthContext";
import { redirect } from "next/navigation";
import styles from "./layout.module.css";

function MainLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element | null {
  const { isInitialized, user } = useAuth();
  if (!isInitialized) return null;
  if (!user) return redirect("/login");

  return (
    <div className={styles.container}>
      <SideBar />
      {children}
    </div>
  );
}
export default MainLayout;
