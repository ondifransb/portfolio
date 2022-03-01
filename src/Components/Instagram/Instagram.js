import React from "react";
import { Container } from "../HomePage/HomePageStyle";
import Navbar from "../Navbar";
import Content from "./Content";
import { MainWrapper } from "./InstagramStyle";
import NavbarCompt from "./Navbar";

function Instagram() {
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

export default Instagram;
