import Link from "next/link";
import { getGhostData } from "../../api";

/** @todo Be sure to also fetch nested navItems */
const Navbar = async () => {
  /** @todo Maybe it's best to fetch this data from `Layout` and then pass it as porps to `Navbar` */
  const settings = await getGhostData("settings");
  const { navigation } = settings;

  return (
    <section>
      <nav>
        <ul>
          {Array.isArray(navigation) &&
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
