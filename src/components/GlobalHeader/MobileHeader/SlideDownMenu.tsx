import { useTranslationNavList } from "@/hooks/useTranslateNavList";
import * as Styled from "./styles";

export const SlideDownMenu = () => {
  const navList = useTranslationNavList();

  return (
    <div>
      <Styled.NavBar>
        {navList.map(([route, item]) => {
          const isGroup = typeof item !== "string";
          const title = isGroup ? item.title : item;

          return <div key={route}>{title}</div>;
        })}
      </Styled.NavBar>

      <div />
    </div>
  );
};
