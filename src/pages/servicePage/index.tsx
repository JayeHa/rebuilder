import { useTranslation } from "react-i18next";
import { HeroSection } from "./HeroSection";

export const ServicePage = () => {
  const { t } = useTranslation("service");

  return (
    <div css={{ height: "150vh" }}>
      <HeroSection />

      {t("3dModelSection.optimizationPart.title")}
    </div>
  );
};
