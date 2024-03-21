import { Logo } from "@/assets/images";
import { css } from "@emotion/react";
import { useTranslation } from "react-i18next";

export const GlobalHeader = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: "ko" | "en") => {
    i18n.changeLanguage(language);
  };

  return (
    <header
      css={css`
        background: red;
      `}
    >
      <Logo />
      <h1>GlobalHeader</h1>

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
    </header>
  );
};
