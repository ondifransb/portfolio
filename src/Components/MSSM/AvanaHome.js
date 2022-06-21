import React from "react";
import { Container } from "../HomePage/HomePageStyle";
import Navbar from "../Navbar";
import { MainWrapper } from "./MSSMStyle";
import {
	NavbarWrapper,
	NavLogo,
	NavWrapper,
	HeroWrapper,
	Desc,
	Projects,
} from "./AvanaHomeStyle";
import Logo from "./LogoNav.png";
import LogoOnly from "./LogoOnly.png";
import { useNavigate } from "react-router-dom";

function AvanaHome() {
	const Navigate = useNavigate();
	return (
		<Container>
			<Navbar />
			<MainWrapper>
				<NavWrapper>
					<NavLogo>
						<img src={Logo} onClick={() => Navigate("/Avana")} />
					</NavLogo>
				</NavWrapper>
				<HeroWrapper>
					<NavLogo>
						<img src={LogoOnly} />
					</NavLogo>
					<Desc>
						<h1>
							Based in Bandung, Indonesia. <br /> An architecture - Interior
							Design and Build Studio
						</h1>
						<h3>
							Studio AVANA was established by three architects with same vision.
							<span>
								Our vision is to achieve a good quality and the harmony between
								the building, the user and the surrounding. We combined art,
								research, and technology to create high quality space for the
								user.
							</span>
						</h3>
						<p onClick={() => Navigate("/Avana/Portfolio")}>show more</p>
					</Desc>
				</HeroWrapper>
			</MainWrapper>
		</Container>
	);
}

export default AvanaHome;
