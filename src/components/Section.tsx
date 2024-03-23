import { ColorKey, colors } from "@/styles/constants/colors";
import styled from "@emotion/styled";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  backgroundColor?: ColorKey;
  hasMaxWidth?: boolean;
};

export const Section = ({
  children,
  backgroundColor = "white",
  hasMaxWidth = true,
  ...props
}: Props) => {
  return (
    <StyledSection backgroundColor={backgroundColor} {...props}>
      <StyledContainer hasMaxWidth={hasMaxWidth}>{children}</StyledContainer>
    </StyledSection>
  );
};

const StyledSection = styled.section<{ backgroundColor: ColorKey }>`
  width: 100%;
  min-height: 100vh;

  background-color: ${({ backgroundColor }) => colors[backgroundColor]};
`;

const StyledContainer = styled.div<{ hasMaxWidth: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  ${({ hasMaxWidth }) => hasMaxWidth && "max-width: 1200px;"}

  padding: 0px 30px;
  margin: 0 auto;

  white-space: pre-wrap;
`;
