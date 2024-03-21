import { SerializedStyles, css } from "@emotion/react";
import { BreakpointType, breakpointQueries } from "../constants/devices";

export function media(type: BreakpointType, style: SerializedStyles) {
  return css`
    @media screen and (${breakpointQueries[type]}) {
      ${style}
    }
  `;
}
