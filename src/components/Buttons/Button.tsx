import { flex } from "@/styles/utils/flex";
import { mediaQueryScreenAndMaxWidth } from "@/styles/utils/mediaQuery";
import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, type = "button", ...props }: Props) => {
  return (
    <StyledButton type={type} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  ${flex.center({ gap: "8px" })}
  display: inline-flex;

  max-width: 194px;
  min-width: 64px;

  padding: 12px 16px;
  border-radius: 4px;

  font-size: 2rem;
  font-weight: 600;
  line-height: 140%;

  background: rgb(230, 232, 235);
  color: rgb(55, 55, 204);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 16px 0px;

  ${mediaQueryScreenAndMaxWidth("laptop")`
  max-width: 130px;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 11px 0px;
  padding: 8px 11px;
  gap: 5px;

  font-size: 1.3rem;
  `}

  ${mediaQueryScreenAndMaxWidth("tablet")`
  max-width: 78px;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 7px 0px;
  padding: 5px 7px;
  gap: 3px;
  
  font-size: 0.8rem;
  `}
`;
