import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
	return (
		<header className={styles.header}>
			<Link to="/">
				<div className={styles.brand}>Modern Walk</div>
			</Link>
		</header>
	);
}

export default Header;
