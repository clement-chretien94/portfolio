import styles from './HeroArea.module.scss';
import downnwardIcon from "../../assets/images/downnward-icon.svg";

function HeroArea() {
  return (
    <section className={styles.heroArea}>
      <h3>Salut, je m'appelle</h3>
      <h1>Clément Chrétien</h1>
      <h2>I experiment things with my computer</h2>
      <p>Je suis lycéen et développeur à mes heures perdues.<br/>J'aime créer toutes sortes de choses avec mon ordinateur.</p>
      <a href='#projects'>
        Voir mes projets
        <img width="32px" src={downnwardIcon} alt="downnwardIcon"/>
      </a>
    </section>
  );
}

export default HeroArea;