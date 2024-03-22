import { useLanguage } from "@/hooks/useLanguage";
import { useTranslationNavList } from "@/hooks/useTranslateNavList";
import * as Styled from "./styles";

const CURRENT_ROUTE = "service";

type Props = { toggleMobileNavOpen: VoidFunction };

export const SlideDownMenu = ({ toggleMobileNavOpen }: Props) => {
  const navList = useTranslationNavList();

  const { language, changeLanguage } = useLanguage();

  return (
    <Styled.SlideDownMenu>
      <Styled.NavList>
        {navList.map(([route, item]) => {
          const isGroup = typeof item !== "string";
          const title = isGroup ? item.title : item;

          return (
            <Styled.NavItem
              key={route}
              isCurrent={route === CURRENT_ROUTE}
              onClick={toggleMobileNavOpen}
            >
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
            toggleMobileNavOpen();
          }}
          type="button"
        >
          KOR
        </Styled.LanguageButton>

        <Styled.LanguageButton
          isActive={language === "en"}
          onClick={() => {
            changeLanguage("en");
            toggleMobileNavOpen();
          }}
          type="button"
        >
          ENG
        </Styled.LanguageButton>
      </Styled.LanguageSelector>
    </Styled.SlideDownMenu>
  );
};
