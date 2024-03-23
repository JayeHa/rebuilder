import { colors } from "@/styles/constants/colors";
import { zIndex } from "@/styles/constants/zIndexes";
import { flex } from "@/styles/utils/flex";
import styled from "@emotion/styled";

export const Section = styled.section`
  height: 150vh;

  background: green;
`;

export const FixedWrapper = styled.div`
  position: fixed;
  overflow: hidden;
  z-index: ${zIndex.heroSection};

  ${flex.center({ flexDirection: "column" })}
  width: 100%;
  height: 100vh;

  //   background: ${colors.black};

  object-fit: cover;
  -webkit-box-align: center;
  -webkit-box-pack: center;
`;

export const Video = styled.video`
  width: 640px;
  height: auto;
`;
