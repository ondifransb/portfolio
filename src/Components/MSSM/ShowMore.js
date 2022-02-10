import React, { useState } from "react";
import { Container } from "../HomePage/HomePageStyle";
import {
	NavbarWrapper,
	NavLogo,
	NavWrapper,
	Desc,
	Projects,
} from "./AvanaHomeStyle";
import Logo from "./LogoNav.png";
import Navbar from "../Navbar";
import {
	Content,
	CompletedWrapper,
	ProjectWrapper,
	Project,
	OnGoinWrapper,
	OnGoingTrigger1,
	OnGoingTrigger2,
} from "./ShowMoreStyle";
import Rumah1 from "./Rumah1.webp";
import Rumah2 from "./Rumah2.webp";
import Rumah3 from "./Rumah3.webp";
import Rumah4 from "./Rumah4.webp";
import Rumah5 from "./Rumah5.webp";
import Rumah6 from "./Rumah6.webp";
import { useNavigate } from "react-router-dom";

function ShowMore() {
	//navigate functon
	const Navigate = useNavigate();

	//split span function
	const CompletedSplitSpan = "Completed Projects".split("");
	const OnGoingSplitSpan = "OnGoing Projects".split("");

	//OnGoing Function
	const [active, SetActive] = useState("");

	return (
		<Container>
			<Navbar />
			<Content>
				<NavWrapper>
					<NavLogo>
						<img src={Logo} onClick={() => Navigate("/Architect/HomePage")} />
					</NavLogo>
				</NavWrapper>
				<CompletedWrapper>
					<h1>
						{CompletedSplitSpan.map((item, index) => (
							<span key={index} I={index}>
								{item}
							</span>
						))}
					</h1>
					<ProjectWrapper>
						<Project Picture={Rumah1}></Project>
						<Project Picture={Rumah2}></Project>
						<Project Picture={Rumah3}></Project>
						<Project Picture={Rumah4}></Project>
						<Project Picture={Rumah5}></Project>
						<Project Picture={Rumah6}></Project>
					</ProjectWrapper>
				</CompletedWrapper>
				<OnGoinWrapper animate={active}>
					<h1>
						{OnGoingSplitSpan.map((item, index) => (
							<span key={index} I={index}>
								{item}
							</span>
						))}
					</h1>

					<OnGoingTrigger1 onClick={() => SetActive(true)} animate={active} />
					<OnGoingTrigger2 onClick={() => SetActive(false)} animate={active} />

					<ProjectWrapper>
						<Project Picture={Rumah1}></Project>
						<Project Picture={Rumah2}></Project>
						<Project Picture={Rumah3}></Project>
						<Project Picture={Rumah4}></Project>
						<Project Picture={Rumah5}></Project>
						<Project Picture={Rumah6}></Project>
					</ProjectWrapper>
				</OnGoinWrapper>
			</Content>
		</Container>
	);
}

export default ShowMore;
