import axios from "axios";

export const getAllProducts = async () => {
	try {
		const response = await axios.get(`https://fakestoreapi.com/products`);
		if (response.status === 200) {
			return response.data.filter(
				(product) =>
					product.category === "men's clothing" ||
					product.category === "women's clothing"
			);
		}
	} catch (error) {
		return false;
	}
};

export const getProductsByCategory = async (category) => {
	try {
		const response = await axios.get(
			`https://fakestoreapi.com/products/category/${
				category === "men" ? "men's%20clothing" : "women's%20clothing"
			}`
		);
		if (response.status === 200) {
			return response.data;
		}
	} catch (error) {
		return false;
	}
};
