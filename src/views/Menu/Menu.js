import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export const Menu = () => {
	const menuHandler = (e, btn) => {
		const kontakt = document.querySelector(".Kontakt");
		document.querySelector(".active").classList.remove("active");
		e.target?.classList.add("active");
		btn === "Home" && window.scrollTo({ top: 0 });
		btn === "Kontakt" && kontakt.scrollIntoView({ behavior: "auto" });
	};

	return (
		<>
			<div className="Menu">
				<h2 onClick={(e) => menuHandler(e, "Home")} className="menu active">
					O nas
				</h2>
				<h2 onClick={(e) => menuHandler(e, "Balustrady")} className="menu">
					Balustrady
				</h2>
				<h2 onClick={(e) => menuHandler(e, "Ogrodzenia")} className="menu">
					Ogrodzenia
				</h2>
				{/* <Link to={"/kontakt"}>Kontakt</Link> */}
				<h2 onClick={(e) => menuHandler(e, "Kontakt")} className="menu">
					kontakt
				</h2>
				{/* <h2 onClick={(e) => menuHandler(e, "Opinie")} className="menu">
					opinie
				</h2> */}
				<h2 onClick={(e) => menuHandler(e, "Galeria")} className="menu">
					Galeria
				</h2>
			</div>
		</>
	);
};
