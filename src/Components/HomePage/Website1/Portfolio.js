import React from "react";
import {
	Container,
	MainWrapper,
	Tittle,
	Wrapper,
	Content,
	Desc,
	Desc2,
	Img,
	Button,
	Button2,
} from "./PortfolioStyle";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";
import Bussiness from "./Coorporate.jpeg";
import Studio from "./Studio.jpeg";
import Coffee from "./Coffee.jpeg";
import Coding from "./coding.png";

function Portfolio() {
	const Navigate = useNavigate();

	return (
		<Container>
			<Navbar />
			<Tittle>
				<h1>
					PRO<sup>+</sup>
				</h1>
				<h1>jects</h1>
			</Tittle>

			<MainWrapper>
				<Wrapper>
					<Content>
						<Img Picture={Bussiness}></Img>
						<Button onClick={() => Navigate("/Porto")}>more detail</Button>
					</Content>
				</Wrapper>

				<Wrapper>
					<Content>
						<Img Picture={Studio}></Img>
						<Button2 onClick={() => Navigate("/Uvisual")}>more detail</Button2>
					</Content>
				</Wrapper>

				<Wrapper>
					<Content>
						<Img Picture={Coffee}></Img>
						<Button onClick={() => Navigate("/Avana")}>more detail</Button>
					</Content>
				</Wrapper>

				<Wrapper>
					<Content>
						<Img Picture={Coding}></Img>
						<Button2 onClick={() => Navigate("/Instagram")}>
							more detail
						</Button2>
					</Content>
				</Wrapper>
			</MainWrapper>
		</Container>
	);
}

export default Portfolio;
