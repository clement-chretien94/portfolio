import styles from './ProjectsMore.module.scss';
import {data} from "../../../data/projectLists";
import ItemProject from '../../../components/Projects/ItemProject';
import { useNavigate } from 'react-router-dom';

function ProjectsMore() {
  const navigate = useNavigate();

  const projectList = data.slice().sort((a, b) => b.date - a.date);

  return (
    <>
      <button className={styles.backspaceBtn} onClick={() => navigate("/")}>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z"/>
        </svg>
      </button>
      <div className={styles.content}>
        {projectList.map((p) => (<ItemProject key={p._id} title={p.title} image={p.image}/>))}
      </div>
    </>
  );
}

export default ProjectsMore;