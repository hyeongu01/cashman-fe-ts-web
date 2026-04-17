'use client';

import Image from "next/image";
import Profile from "../components/Profile";
import { useEffect, useState } from 'react';
import { redirect, useRouter } from 'next/navigation';
import { getMe, type User } from "@/services/user";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getMe()
      .then(setUser)
      .catch(() => {
        router.replace('/login');
        return;
      });
  }, [router]);

  if (!user) return <p>로딩중 ...</p>;
  
  return (
    <div>
      <Profile user={user} />
    </div>
  );
}
