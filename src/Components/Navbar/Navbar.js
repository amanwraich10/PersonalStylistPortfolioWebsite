import "../Navbar/Navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
	const toggleMenu = function () {
		let wrapperMenu = document.querySelector(".wrapper-menu");
		let x = document.querySelector(".navbar__list");

		if (x.style.display === "block") {
			x.style.display = "none";
		} else {
			x.style.display = "block";
		}
		wrapperMenu.classList.toggle("open");
	};

	return (
		<>
			<NavLink to={"/"} className="navbar__link">
				<p className="navbar__heading">SHRADDHA CHAUHAN</p>
				<p className="navbar__sub-heading">FASHION STYLIST</p>
			</NavLink>

			<div className="wrapper-menu" onClick={toggleMenu}>
				<div className="line-menu half start"></div>
				<div className="line-menu"></div>
				<div className="line-menu half end"></div>
			</div>

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
			</ul>
		</>
	);
}

export default Navbar;
