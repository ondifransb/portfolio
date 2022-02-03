import React from "react";
import {
	NavbarStyle,
	NavWrapper,
	About,
	Contact,
	Home,
} from "./HomePage/HomePageStyle";
import { useNavigate } from "react-router-dom";

function Navbar() {
	const Navigate = useNavigate();
	return (
		<NavbarStyle>
			<NavWrapper>
				<Home onClick={() => Navigate("/")}> Home </Home>
				<About onClick={() => Navigate("/portfolio")}> Portfolio </About>
				<Contact> Contact </Contact>
			</NavWrapper>
		</NavbarStyle>
	);
}

export default Navbar;
