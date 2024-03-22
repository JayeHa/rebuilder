import { getObjectEntries } from "@/utils/getObjectProperties";
import { css } from "@emotion/react";
import * as Styled from "./styles";

type Props = { subItems: { [key: string]: string } };

export const SubNavList = ({ subItems }: Props) => {
  return (
    <Styled.SubNavList>
      {getObjectEntries(subItems).map(([subRoute, title]) => (
        <Styled.NavItem
          key={subRoute}
          css={css`
            font-weight: 400;
          `}
        >
          {title}
        </Styled.NavItem>
      ))}
    </Styled.SubNavList>
  );
};
