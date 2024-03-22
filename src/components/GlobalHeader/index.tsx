import { useLanguage } from "@/hooks/useLanguage";
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
  const { changeLanguage } = useLanguage();

  const { headerHeight, navigationState } = useGlobalHeaderState();

  return (
    <Styled.Container themeMode={theme} headerHeight={headerHeight}>
      <Styled.Header>
        <Logo size="lg" color={theme === "dark" ? "white" : "black"} />

        <Navigation {...navigationState} />

        <div>
          <button
            type="button"
            onClick={() => {
              changeLanguage("ko");
            }}
          >
            한국어 변경
          </button>
          <button
            type="button"
            onClick={() => {
              changeLanguage("en");
            }}
          >
            영어 변경
          </button>
        </div>
      </Styled.Header>
    </Styled.Container>
  );
};
