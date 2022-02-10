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
} from "./PortfolioStyle";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";
import Bussiness from "./Coorporate.jpeg";
import Studio from "./Studio.jpeg";
import Coffee from "./Coffee.jpeg";
import Cake from "./Cake.jpeg";

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
						<Button onClick={() => Navigate("/bussiness")}>more detail</Button>
					</Content>
				</Wrapper>

				<Wrapper>
					<Content>
						<Img Picture={Studio}></Img>
						<Button onClick={() => Navigate("/Uvisual")}>more detail</Button>
					</Content>
				</Wrapper>

				<Wrapper>
					<Content>
						<Img Picture={Coffee}></Img>
						<Button onClick={() => Navigate("/Architect")}>more detail</Button>
					</Content>
				</Wrapper>

				<Wrapper>
					<Content>
						<Img Picture={Cake}></Img>
						<Button onClick={() => console.log("clicked")}>more detail</Button>
					</Content>
				</Wrapper>
			</MainWrapper>
		</Container>
	);
}

export default Portfolio;
