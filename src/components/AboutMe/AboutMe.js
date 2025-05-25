import styles from "./AboutMe.module.scss";
import pictureOfMe from "../../assets/images/me.jpg";

function AboutMe() {
  return (
    <section id="aboutMe" className={styles.aboutMe}>
      <div className={styles.title}>
        <h1>À propos de moi</h1>
        <span className={styles.separator}></span>
      </div>

      <div className={styles.content}>
        <p>
          Je m'appelle Clément et j'aime développer toutes sortes de projets
          afin de me perfectionner et d'apprendre de nouvelles technologies.
          J'ai découvert le développement en 2019 en m'intéressant au
          développement de jeux vidéos avec Unity puis je me suis formé au
          développement web et mobile en prenant plusieurs cours. C'est cela qui
          m'a donner envie de rejoindre le BUT Informatique afin de me former
          davantage et d'en faire mon métier.
        </p>
        <img src={pictureOfMe} alt="Me" />
      </div>
    </section>
  );
}

export default AboutMe;
