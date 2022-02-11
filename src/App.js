import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Portfolio from "./Components/HomePage/Website1/Portfolio";
import Bussiness from "./Components/Bussiness/Bussiness";
import Uvisual from "./Components/uvisual/Uvisual";
import MainMSSM from "./Components/MSSM/MainMSSM";
import AvanaHome from "./Components/MSSM/AvanaHome";
import ShowMore from "./Components/MSSM/ShowMore";
import Berlangganan from "./Components/Bussiness/Berlangganan";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/projects" element={<Portfolio />} />

				<Route path="/Porto" element={<Bussiness />} />
				<Route path="Porto/Subs" element={<Berlangganan />} />

				<Route path="/Uvisual" element={<Uvisual />} />

				<Route path="/Avana" element={<MainMSSM />} />
				<Route path="/Avana/HomePage" element={<AvanaHome />} />
				<Route path="/Avana/Portfolio" element={<ShowMore />} />
			</Routes>
		</Router>
	);
}

export default App;
