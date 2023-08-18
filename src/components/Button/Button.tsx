import { ReactNode } from "react";

const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;

  return <button>{children}</button>;
};

type ButtonProps = {
  children: ReactNode;
};

export default Button;
