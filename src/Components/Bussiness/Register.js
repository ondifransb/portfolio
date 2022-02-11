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
import { RegistForm } from "./RegisterStyle";

function Register() {
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

				<RegistForm>
					<Input type="text" placeholder="Nama Depan"></Input>
					<Input type="text" placeholder="Nama Belakang"></Input>
					<Input type="text" placeholder="E-mail"></Input>
					<Input type="password" placeholder="Password"></Input>
					<Button>Sign In</Button>
					<h3>
						Sudah bergabung?{" "}
						<span onClick={() => Navigate("/Porto/Join")}> sini masuk</span>
					</h3>
				</RegistForm>
			</Content>
		</Container>
	);
}

export default Register;
