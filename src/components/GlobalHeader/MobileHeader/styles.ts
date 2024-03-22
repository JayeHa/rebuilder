import { colors } from "@/styles/constants/colors";
import { animations } from "@/styles/constants/keyframes";
import { MOBILE_GLOBAL_HEADER_SIZE } from "@/styles/constants/sizes";
import { flex } from "@/styles/utils/flex";
import { mediaQueryScreenAndMaxWidth } from "@/styles/utils/mediaQuery";
import styled from "@emotion/styled";

const GAP = "32px";

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

export const SlideDownMenu = styled.div`
  position: absolute;
  top: 100%;

  width: 100%;

  animation: ${animations.fadeIn} 0.35s ease-in-out;
`;

export const NavList = styled.ul`
  ${flex({ flexDirection: "column", gap: GAP })}
  padding-top: ${GAP};
`;

export const NavItem = styled.li<{ isCurrent: boolean }>`
  font-size: 16px;
  line-height: 19px;
  font-weight: ${({ isCurrent }) => (isCurrent ? "700" : "500")};

  color: ${colors.white};
  cursor: pointer;
`;

export const LanguageSelector = styled.div`
  ${flex({ flexDirection: "row" })}
  margin-top: ${GAP};
`;

export const LanguageButton = styled.button<{ isActive: boolean }>`
${flex()}

  height: 19px;

  padding: 0;

  font-weight: 600;
  font-size: 1.6rem;
  line-height: 19px;

  cursor: pointer;

  ${({ isActive }) =>
    isActive ? `color: ${colors.white}` : `color: ${colors.gray3}`};

  &:not(:first-of-type) {
    &:before {
      content: "";

      display: inline-block;
      width: 3px;
      height: 12px;

      margin: 3px 6px;


      border-width: 0px thin 0px 0px;
      border-style: solid;
      border-color: rgba(${colors.black}, 0.12);
    }
  }


  }
`;
