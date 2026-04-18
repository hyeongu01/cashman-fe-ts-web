'use client';
import { useAuth } from "@/contexts/AuthContext";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { flushSync } from "react-dom";

export default function CallbackClient() {
    const router = useRouter();
    const params = useSearchParams();
    const { setAccessToken, setRefreshToken, setTokenType } = useAuth();

    useEffect(() => {
        const accessToken = params.get('accessToken');
        const refreshToken = params.get('refreshToken');
        const tokenType = params.get('tokenType');

        if (!accessToken || !refreshToken || !tokenType) {
            router.replace('/login');
            return
        }

        queueMicrotask(() => {
            flushSync(() => {
                setAccessToken(accessToken);
                setRefreshToken(refreshToken);
                setTokenType(tokenType);
            })
        })

        router.replace('/');
    }, [params, router, setAccessToken, setRefreshToken, setTokenType]);

    return <p>로그인 처리중</p>
}
