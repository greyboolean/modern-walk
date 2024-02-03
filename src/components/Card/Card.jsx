import styles from "./Card.module.css";

function Card({ product }) {
	const { title, image, price, description, category } = product;

	return (
		<div
			className={`${styles.card} ${
				category === "men's clothing" ? styles.men : styles.women
			}`}
		>
			<h2 className={`${styles.title} ${styles.titleShorten}`}>
				{title}
			</h2>
			<div className={styles.imageContainer}>
				<img className={styles.image} src={image} alt={title} />
			</div>
			<div className={styles.content}>
				<div className={styles.price}><span>Rs&nbsp;</span><span>{price}</span></div>
				<p
					className={`${styles.description} ${styles.descriptionShorten}`}
				>
					{description.replace(/(,|\/)(\S)/g, '$1 $2')}
				</p>
			</div>
		</div>
	);
}

export default Card;
