import { css } from "@emotion/react";

export const GlobalHeader = () => {
  return (
    <header
      css={css`
        background: red;
      `}
    >
      <h1>GlobalHeader</h1>
    </header>
  );
};
