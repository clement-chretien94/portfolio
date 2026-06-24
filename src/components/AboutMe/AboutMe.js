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
        <div className={styles.aboutText}>
          <p>
            Je m'appelle Clément et j'aime développer toutes sortes de projets
            afin de me perfectionner et d'apprendre de nouvelles technologies.
            Ayant découvert la programmation en 2019 via le développement de
            jeux vidéo avec <strong>Unity</strong>, je me suis ensuite formé au
            développement web et mobile. C'est cette curiosité qui m'a poussé à
            rejoindre le <strong>BUT Informatique</strong> pour me structurer et
            me former davantage.
          </p>
          <br />
          <p>
            Ce cursus m'a permis d'acquérir de solides bases techniques
            (algorithmique, bases de données, architectures web et mobile) et
            des compétences transverses (gestion de projet, droit,
            communication) indispensables à ma future carrière. Plus important
            encore, mon stage et mon alternance ont été déterminants dans la
            construction de mon <strong>identité professionnelle</strong>. Ils
            m'ont confronté à de vrais défis d'entreprise, allant de
            l'optimisation d'infrastructures à l'exploration de nouvelles
            architectures, confirmant mon attrait pour les environnements
            techniques complexes. Je cultive d'ailleurs cette polyvalence sur
            mon temps libre à travers des projets personnels ciblés.
          </p>
          <br />
          <p>
            C'est avec cette volonté de lier apprentissage théorique de haut
            niveau et projets concrets que je vais poursuivre mes études à l'
            <strong>ENSIMAG</strong> à la rentrée. En parallèle, j'effectuerai
            mon apprentissage chez <strong>BNP Paribas</strong>, une opportunité
            idéale pour spécialiser mon profil en développement logiciel tout en
            évoluant dans un secteur économique et financier qui me passionne.
          </p>
        </div>
        <img src={pictureOfMe} alt="Clément Chrétien" width="400" height="400" loading="lazy" />
      </div>
    </section>
  );
}

export default AboutMe;
