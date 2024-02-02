import axios from "axios";

export const getProducts = async (category) => {
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
