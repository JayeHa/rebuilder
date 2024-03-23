import { getObjectEntries } from "@/utils/getObjectProperties";
import * as Styled from "./styles";

export type SolutionContent = {
  title: string;
  subtitle: string | undefined;
  desc: { [key: string]: string };
  videoReference: string | undefined;
};

type Props = {
  content: SolutionContent;
};

export const ContentCard = ({
  content: { title, subtitle, desc, videoReference },
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
        {videoReference && (
          <Styled.VideoReference>{videoReference}</Styled.VideoReference>
        )}
      </Styled.MediaWrapper>
    </Styled.ContentCard>
  );
};
