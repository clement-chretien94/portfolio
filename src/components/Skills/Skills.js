import { useState } from 'react';
import styles from './Skills.module.scss';
import TabsContent from './TabsContent';

function Skills() {
    const [selected, setSelected] = useState("dev");

    return (
        <section id='skills' className={styles.skills}>
            <div className={styles.title}>
                <h1>Compétences</h1>
                <span className={styles.separator}></span>
            </div>

            <div className={styles.content}>
                <div className={styles.tabsLink}>
                    <h2 onClick={() => {setSelected("dev")}} className={selected === "dev" ? styles.selected : undefined}>Développement</h2>
                    <h2 onClick={() => {setSelected("design")}} className={selected === "design" ? styles.selected : undefined}>Design</h2>
                </div>
            </div>

            <TabsContent selected={selected}/>
        </section>
    )
}

export default Skills