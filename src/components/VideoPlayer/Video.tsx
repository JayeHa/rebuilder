import { fullWidth } from "@/styles/utils/sizes";
import { VideoHTMLAttributes } from "react";

type Props = VideoHTMLAttributes<HTMLVideoElement> & {
  src: string;
  fullWidth?: boolean;
};

export const Video = ({
  src,
  fullWidth: isFullWidth = true,
  ...props
}: Props) => {
  return (
    <video
      loop
      playsInline
      autoPlay
      muted
      css={isFullWidth && fullWidth}
      {...props}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};
