import styles from "./ProjectDetails.module.scss";
import { useParams } from "react-router-dom";
import { data } from "../../../data/projectLists";
import ProjetTags from "./ProjectTags";
import { useNavigate } from "react-router-dom";
import githubIcon from "../../../assets/images/github.svg";

function ProjectDetails() {
  const { title } = useParams();

  const navigate = useNavigate();

  const selectedProject = data.filter((elem) => elem.title === title)[0];

  function formatDate(date) {
    const day = ("0" + date.getDate()).slice(-2);
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  }

  return (
    <div className={styles.projectDetailsPage}>
      <button className={styles.backspaceBtn} onClick={() => navigate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z" />
        </svg>
      </button>
      <h1 className={styles.projectTitle}>{selectedProject.title}</h1>
      <div className={styles.projectInfo}>
        <img
          className={styles.projectImage}
          src={selectedProject.image}
          alt="projectImage"
        />
        <div className={styles.projectInfoDetails}>
          <p>
            Date :{" "}
            <span className={styles.projectDate}>
              {formatDate(selectedProject.date)}
            </span>
          </p>
          <p className={styles.projectMakeWith}>
            Langages :{" "}
            {selectedProject.languagesUsed.map((p) => (
              <ProjetTags makeWith={p} />
            ))}
          </p>
          {selectedProject.toolsUsed !== null ? (
            <p className={styles.projectMakeWith}>
              Outils :{" "}
              {selectedProject.toolsUsed?.map((p) => (
                <ProjetTags makeWith={p} />
              ))}
            </p>
          ) : (
            ""
          )}
          <a
            className={styles.githubLink}
            href={selectedProject.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="" width="20" height="20" />
            Voir le projet sur GitHub
          </a>
        </div>
      </div>
      {selectedProject.description ? (
        <div className={styles.projectDescription}>
          <h2>Description</h2>
          <p>{selectedProject.description}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ProjectDetails;
