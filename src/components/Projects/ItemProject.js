import { useNavigate } from 'react-router-dom';
import styles from './ItemProject.module.scss';

function ItemProject({title, image}) {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/projects/${title}`)} className={styles.itemProject}>
            <div className={styles.imageProject}>
                <img src={image} alt={title} loading="lazy" />
            </div>
            <span>{title}</span>
        </div>
    )
}

export default ItemProject