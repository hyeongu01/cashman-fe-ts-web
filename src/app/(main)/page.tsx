"use client";
import Profile from "@/components/Profile";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUserService, type User } from "@/services/user";
import { useAuth } from "@/contexts/AuthContext";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Profile />
    </div>
  );
}
