import Link from "next/link";
import styles from "./Navbar.module.css";
import { useSettings } from "../../contexts/Settings";
import { SettingsType } from "../../types";

// TODO: be sure to also fetch nested navItems
const Navbar = () => {
  const settings: SettingsType = useSettings() ?? {};
  const { navigation } = settings;

  return (
    <section className={styles.sticky}>
      <nav className={styles.wrapper}>
        <ul className={styles.navbarContainer}>
          {navigation &&
            navigation.map((item, idx) => (
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
