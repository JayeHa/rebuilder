import { GlobalHeader } from "@components/GlobalHeader";
import { useScrollProgress } from "@toss/scroll-animation";
import * as Styled from "./styles";
import { useHeroSectionAnimation } from "./useHeroSectionAnimation";

export const HeroSection = () => {
  const { ref, scrollYProgress } = useScrollProgress({
    triggerHook: "onLeave",
    clip: true,
  });
  const styles = useHeroSectionAnimation({ scrollYProgress });

  return (
    <>
      <GlobalHeader
        theme={styles.header.theme}
        style={{ position: styles.header.position }}
      />

      <Styled.Section ref={ref} style={styles.section}>
        <Styled.FixedWrapper style={styles.fixedWrapper}>
          <Styled.Video src="/videos/main_video.mp4" style={styles.video} />

          <Styled.Text1Wrapper style={styles.text1}>
            <Styled.Text1>3D Digital Transformation</Styled.Text1>
          </Styled.Text1Wrapper>

          <Styled.Text2Wrapper
            style={{ ...styles.text2, position: styles.fixedWrapper.position }}
          >
            <Styled.Text2Small>3D Digital Transformation</Styled.Text2Small>
            <Styled.Text2Large>
              The Next Generation of
              <br />
              Digital Transformation
            </Styled.Text2Large>
          </Styled.Text2Wrapper>
        </Styled.FixedWrapper>
      </Styled.Section>
    </>
  );
};
