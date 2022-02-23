import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
	OnGoingTrigger3,
	OnGoingTrigger4,
} from "./ShowMoreStyle";
import Rumah1 from "./Rumah1.webp";
import Rumah2 from "./Rumah2.webp";
import Rumah3 from "./Rumah3.webp";
import Rumah4 from "./Rumah4.webp";
import Rumah5 from "./Rumah5.webp";
import Rumah6 from "./Rumah6.webp";

import OnGoing1 from "./1.webp";
import OnGoing2 from "./2.webp";
import OnGoing3 from "./3.webp";
import OnGoing4 from "./4.webp";
import OnGoing5 from "./5.webp";
import OnGoing6 from "./6.webp";
import OnGoing7 from "./7.webp";
import OnGoing8 from "./8.webp";
import OnGoing9 from "./9.webp";
import OnGoing10 from "./10.webp";
import OnGoing11 from "./11.webp";
import OnGoing12 from "./12.jpg";

function ShowMore() {
	//navigate functon
	const Navigate = useNavigate();

	//split span function
	const CompletedSplitSpan = "Completed Projects".split("");
	const OnGoingSplitSpan = "OnGoing Projects".split("");
	const OnGoingSplitSpan1 = "OnGoing Projects".split("");

	//OnGoing Function
	const [active, SetActive] = useState("");
	const [active2, SetActive2] = useState(false);

	//setActive Function
	const MakeItActive = () => {
		SetActive(true);
		SetActive2(false);
	};

	return (
		<Container>
			<Navbar />
			<Content>
				<NavWrapper>
					<NavLogo>
						<img src={Logo} onClick={() => Navigate("/Avana/HomePage")} />
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

					<OnGoingTrigger1 onClick={() => MakeItActive()} animate={active} />
					<OnGoingTrigger2 onClick={() => SetActive(false)} animate={active} />
					<OnGoingTrigger3 onClick={() => SetActive2(true)} animate={active}>
						<p>NEXT</p>
					</OnGoingTrigger3>
					<OnGoingTrigger4 onClick={() => SetActive2(false)} animate={active}>
						<p>PREV</p>
					</OnGoingTrigger4>

					<ProjectWrapper>
						<Project
							Picture={OnGoing1}
							Picture2={OnGoing7}
							animate2={active2}
						></Project>
						<Project
							Picture={OnGoing2}
							Picture2={OnGoing8}
							animate2={active2}
						></Project>
						<Project
							Picture={OnGoing3}
							Picture2={OnGoing9}
							animate2={active2}
						></Project>
						<Project
							Picture={OnGoing4}
							Picture2={OnGoing10}
							animate2={active2}
						></Project>
						<Project
							Picture={OnGoing5}
							Picture2={OnGoing11}
							animate2={active2}
						></Project>
						<Project
							Picture={OnGoing6}
							Picture2={OnGoing12}
							animate2={active2}
						></Project>
					</ProjectWrapper>
				</OnGoinWrapper>
			</Content>
		</Container>
	);
}

export default ShowMore;
