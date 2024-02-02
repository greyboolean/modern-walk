function toTitleCase(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function Category(type) {
	return (
		<div className={`category ${type}`}>
			<span>{toTitleCase(type)}&apos;s Clothing</span>
		</div>
	);
}

export default Category;
