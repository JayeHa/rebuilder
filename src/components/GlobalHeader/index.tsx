import { useResponsive } from "@/hooks/useResponsive";
import { CSSProperties } from "react";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader/MobileHeader";
import * as Styled from "./styles";

export type ThemeType = "dark" | "light";

type Props = {
  theme?: ThemeType;
  style?: CSSProperties;
};

export const GlobalHeader = ({ theme = "dark", ...props }: Props) => {
  const { isMobileDevice } = useResponsive();

  const svgColor = theme === "dark" ? "white" : "black";

  return (
    <Styled.Container themeMode={theme} {...props}>
      {!isMobileDevice && <DesktopHeader svgColor={svgColor} />}

      {isMobileDevice && <MobileHeader svgColor={svgColor} />}
    </Styled.Container>
  );
};
