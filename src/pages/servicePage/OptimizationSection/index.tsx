import { Flex, FlexColumn } from "@/styles/utils/flex";
import { fullWidth } from "@/styles/utils/sizes";
import { Section } from "@components/Section";
import { css } from "@emotion/react";
import { useTranslation } from "react-i18next";
import * as Styled from "./styles";

export const OptimizationSection = () => {
  const { t } = useTranslation("service", { keyPrefix: "optimizationSection" });

  return (
    <Section
      backgroundColor="background"
      css={css`
        padding-bottom: 200px;
      `}
    >
      <Flex css={fullWidth}>
        <Styled.StickyContainer>
          <Styled.Strong>3D model</Styled.Strong>
          <Styled.Title isActive={true}>
            {t("optimizationPart.title")}
          </Styled.Title>
          <Styled.Title isActive={false}>{t("usagePart.title")}</Styled.Title>
        </Styled.StickyContainer>

        <FlexColumn gap="230px">
          <article css={{ paddingTop: "120px" }}>
            {/* hiddenTitle */}
            <Styled.Text>
              {t("optimizationPart.desktopDescription.text1")}
              <br />
              {t("optimizationPart.desktopDescription.text2")}
            </Styled.Text>

            <img src="/images/optimization1.png" />
          </article>

          <article>
            {/* hiddenTitle */}
            <Styled.Text>
              {t("usagePart.desktopDescription.text1")}
              <br />
              {t("usagePart.desktopDescription.text2")}
            </Styled.Text>
            <img src="/images/optimization1.png" />
          </article>
        </FlexColumn>
      </Flex>
    </Section>
  );
};
