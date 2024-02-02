import { Link } from "react-router-dom";
import { toTitleCase } from "../../utils/utils";

function CategoryCard({ category }) {
	return (
		<div className={`category ${category}`}>
			<Link to={`/${category}s-clothing`}>
				<span>{toTitleCase(category)}&apos;s Clothing</span>
			</Link>
		</div>
	);
}

export default CategoryCard;
