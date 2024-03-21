import { GlobalHeader } from "@components/GlobalHeader";
import { useTranslation } from "react-i18next";

export const App = () => {
  const { t } = useTranslation("service");

  return (
    <div>
      <GlobalHeader />

      {t("3dModelSection.optimizationPart.title")}
    </div>
  );
};
