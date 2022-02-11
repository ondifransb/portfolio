import React from "react";
import { Container } from "../HomePage/HomePageStyle";
import Navbar from "../Navbar";
import { AvanaLogo, MainWrapper } from "./MSSMStyle";
import Video from "./file.mp4";
import Logo from "./Logo.png";
import { useNavigate } from "react-router-dom";

function MainMSSM() {
	const Navigate = useNavigate();

	return (
		<Container>
			<Navbar />
			<MainWrapper>
				<AvanaLogo
					Picture={Logo}
					onClick={() => Navigate("/Avana/HomePage")}
				></AvanaLogo>
				<video autoPlay muted loop>
					<source src={Video} type="video/mp4" />
				</video>
			</MainWrapper>
		</Container>
	);
}

export default MainMSSM;
