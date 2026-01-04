import styles from "./HeroArea.module.scss";
import downnwardIcon from "../../assets/images/downnward-icon.svg";

function HeroArea() {
  return (
    <section className={styles.heroArea}>
      <h3>Salut, je m'appelle</h3>
      <h1>Clément Chrétien</h1>
      <h2>I love learning new things</h2>
      <p>
        Je suis étudiant en 3ème année de BUT Informatique en alternance et
        j'aime apprendre de nouvelles technologies et outils.
        <br />
        J'aime réaliser des projets personnels pour améliorer mes compétences et
        découvrir de nouvelles technologies.
      </p>
      <a href="#projects">
        Voir mes projets
        <img width="32px" src={downnwardIcon} alt="downnwardIcon" />
      </a>
    </section>
  );
}

export default HeroArea;
