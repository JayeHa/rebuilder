import { ColorKey, colors } from "@/styles/constants/colors";
import { flex } from "@/styles/utils/flex";
import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;

  width: 30px;
  height: 30px;
`;

export const IconWrapper = styled.div<{ _color: ColorKey }>`
  ${flex.center()}

  width: 100%;
  height: 100%;

  color: ${({ _color }) => colors[_color]};

  cursor: pointer;

  &:hover {
    border-radius: 4px;
    color: ${colors["gray3"]};
    background-color: ${colors["background"]};
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  top: 100%;
  right: -50%;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const TooltipInner = styled.div`
  ${flex.center({ flexDirection: "column", gap: "12px" })}

  width: 80px;

  padding: 14px 0;
  margin-top: 8px;
  border-radius: 4px;

  background: ${colors.white};
`;

export const LanguageButton = styled.button<{ isActive: boolean }>`
  width: 100%;
  height: 32px;

  font-weight: 500;
  font-size: 1.7rem;
  line-height: 20px;

  cursor: pointer;

  ${({ isActive }) =>
    isActive ? `color: ${colors.black}` : `color: ${colors.gray3}`};

  &:hover {
    background: ${colors["background"]};
  }
`;
