import { CirclePlus } from "@/assets/images";
import { zIndex } from "@/styles/constants/zIndexes";
import styled from "@emotion/styled";
import { Video, VideoProps } from "./Video";

type Props = VideoProps & {
  overlayImgSrc: string;
};

export const OverlayVideo = ({ overlayImgSrc, ...props }: Props) => {
  return (
    <StyledContainer>
      <Video {...props} />

      <StyledOverlay overlaySrc={overlayImgSrc} />
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
`;
