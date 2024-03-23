import { Flex, FlexColumn } from "@/styles/utils/flex";
import { fullWidth } from "@/styles/utils/sizes";
import { Image } from "@components/Image";
import { Section } from "@components/Section";
import { OverlayVideo } from "@components/VideoPlayer/OverlayVideo";
import { useTranslation } from "react-i18next";
import { useOptimizationSectionAnimation } from "./hooks";
import * as Styled from "./styles";

export const OptimizationSection = () => {
  const { t } = useTranslation("service", { keyPrefix: "optimizationSection" });

  const { elementRef, targetRef, isActive } = useOptimizationSectionAnimation();
  const currentPart = isActive ? "usagePart" : "optimizationPart";

  return (
    <Section backgroundColor="background">
      <Flex css={fullWidth}>
        <Styled.StickyContainer ref={elementRef}>
          <Styled.Strong>3D model</Styled.Strong>
          <Styled.Title isActive={currentPart === "optimizationPart"}>
            {t("optimizationPart.title")}
          </Styled.Title>
          <Styled.Title isActive={currentPart === "usagePart"}>
            {t("usagePart.title")}
          </Styled.Title>
        </Styled.StickyContainer>

        <FlexColumn gap="230px">
          <article css={{ paddingTop: "120px" }}>
            {/* hiddenTitle */}
            <Styled.Text>
              {t("optimizationPart.desktopDescription.text1")}
              <br />
              {t("optimizationPart.desktopDescription.text2")}
            </Styled.Text>

            <Image src="/images/optimization1.png" />
          </article>

          <article ref={targetRef} style={{ paddingBottom: "200px" }}>
            {/* hiddenTitle */}
            <Styled.Text>
              {t("usagePart.desktopDescription.text1")}
              <br />
              {t("usagePart.desktopDescription.text2")}
            </Styled.Text>

            <Flex gap="24px">
              <OverlayVideo
                src="/videos/service_video_pc_ko.mp4"
                overlayImgSrc="/images/video_overlay_pc_ko.png"
              />
              <OverlayVideo
                src="/videos/service_video2_pc_ko.mp4"
                overlayImgSrc="/images/video_overlay2_pc_ko.png"
              />
            </Flex>
          </article>
        </FlexColumn>
      </Flex>
    </Section>
  );
};
