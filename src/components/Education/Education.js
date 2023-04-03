import styles from './Education.module.scss';

function Education() {
    return (
        <section id='education' className={styles.education}>
            <div className={styles.title}>
                <h1>Éducation</h1>
                <span className={styles.separator}></span>
            </div>

            <div className={styles.content}>
                <h2>Formation</h2>
                <div className={styles.part1}>
                    <h3>Terminale Générale</h3>
                    <h4>LYCÉE EDOUARD BRANLY // 2022 - En cours</h4>
                    <ul>
                        <li>• Spécialités Mathématiques et Physique - Chimie</li>
                    </ul>
                </div>
                <div className={styles.part1}>
                    <h3>Diplôme National du Brevet</h3>
                    <h4>COLLÈGE EDOUARD BRANLY // 2020</h4>
                    <ul>
                        <li>• Obtention du Diplôme National du Brevet mention Très Bien</li>
                    </ul>
                </div>
                <h2>Certification</h2>
                <div className={styles.part2}>
                    <h3>Certification Pix</h3>
                    <h4>LYCÉE EDOUARD BRANLY // 23 janvier 2023</h4>
                    <ul>
                        <li>• Score de 419 points</li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Education;