import React from "react";
import { Container, ButtonWrapper } from "./NavbarStyle";

function NavbarCompt() {
	return (
		<Container>
			<h2>FrontEnd Course</h2>
			<ButtonWrapper>
				<div>Login</div>
				<div>Register</div>
			</ButtonWrapper>
		</Container>
	);
}

export default NavbarCompt;
