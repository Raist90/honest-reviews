import { ReactNode } from "react";

const Footer: React.FC<FooterProps> = (props) => {
  const { children } = props;

  return (
    <footer>
      <p>{children}</p>
    </footer>
  );
};

type FooterProps = {
  children: ReactNode;
};

export default Footer;
