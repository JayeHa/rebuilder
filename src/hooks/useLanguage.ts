import { useTranslation } from "react-i18next";

export type Language = "ko" | "en";

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: Language) => {
    i18n.changeLanguage(language);
  };

  return {
    language: i18n.language as Language,
    changeLanguage,
  };
};
