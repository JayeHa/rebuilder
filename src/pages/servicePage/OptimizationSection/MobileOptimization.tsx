import { FlexColumn } from "@/styles/utils/flex";
import { Image } from "@components/Image";
import { OverlayVideo } from "@components/VideoPlayer/OverlayVideo";
import { useTranslation } from "react-i18next";
import * as Styled from "./styles";

export const MobileOptimization = () => {
  const { t } = useTranslation("service", { keyPrefix: "optimizationSection" });

  return (
    <>
      <FlexColumn css={{ paddingTop: "107px" }}>
        <Styled.MobileTitle>
          {t("optimizationPart.mobileDescription.text1")}
        </Styled.MobileTitle>

        <Styled.Text>
          {t("optimizationPart.mobileDescription.text2")}
          <br />
          {t("optimizationPart.mobileDescription.text3")}
        </Styled.Text>

        <Image src="/images/optimization1.png" />
      </FlexColumn>

      <FlexColumn css={{ padding: "58px 0px 80px" }}>
        <Styled.MobileTitle>
          {t("usagePart.mobileDescription.text1")}
        </Styled.MobileTitle>

        <Styled.Text>
          {t("usagePart.mobileDescription.text2")}
          <br />
          {t("usagePart.mobileDescription.text3")}
        </Styled.Text>
        <OverlayVideo
          src="/videos/service_video_mobile_ko.mp4"
          css={{ marginBottom: 20 }}
        />

        <Styled.Text>
          {t("usagePart.mobileDescription.text4")}
          <br />
          {t("usagePart.mobileDescription.text5")}
        </Styled.Text>
        <OverlayVideo src="/videos/service_video2_mobile_ko.mp4" />
      </FlexColumn>
    </>
  );
};
