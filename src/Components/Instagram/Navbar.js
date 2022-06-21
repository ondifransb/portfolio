import React from "react";
import { Container, ButtonWrapper } from "./NavbarStyle";
import Logo from "./InstagramLogo.png";
import {
	HomeIcon,
	ChatIcon,
	AddIcon,
	CompassIcon,
	HeartIcon,
	ProfilePicture,
	SearchBar,
} from "./NavbarStyle";

function NavbarCompt() {
	return (
		<Container>
			<div>
				<img src={Logo} />
			</div>
			<SearchBar type="text" placeholder="Search" />
			<ButtonWrapper>
				<HomeIcon />
				<ChatIcon />
				<AddIcon />
				<CompassIcon />
				<HeartIcon />
				<ProfilePicture />
			</ButtonWrapper>
		</Container>
	);
}

export default NavbarCompt;
