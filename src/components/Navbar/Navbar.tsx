import Link from "next/link";
import { getSettings } from "@/api/ghost/utils";
import { ThemeSwitcher } from "../ThemeSwitcher";

/** @todo Be sure to also fetch nested navItems */
export const Navbar = async () => {
  const settings = await getSettings()
  const { navigation } = settings;

  return (
    <section className="w-1/2 mx-auto">
      <nav className="text-center py-8">
        <ul className="inline-flex gap-3">
          {Array.isArray(navigation) &&
            navigation.map((item, idx) => (
              <li key={idx}>
                <Link href={item.url}>{item.label}</Link>
              </li>
            ))}
          <li><ThemeSwitcher /></li>
        </ul>
      </nav>
    </section>
  );
};

