import { colors } from "@/styles/constants/colors";
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

export const Header = styled.header<{
  headerHeight: number;
}>`
  width: 100%;
  max-width: 1200px;
  height: ${({ headerHeight }) => headerHeight}px;

  padding: 0 30px;

  margin: 0 auto;

  transition: all 0.2s ease-in-out 0s;

  ${mediaQueryScreenAndMaxWidth("tablet")`
  height: 64px;
  padding: 0 60px;
  `}

  ${mediaQueryScreenAndMaxWidth("mobile")`
  padding: 0 20px;
  `}
`;

export const DeskTopHeader = styled.div`
  ${flex({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  })};

  padding-top: 33px;
`;
