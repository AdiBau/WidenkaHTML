import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { Header } from "./views/Header/Header";
import { Home } from "./views/Home/Home";
import { Kontakt } from "./views/Kontakt/Kontakt";
import { Stopka } from "./views/Stopka/Stopka";
library.add(fas);
export const App = () => {
	return (
		<>
			{/* <img src={img} alt="" className={"imgBac"} /> */}
			<BrowserRouter basename="/">
				<Header />
				<Home />
				<Routes>
					<Route path="/galeria" element={<Kontakt />} />
				</Routes>
			</BrowserRouter>
			{/* <Balustrady /> */}
			<Kontakt />
			<Stopka />
		</>
	);
};

