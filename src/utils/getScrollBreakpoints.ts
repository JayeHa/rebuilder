// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ScrollAnimationBreakpoints = Record<number, any>;

type Props = {
  breakpoints: ScrollAnimationBreakpoints;
  scrollPosition: number;
};

export const getScrollBreakpoints = ({
  breakpoints,
  scrollPosition,
}: Props) => {
  const activeBreakpoint: number = parseFloat(
    Object.keys(breakpoints).reduce(
      (acc, curr) => (scrollPosition >= parseFloat(curr) ? curr : acc),
      "0"
    )
  );

  let nextBreakpoint: number = Math.min(
    ...Object.keys(breakpoints)
      .map((bp) => parseFloat(bp))
      .filter((bp) => bp > activeBreakpoint)
  );

  // 마지막 브레이크포인트 처리
  if (isNaN(nextBreakpoint) || nextBreakpoint === Infinity) {
    nextBreakpoint = activeBreakpoint;
  }

  return { activeBreakpoint, nextBreakpoint };
};
