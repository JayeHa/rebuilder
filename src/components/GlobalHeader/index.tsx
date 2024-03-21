import { Logo } from "@/assets/images";
import { css } from "@emotion/react";

export const GlobalHeader = () => {
  return (
    <header
      css={css`
        background: red;
      `}
    >
      <Logo />
      <h1>GlobalHeader</h1>
    </header>
  );
};
