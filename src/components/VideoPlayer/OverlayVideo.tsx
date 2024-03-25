import { CirclePlus } from "@/assets/images";
import { zIndex } from "@/styles/constants/zIndexes";
import {
  mediaQuery,
  mediaQueryScreenAndMaxWidth,
} from "@/styles/utils/mediaQuery";
import styled from "@emotion/styled";
import { Video, VideoProps } from "./Video";

type Props = VideoProps & {
  overlayImgSrc?: string;
};

export const OverlayVideo = ({ overlayImgSrc, ...props }: Props) => {
  return (
    <StyledContainer>
      <Video {...props} />

      {overlayImgSrc && <StyledOverlay overlaySrc={overlayImgSrc} />}
      <StyledCirclePlus />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const StyledOverlay = styled.div<{ overlaySrc: string }>`
  position: absolute;
  inset: 0;
  opacity: 0;
  z-index: ${zIndex.overlay};

  ${({ overlaySrc }) => `background: url("${overlaySrc}");`}
  background-repeat: no-repeat;
  background-size: contain;

  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const StyledCirclePlus = styled(CirclePlus)`
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: ${zIndex.overlayIcon};

  pointer-events: none;

  ${mediaQueryScreenAndMaxWidth("tablet")`
  width: 20px;
  height: 20px;
  right: 7.9px;
  bottom: 7.9px;
  `}

  ${mediaQuery("only screen and (max-width: 600px)")`
  width: 26px;
  height: 26px;
  right: 10px;
  bottom: 10px;
    `}
`;
