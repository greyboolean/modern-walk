import { useState, useEffect } from "react";
import { getAllProducts } from "../api/products";
import ProductGrid from "../components/ProductGrid";
import Category from "../components/CategoryCard";

function Home() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const products = await getAllProducts();
			if (products) {
				setProducts(products);
			}
		};

		fetchProducts();
	}, []);

	return (
		<div>
			<h1>Flash Sales</h1>
			<ProductGrid products={products.slice(0, 4)} />
			<h1>Categories</h1>
			<div>
				<Category category="men" />
				<Category category="women" />
			</div>
		</div>
	);
}

export default Home;
