import { breakpoints } from "@/styles/constants/breakpoints";
import { colors } from "@/styles/constants/colors";
import {
  GLOBAL_HEADER_SIZE,
  MOBILE_GLOBAL_HEADER_SIZE,
} from "@/styles/constants/sizes";
import { zIndex } from "@/styles/constants/zIndexes";
import { flex } from "@/styles/utils/flex";
import { mediaQueryScreenAndMaxWidth } from "@/styles/utils/mediaQuery";
import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";
import { ThemeType } from ".";

const THEME_MODE_STYLES: Record<ThemeType, SerializedStyles> = {
  dark: css`
    border-bottom-color: ${colors.black};
    background: ${colors.black};
    color: ${colors.white};
  `,
  light: css`
    border-bottom-color: ${colors.gray1};
    background: ${colors.white};
    color: ${colors.black};
  `,
};

export const Container = styled.div<{
  themeMode: ThemeType;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${zIndex.header};

  border-bottom: 1px solid;

  ${({ themeMode }) => THEME_MODE_STYLES[themeMode]};
`;

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

  ${mediaQueryScreenAndMaxWidth("tablet")`
  height: 64px;
  padding: 0 60px;
  `}

  @media screen and (max-width: ${breakpoints["tablet"]}px) {
    height: ${({ isSubNavOpen }) =>
      isSubNavOpen
        ? MOBILE_GLOBAL_HEADER_SIZE.HEIGHT_OPENED
        : MOBILE_GLOBAL_HEADER_SIZE.HEIGHT}px;

    padding: 0 60px;
  }

  ${mediaQueryScreenAndMaxWidth("mobile")`
  padding: 0 20px;
  `}
`;

export const DesktopHeader = styled.header`
  ${flex({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  })};

  padding-top: 33px;
`;

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
  ${flex({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  })};

  padding: 20px 0;
`;
