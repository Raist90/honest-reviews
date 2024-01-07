import "../styles/globals.css";
import { Footer, Navbar } from "../components";
import { CURRENT_YEAR, SITE_NAME } from "@/constants";
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
        <section className="w-full h-full">
          <Navbar />
          {children}
          <Footer>
            © {CURRENT_YEAR} {SITE_NAME}. TUTTI I DIRITTI RISERVATI
          </Footer>
        </section>
      </body>
    </html>
  );
}
