import styles from './Projects.module.scss';
import {data} from "../../data/projectLists";
import ItemProject from './ItemProject';
import { useNavigate } from 'react-router-dom';

function Projects() {
    const navigate = useNavigate();

    const projectList = data.slice().sort((a, b) => b.date - a.date);

    return (
        <section id='projects' className={styles.projects}>
            <div className={styles.title}>
                <h1>Projets</h1>
                <span className={styles.separator}></span>
            </div>

            <div className={styles.content}>
                {projectList.slice(0,6).map((p) => (<ItemProject key={p._id} title={p.title} image={p.image}/>))}
                <div onClick={() => navigate("/projects")} className={styles.seeMore}>Voir plus</div>
            </div>
        </section>
    )
}

export default Projects