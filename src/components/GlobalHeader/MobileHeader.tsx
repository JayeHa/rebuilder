import { ColorKey } from "@/styles/constants/colors";
import { Logo } from "./Logo";
import { NavigationState } from "./hooks";

type Props = {
  svgColor: ColorKey;
  navigationState: NavigationState;
};

export const MobileHeader = ({ svgColor }: Props) => {
  return (
    <>
      <Logo size="sm" color={svgColor} />
      모바일
    </>
  );
};
