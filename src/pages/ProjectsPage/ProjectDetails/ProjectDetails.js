import styles from './ProjectDetails.module.scss';
import { useParams } from "react-router-dom";
import {data} from "../../../data/projectLists";
import ProjetTags from './ProjectTags';
import { useNavigate } from 'react-router-dom';

function ProjectDetails() {
    const {title} = useParams();

    const navigate = useNavigate();

    const selectedProject = data.filter(elem => elem.title === title)[0];

    function formatDate(date) {
        const day = ("0" + date.getDate()).slice(-2);
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();

        return `${day} ${month} ${year}`;
    }

    return (
        <>
            <button className={styles.backspaceBtn} onClick={() => navigate(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                    <path d="M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z"/>
                </svg>
            </button>
            <h1 className={styles.projectTitle}>{selectedProject.title}</h1>
            <div className={styles.projectInfo}>
                <img className={styles.projectImage} src={selectedProject.image} alt="projectImage"/>
                <div className={styles.projectInfoDetails}>
                    <p>Date : <span className={styles.projectDate}>{formatDate(selectedProject.date)}</span></p>
                    <p className={styles.projectMakeWith}>Langages : {selectedProject.languagesUsed.map((p) => (<ProjetTags makeWith={p}/>))}</p>
                    {selectedProject.toolsUsed !== null ? <p className={styles.projectMakeWith}>Outils : {selectedProject.toolsUsed?.map((p) => (<ProjetTags makeWith={p}/>))}</p> : ""}
                </div>
            </div>
            {/* <div className={styles.projectDescription}>
                <h2>Description</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat pretium nibh ipsum consequat nisl vel. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Amet venenatis urna cursus eget nunc scelerisque viverra. A diam maecenas sed enim ut. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Nullam eget felis eget nunc lobortis mattis aliquam. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Leo a diam sollicitudin tempor id eu nisl nunc mi. Tempor commodo ullamcorper a lacus. Imperdiet sed euismod nisi porta lorem mollis.
                    <br/><br/>
                    Cras semper auctor neque vitae tempus quam. Eget lorem dolor sed viverra ipsum nunc aliquet. Nisl nisi scelerisque eu ultrices vitae auctor. Aliquet risus feugiat in ante metus. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Eget nullam non nisi est sit amet facilisis. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Tempus imperdiet nulla malesuada pellentesque elit eget gravida. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Dignissim suspendisse in est ante. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Lectus arcu bibendum at varius. Potenti nullam ac tortor vitae purus faucibus ornare.
                </p>
            </div> */}
        </>
    );
}

export default ProjectDetails