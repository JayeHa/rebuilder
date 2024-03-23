import styled from "@emotion/styled";
import { ReactNode, useMemo } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

type Props = {
  items: ReactNode[];
};

export const Carousel = ({ items }: Props) => {
  const settings = useMemo<Settings>(
    () => ({
      infinite: true,
      speed: 2000,
      slidesToShow: 2.5,

      autoplay: true,
      autoplaySpeed: 1000,

      initialSlide: 0,
      arrows: false,
      slidesToScroll: 1,
    }),
    []
  );

  return (
    <StyledContainer>
      <Slider {...settings}>
        {items.map((item, index) => (
          <StyledItem key={index}>{item}</StyledItem>
        ))}
      </Slider>
    </StyledContainer>
  );
};

const StyledContainer = styled.div``;

const StyledItem = styled.div`
  padding: 0 8px;
`;
