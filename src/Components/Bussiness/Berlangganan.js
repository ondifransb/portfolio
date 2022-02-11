import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, NavWrapper } from "../HomePage/HomePageStyle";
import Navbar from "../Navbar";
import { MainContent } from "./BerlanggananStyle";
import {
	Content,
	ContentNav,
	Logo,
	Wrapper,
	ContentHome,
	Registration,
} from "./BussinessStyle";
import Porto from "./Porto.png";

function Berlangganan() {
	const Navigate = useNavigate();

	return (
		<Container>
			<Navbar />
			<Content>
				<ContentNav>
					<Logo Picture={Porto} onClick={() => Navigate("/Porto")}>
						Logo Detail
					</Logo>
					<Wrapper>
						<ContentHome onClick={() => Navigate("/Porto/Subs")}>
							Stock
						</ContentHome>

						<ContentHome onClick={() => Navigate("/Porto/Subs")}>
							Education
						</ContentHome>

						<ContentHome onClick={() => Navigate("/Porto/Subs")}>
							Article
						</ContentHome>

						<Registration>
							<ContentHome>Login</ContentHome>
							<ContentHome>SIGN UP</ContentHome>
						</Registration>
					</Wrapper>
				</ContentNav>
				<MainContent>
					<h1>Penasarankan?</h1>
					<h1>
						<span>Yuk</span> lihat semua kontennya!
					</h1>
				</MainContent>
			</Content>
		</Container>
	);
}

export default Berlangganan;
