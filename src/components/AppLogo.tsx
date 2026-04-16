import Image from 'next/image';

interface AppLogoProps {
  size?: number;
}

function AppLogo({size = 64}: AppLogoProps) {
  return <Image src='/images/logo.png' alt='logo' width={size} height={size} />;

}

export default AppLogo;
