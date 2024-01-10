import "../styles/globals.css";
import { Footer, Navbar } from "../components";
import { CURRENT_YEAR, SITE_NAME } from "@/constants";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { ProgressBar } from "@/components/ProgressBar";

/** @todo Fin a way to make this work in combination with the other font */
// const DM_SANS = DM_Sans({
//   display: "swap",
//   subsets: ["latin"],
//   variable: '--secondary-font',
// });

const SPACE_GROTESK = Space_Grotesk({
  display: "swap",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={SPACE_GROTESK.className}>
      <body className="dark:bg-neutral-800 dark:text-white">
        <section className="w-full h-full">
          <ProgressBar />
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
