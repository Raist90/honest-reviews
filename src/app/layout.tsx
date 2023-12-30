import Footer from "../components/Footer";
import "../styles/globals.css";
import styles from "../components/Layout/Layout.module.css";
import Navbar from "../components/Navbar/Navbar";
import SettingsProvider from "../contexts/Settings";
import { CURRENT_YEAR, SITE_NAME } from "../lib/utils/constants";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import classNames from "classnames";

const DM_SANS = DM_Sans({
  display: "swap",
  subsets: ["latin"],
});

const SPACE_GROTESK = Space_Grotesk({
  display: "swap",
  subsets: ["latin"],
});

const fontStyles = classNames(
  `${DM_SANS.className}, ${SPACE_GROTESK.className}`,
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={fontStyles}>
      <body>
        <SettingsProvider>
          <section className={styles.layoutWrapper}>
            <Navbar />
            {children}
            <Footer>
              © {CURRENT_YEAR} {SITE_NAME}. TUTTI I DIRITTI RISERVATI
            </Footer>
          </section>
        </SettingsProvider>
      </body>
    </html>
  );
}
