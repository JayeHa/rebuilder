import { getObjectEntries } from "@/utils/getObjectProperties";
import { Section } from "@components/Section";
import { useTranslation } from "react-i18next";
import { ContentCard, SolutionContent } from "./ContentCard";
import * as Styled from "./styles";

export const SolutionSection = () => {
  const { t } = useTranslation("service", { keyPrefix: "solutionSection" });
  const contentList = getObjectEntries(t("contents", { returnObjects: true }));

  return (
    <Section>
      {/* TODO: 캐로셀 */}

      <Styled.CardsContainer>
        {contentList.map(([key, content]) => (
          <ContentCard
            key={key}
            content={content as unknown as SolutionContent}
          />
        ))}
      </Styled.CardsContainer>
    </Section>
  );
};
