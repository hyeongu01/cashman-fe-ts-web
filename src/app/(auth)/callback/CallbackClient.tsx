"use client";
import { useAuth } from "@/contexts/AuthContext";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { flushSync } from "react-dom";

export default function CallbackClient() {
  const router = useRouter();
  const params = useSearchParams();
  const { setAccessToken } = useAuth();

  useEffect(() => {
    const accessToken = params.get("accessToken");

    if (!accessToken) {
      router.replace("/login");
      return;
    }

    queueMicrotask(() => {
      flushSync(() => {
        setAccessToken(accessToken);
      });
    });

    router.replace("/");
  }, [params, router, setAccessToken]);

  return null;
}
