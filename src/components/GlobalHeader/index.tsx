import { LanguageSelector } from "./LanguageSelector";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { useGlobalHeaderState } from "./hooks";
import * as Styled from "./styles";

export type ThemeType = "dark" | "light";

type Props = {
  theme?: ThemeType;
};

{
  /* TODO: MobileHeader, DesktopHeader */
}

export const GlobalHeader = ({ theme = "dark" }: Props) => {
  const { headerHeight, navigationState } = useGlobalHeaderState();

  const svgColor = theme === "dark" ? "white" : "black";

  return (
    <Styled.Container themeMode={theme}>
      <Styled.Header headerHeight={headerHeight}>
        <Styled.Wrapper>
          <Logo size="lg" color={svgColor} />

          <Navigation {...navigationState} />
          <div />

          <LanguageSelector color={svgColor} />
        </Styled.Wrapper>
      </Styled.Header>
    </Styled.Container>
  );
};
