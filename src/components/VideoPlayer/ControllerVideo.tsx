import { CirclePlay, CircleStop } from "@/assets/images";
import {
  mediaQuery,
  mediaQueryScreenAndMaxWidth,
} from "@/styles/utils/mediaQuery";
import { ActionButton } from "@components/Buttons/ActionButton";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { Video, VideoProps } from "./Video";

export const ControllerVideo = ({ ...props }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlay, setIsPlay] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      isPlay ? video.play() : video.pause();
    }
  }, [isPlay]);

  return (
    <div css={{ position: "relative" }}>
      <Video ref={videoRef} {...props} />

      <StyledActionButton onClick={() => setIsPlay((prev) => !prev)}>
        {isPlay && <CircleStop css={svgStyles} />}
        {!isPlay && <CirclePlay css={svgStyles} />}
      </StyledActionButton>
    </div>
  );
};

const StyledActionButton = styled(ActionButton)`
  position: absolute;
  right: 25px;
  bottom: 25px;

  ${mediaQueryScreenAndMaxWidth("tablet")`
  right: 20px;
  bottom: 20px;
  `}

  ${mediaQuery("only screen and (max-width: 600px)")`
  right: 10px;
  bottom: 10px;
  `}
`;

const svgStyles = css`
  width: 38px;

  ${mediaQueryScreenAndMaxWidth("tablet")`
  width: 25px;
  `}

  ${mediaQuery("only screen and (max-width: 600px)")`
  width: 19px;
  `}
`;
