import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const ActionButton = ({
  children,
  type = "button",
  ...props
}: Props) => {
  return (
    <button type={type} {...props} css={{ cursor: "pointer" }}>
      {children}
    </button>
  );
};
