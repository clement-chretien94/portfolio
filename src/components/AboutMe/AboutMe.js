import styles from './AboutMe.module.scss';
import pictureOfMe from "../../assets/images/me.jpg";

function AboutMe() {
  return (
    <section id='aboutMe' className={styles.aboutMe}>
      <div className={styles.title}>
        <h1>À propos de moi</h1>
        <span className={styles.separator}></span>
      </div>

      <div className={styles.content}>
        <p>Je m'appelle Clément et j'aime développer grâce à mon ordinateur sur mon temps libre. J'ai découvert le développement en 2019 en m'intéressant au développement de jeux vidéos avec Unity puis je me suis formé au développement web en prenant plusieurs cours et me voilà.</p>
        <img src={pictureOfMe} alt="Me" />
      </div>

    </section>
  );
}

export default AboutMe;