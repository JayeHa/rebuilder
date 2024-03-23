import { BannerLogo } from "@/assets/images";
import { Flex, FlexColumn } from "@/styles/utils/flex";
import { Button } from "@components/Buttons/Button";
import { useScrollProgress } from "@toss/scroll-animation";
import { useTranslation } from "react-i18next";
import * as Styled from "./styles";

export const Banner = () => {
  const { t } = useTranslation("service", { keyPrefix: "bannerSection" });
  const { ref, scrollYProgress } = useScrollProgress<HTMLDivElement>({
    triggerHook: "onEnter",
    duration: "85vh",
    clip: true,
  });

  return (
    <Styled.Container ref={ref}>
      <Styled.Background
        style={{ backgroundPositionY: `${scrollYProgress * 100}%` }}
      />

      <Styled.Banner>
        <Styled.FlexColumn>
          <FlexColumn>
            <Flex gap="20px">
              <BannerLogo />
              <FlexColumn>
                <Styled.Strong>{t("subTitle")}</Styled.Strong>
                <Styled.Title>{t("title")}</Styled.Title>
              </FlexColumn>
            </Flex>
            <Styled.Text>
              {t("description.text1")}
              <br />
              {t("description.text2")}
            </Styled.Text>
          </FlexColumn>

          <Button>더 알아보기</Button>
        </Styled.FlexColumn>
      </Styled.Banner>
    </Styled.Container>
  );
};
