import React from "react";
import "./Header.css";
import { Menu } from "../Menu/Menu";

export const Header = () => {
	return (
		<>
			<div className="Header">
				<div className="HeaderText">
					<h1>Nowoczesne ogrodzenia Widenka </h1> <h1>tel. +48 507253810</h1>
				</div>
				<Menu />
			</div>
		</>
	);
};
