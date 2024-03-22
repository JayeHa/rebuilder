import { useEffect, useState } from "react";

interface StylePoint {
  scale: number;
  blur: number;
  textOpacity: number;
}

interface Breakpoint {
  from: StylePoint;
  to: StylePoint;
}

interface Breakpoints {
  [key: number]: Breakpoint;
}

interface StyleState {
  transform: string;
  filter: string;
  opacity: number;
}

export const useDynamicStyles = (breakpoints: Breakpoints): StyleState => {
  const [styles, setStyles] = useState<StyleState>({
    transform: "",
    filter: "",
    opacity: 1,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const activeBreakpoint: number = parseInt(
        Object.keys(breakpoints).reduce(
          (acc, curr) => (scrollY >= parseInt(curr) ? curr : acc),
          "0"
        )
      );

      let nextBreakpoint: number = Math.min(
        ...Object.keys(breakpoints)
          .map((bp) => parseInt(bp))
          .filter((bp) => bp > activeBreakpoint)
      );

      // 마지막 브레이크포인트 처리
      if (isNaN(nextBreakpoint)) {
        nextBreakpoint = activeBreakpoint;
      }

      const ratio: number =
        (scrollY - activeBreakpoint) / (nextBreakpoint - activeBreakpoint);

      /**
       * 선형보간법(Linear Interpolation)
       * @see https://thd0011.tistory.com/11
       */
      const lerp = (start: number, end: number, t: number): number =>
        start + t * (end - start);

      const currentStyles = breakpoints[activeBreakpoint];

      const scale: number = lerp(
        currentStyles.from.scale,
        currentStyles.to.scale,
        ratio
      );
      const blur: number = lerp(
        currentStyles.from.blur,
        currentStyles.to.blur,
        ratio
      );
      const textOpacity: number = lerp(
        currentStyles.from.textOpacity,
        currentStyles.to.textOpacity,
        ratio
      );

      setStyles({
        transform: `matrix(${scale}, 0, 0, ${scale}, 0, 0)`,
        filter: `blur(${blur}rem)`,
        opacity: textOpacity,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [breakpoints]);

  return styles;
};
