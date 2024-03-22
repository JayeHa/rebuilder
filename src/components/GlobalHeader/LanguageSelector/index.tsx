import { Globe } from "@/assets/images";
import { useLanguage } from "@/hooks/useLanguage";
import { useMouseHover } from "@/hooks/useMouseHover";
import { ColorKey } from "@/styles/constants/colors";
import * as Styled from "./styles";

type Props = {
  color?: ColorKey;
};

export const LanguageSelector = ({ color = "white" }: Props) => {
  const { language, changeLanguage } = useLanguage();

  const [isHovered, hoverHandler] = useMouseHover();

  return (
    <Styled.Container {...hoverHandler}>
      <Styled.IconWrapper _color={color}>
        <Globe />
      </Styled.IconWrapper>

      {isHovered && (
        <Styled.Tooltip>
          <Styled.TooltipInner>
            <Styled.LanguageButton
              isActive={language === "ko"}
              onClick={() => {
                changeLanguage("ko");
              }}
              type="button"
            >
              KOR
            </Styled.LanguageButton>

            <Styled.LanguageButton
              isActive={language === "en"}
              onClick={() => {
                changeLanguage("en");
              }}
              type="button"
            >
              ENG
            </Styled.LanguageButton>
          </Styled.TooltipInner>
        </Styled.Tooltip>
      )}
    </Styled.Container>
  );
};
