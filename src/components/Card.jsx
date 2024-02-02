function Card({ product: { title, image, price, description }, category }) {
	return (
		<div className={`card ${category}`}>
			<h1>{title}</h1>
			<img src={image} alt={title} />
			<div className="content">
				<span>Rs {price}</span>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default Card;
