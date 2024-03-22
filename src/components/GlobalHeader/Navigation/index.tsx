import { getObjectEntries } from "@/utils/getObjectProperties";
import { useTranslation } from "react-i18next";
import * as Styled from "./styles";

export const Navigation = () => {
  const { t } = useTranslation("common");

  const routeList = getObjectEntries(
    t("header.navigation", { returnObjects: true })
  );

  return (
    <Styled.Navigation>
      <Styled.NavList>
        {routeList.map(([route, item]) => {
          const hasSubRoute = typeof item !== "string";
          const title = hasSubRoute ? item.title : item;

          return (
            <Styled.NavItem key={route}>
              {title}

              {hasSubRoute && (
                <ul hidden>
                  {getObjectEntries(item.subItems).map(([subRoute, title]) => (
                    <li key={subRoute}>{title}</li>
                  ))}
                </ul>
              )}
            </Styled.NavItem>
          );
        })}
      </Styled.NavList>
    </Styled.Navigation>
  );
};
