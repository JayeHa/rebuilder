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
  headerHeight: number;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${zIndex.header};

  height: ${({ headerHeight }) => headerHeight}px;

  border-bottom: 1px solid;
  padding: 0 20px;

  transition: all 0.2s ease-in-out 0s;

  ${({ themeMode }) => THEME_MODE_STYLES[themeMode]};

  ${mediaQueryScreenAndMaxWidth("tablet")`
  height: 64px;
  padding: 0 60px;
  `}

  ${mediaQueryScreenAndMaxWidth("mobile")`
  padding: 0 20px;
  `}
`;

export const Header = styled.header`
  ${flex({ justifyContent: "space-between", alignItems: "flex-start" })}

  width: 100%;
  height: 100%;
  max-width: 1200px;

  padding-top: 33px;
  margin: 0 auto;
`;
