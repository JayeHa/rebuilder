import { colors } from "@/styles/constants/colors";
import { mediaQueryScreenAndMaxWidth } from "@/styles/utils/mediaQuery";
import styled from "@emotion/styled";

export const StickyContainer = styled.div`
  position: sticky;
  top: 0px;

  flex-shrink: 0;

  height: fit-content;

  padding-top: 120px;
  margin-bottom: 190px;
  margin-right: 40px;
`;

export const Strong = styled.strong`
  margin-bottom: 10px;

  font-weight: 600;
  font-size: 2.4rem;
  line-height: 140%;

  color: rgb(0, 0, 0);

  ${mediaQueryScreenAndMaxWidth("tablet")`
  font-size: 1.8rem;
  margin-bottom: 6px;
  `}
`;

export const Title = styled.h2<{ isActive: boolean }>`
  margin-bottom: 12px;

  font-size: 4.8rem;
  line-height: 140%;

  ${({ isActive }) =>
    isActive
      ? `color: rgb(0, 0, 0);
  font-weight: 600;`
      : `color: ${colors.gray2};
      font-weight: 500;`}

  ${mediaQueryScreenAndMaxWidth("smDesktop")`
  font-size: 3.6rem;
  `}

  ${mediaQueryScreenAndMaxWidth("tablet")`
  font-size: 2.2rem;
  margin-bottom: 10px;
  `}
`;

export const Text = styled.span`
  display: inline-block;

  margin-bottom: 60px;

  font-weight: 500;
  font-size: 2.6rem;
  line-height: 170%;

  color: rgb(0, 0, 0);

  ${mediaQueryScreenAndMaxWidth("smDesktop")`
  font-size: 2rem;
    margin-bottom: 40px;
  `}

  ${mediaQueryScreenAndMaxWidth("tablet")`
  font-size: 1.4rem;
  margin-bottom: 20px;
  `}

  ${mediaQueryScreenAndMaxWidth("mobile")`
  text-align: center;
  `}
`;

export const MobileTitle = styled.h2`
  display: flex;  
  justify-content: center;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 143.84%;
  text-align: center;
  color: rgb(0, 0, 0);
  margin-bottom: 20px;
}
`;
