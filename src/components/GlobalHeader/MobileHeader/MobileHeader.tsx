import { Close, Menu } from "@/assets/images";
import { ColorKey } from "@/styles/constants/colors";
import { ActionButton } from "@components/Buttons/ActionButton";
import { Logo } from "../Logo";
import { SlideDownMenu } from "./SlideDownMenu";
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

        {isMobileNavOpen && <SlideDownMenu />}
      </Styled.MobileHeader>
    </Styled.MobileHeaderWrapper>
  );
};
