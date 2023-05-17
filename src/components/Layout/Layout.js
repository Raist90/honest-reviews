import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from "./Layout.module.css";

const Layout = (props) => {
  const { children, settings } = props;

  return (
    <section className={styles.layoutWrapper}>
      <Navbar {...{ settings }} />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
