import { colors } from "@/styles/constants/colors";
import { zIndex } from "@/styles/constants/zIndexes";
import { flex } from "@/styles/utils/flex";
import styled from "@emotion/styled";

export const Section = styled.section`
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

// export const VideoWrapper = styled.div``;

export const Video = styled.video`
  width: 640px;
  height: auto;
`;
