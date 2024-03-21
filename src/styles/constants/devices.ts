export type BreakpointType = "tablet" | "laptop" | "smDesktop" | "lgDesktop";

export const breakpoints: Record<BreakpointType, number> = {
  tablet: 601,
  laptop: 769,
  smDesktop: 1025,
  lgDesktop: 1280,
};

export const breakpointQueries: Record<BreakpointType, string> = {
  tablet: `min-width: ${breakpoints.tablet}px`,
  laptop: `min-width: ${breakpoints.laptop}px`,
  smDesktop: `min-width: ${breakpoints.smDesktop}px`,
  lgDesktop: `min-width: ${breakpoints.lgDesktop}px`,
} as const;
