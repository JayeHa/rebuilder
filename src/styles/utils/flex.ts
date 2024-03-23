import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";
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

const column = (props: Omit<Flex, "direction"> = {}) => css`
  ${flex({ flexDirection: "column", ...props })}
`;

flex.center = center;
flex.column = column;

export { flex };

// ======================= Components =======================

export const Flex = styled.div<Flex>`
  ${(props) => flex(props)}
`;

export const FlexCenter = styled.div<
  Omit<Flex, "alignItems" | "justifyContent">
>`
  ${(props) => flex.center(props)}
`;

export const FlexColumn = styled.div<Omit<Flex, "direction">>`
  ${(props) => flex.column(props)}
`;
