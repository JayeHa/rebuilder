import { fullWidth } from "@/styles/utils/sizes";
import { VideoHTMLAttributes, forwardRef } from "react";

export type VideoProps = VideoHTMLAttributes<HTMLVideoElement> & {
  src: string;
  fullWidth?: boolean;
};

export const Video = forwardRef<HTMLVideoElement, VideoProps>(
  ({ src, fullWidth: isFullWidth = true, ...props }, ref) => {
    return (
      <video
        ref={ref}
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
  }
);
