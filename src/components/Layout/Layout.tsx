import { ReactNode } from "react";

import Footer from "../Footer";
import Navbar from "../Navbar";
import { SITE_NAME, CURRENT_YEAR } from "../../lib/utils/constants";

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <section className="w-full h-full">
      <Navbar />
      {children}
      <Footer>
        © {CURRENT_YEAR} {SITE_NAME}. TUTTI I DIRITTI RISERVATI
      </Footer>
    </section>
  );
};

type LayoutProps = {
  children: ReactNode;
};

export default Layout;
