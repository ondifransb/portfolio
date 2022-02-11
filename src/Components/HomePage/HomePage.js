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
import Stitch from "./Stitch.jpeg";
import { useEffect, useState } from "react";

function HomePage() {
	const Navigate = useNavigate();

	const [CustName, setCustName] = useState("");

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
						<Photo Picture={Stitch}></Photo>
					</Picture>
					<p>
						i always want to create new and unique things. getting into app
						development has changed me a lot, and since then, i try to push my
						work to the new whole level with each project. i always put quality
						first. for each project i work on, i pay particular attention to the
						interaction, animations and (obviously) performances. this is just
						the beginning, and i really can’t wait to push my limit even further
						by working with you on our next project. i usually want my work use
						less third parties library, it allows me to feel a complete freedom
						and also i want to test my competence, creativity, and imagination.
					</p>
				</BioWrapper>
			</SecondSection>
		</Container>
	);
}
export default HomePage;
