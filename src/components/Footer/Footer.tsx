import { ReactNode } from "react";

export const Footer: React.FC<FooterProps> = (props) => {
  const { children } = props;

  return (
    <footer className="text-center py-4">
      <p>{children}</p>
    </footer>
  );
};

type FooterProps = {
  children: ReactNode;
};

