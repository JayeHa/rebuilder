import { useDynamicStyles } from "./hooks";
import * as Styled from "./styles";

const SCROLL_Y_BREAKPOINT = {
  0: {
    from: { scale: 1, blur: 0, textOpacity: 1 },
    to: { scale: 7.5, blur: 7.5, textOpacity: 0.0625 },
  },
  225: {
    from: { scale: 15, blur: 0.5, textOpacity: 0.2 },
    to: { scale: 25, blur: 0.5, textOpacity: 1.12 },
  },
  380: {
    from: { scale: 12.5, blur: 0.5, textOpacity: 1 },
    to: { scale: 25, blur: 0.5, textOpacity: 1 },
  },
};

// visibility
// theme

export const HeroSection = () => {
  const styles = useDynamicStyles(SCROLL_Y_BREAKPOINT);

  return (
    <Styled.Section>
      <Styled.Video
        loop
        playsInline
        autoPlay
        muted
        style={{ transform: styles.transform, filter: styles.filter }}
      >
        <source src="/videos/main_video.mp4" type="video/mp4" />
      </Styled.Video>

      <div style={{ opacity: styles.opacity }}>
        <span>3D Digital Transformation</span>
      </div>
    </Styled.Section>
  );
};
