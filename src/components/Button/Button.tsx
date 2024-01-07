import { ReactNode } from "react";

export const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;

  return <button>{children}</button>;
};

type ButtonProps = {
  children: ReactNode;
};
