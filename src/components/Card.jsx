function Card({ item: { title, image, price, description }, type }) {
	return (
		<div className={`card ${type}`}>
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
