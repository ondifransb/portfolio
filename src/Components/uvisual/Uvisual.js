import React from "react";
import { Container } from "../HomePage/HomePageStyle";
import Navbar from "../Navbar";
import {
	MainWrapper,
	Nav,
	Navigation,
	NavWrapper,
	LogoContent,
	Glass,
	ProjectWrapper,
	Projects,
} from "./UvisualStyle";
import UvisLogo from "./Logo.png";

function Uvisual() {
	return (
		<Container>
			<Navbar />
			<MainWrapper>
				<Navigation>
					<LogoContent Picture={UvisLogo}>
						<a href="https://www.instagram.com/uvisual/?hl=id">asdasdada</a>
					</LogoContent>
				</Navigation>

				<Glass>
					<h1>
						UVISUAL <br />A GROUP OF AN ARTIST, DESIGNER, CULTURAL ACTIVISTS,
						PROGRAMMER, ENGINEER, AND MUSICIAN WORKING TOGETHER TO MAKE A <br />
						<span>NEW VISUAL EXPERIENCE.</span>
					</h1>
				</Glass>

				<Glass>
					<h1>
						WHICH PROJECT <span>WE</span> ARE GOING TO DO?
					</h1>
					<ProjectWrapper>
						<Projects>
							<h1>VIDEO MAPPING</h1>
							<p>
								Projection technology used to turn objects / facade. This
								technique can add extra dimensions, optical illusions, and
								notions of movement onto previously static objects.
							</p>
						</Projects>
						<Projects>
							{" "}
							<h1>VISUAL JOCKEY</h1>
							<p>
								A realtime visual performance with VJing techniques, methods and
								effects combined with, or triggered by, audio to create an
								audio-visual narrative.
							</p>
						</Projects>
						<Projects>
							{" "}
							<h1>MULTIMEDIA</h1>
							<p>
								Turn your creative idea and vision into video and animation.
							</p>
						</Projects>
						<Projects>
							{" "}
							<h1>EXPERIMENT PROJECT</h1>
							<p>
								Research and develop product combinned with, interactive sensor,
								visual and audio.
							</p>
						</Projects>
						<Projects>
							{" "}
							<h1>AUGMENTED REALITY</h1>
							<p>
								Designing and develop an interactive application in augmented
								reality + mobile technology solutions
							</p>
						</Projects>
						<Projects>
							{" "}
							<h1>DESIGN GRAPHICS</h1>
							<p>
								Making Your Business Look Good. Graphic Design, Visual Identity
								and Branding Solutions
							</p>
						</Projects>
					</ProjectWrapper>
				</Glass>
			</MainWrapper>
		</Container>
	);
}

export default Uvisual;
