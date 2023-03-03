import { SITE_NAME } from "@/lib/utils/constants";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <p>
        © {currentYear} {SITE_NAME}. TUTTI I DIRITTI RISERVATI
      </p>
    </footer>
  );
};

export default Footer;
