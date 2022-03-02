import React, { useEffect } from "react";
import { Container } from "../HomePage/HomePageStyle";
import Navbar from "../Navbar";
import Content from "./Content";
import { MainWrapper } from "./InstagramStyle";
import NavbarCompt from "./Navbar";

function Instagram() {
	useEffect(() => {
		alert("this pages is in development");
	}, []);

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
