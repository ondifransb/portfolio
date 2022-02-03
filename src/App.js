import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Portfolio from "./Components/HomePage/Website1/Portfolio";
import Bussiness from "./Components/Bussiness/Bussiness";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/bussiness" element={<Bussiness />} />
			</Routes>
		</Router>
	);
}

export default App;
