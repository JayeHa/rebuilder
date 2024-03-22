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
    border-bottom-color: ${colors.black};
    background: ${colors.black};
    color: ${colors.white};
  `,
};

export const Container = styled.div<{ themeMode: ThemeType }>`
  ${({ themeMode }) => THEME_MODE_STYLES[themeMode]};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${zIndex.header};

  ${flex.center()}
  height: 94px;

  border-bottom: 1px solid;
  padding: 0 20px;

  transition: all 0.2s ease-in-out 0s;

  ${mediaQueryScreenAndMaxWidth("tablet")`
  height: 64px;
  padding: 0 60px;
  `}

  ${mediaQueryScreenAndMaxWidth("mobile")`
  padding: 0 20px;
  `}
`;

export const Header = styled.header`
  ${flex({ justifyContent: "space-between", alignItems: "center" })}

  width: 100%;
  max-width: 1200px;
`;
