export type BreakpointType = "smDesktop" | "laptop" | "tablet" | "mobile";

export const breakpoints: Record<BreakpointType, number> = {
  smDesktop: 1280,
  laptop: 1024,
  tablet: 768,
  mobile: 600,
};
