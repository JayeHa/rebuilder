import styled from "@emotion/styled";

type Props = JSX.IntrinsicElements["img"];

export const Image = ({ ...props }: Props) => {
  return (
    <div>
      <StyledImage {...props} />
    </div>
  );
};

const StyledImage = styled.img`
  width: 100%;
`;
