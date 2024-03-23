import { flex } from "@/styles/utils/flex";
import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background: rgb(0, 0, 229);
  overflow: hidden;
`;

export const Background = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background: url("/images/banner_background.png") 0% 0% / cover no-repeat;
`;

export const Banner = styled.div`
  width: 100%;
  max-width: 1200px;

  padding: 0 24px;
  margin: 0 auto;
`;

export const FlexColumn = styled.div`
  ${flex.column()}

  position: absolute;
  top: 50%;
  transform: translate(0px, -50%);
  z-index: 1;
  gap: 48px;
`;

export const Strong = styled.strong`
  color: rgb(93, 108, 250);
  font-size: 2rem;
  font-weight: 600;
  line-height: 140%;
`;

export const Title = styled.h2`
  color: rgb(255, 255, 255);
  font-size: 5.6rem;
  font-weight: 600;
  line-height: 120%;
`;

export const Text = styled.div`
  color: rgb(189, 193, 199);
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 140%;
`;
