import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Portfolio from "./Components/HomePage/Website1/Portfolio";
import Bussiness from "./Components/Bussiness/Bussiness";
import Uvisual from "./Components/uvisual/Uvisual";
import MainMSSM from "./Components/MSSM/MainMSSM";
import AvanaHome from "./Components/MSSM/AvanaHome";
import ShowMore from "./Components/MSSM/ShowMore";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/portfolio" element={<Portfolio />} />

				<Route path="/bussiness" element={<Bussiness />} />

				<Route path="/Uvisual" element={<Uvisual />} />

				<Route path="/Architect" element={<MainMSSM />} />
				<Route path="/Architect/HomePage" element={<AvanaHome />} />
				<Route path="/Architect/Portfolio" element={<ShowMore />} />
			</Routes>
		</Router>
	);
}

export default App;
