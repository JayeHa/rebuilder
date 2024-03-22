import { useLanguage } from "@/hooks/useLanguage";
import { useTranslationNavList } from "@/hooks/useTranslateNavList";
import * as Styled from "./styles";

const CURRENT_ROUTE = "service";

// TODO: 애니메이션 적용하기
export const SlideDownMenu = () => {
  const navList = useTranslationNavList();

  const { language, changeLanguage } = useLanguage();

  return (
    <Styled.SlideDownMenu>
      <Styled.NavList>
        {navList.map(([route, item]) => {
          const isGroup = typeof item !== "string";
          const title = isGroup ? item.title : item;

          return (
            <Styled.NavItem key={route} isCurrent={route === CURRENT_ROUTE}>
              {title}
            </Styled.NavItem>
          );
        })}
      </Styled.NavList>

      <Styled.LanguageSelector>
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
      </Styled.LanguageSelector>
    </Styled.SlideDownMenu>
  );
};
