import { useSearchParams, useRouter } from "next/navigation";

/**
 * 쿼리 파라메터를 받아 스토리지에 저장한다.
 */
export default function CallbackPage() {
    const params = useSearchParams();

    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');
    const tokenType = params.get('tokenType');

    if (!accessToken || !refreshToken || !tokenType) 
        throw new Error('토큰을 받아올 수 없습니다.');

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('tokenType', tokenType);

    const router = useRouter();
    router.replace('/');
    return <p>로그인 처리중</p>
}