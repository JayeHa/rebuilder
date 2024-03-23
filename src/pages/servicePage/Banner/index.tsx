import { FlexCenter, FlexColumn } from "@/styles/utils/flex";
import { mobileHidden } from "@/styles/utils/mediaQuery";
import { getObjectEntries } from "@/utils/getObjectProperties";
import { Button } from "@components/Buttons/Button";
import { useScrollProgress } from "@toss/scroll-animation";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./styles";

export const Banner = () => {
  // scroll
  const { ref, scrollYProgress } = useScrollProgress<HTMLDivElement>({
    triggerHook: "onEnter",
    duration: "85vh",
    clip: true,
  });

  // i18n
  const { t } = useTranslation("service", { keyPrefix: "bannerSection" });
  const descriptionList = getObjectEntries(
    t("description", { returnObjects: true })
  );

  return (
    <Styled.Container ref={ref}>
      <Styled.Background
        style={{ backgroundPositionY: `${scrollYProgress * 100}%` }}
      />

      <Styled.Banner>
        <Styled.FlexColumn>
          <FlexColumn>
            <FlexCenter gap="20px">
              <Styled.Logo />

              <FlexColumn>
                <Styled.Strong>{t("subTitle")}</Styled.Strong>
                <Styled.Title>{t("title")}</Styled.Title>
              </FlexColumn>
            </FlexCenter>

            <Styled.Text>
              {descriptionList.map(([key, text]) => (
                <Fragment key={key}>
                  {text} <br />
                </Fragment>
              ))}
            </Styled.Text>
          </FlexColumn>

          <Button css={mobileHidden}>{t("learnMoreButton")}</Button>
          <Styled.MobileMoreButton>
            {t("learnMoreButton")}
          </Styled.MobileMoreButton>
        </Styled.FlexColumn>
      </Styled.Banner>
    </Styled.Container>
  );
};
