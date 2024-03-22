import { ColorKey } from "@/styles/constants/colors";
import { Logo } from "../Logo";
import { LanguageSelector } from "./LanguageSelector";
import { Navigation } from "./Navigation";
import { useDesktopHeaderState } from "./hooks";
import * as Styled from "./styles";

type Props = {
  svgColor: ColorKey;
};

export const DesktopHeader = ({ svgColor }: Props) => {
  const { isSubNavOpen, navigationState } = useDesktopHeaderState();

  return (
    <Styled.DesktopHeaderWrapper isSubNavOpen={isSubNavOpen}>
      <Styled.DesktopHeader>
        <Logo size="lg" color={svgColor} />

        <Navigation {...navigationState} />
        <div />

        <LanguageSelector color={svgColor} />
      </Styled.DesktopHeader>
    </Styled.DesktopHeaderWrapper>
  );
};
