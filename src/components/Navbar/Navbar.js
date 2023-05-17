import Link from "next/link";
import styles from "./Navbar.module.css";

// todo: be sure to also fetch nested navItems
const Navbar = (props) => {
  const { settings } = props;
  const navigation = settings ? settings.navigation : [];

  return (
    <section className={styles.sticky}>
      <nav className={styles.wrapper}>
        <ul className={styles.navbarContainer}>
          {navigation.map((item, idx) => (
            <li key={idx}>
              <Link href={item.url}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
