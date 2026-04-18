'use client';
import styles from './page.module.css';
import AppLogo from "@/components/AppLogo";
import Image from 'next/image';
import { useAuthService } from '@/services/auth';
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const authService = useAuthService();
  const { accessToken, isInitialized } = useAuth();

  const handleLogin = async (provider: 'naver' | 'kakao' | 'google') => {
    try {
      const res = await authService(provider);
      if (!res) throw new Error('로그인 url을 가져올 수 없습니다.');
      const url = res.url;
      window.location.href = url;
    } catch (e) {
      setError(e instanceof Error ? e.message : '로그인에 실패했습니다.');
    }
  }

  useEffect(() => {
    if (accessToken) {
      router.replace('/');
      return;
    }
  }, [router, accessToken])

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => setError(null), 3000);
    return () => clearTimeout(timer);
  }, [error]);

  if (!isInitialized) return <p>로딩중 ...</p>;
  if (accessToken) return <p>이동중 ...</p>;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {error && (
          <p role='alert' className={styles.errorMessage}>{error}</p>
        )}
        {/* 1. 로고 */}
        <AppLogo />

        {/* 2. 제목 및 서브제목 */}
        <div>
          <p className={styles.heading}>내 가계부</p>
          <p className={styles.subheading}>간편하고 똑똑한 자산 관리</p>
        </div>

        {/* 3. 구분자 */}
        <div className={styles.divider}>
          <div className={styles.line} />
          <span className={styles.dividerText}>소셜 계정으로 시작하기</span>
          <div className={styles.line} />
        </div>


        <div className={styles.socialList}>
          {/* 4-1. 네이버 로그인 */}
          <button className={`${styles.socialLogin} ${styles.naverLogin}`} onClick={() => handleLogin('naver')}>
            <div className={styles.socialProps}>
              <Image src={'/images/naverLogo.png'} alt="naver logo" width={18} height={18} />
              <div className={styles.spacer} />
              <p className={styles.naverLoginText}>네이버 로그인</p>
              <div className={styles.spacer} />
            </div>
          </button>

          {/* 4-2. 카카오 로그인*/}
          <button className={`${styles.socialLogin} ${styles.kakaoLogin}`} onClick={() => handleLogin('kakao')}>
            <div className={styles.socialProps}>
              <Image src={'/images/kakaoLogo.png'} alt="kakao logo" width={18} height={18} />
              <div className={styles.spacer} />
              <p className={styles.kakaoLoginText}>카카오 로그인</p>
              <div className={styles.spacer} />
            </div>
          </button>

          {/* 4-3. 구글 로그인*/}
          <button className={`${styles.socialLogin} ${styles.googleLogin}`} onClick={() => handleLogin('google')}>
            <div className={styles.socialProps}>
              <Image src={'/images/googleLogo.svg'} alt={'google logo'} width={20} height={20} />
              <div className={styles.spacer} />
              <p className={styles.googleLoginText}>구글 로그인</p>
              <div className={styles.spacer} />
            </div>
          </button>

        </div>
      </div>
    </div>
  )
}
