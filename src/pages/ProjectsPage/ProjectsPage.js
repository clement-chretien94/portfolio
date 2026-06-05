import { Outlet } from "react-router-dom";
import styles from "./ProjectsPage.module.scss";

function ProjectsPage() {
  return (
    <main className={styles.projectsPage}>
      <Outlet />
    </main>
  );
}

export default ProjectsPage;
