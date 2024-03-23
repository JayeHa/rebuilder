import { getScrollBreakpoints } from "@/utils/getScrollBreakpoints";
import { lerp } from "@/utils/lerp";
import { useEffect, useState } from "react";

interface StyleState {
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
    display: "block" | "none";
  };
}

const ANIMATION_BREAKPOINTS = {
  0: {
    video: {
      from: { scale: 1, blur: 0, visibility: "visible" },
      to: { scale: 7.5, blur: 7.5 },
    },
    text1: {
      from: { opacity: 1, display: "block" },
      to: { opacity: 0.1, display: "block" },
    },
    text2: null,
  },

  0.15: {
    video: {
      from: { scale: 15, blur: 0.5, visibility: "visible" },
      to: { scale: 25, blur: 0.5 },
    },
    text1: {
      from: { opacity: 0, display: "none" },
      to: null,
    },
    text2: {
      from: { opacity: 0.2, display: "block" },
      to: { opacity: 1, display: "block" },
    },
  },

  0.25: {
    video: {
      from: { scale: 12.5, blur: 0.5, visibility: "hidden" },
      to: { scale: 25, blur: 0.5 },
    },
    text1: null,
    text2: {
      from: { opacity: 1, display: "block" },
      to: null,
    },
  },
} as const;

type Props = {
  scrollYProgress: number;
};

export const useHeroSectionAnimation = ({ scrollYProgress }: Props) => {
  const [styles, setStyles] = useState<StyleState>({
    video: {
      transform: "matrix(1, 0, 0, 1, 0, 0)",
      filter: "blur(0rem)",
      visibility: "visible",
    },
    text1: {
      display: "block",
      opacity: 1,
    },
    text2: {
      display: "none",
      opacity: 0,
    },
  });

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

      const scale = lerp(video.from.scale, video.to.scale, ratio);
      const blur = lerp(video.from.blur, video.to.blur, ratio);
      const visibility = video.from.visibility;

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

    const video = getVideoStyles();
    const text1 = getText1Styles();
    const text2 = getText2Styles();

    setStyles({
      video,
      text1,
      text2,
    });
  }, [scrollYProgress]);

  return styles;
};
