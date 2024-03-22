import { colors } from "@/styles/constants/colors";
import { zIndex } from "@/styles/constants/zIndexes";
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
