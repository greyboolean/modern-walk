function toTitleCase(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function Category(category) {
	return (
		<div className={`category ${category}`}>
			<span>{toTitleCase(category)}&apos;s Clothing</span>
		</div>
	);
}

export default Category;
