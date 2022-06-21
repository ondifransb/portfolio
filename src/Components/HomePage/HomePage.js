import React from "react";
import {
	Container,
	MainHero,
	Wellcoming,
	HiThere,
	Thankyou,
	Hope,
	SecondSection,
	BioWrapper,
	Name,
	Picture,
	Photo,
} from "./HomePageStyle";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import PhotoPict from "./bnwProfilePicture.png";
import { useEffect, useState } from "react";

function HomePage() {
	const Navigate = useNavigate();

	const [CustName, setCustName] = useState("");

	useEffect(() => {
		alert("for the full experience, please use desktop");
	}, []);

	useEffect(() => {
		setCustName(prompt("your name, please"));
	}, []);

	return (
		<Container>
			<Navbar />
			<MainHero>
				<Wellcoming>
					<HiThere>hi, {CustName}</HiThere>
					<HiThere></HiThere>
					<Thankyou>
						thankyou for coming <br /> to my simplified-portfolio website
					</Thankyou>
					<Hope>hope you have a good time here.</Hope>
				</Wellcoming>
			</MainHero>
			<SecondSection>
				<BioWrapper>
					<Name>
						<h1>ondi frans </h1>
						<h1>butarbutar</h1>
					</Name>
					<Picture>
						<Photo Picture={PhotoPict}></Photo>
					</Picture>
					<p>
						i always want to explore. getting into app development has changed
						me a lot, and since then, i try to push myself and especially my
						work to the new whole level with each project. quality first, for
						each project i work on, i pay particular attention to the
						interaction, animations and (obviously) performances. THIS IS JUST
						THE BEGINNING, and i really can’t wait to push my limit even further
						by working with you on our next project. i usually want my work use
						less third parties library, it allows me to feel a complete freedom
						and also i want to test myself, my competence, my creativity, and my
						imagination.
					</p>
				</BioWrapper>
			</SecondSection>
		</Container>
	);
}
export default HomePage;
