import { colors, gradients } from "@/styles/constants/colors";
import { getScrollBreakpoints } from "@/utils/getScrollBreakpoints";
import { lerp } from "@/utils/lerp";
import { ThemeType } from "@components/GlobalHeader";
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
    display: "flex" | "none";
  };
  fixedWrapper: {
    position: "fixed" | "absolute";
    height: "100vh" | "150vh";
  };
  section: {
    headerTheme: ThemeType;
    background: string;
  };
}

const ANIMATION_BREAKPOINTS = {
  // video의 scale과 blur가 높아지고 text1이 투명해짐
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
    fixedWrapper: null,
    section: null,
  },

  // video의 blur고정 및 scale 커짐, text1이 없어지고, text2가 서서히 나타남
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
      from: { opacity: 0.2, display: "flex" },
      to: { opacity: 1, display: "flex" },
    },
    fixedWrapper: null,
    section: null,
  },

  // 헤더의 테마, 섹션의 background가 바뀌고 video가 사라짐, text2고정
  0.25: {
    video: {
      from: { scale: 12.5, blur: 0.5, visibility: "hidden" },
      to: { scale: 25, blur: 0.5 },
    },
    text1: null,
    text2: {
      from: { opacity: 1, display: "flex" },
      to: null,
    },
    fixedWrapper: null,
    section: {
      from: {
        headerTheme: "light",
        background: gradients.hero,
      },
    },
  },

  // section의 position과 height가 바뀜
  0.32: {
    video: {
      from: { scale: 12.5, blur: 0.5, visibility: "hidden" },
      to: { scale: 25, blur: 0.5 },
    },
    text1: null,
    text2: {
      from: { opacity: 1, display: "flex" },
      to: null,
    },
    fixedWrapper: {
      from: {
        background: gradients.hero,
        position: "absolute",
        height: "150vh",
      },
    },
    section: {
      from: {
        headerTheme: "light",
        background: gradients.hero,
      },
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
    fixedWrapper: {
      position: "fixed",
      height: "100vh",
    },
    section: {
      headerTheme: "dark",
      background: colors.black,
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
        : ({
            position: "fixed",
            height: "100vh",
          } as const);
    };

    // section 스타일 정의 ===============================
    const getSectionStyles = () => {
      const { section } = currentAnimation;

      return section
        ? ({
            background: section.from.background,
            headerTheme: section.from.headerTheme,
          } as const)
        : ({
            background: colors.black,
            headerTheme: "dark",
          } as const);
    };

    const video = getVideoStyles();
    const text1 = getText1Styles();
    const text2 = getText2Styles();
    const fixedWrapper = getFixedWrapperStyles();
    const section = getSectionStyles();

    setStyles({
      video,
      text1,
      text2,
      fixedWrapper,
      section,
    });
  }, [scrollYProgress]);

  return styles;
};
