import { Close, Menu } from "@/assets/images";
import { ColorKey } from "@/styles/constants/colors";
import { ActionButton } from "@components/Buttons/ActionButton";
import { css } from "@emotion/react";
import { Logo } from "../Logo";
import { useMobileHeaderState } from "./hooks";
import * as Styled from "./styles";

type Props = {
  svgColor: ColorKey;
};

export const MobileHeader = ({ svgColor }: Props) => {
  const { isMobileNavOpen, toggleMobileNavOpen } = useMobileHeaderState();

  return (
    <Styled.MobileHeaderWrapper isMobileNavOpen={isMobileNavOpen}>
      <Styled.MobileHeader>
        <Logo size="sm" color={svgColor} />

        <ActionButton onClick={toggleMobileNavOpen}>
          {!isMobileNavOpen && <Menu color={svgColor} />}
          {isMobileNavOpen && <Close color={svgColor} />}
        </ActionButton>

        {isMobileNavOpen && (
          <div
            css={css`
              position: absolute;
            `}
          >
            네비게이션바
          </div>
        )}
      </Styled.MobileHeader>
    </Styled.MobileHeaderWrapper>
  );
};
