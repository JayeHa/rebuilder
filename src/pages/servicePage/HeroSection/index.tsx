import { GlobalHeader } from "@components/GlobalHeader";
import { css } from "@emotion/react";
import { useScrollProgress } from "@toss/scroll-animation";
import { useHeroSectionAnimation } from "./hooks/useHeroSectionAnimation";
import * as Styled from "./styles";

export const HeroSection = () => {
  const { ref, scrollYProgress } = useScrollProgress({
    triggerHook: "onLeave",
    clip: true,
  });

  const styles = useHeroSectionAnimation({ scrollYProgress });

  return (
    <>
      <GlobalHeader theme={styles.section.headerTheme} />

      <Styled.Section
        ref={ref}
        style={{ background: styles.section.background }}
      >
        <Styled.FixedWrapper style={styles.fixedWrapper}>
          <Styled.Video loop playsInline autoPlay muted style={styles.video}>
            <source src="/videos/main_video.mp4" type="video/mp4" />
          </Styled.Video>

          <div
            css={css`
              font-size: 80px;
              color: red;
            `}
            style={styles.text1}
          >
            <span>3D Digital Transformation</span>
          </div>

          <div
            css={css`
              font-size: 80px;
              color: yellow;
            `}
            style={styles.text2}
          >
            <span>3D Digital Transformation</span>
            <span>
              The Next Generation of
              <br />
              Digital Transformation
            </span>
          </div>
        </Styled.FixedWrapper>
      </Styled.Section>
    </>
  );
};
