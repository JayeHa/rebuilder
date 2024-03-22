import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const ActionButton = ({
  children,
  type = "button",
  ...props
}: Props) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
};
