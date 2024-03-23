import { getObjectEntries } from "@/utils/getObjectProperties";
import { ControllerVideo } from "@components/VideoPlayer/ControllerVideo";
import * as Styled from "./styles";

export type SolutionContent = {
  title: string;
  subtitle?: string;
  desc: { [key: string]: string };
  videoFileName: string;
  videoReference?: string;
};

type Props = {
  content: SolutionContent;
};

export const ContentCard = ({
  content: { title, subtitle, desc, videoFileName, videoReference },
}: Props) => {
  return (
    <Styled.ContentCard>
      <Styled.TextWrapper>
        {subtitle && <Styled.Subtitle>{subtitle}</Styled.Subtitle>}
        <Styled.Title>{title}</Styled.Title>

        {getObjectEntries(desc).map(([key, text]) => (
          <Styled.Text key={key}>{text}</Styled.Text>
        ))}
      </Styled.TextWrapper>

      <Styled.MediaWrapper>
        <ControllerVideo src={`/videos/${videoFileName}.mp4`} />
        {videoReference && (
          <Styled.VideoReference>{videoReference}</Styled.VideoReference>
        )}
      </Styled.MediaWrapper>
    </Styled.ContentCard>
  );
};
