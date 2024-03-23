import { colors } from "@/styles/constants/colors";
import { zIndex } from "@/styles/constants/zIndexes";
import { flex } from "@/styles/utils/flex";
import { mediaQueryScreenAndMaxWidth } from "@/styles/utils/mediaQuery";
import { Video as _Video } from "@components/VideoPlayer/Video";
import styled from "@emotion/styled";

export const Section = styled.section`
  height: 150vh;
`;

export const FixedWrapper = styled.div`
  position: fixed;
  overflow: hidden;
  z-index: ${zIndex.heroSection};

  ${flex.center({ flexDirection: "column" })}
  width: 100%;
  height: 100vh;

  object-fit: cover;
  -webkit-box-align: center;
  -webkit-box-pack: center;
`;

export const Video = styled(_Video)`
  width: 640px;
  height: auto;
`;

export const Text1Wrapper = styled.div`
  position: fixed;
  left: 0px;

  width: 100%;

  text-align: center;
`;

export const Text1 = styled.span`
  font-weight: 800;
  font-size: 7rem;
  line-height: 130.5%;
  text-align: center;

  color: ${colors.white};

  ${mediaQueryScreenAndMaxWidth("smDesktop")`
  font-size: 5.6rem;
  `}

  ${mediaQueryScreenAndMaxWidth("tablet")`
  font-size: 4.8rem;
  `}

  ${mediaQueryScreenAndMaxWidth("mobile")`
  font-size: 2.4rem;
  white-space: pre-wrap;
  `}
`;

export const Text2Wrapper = styled.div`
  position: fixed;
  top: 50%;
  transform: translate(0px, -50%);

  ${flex.center({ flexDirection: "column" })}
`;

export const Text2Small = styled.span`
  margin-bottom: 83px;

  font-weight: 800;
  font-size: 5rem;
  line-height: 130.5%;
  text-align: center;

  color: ${colors.white};

  ${mediaQueryScreenAndMaxWidth("smDesktop")`
  font-size: 3.2rem;
  margin-bottom: 50px;
  `}

  ${mediaQueryScreenAndMaxWidth("tablet")`
  margin-bottom: 42px;
  `}

  ${mediaQueryScreenAndMaxWidth("mobile")`
  font-size: 1.8rem;
  margin-bottom: 14px;
  `}
`;

export const Text2Large = styled.span`
  font-weight: 800;
  font-size: 9.58rem;
  line-height: 130.5%;
  text-align: center;
  white-space: pre-wrap;

  color: ${colors.white};

  ${mediaQueryScreenAndMaxWidth("smDesktop")`
  font-size: 5.6rem;
  `}

  ${mediaQueryScreenAndMaxWidth("tablet")`
  font-size: 4.8rem;
  `}

  ${mediaQueryScreenAndMaxWidth("mobile")`
  font-size: 2.8rem;
  `}
`;
