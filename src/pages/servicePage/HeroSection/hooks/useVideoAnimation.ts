import { getScrollBreakpoints } from "@/utils/getScrollBreakpoints";
import { lerp } from "@/utils/lerp";
import { useEffect, useState } from "react";

const ANIMATION_BREAKPOINTS = {
  0: {
    from: { scale: 1, blur: 0 },
    to: { scale: 7.5, blur: 7.5 },
  },
  0.15: {
    from: { scale: 15, blur: 0.5 },
    to: { scale: 25, blur: 0.5 },
  },
  0.25: {
    from: { scale: 12.5, blur: 0.5 },
    to: { scale: 25, blur: 0.5 },
  },
} as const;

interface StyleState {
  transform: string;
  filter: string;
}

type Props = {
  scrollYProgress: number;
};

export const useVideoAnimation = ({ scrollYProgress }: Props) => {
  const [styles, setStyles] = useState<StyleState>({
    transform: "matrix(1, 0, 0, 1, 0, 0)",
    filter: "blur(0rem)",
  });

  useEffect(() => {
    const { activeBreakpoint, nextBreakpoint } = getScrollBreakpoints({
      breakpoints: ANIMATION_BREAKPOINTS,
      scrollPosition: scrollYProgress,
    });

    const ratio = Math.min(
      1,
      (scrollYProgress - activeBreakpoint) / (nextBreakpoint - activeBreakpoint)
    );

    const currentAnimation =
      ANIMATION_BREAKPOINTS[
        activeBreakpoint as keyof typeof ANIMATION_BREAKPOINTS
      ];
    const scale = lerp(
      currentAnimation.from.scale,
      currentAnimation.to.scale,
      ratio
    );
    const blur = lerp(
      currentAnimation.from.blur,
      currentAnimation.to.blur,
      ratio
    );

    setStyles({
      transform: `matrix(${scale}, 0, 0, ${scale}, 0, 0)`,
      filter: `blur(${blur}rem)`,
    });
  }, [scrollYProgress]);

  return styles;
};
