import Card from "../Card/Card";
import styles from "./ProductGrid.module.css";

function ProductGrid({ products }) {
	return (
		<div className={styles.grid}>
			{products.map((product) => (
				<Card key={product.id} product={product} />
			))}
		</div>
	);
}

export default ProductGrid;
