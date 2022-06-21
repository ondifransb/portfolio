import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, NavWrapper } from "../HomePage/HomePageStyle";
import Navbar from "../Navbar";
import { MainContent } from "./BerlanggananStyle";
import { Content } from "./BussinessStyle";
import ComponentNavbar from "./ComponentNavbar";
import { Form, Button, Input, FormContent } from "./JoinStyle";
import Porto from "./Porto.png";

function Join() {
	const Navigate = useNavigate();

	return (
		<Container>
			<Navbar />
			<Content>
				<ComponentNavbar />

				<Form>
					<Input type="text" placeholder="E-mail"></Input>
					<Input type="password" placeholder="Password"></Input>
					<Button>Sign In</Button>
					<h3>
						Belum bergabung? <br />
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
