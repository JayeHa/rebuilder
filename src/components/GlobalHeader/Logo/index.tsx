import { Logo as LogoSvg } from "@/assets/images";
import { colors } from "@/styles/constants/colors";

type LogoSize = "sm" | "lg";

const LOGO_SIZE_MAP: Record<LogoSize, number> = {
  sm: 125,
  lg: 140,
};

type Props = {
  size: LogoSize;
  color?: keyof typeof colors;
};

export const Logo = ({ size, color = "white" }: Props) => {
  return (
    <a href="/">
      <LogoSvg width={LOGO_SIZE_MAP[size]} color={colors[color]} />
    </a>
  );
};
