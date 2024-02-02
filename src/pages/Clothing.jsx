import { useEffect, useState } from "react";
import { toTitleCase } from "../utils/utils";
import { getProductsByCategory } from "../api/products";
import ProductGrid from "../components/ProductGrid";

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
			<h1>{toTitleCase(category)}&apos;s Clothing</h1>
			<ProductGrid products={products} />
		</div>
	);
}

export default Clothing;
