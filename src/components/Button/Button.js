import Link from "next/link";

const Button = (props) => {
  const { children } = props;

  return <button>{children}</button>;
};

export default Button;
