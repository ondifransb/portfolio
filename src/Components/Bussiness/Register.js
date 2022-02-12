import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, NavWrapper } from "../HomePage/HomePageStyle";
import Navbar from "../Navbar";
import { MainContent } from "./BerlanggananStyle";
import { Content } from "./BussinessStyle";
import ComponentNavbar from "./ComponentNavbar";
import { Form2, Button, Input, FormContent } from "./RegisterStyle";
import Porto from "./Porto.png";

function Register() {
	const Navigate = useNavigate();

	return (
		<Container>
			<Navbar />
			<Content>
				<ComponentNavbar />

				<Form2>
					<Input type="text" placeholder="Nama Depan"></Input>
					<Input type="text" placeholder="Nama Belakang"></Input>
					<Input type="text" placeholder="E-mail"></Input>
					<Input type="password" placeholder="Password"></Input>
					<Button>Sign In</Button>
					<h3>
						Sudah bergabung?{" "}
						<span onClick={() => Navigate("/Porto/Join")}>
							{" "}
							<br />
							sini masuk
						</span>
					</h3>
				</Form2>
			</Content>
		</Container>
	);
}

export default Register;
