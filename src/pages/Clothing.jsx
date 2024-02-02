import { useEffect, useState } from "react";
import { toTitleCase } from "../utils/utils";
import { getProductsByCategory } from "../api/products";
import Section from "../components/Section/Section";
import ProductGrid from "../components/ProductGrid/ProductGrid";

function Clothing({ category }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const products = await getProductsByCategory(category);
			if (products) {
				setProducts(products);
			}
		};

		fetchProducts();
	}, [category]);

	return (
		<div>
			<Section heading={`${toTitleCase(category)}'s Clothing`}>
				<ProductGrid products={products} />
			</Section>
		</div>
	);
}

export default Clothing;
