import { GLOBAL_HEADER_SIZE } from "@/styles/constants/sizes";
import { flex } from "@/styles/utils/flex";
import styled from "@emotion/styled";

export const DesktopHeaderWrapper = styled.div<{
  isSubNavOpen: boolean;
}>`
  width: 100%;
  max-width: 1200px;
  height: ${({ isSubNavOpen }) =>
    isSubNavOpen
      ? GLOBAL_HEADER_SIZE.HEIGHT_OPENED
      : GLOBAL_HEADER_SIZE.HEIGHT}px;

  padding: 0 30px;

  margin: 0 auto;

  transition: all 0.2s ease-in-out 0s;
`;

export const DesktopHeader = styled.header`
  ${flex({
    alignItems: "start",
    justifyContent: "space-between",
  })};

  height: 100%;
  padding-top: 33px;
`;
