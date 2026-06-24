import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 992) {
        setIsMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <Link to={"/"} onClick={closeMenu}>
        <img width="32px" src={logo} alt="logo" />
      </Link>

      <button
        type="button"
        className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ""}`}
        aria-label="Ouvrir le menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
        <a href="#aboutMe" onClick={closeMenu}>
          À propos de moi
        </a>
        <a href="#education" onClick={closeMenu}>
          Éducation
        </a>
        <a href="#skills" onClick={closeMenu}>
          Compétences
        </a>
        <a href="#projects" onClick={closeMenu}>
          Projets
        </a>
        <a
          href="/clement_chretien.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          <button className={styles.cv}>CV</button>
        </a>
      </nav>
    </header>
  );
}

export default Header;
