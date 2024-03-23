import { getObjectEntries } from "@/utils/getObjectProperties";
import { Carousel } from "@components/Carousel";
import { Image } from "@components/Image";
import styled from "@emotion/styled";
import { SolutionContent } from ".";
import * as Styled from "./styles";

export type CarouselCardContent = Omit<
  SolutionContent,
  "videoFileName" | "videoReference"
>;

type Props = {
  content: CarouselCardContent;
};

export const CarouselCard = ({ content: { title, subtitle, desc } }: Props) => {
  const carouselItems = Array.from({ length: 4 }, (_, index) => (
    <Image src={`/images/carousel/${index + 1}.png`} />
  ));

  return (
    <StyledContainer>
      <Styled.TextWrapper>
        {subtitle && <Styled.Subtitle>{subtitle}</Styled.Subtitle>}
        <Styled.Title>{title}</Styled.Title>

        {getObjectEntries(desc).map(([key, text]) => (
          <Styled.Text key={key}>{text}</Styled.Text>
        ))}
      </Styled.TextWrapper>

      <StyledCarouselContainer>
        <Carousel items={carouselItems} />
      </StyledCarouselContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: block;
  box-sizing: border-box;

  width: 100%;
  max-width: 1200px;

  margin: 0 auto;
  padding-top: 9%;
  padding-bottom: 12%;
`;

const StyledCarouselContainer = styled.div`
  position: absolute;
  top: 200px;
  right: 0px;
  width: 54.7%;
`;
