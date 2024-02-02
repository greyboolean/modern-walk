import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<Link to="/">
				<div className="brand">Modern Walk</div>
			</Link>
		</header>
	);
}

export default Header;
