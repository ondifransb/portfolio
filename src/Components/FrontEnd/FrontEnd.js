import React from "react";
import { Container } from "../HomePage/HomePageStyle";
import Navbar from "../Navbar";
import Content from "./Content";
import { MainWrapper } from "./FrontEndStyle";
import UvisLogo from "./Logo.png";
import NavbarCompt from "./Navbar";

function FrontEnd() {
	return (
		<Container>
			<Navbar />
			<MainWrapper>
				<NavbarCompt />
				<Content />
			</MainWrapper>
		</Container>
	);
}

export default FrontEnd;
