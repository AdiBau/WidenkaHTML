import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./stopka.css";
export const Stopka = () => {
	return (
		<div className="Stopka">
			<div className="StopkaKontaktAdress">
				<p className="KontaktIcon">
					<FontAwesomeIcon icon="home" size="lg" />
				</p>
				<p>
					<strong> Lubomia </strong>
					ul. Dębowa 21d
				</p>
			</div>
			<div className="StopkaKontaktTel">
				<p className="KontaktIcon">
					<FontAwesomeIcon icon="phone" size="lg" />
				</p>
				<p>+48 507253810</p>
			</div>
			<div className="StopkaKontaktEmail">
				<strong>Email </strong>
				<a href="mailto:nowoczesneogrodzenia@onet.pl">nowoczesneogrodzenia@onet.pl</a>
			</div>
		</div>
	);
};
