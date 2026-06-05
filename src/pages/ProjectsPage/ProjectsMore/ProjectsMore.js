import styles from "./ProjectsMore.module.scss";
import { data } from "../../../data/projectLists";
import ItemProject from "../../../components/Projects/ItemProject";
import { useNavigate } from "react-router-dom";

function ProjectsMore() {
  const navigate = useNavigate();

  const projectList = data.slice().sort((a, b) => b.date - a.date);
  const projectCount = projectList.length;
  const latestProject = projectList[0];
  const activeStackCount = new Set(
    projectList.flatMap((project) => project.languagesUsed),
  ).size;

  function formatShortDate(date) {
    return date.toLocaleDateString("fr-FR", {
      month: "short",
      year: "numeric",
    });
  }

  return (
    <section className={styles.projectsMore}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <button className={styles.backspaceBtn} onClick={() => navigate("/")}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z" />
            </svg>
          </button>
          <span className={styles.kicker}>Portfolio · galerie principale</span>
        </div>

        <div className={styles.headerBody}>
          <div className={styles.copy}>
            <h1>Projets selectionnes pour raconter un parcours clair.</h1>
            <p>
              Des cartes denses, une lecture rapide et un focus sur les details
              qui comptent: contexte, stack et impact.
            </p>
          </div>

          <div className={styles.metaGrid}>
            <article>
              <span>{projectCount}</span>
              <p>projets affiches</p>
            </article>
            <article>
              <span>{activeStackCount}</span>
              <p>technos actives</p>
            </article>
            <article>
              <span>
                {latestProject ? formatShortDate(latestProject.date) : "-"}
              </span>
              <p>dernier ajout</p>
            </article>
          </div>
        </div>
      </header>

      <div className={styles.grid}>
        {projectList.map((p) => (
          <ItemProject key={p._id} title={p.title} image={p.image} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsMore;
