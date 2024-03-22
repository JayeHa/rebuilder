import { GlobalHeader } from "@components/GlobalHeader";
import { useTranslation } from "react-i18next";

export const App = () => {
  const { t } = useTranslation("service");

  return (
    <div>
      <GlobalHeader theme="light" />

      {t("3dModelSection.optimizationPart.title")}
    </div>
  );
};
