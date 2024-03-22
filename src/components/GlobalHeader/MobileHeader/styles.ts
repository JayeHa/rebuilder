import { colors } from "@/styles/constants/colors";
import { MOBILE_GLOBAL_HEADER_SIZE } from "@/styles/constants/sizes";
import { flex } from "@/styles/utils/flex";
import { mediaQueryScreenAndMaxWidth } from "@/styles/utils/mediaQuery";
import styled from "@emotion/styled";

export const MobileHeaderWrapper = styled.div<{
  isMobileNavOpen: boolean;
}>`
  width: 100%;
  height: ${({ isMobileNavOpen }) =>
    isMobileNavOpen
      ? MOBILE_GLOBAL_HEADER_SIZE.HEIGHT_OPENED
      : MOBILE_GLOBAL_HEADER_SIZE.HEIGHT}px;

  padding: 0 60px;

  margin: 0 auto;

  transition: all 0.2s ease-in-out 0s;

  ${mediaQueryScreenAndMaxWidth("mobile")`
    padding: 0 20px;
    `}
`;

export const MobileHeader = styled.div`
  position: relative;

  ${flex({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  })};

  padding: 20px 0;
`;

export const NavBar = styled.div`
  position: absolute;
  top: 100%;

  color: ${colors.white};
  background: red;
`;
