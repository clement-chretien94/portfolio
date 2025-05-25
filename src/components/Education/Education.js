import styles from "./Education.module.scss";

function Education() {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.title}>
        <h1>Experiences et Formations</h1>
        <span className={styles.separator}></span>
      </div>

      <div className={styles.content}>
        <h2>Expérience professionel</h2>
        <div className={styles.part1}>
          <h3>Stage en dévellopement Informatique</h3>
          <h4>ATOS // Avril 2025 - Juin 2025</h4>
          <ul>
            <li>
              • Développement d'un outil d'analyse de consommation énergétique
              propulsé par IA
            </li>
          </ul>
        </div>
        <h2>Formation</h2>
        <div className={styles.part1}>
          <h3>BUT Informatique</h3>
          <h4>IUT ROBERT SCHUMAN // 2023 - EN COURS</h4>
          <ul>
            <li>
              • BUT Informatique, Parcours : Réalisation d'applications :
              conception, développement, validation
            </li>
          </ul>
        </div>
        <div className={styles.part1}>
          <h3>Baccalauréat Général</h3>
          <h4>LYCÉE EDOUARD BRANLY // 2023</h4>
          <ul>
            <li>
              • Obtention du Baccalauréat Géneral, Spécialités Mathématiques et
              Physique - Chimie, Mention Bien
            </li>
          </ul>
        </div>
        <div className={styles.part2}>
          <h3>Diplôme National du Brevet</h3>
          <h4>COLLÈGE EDOUARD BRANLY // 2020</h4>
          <ul>
            <li>
              • Obtention du Diplôme National du Brevet, Mention Très Bien
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
