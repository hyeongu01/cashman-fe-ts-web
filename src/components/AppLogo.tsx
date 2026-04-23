import Image from "next/image";

interface AppLogoProps {
  size?: number;
}

function AppLogo({ size = 64 }: AppLogoProps) {
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <Image
        src="/images/logo.png"
        alt="logo"
        fill
        priority
        sizes={`${size}px`}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}

export default AppLogo;
