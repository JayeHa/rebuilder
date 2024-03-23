import { css } from "@emotion/react";
import { useScrollProgress } from "@toss/scroll-animation";
import { useVideoAnimation } from "./hooks/useVideoAnimation";
import * as Styled from "./styles";

// const SCROLL_Y_BREAKPOINT = {
//   0: {
//     from: { scale: 1, blur: 0, textOpacity: 1 },
//     to: { scale: 1.5, blur: 1, textOpacity: 0.5 },
//     dynamicStyles: {
//       color: "blue",
//       visibility: "visible",
//     },
//   },
//   225: {
//     from: { scale: 15, blur: 0.5, textOpacity: 0.2 },
//     to: { scale: 25, blur: 0.5, textOpacity: 0.9 },
//     dynamicStyles: {
//       color: "red",
//       visibility: "hidden",
//     },
//   },
//   380: {
//     from: { scale: 12.5, blur: 0.5, textOpacity: 0.9 },
//     to: { scale: 25, blur: 0.5, textOpacity: 0.9 },
//     dynamicStyles: {
//       color: "green",
//       visibility: "visible",
//     },
//   },
// };

export const HeroSection = () => {
  const { ref, scrollYProgress } = useScrollProgress({
    triggerHook: "onLeave",
    clip: true,
  });

  const styles = useVideoAnimation({ scrollYProgress });

  return (
    <Styled.Section ref={ref}>
      <Styled.FixedWrapper>
        <Styled.Video loop playsInline autoPlay muted style={styles}>
          <source src="/videos/main_video.mp4" type="video/mp4" />
        </Styled.Video>

        <div
          css={css`
            font-size: 80px;
          `}
        >
          <span>3D Digital Transformation</span>
        </div>
      </Styled.FixedWrapper>
    </Styled.Section>
  );
};
