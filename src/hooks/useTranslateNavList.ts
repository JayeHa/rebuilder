import { getObjectEntries } from "@/utils/getObjectProperties";
import { useTranslation } from "react-i18next";

export const useTranslationNavList = () => {
  const { t } = useTranslation("common");

  const navList = getObjectEntries(
    t("header.navigation", { returnObjects: true })
  );

  return navList;
};
