import Link from "next/link";
import styles from "./Navbar.module.css";

// todo: fetch this from settings -> navigation
const Navbar = (props) => {
  return (
    <section className={styles.sticky}>
      <nav className={styles.wrapper}>
        <ul className={styles.navbarContainer}>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/tag/recensioni">Recensioni</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
