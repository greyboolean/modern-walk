import styles from "./Section.module.css";

function Section({ heading, children }) {
	return (
		<div className={styles.section}>
			<h1 className={styles.heading}>{heading}</h1>
			{children}
		</div>
	);
}

export default Section;
