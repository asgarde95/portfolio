import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.icons}>
        <a
          href="https://www.linkedin.com/in/assier-garcia-de-la-vega-garcia-51a206250/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.link}
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/asgarde95" 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.link}
        >
          <FaGithub size={24} />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Mi Portfolio. Todos los derechos reservados.</p>
    </footer>
  );
};

const styles = {
  footer: {
    padding: "1rem 2rem",
    textAlign: "center" as "center",
    backgroundColor: "#282c34",
    color: "white",
    marginTop: "auto",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "0.5rem",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};

export default Footer;
