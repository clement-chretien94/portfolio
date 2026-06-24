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
          <h3>Alternance en développement Informatique</h3>
          <h4>BNP PARIBAS // Septembre 2026 - En cours</h4>
          <ul>
            <li>
              Développement full-stack d'évolutions applicatives pour un module
              de consolidation des données de risque de crédit.
            </li>
            <li>
              Conception de solutions techniques (modélisation des données,
              création d'API, workflows) et recueil des besoins auprès des
              métiers.
            </li>
            <li>
              Mise en place de tests (unitaires, intégration, UAT) dans le
              strict respect des bonnes pratiques de qualité logicielle.
            </li>
            <li>
              Participation aux déploiements en production et à
              l'industrialisation dans une approche DevOps au sein d'un
              environnement Agile Scrum.
            </li>
          </ul>
        </div>
        <div className={styles.part1}>
          <h3>Alternance en développement Informatique</h3>
          <h4>DN CONSULTANTS // Septembre 2025 - Août 2026</h4>
          <ul>
            <li>
              Développement d'une solution de traitement des données
              touristiques
            </li>
          </ul>
        </div>
        <div className={styles.part1}>
          <h3>Stage en développement Informatique</h3>
          <h4>ATOS // Avril 2025 - Juin 2025</h4>
          <ul>
            <li>
              Développement d'un outil d'analyse de consommation énergétique
              propulsé par IA
            </li>
          </ul>
        </div>
        <h2>Formation</h2>
        <div className={styles.part1}>
          <h3>Diplôme d'ingénieur</h3>
          <h4>Grenoble INP - Ensimag, UGA // 2026 - En cours</h4>
          <ul>
            <li>
              Ingénieur de Grenoble INP - Ensimag, filière en apprentissage
              Informatique et système d'information
            </li>
          </ul>
        </div>
        <div className={styles.part1}>
          <h3>BUT Informatique</h3>
          <h4>IUT ROBERT SCHUMAN // 2023 - 2026</h4>
          <ul>
            <li>
              BUT Informatique, Parcours : Réalisation d'applications :
              conception, développement, validation
            </li>
          </ul>
        </div>
        <div className={styles.part1}>
          <h3>Baccalauréat Général</h3>
          <h4>LYCÉE EDOUARD BRANLY // 2023</h4>
          <ul>
            <li>
              Obtention du Baccalauréat Géneral, Spécialités Mathématiques et
              Physique - Chimie, Mention Bien
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
