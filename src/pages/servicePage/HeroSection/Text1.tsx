import { colors } from "@/styles/constants/colors";
import { mediaQueryScreenAndMaxWidth } from "@/styles/utils/mediaQuery";
import styled from "@emotion/styled";
import { CSSProperties } from "react";

type Props = {
  style: CSSProperties;
  text: string;
};

export const Text1 = ({ style, text }: Props) => {
  return (
    <StyledWrapper style={style}>
      <StyledText>{text}</StyledText>
    </StyledWrapper>
  );
};

export const StyledWrapper = styled.div`
  position: fixed;
  left: 0px;

  width: 100%;

  text-align: center;
`;

export const StyledText = styled.span`
  font-weight: 800;
  font-size: 7rem;
  line-height: 130.5%;
  text-align: center;

  color: ${colors.white};

  ${mediaQueryScreenAndMaxWidth("smDesktop")`
  font-size: 5.6rem;
  `}

  ${mediaQueryScreenAndMaxWidth("tablet")`
  font-size: 4.8rem;
  `}

  ${mediaQueryScreenAndMaxWidth("mobile")`
  font-size: 2.4rem;
  white-space: pre-wrap;
  `}
`;
