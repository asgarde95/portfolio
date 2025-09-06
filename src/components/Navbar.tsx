import React from "react";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language.split("-")[0].toUpperCase();

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Assier García De La Vega García</div>
      {/* <ul style={styles.navLinks}>
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#about" style={styles.link}>Sobre mí</a></li>
        <li><a href="#projects" style={styles.link}>Proyectos</a></li>
        <li><a href="#contact" style={styles.link}>Contacto</a></li>
      </ul> */}
      <div>
        <button onClick={toggleLanguage} style={styles.langBtn}>
        {currentLang}
      </button>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#282c34",
    color: "white",
    position: "sticky" as "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: { fontWeight: "bold", fontSize: "1.5rem" },
  navLinks: {
    display: "flex",
    gap: "1rem",
    listStyleType: "none",
  },
  link: { color: "white", textDecoration: "none" },
  langBtn: {
    background: "transparent",
    border: "1px solid white",
    borderRadius: "4px",
    padding: "0.3rem 0.6rem",
    color: "white",
    cursor: "pointer",
    marginLeft: "1rem",
    fontWeight: "bold",
  },
};

export default Navbar;
