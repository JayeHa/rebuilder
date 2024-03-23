import { zIndex } from "@/styles/constants/zIndexes";
import { flex } from "@/styles/utils/flex";
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
