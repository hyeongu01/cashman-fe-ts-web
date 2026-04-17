'use client';
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CallbackClient() {
    const router = useRouter();

    const params = useSearchParams();

    useEffect(() => {
        const accessToken = params.get('accessToken');
        const refreshToken = params.get('refreshToken');
        const tokenType = params.get('tokenType');

        if (!accessToken || !refreshToken || !tokenType) {
            router.replace('/login');
            return
        }

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('tokenType', tokenType);

        router.replace('/');
    }, [params, router]);
    
    return <p>로그인 처리중</p>
}
