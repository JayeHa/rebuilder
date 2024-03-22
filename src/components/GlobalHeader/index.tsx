import { useResponsive } from "@/hooks/useResponsive";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";
import { useGlobalHeaderState } from "./hooks";
import * as Styled from "./styles";

export type ThemeType = "dark" | "light";

type Props = {
  theme?: ThemeType;
};

export const GlobalHeader = ({ theme = "dark" }: Props) => {
  const { headerHeight, navigationState } = useGlobalHeaderState();
  const { isMobileDevice } = useResponsive();

  const svgColor = theme === "dark" ? "white" : "black";

  return (
    <Styled.Container themeMode={theme}>
      <Styled.Header headerHeight={headerHeight}>
        {!isMobileDevice && (
          <DesktopHeader
            svgColor={svgColor}
            navigationState={navigationState}
          />
        )}

        {isMobileDevice && (
          <MobileHeader svgColor={svgColor} navigationState={navigationState} />
        )}
      </Styled.Header>
    </Styled.Container>
  );
};
