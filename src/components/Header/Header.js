import styles from './Header.module.scss';
import logo from "../../assets/images/logo.svg";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to={"/"}>
        <img width="32px" src={logo} alt="logo"/>
      </Link>
      <nav>
        <a href="#aboutMe">À propos de moi</a>
        <a href="#education">Éducation</a>
        <a href="#skills">Compétences</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
        <button className={styles.cv}>CV</button>
      </nav>
    </header>
  );
}

export default Header;