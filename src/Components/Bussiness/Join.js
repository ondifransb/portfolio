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
import { Form, Button, Input, FormContent } from "./JoinStyle";
import Porto from "./Porto.png";

function Join() {
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
							<ContentHome onClick={() => Navigate("/Porto/Join")}>
								JOIN
							</ContentHome>
						</Registration>
					</Wrapper>
				</ContentNav>

				<Form>
					<Input type="text" placeholder="E-mail"></Input>
					<Input type="password" placeholder="Password"></Input>
					<Button>Sign In</Button>
					<h3>
						Belum bergabung?{" "}
						<span onClick={() => Navigate("/Porto/Register")}>
							{" "}
							sini gabung
						</span>
					</h3>
				</Form>
			</Content>
		</Container>
	);
}

export default Join;
