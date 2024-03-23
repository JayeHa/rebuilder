import { colors } from "@/styles/constants/colors";
import { flex } from "@/styles/utils/flex";
import { mediaQueryScreenAndMaxWidth } from "@/styles/utils/mediaQuery";
import styled from "@emotion/styled";
import { CSSProperties, ReactNode } from "react";

type Props = {
  style: CSSProperties;
  largeText: ReactNode;
  smallText: string;
};

export const Text2 = ({ style, smallText, largeText }: Props) => {
  return (
    <StyledWrapper style={style}>
      <StyledSmallText>{smallText}</StyledSmallText>

      <StyledLargeText>{largeText}</StyledLargeText>
    </StyledWrapper>
  );
};

export const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  transform: translate(0px, -50%);

  ${flex.center({ flexDirection: "column" })}
`;

export const StyledSmallText = styled.span`
  margin-bottom: 83px;

  font-weight: 800;
  font-size: 5rem;
  line-height: 130.5%;
  text-align: center;

  color: ${colors.white};

  ${mediaQueryScreenAndMaxWidth("smDesktop")`
  font-size: 3.2rem;
  margin-bottom: 50px;
  `}

  ${mediaQueryScreenAndMaxWidth("tablet")`
  margin-bottom: 42px;
  `}

  ${mediaQueryScreenAndMaxWidth("mobile")`
  font-size: 1.8rem;
  margin-bottom: 14px;
  `}
`;

export const StyledLargeText = styled.span`
  font-weight: 800;
  font-size: 9.58rem;
  line-height: 130.5%;
  text-align: center;
  white-space: pre-wrap;

  color: ${colors.white};

  ${mediaQueryScreenAndMaxWidth("smDesktop")`
  font-size: 5.6rem;
  `}

  ${mediaQueryScreenAndMaxWidth("tablet")`
  font-size: 4.8rem;
  `}

  ${mediaQueryScreenAndMaxWidth("mobile")`
  font-size: 2.8rem;
  `}
`;
