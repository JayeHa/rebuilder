import { SerializedStyles, css } from "@emotion/react";
import type { CSSProperties } from "react";

type Flex = {
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  flexDirection?: CSSProperties["flexDirection"];
  gap?: CSSProperties["gap"];
};

const flex = ({
  justifyContent = "flex-start",
  alignItems = "stretch",
  flexDirection = "row",
  gap = 0,
}: Flex = {}): SerializedStyles => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-direction: ${flexDirection};
  gap: ${gap};
`;

type Center = Omit<Flex, "justifyContent" | "alignItems">;

const center = (props: Center = {}) => css`
  ${flex({
    justifyContent: "center",
    alignItems: "center",
    ...props,
  })}
`;

flex.center = center;

export { flex };
