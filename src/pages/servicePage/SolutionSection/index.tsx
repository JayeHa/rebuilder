import { getObjectEntries } from "@/utils/getObjectProperties";
import { Section } from "@components/Section";
import { useTranslation } from "react-i18next";
import { ContentCard, SolutionContent } from "./ContentCard";
import { CarouselCard, CarouselCardContent } from "./ContentCard/CarouselCard";
import * as Styled from "./styles";

export const SolutionSection = () => {
  const { t } = useTranslation("service", { keyPrefix: "solutionSection" });

  // carousel data
  const [, carouselContent] = getObjectEntries(
    t("carousel", { returnObjects: true })
  )[0];

  // other contents data
  const contentList = getObjectEntries(t("contents", { returnObjects: true }));

  return (
    <Section hasMaxWidth={false}>
      <Styled.CarouselContainer>
        <CarouselCard
          content={carouselContent as unknown as CarouselCardContent}
        />
      </Styled.CarouselContainer>

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
