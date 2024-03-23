import { colors, gradients } from "@/styles/constants/colors";
import { HeroAnimationStyle } from ".";

export const DEFAULT_HERO_STYLE: HeroAnimationStyle = {
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
    background: colors.black,
  },
  header: {
    theme: "dark",
    position: "fixed",
  },
};

export const ANIMATION_BREAKPOINTS = {
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
    header: null,
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
    header: null,
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
        background: gradients.hero,
      },
    },
    header: {
      from: {
        headerTheme: "light",
        position: "fixed",
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
        background: gradients.hero,
      },
    },
    header: {
      from: {
        headerTheme: "light",
        position: "fixed",
      },
    },
  },

  // header의 position이 absolute로 변경
  0.88: {
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
        background: gradients.hero,
      },
    },
    header: {
      from: {
        headerTheme: "light",
        position: "absolute",
      },
    },
  },
} as const;
