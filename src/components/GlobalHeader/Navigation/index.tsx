import { NavigationState } from "../hooks";
import { SubNavList } from "./SubNavList";
import { useTranslationNavList } from "./hooks";
import * as Styled from "./styles";

type Props = NavigationState;

export const Navigation = ({ hoveredRoute, onRouteHover }: Props) => {
  const navList = useTranslationNavList();

  return (
    <Styled.Navigation onMouseLeave={() => onRouteHover.off()}>
      <Styled.NavList>
        {navList.map(([route, item]) => {
          const isGroup = typeof item !== "string";
          const handleMouseEnter = () => {
            onRouteHover.off();
            if (isGroup) {
              onRouteHover.on(route);
            }
          };

          const title = isGroup ? item.title : item;
          const displaySubNav = isGroup && hoveredRoute === route;

          return (
            <div key={route} onMouseEnter={handleMouseEnter}>
              <Styled.NavItem>{title}</Styled.NavItem>

              {displaySubNav && <SubNavList subItems={item.subItems} />}
            </div>
          );
        })}
      </Styled.NavList>
    </Styled.Navigation>
  );
};
