import { Logo as LogoSvg } from "@/assets/images";

type LogoSize = "sm" | "lg";

const LOGO_SIZE_MAP: Record<LogoSize, number> = {
  sm: 125,
  lg: 140,
};

type Props = {
  size: "sm" | "lg";
};

export const Logo = ({ size }: Props) => {
  return (
    <a href="/">
      <LogoSvg width={LOGO_SIZE_MAP[size]} />
    </a>
  );
};
