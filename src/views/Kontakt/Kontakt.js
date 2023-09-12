import React, { useEffect, useRef } from "react";
import "./Kontakt.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Kontakt = () => {
	const mapa = useRef(null);
	useEffect(() => {
		document.addEventListener("scroll", (e) => {
			console.log("scroll", e);
		});
	}, []);
	return (
		<>
			<div className="KontaktHolder">
				<div className="Kontakt">
					<div className="KontaktAdress">
						<p className="KontaktIcon">
							<FontAwesomeIcon icon="home" size="lg" />
						</p>
						<p>
							<strong> Lubomia </strong>
							ul. Dębowa 21d
						</p>
					</div>
					<div className="KontaktTel">
						<p className="KontaktIcon">
							<FontAwesomeIcon icon="phone" size="lg" />
						</p>
						<p>+48 507253810</p>
					</div>
					<div className="KontaktEmail">
						<div>
							<p>
								<strong>Email </strong>
							</p>

							<a href="mailto:nowoczesneogrodzenia@onet.pl">nowoczesneogrodzenia@onet.pl</a>
						</div>
					</div>
				</div>
				<div className="Mapa" ref={mapa}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d82004.79799258847!2d18.295727!3d50.036655!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47115ca2a9de6b7d%3A0xffd6cb2485d7c96e!2sD%C4%99bowa%2021d%2C%2044-360%20Lubomia%2C%20Polska!5e0!3m2!1spl!2sus!4v1694373904333!5m2!1spl!2sus"
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</>
	);
};
