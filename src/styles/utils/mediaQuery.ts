import { css } from "@emotion/react";
import { BreakpointType, breakpoints } from "../constants/breakpoints";

export const mediaQuery = (query: string) => (template: TemplateStringsArray) =>
  css`
    @media ${query} {
      ${template.raw.join("")}
    }
  `;

export const mediaQueryScreenAndMaxWidth = (maxWidth: BreakpointType) =>
  mediaQuery(`screen and (max-width: ${breakpoints[maxWidth]}px)`);

export const mediaQueryScreenAndMinWidth = (minWidth: BreakpointType) =>
  mediaQuery(`screen and (min-width: ${breakpoints[minWidth] - 1}px)`);
