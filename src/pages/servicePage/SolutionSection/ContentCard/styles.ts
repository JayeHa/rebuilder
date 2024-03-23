import { flex } from "@/styles/utils/flex";
import {
  mediaQuery,
  mediaQueryScreenAndMaxWidth,
  mediaQueryScreenAndMinWidth,
} from "@/styles/utils/mediaQuery";
import styled from "@emotion/styled";

export const ContentCard = styled.article`
  ${flex({ justifyContent: "space-between", alignItems: "center" })}

  ${mediaQueryScreenAndMaxWidth("smDesktop")`
  flex-direction: column;
  `}
`;

export const TextWrapper = styled.div`
  ${flex.column()}

  width: 100%;
  white-space: pre-wrap;
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 4.4rem;
  line-height: 140%;
  color: rgb(0, 0, 0);
  margin-bottom: 20px;

  ${mediaQueryScreenAndMaxWidth("smDesktop")`
  text-align: center;
  `}

  ${mediaQueryScreenAndMaxWidth("tablet")`
  font-size: 2.2rem;
    margin-bottom: 16px;
  `}

  ${mediaQueryScreenAndMaxWidth("mobile")`
  font-size: 1.8rem;
  margin-bottom: 12px;
  `}
`;

export const Subtitle = styled.strong`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 140%;
  color: rgb(0, 0, 0);

  ${mediaQueryScreenAndMaxWidth("smDesktop")`
    text-align: center;
    margin-bottom: 10px;
  `}

  ${mediaQueryScreenAndMaxWidth("tablet")`
  font-size: 1.6rem;
  color: rgb(111, 117, 123);
  margin-bottom: 6px;
  `}
`;

export const Text = styled.span`
    font-weight: 500;
    font-size: 2.2rem;
    line-height: 140%;
    color: rgb(0, 0, 0);

    ${mediaQueryScreenAndMaxWidth("smDesktop")`
    text-align: center;
    `}

    ${mediaQueryScreenAndMaxWidth("tablet")`
    font-size: 1.4rem;
    `}

    ${mediaQuery("only screen and (max-width: 600px)")`
    font-size: 1.3rem;
    line-height: 150%;
    `}
}
`;

export const MediaWrapper = styled.div`
  ${mediaQueryScreenAndMinWidth("smDesktop")`
  margin-left: 40px;
  `}

  ${mediaQueryScreenAndMaxWidth("smDesktop")`
    margin-top: 60px;
    `}

  ${mediaQueryScreenAndMaxWidth("tablet")`
  margin-top: 40px;
    `}

    ${mediaQuery("only screen and (max-width: 600px)")`
    margin-top: 28px;
    `}
`;

export const VideoReference = styled.small`
  display: block;

  margin-top: 10px;

  font-weight: 500;
  font-size: 1.5rem;
  line-height: 148%;
  text-align: right;

  color: rgb(0, 0, 0);

  ${mediaQueryScreenAndMaxWidth("smDesktop")`
    color: rgb(111, 117, 123);
    text-align: center;
    margin-top: 20px;
    `}

  ${mediaQueryScreenAndMaxWidth("tablet")`
    font-size: 1.2rem;
    `}

    ${mediaQuery("only screen and (max-width: 600px)")`
    font-size: 0.8rem;
    margin-top: 8px;
    max-width: 215px;
    white-space: pre-wrap;
    `}
`;
