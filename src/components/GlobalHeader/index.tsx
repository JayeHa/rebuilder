import { useResponsive } from "@/hooks/useResponsive";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";
import * as Styled from "./styles";

export type ThemeType = "dark" | "light";

type Props = {
  theme?: ThemeType;
};

export const GlobalHeader = ({ theme = "dark" }: Props) => {
  const { isMobileDevice } = useResponsive();

  const svgColor = theme === "dark" ? "white" : "black";

  return (
    <Styled.Container themeMode={theme}>
      {!isMobileDevice && <DesktopHeader svgColor={svgColor} />}

      {isMobileDevice && <MobileHeader svgColor={svgColor} />}
    </Styled.Container>
  );
};
