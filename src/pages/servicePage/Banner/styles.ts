import { BannerLogo } from "@/assets/images";
import { flex } from "@/styles/utils/flex";
import {
  mediaQueryScreenAndMaxWidth,
  mobileHidden,
  mobileOnly,
} from "@/styles/utils/mediaQuery";
import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background: rgb(0, 0, 229);
  overflow: hidden;

  ${mediaQueryScreenAndMaxWidth("laptop")`
  height: 280px;
  `}

  ${mediaQueryScreenAndMaxWidth("tablet")`
  height: 160px;
  `}
  
  ${mediaQueryScreenAndMaxWidth("mobile")`
  height: 140px;
  `}
`;

export const Background = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background: url("/images/banner_background.png") 0% 0% / cover no-repeat;
`;

export const Banner = styled.div`
  max-width: 1200px;

  padding: 0 24px;
  margin: 0 auto;
`;

export const FlexColumn = styled.div`
  ${flex.column({ gap: "48px" })}

  position: absolute;
  top: 50%;
  z-index: 1;

  transform: translate(0px, -50%);

  ${mediaQueryScreenAndMaxWidth("laptop")`
  gap: 32px;
  `}

  ${mediaQueryScreenAndMaxWidth("tablet")`
  gap: 19px;
  `}

  ${mediaQueryScreenAndMaxWidth("mobile")`
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  gap: 8px;
  
  align-items: center;
  text-align: center;
  `}
`;

export const Logo = styled(BannerLogo)`
  width: 90px;
  height: 90px;

  ${mediaQueryScreenAndMaxWidth("laptop")`
  width: 66px;
  height: 66px;
  `}

  ${mediaQueryScreenAndMaxWidth("tablet")`
  width: 40px;
  height: 40px;
  `}

  ${mobileHidden}
`;

export const Strong = styled.strong`
  color: rgb(93, 108, 250);
  font-size: 2rem;
  font-weight: 600;
  line-height: 140%;

  ${mediaQueryScreenAndMaxWidth("laptop")`
  font-size: 1.3rem;
  `}

  ${mediaQueryScreenAndMaxWidth("tablet")`
  font-size: 0.8rem;
  `}

  ${mobileHidden}
`;

export const Title = styled.h2`
  color: rgb(255, 255, 255);
  font-size: 5.6rem;
  font-weight: 600;
  line-height: 120%;

  ${mediaQueryScreenAndMaxWidth("laptop")`
  font-size: 3.7rem;
  `}

  ${mediaQueryScreenAndMaxWidth("tablet")`
  font-size: 2.2rem;
  `}
  
  ${mediaQueryScreenAndMaxWidth("mobile")`
  font-size: 2rem;
  `}
`;

export const Text = styled.div`
  color: rgb(189, 193, 199);
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 140%;

  margin-top: 4px;

  ${mediaQueryScreenAndMaxWidth("laptop")`
  font-size: 1.6rem;
  `}

  ${mediaQueryScreenAndMaxWidth("tablet")`
  font-size: 1rem;
  `}
`;

export const MobileMoreButton = styled.a`
  ${mobileOnly}

  align-items: center;
  color: rgb(255, 255, 255);
  gap: 2px;

  font-size: 0.8rem;
`;
