import Card from "../Card/Card";

function ProductGrid({ products }) {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(4, 1fr)",
				gap: "1rem",
			}}
		>
			{products.map((product) => (
				<Card key={product.id} product={product} />
			))}
		</div>
	);
}

export default ProductGrid;
