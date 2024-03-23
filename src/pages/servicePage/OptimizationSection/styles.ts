import styled from "@emotion/styled";

export const StickyContainer = styled.div`
  position: sticky;
  top: 0px;

  flex-shrink: 0;

  height: fit-content;
  padding: 120px 0px 190px;

  margin-right: 40px;
`;

export const Strong = styled.strong`
  margin-bottom: 10px;

  font-weight: 600;
  font-size: 2.4rem;
  line-height: 140%;

  color: rgb(0, 0, 0);
`;

export const Title = styled.h2<{ isActive: boolean }>`
  margin-bottom: 12px;

  font-size: 4.8rem;
  line-height: 140%;

  ${({ isActive }) =>
    isActive
      ? `color: rgb(0, 0, 0);
  font-weight: 600;`
      : `color: rgb(189, 193, 199);
      font-weight: 500;`}
`;

export const Text = styled.span`
  margin-bottom: 60px;

  font-weight: 500;
  font-size: 2.6rem;
  line-height: 170%;

  color: rgb(0, 0, 0);
`;
