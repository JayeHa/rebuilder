import { ColorKey } from "@/styles/constants/colors";
import { LanguageSelector } from "./LanguageSelector";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { NavigationState } from "./hooks";
import * as Styled from "./styles";

type Props = {
  svgColor: ColorKey;
  navigationState: NavigationState;
};

export const DesktopHeader = ({ svgColor, navigationState }: Props) => {
  return (
    <Styled.DeskTopHeader>
      <Logo size="lg" color={svgColor} />

      <Navigation {...navigationState} />
      <div />

      <LanguageSelector color={svgColor} />
    </Styled.DeskTopHeader>
  );
};
