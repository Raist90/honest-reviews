import Link from "next/link";
import { getSettings } from "@/api/ghost/utils";

/** @todo Be sure to also fetch nested navItems */
export const Navbar = async () => {
  const settings = await getSettings()
  const { navigation } = settings;

  return (
    <section className="w-1/4 mx-auto">
      <nav className="text-center py-8">
        <ul className="inline-flex gap-3">
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

