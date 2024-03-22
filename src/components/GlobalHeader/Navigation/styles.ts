import { colors } from "@/styles/constants/colors";
import { flex } from "@/styles/utils/flex";
import { mediaQueryScreenAndMaxWidth } from "@/styles/utils/mediaQuery";
import styled from "@emotion/styled";

export const Navigation = styled.nav``;

export const NavList = styled.ul`
  ${flex({ gap: "46px" })}
`;

export const NavItem = styled.li`
  position: relative;
  width: fit-content;

  font-weight: 500;
  font-size: 2rem;
  line-height: 24px;

  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    left: 0px;
    bottom: -2px;

    width: 100%;
    height: 2px;

    background-color: ${colors.blue3};
    transform-origin: 0px 0px;
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
  }

  &:hover:after {
    transform: scaleX(1);
    backface-visibility: hidden;
  }

  ${mediaQueryScreenAndMaxWidth("tablet")`
  font-size: 16px;
  line-height: 19px;
  `}
`;
