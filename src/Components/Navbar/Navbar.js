import "../Navbar/Navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<>
			<NavLink to={"/"} className="navbar__link">
				<p className="navbar__heading">SHRADDHA CHAUHAN</p>
				<p className="navbar__sub-heading">FASHION STYLIST</p>
			</NavLink>

			<ul className="navbar__list">
				<NavLink to={"/"} className="navbar__list-item navbar__link">
					<li>About</li>
				</NavLink>
				<NavLink to={"/men"} className="navbar__list-item navbar__link">
					<li>Men's Catalogue</li>
				</NavLink>
				<NavLink
					to={"/women"}
					className="navbar__list-item navbar__link"
				>
					<li>Women's Catalogue</li>
				</NavLink>
				<NavLink
					to={"/contact"}
					className="navbar__list-item navbar__link"
				>
					<li>Contact</li>
				</NavLink>
				<NavLink
					to={"/other-interests"}
					className="navbar__list-item navbar__link"
				>
					<li>Other Interests</li>
				</NavLink>
			</ul>
		</>
	);
}

export default Navbar;
