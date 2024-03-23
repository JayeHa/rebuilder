import { GlobalHeader } from "@components/GlobalHeader";
import { useScrollProgress } from "@toss/scroll-animation";
import { Text1 } from "./Text1";
import { Text2 } from "./Text2";
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

          <Text1 text="3D Digital Transformation" style={styles.text1} />
          <Text2
            smallText="3D Digital Transformation"
            largeText={
              <>
                The Next Generation of
                <br />
                Digital Transformation
              </>
            }
            style={{ ...styles.text2, position: styles.fixedWrapper.position }}
          />
        </Styled.FixedWrapper>
      </Styled.Section>
    </>
  );
};
