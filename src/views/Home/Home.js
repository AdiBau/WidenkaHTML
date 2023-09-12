import React, { useEffect, useState } from "react";
import "./Home.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import imgLaurat from "../../assets/laurat.jpg";
import imgOrly from "../../assets/orły.png";
import imgOpinie1 from "../../assets/opinie1.jpg";
import imgOpinie2 from "../../assets/opinie2.jpg";
import imgOpinie3 from "../../assets/opinie3.jpg";

export const Home = () => {
	const [images, setImages] = useState([img1, img2, img3, img4]);
	const [viewImage, setViewImage] = useState(img1);

	useEffect(() => {
		let start = 0;
		const interval = setInterval(() => {
			setViewImage(images[start]);
			start !== images.length - 1 ? start++ : (start = 0);
		}, 2500);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div className="Home">
				{/* <div className="LogoWidenka"> */}
				{/* <img className="imgLogo" src={img0} alt="" /> */}
				{/* </div> */}
				<div className="HomeImgHolder">
					<img className="img" src={viewImage} alt="" />
				</div>
				<div className="Point">
					<input type="radio" checked={viewImage === img1} onClick={() => setViewImage(img1)} />
					<input type="radio" checked={viewImage === img2} onClick={() => setViewImage(img2)} />
					<input type="radio" checked={viewImage === img3} onClick={() => setViewImage(img3)} />
					<input type="radio" checked={viewImage === img4} onClick={() => setViewImage(img4)} />
				</div>
				<div className="HomeText">
					<strong className="strong">Firma „NOWOCZESNE OGRODZENIA WIDENKA” </strong>
					<br />
					to rodzinna firma na rynku od 2017roku. Specjalizujemy się w produkcji oraz montażu ogrodzeń oraz balustrad stalowych, cynkowanych oraz aluminiowych malowanych proszkowo.
					Wykonujemy ogrodzenia oraz balustrady w stu procentach wg. życzenia zamawiającego, od wybrania rodzaju materiału po wykończenie jak i rodzaj montażu.
				</div>
				<div className="Nagrody">
					<div className="laurat">
						<img className={"imgLaurat"} src={imgLaurat} alt="Nagroda Laurata" />
					</div>
					<div className="Orly">
						<img className={"imgOrly"} src={imgOrly} alt="Nagroda Orły" />
					</div>
				</div>
				<div className="OpinieHolder">
					<h3>Pare Opini od klientów</h3>
					<img className={"Opinie"} src={imgOpinie1} alt="Opinie od klientów" />
					<img className={"Opinie"} src={imgOpinie2} alt="Opinie od klientów" />
					<img className={"Opinie"} src={imgOpinie3} alt="Opinie od klientów" />
					<h5>
						I wiele wiele więcej pozytywnych komentarzy………….. które możecie Państwo znaleźć na naszym FB
						<a href="https://www.facebook.com/profile.php?id=100063797430124&sk=reviews"> facebook.com/profile</a> gdzie serdecznie zapraszamy
					</h5>
				</div>
			</div>
		</>
	);
};
