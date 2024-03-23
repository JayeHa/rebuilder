import { getScrollBreakpoints } from "@/utils/getScrollBreakpoints";
import { lerp } from "@/utils/lerp";
import { ThemeType } from "@components/GlobalHeader";
import { useEffect, useState } from "react";
import { ANIMATION_BREAKPOINTS, DEFAULT_HERO_STYLE } from "./constants";

export interface HeroAnimationStyle {
  video: {
    transform: string;
    filter: string;
    visibility: "visible" | "hidden";
  };
  text1: {
    opacity: number;
    display: "block" | "none";
  };
  text2: {
    opacity: number;
    display: "flex" | "none";
  };
  fixedWrapper: {
    position: "fixed" | "absolute";
    height: "100vh" | "150vh";
  };
  section: {
    background: string;
  };
  header: {
    theme: ThemeType;
    position: "fixed" | "absolute";
  };
}

type Props = {
  scrollYProgress: number;
};

export const useHeroSectionAnimation = ({ scrollYProgress }: Props) => {
  const [styles, setStyles] = useState<HeroAnimationStyle>(DEFAULT_HERO_STYLE);

  useEffect(() => {
    const { activeBreakpoint, nextBreakpoint } = getScrollBreakpoints({
      breakpoints: ANIMATION_BREAKPOINTS,
      scrollPosition: scrollYProgress,
    });

    const currentAnimation =
      ANIMATION_BREAKPOINTS[
        activeBreakpoint as keyof typeof ANIMATION_BREAKPOINTS
      ];

    const progressDifference = scrollYProgress - activeBreakpoint;
    const breakpointDifference = nextBreakpoint - activeBreakpoint;
    const ratio = Math.min(1, progressDifference / breakpointDifference);

    // video 스타일 정의 ===============================
    const getVideoStyles = () => {
      const { video } = currentAnimation;

      const scale = lerp(video?.from.scale, video.to.scale, ratio);
      const blur = lerp(video?.from.blur, video.to.blur, ratio);
      const visibility = video?.from.visibility;

      return {
        transform: `matrix(${scale}, 0, 0, ${scale}, 0, 0)`,
        filter: `blur(${blur}rem)`,
        visibility,
      };
    };

    // text1 스타일 정의 ===============================
    const getText1Styles = () => {
      const { text1 } = currentAnimation;

      const display = text1?.from.display ?? "none";
      const opacity = lerp(
        text1?.from.opacity ?? 0,
        text1?.to?.opacity ?? 0,
        ratio
      );

      return {
        display,
        opacity,
      } as const;
    };

    // text2 스타일 정의 ===============================
    const getText2Styles = () => {
      const { text2 } = currentAnimation;

      const display = text2?.from.display ?? "none";
      const opacity = lerp(
        text2?.from.opacity ?? 1,
        text2?.to?.opacity ?? 1,
        ratio
      );

      return {
        display,
        opacity,
      } as const;
    };

    // fixedWrapper 스타일 정의 ===============================
    const getFixedWrapperStyles = () => {
      const { fixedWrapper } = currentAnimation;

      return fixedWrapper
        ? ({
            position: fixedWrapper.from.position,
            height: fixedWrapper.from.height,
          } as const)
        : DEFAULT_HERO_STYLE.fixedWrapper;
    };

    // section 스타일 정의 ===============================
    const getSectionStyles = () => {
      const { section } = currentAnimation;

      return section
        ? ({
            background: section.from.background,
          } as const)
        : DEFAULT_HERO_STYLE.section;
    };

    // header 스타일 정의 ===============================
    const getHeaderStyles = () => {
      const { header } = currentAnimation;

      return header
        ? ({
            theme: header.from.headerTheme,
            position: header.from.position,
          } as const)
        : DEFAULT_HERO_STYLE.header;
    };

    const video = getVideoStyles();
    const text1 = getText1Styles();
    const text2 = getText2Styles();
    const fixedWrapper = getFixedWrapperStyles();
    const section = getSectionStyles();
    const header = getHeaderStyles();

    setStyles({
      video,
      text1,
      text2,
      fixedWrapper,
      section,
      header,
    });
  }, [scrollYProgress]);

  return styles;
};
