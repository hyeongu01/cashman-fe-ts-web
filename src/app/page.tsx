'use client';
import Profile from "../components/Profile";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserService, type User } from "@/services/user";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const { getMe } = useUserService();

  useEffect(() => {
    getMe()
      .then(setUser)
      .catch(() => {
        router.replace('/login');
        return;
      });
  }, [router, getMe]);

  if (!user) return <p>로딩중 ...</p>;

  return (
    <div>
      <Profile user={user} />
    </div>
  );
}
