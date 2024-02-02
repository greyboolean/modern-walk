import { Link } from "react-router-dom";
import { toTitleCase } from "../../utils/utils";
import styles from "./CategoryCard.module.css";

function CategoryCard({ category }) {
	return (
		<Link to={`/${category}s-clothing`}>
			<div className={`${styles.category} ${styles[category]}`}>
				<span className={styles.title}>
					{toTitleCase(category)}&apos;s Clothing
				</span>
			</div>
		</Link>
	);
}

export default CategoryCard;
