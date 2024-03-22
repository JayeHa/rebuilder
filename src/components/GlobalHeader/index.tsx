import { useLanguage } from "@/hooks/useLanguage";
import { Logo } from "./Logo";
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

  return (
    <Styled.Container themeMode={theme}>
      <Styled.Header>
        <Logo size="lg" />

        {/* TODO: Navigation, LanguageSelector */}
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
