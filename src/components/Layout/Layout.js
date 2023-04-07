import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from "./Layout.module.css";

const Layout = (props) => {
  const { children } = props;

  return (
    <section className={styles.layoutWrapper}>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
