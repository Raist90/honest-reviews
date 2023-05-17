import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from "./Layout.module.css";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/utils/constants";

const Layout = (props) => {
  const { children, settings } = props;

  return (
    <section className={styles.layoutWrapper}>
      <Navbar {...{ settings }} />
      {children}
      <Footer>
        © {CURRENT_YEAR} {SITE_NAME}. TUTTI I DIRITTI RISERVATI
      </Footer>
    </section>
  );
};

export default Layout;
