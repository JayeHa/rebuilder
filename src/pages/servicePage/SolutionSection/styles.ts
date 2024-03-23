import { flex } from "@/styles/utils/flex";
import { mediaQueryScreenAndMaxWidth } from "@/styles/utils/mediaQuery";
import styled from "@emotion/styled";

export const CardsContainer = styled.div`
  ${flex.column({ gap: "80px" })}
  overflow: hidden;

  width: 100%;
  height: 100%;
  max-width: 1200px;

  margin: 0 auto;
  padding: 200px 30px 325px;

  ${mediaQueryScreenAndMaxWidth("smDesktop")`
  padding: 200px 30px;
  `}

  ${mediaQueryScreenAndMaxWidth("tablet")`
  padding: 100px 70px;
  `}

  ${mediaQueryScreenAndMaxWidth("mobile")`
  padding: 80px 20px;
  `}
`;
