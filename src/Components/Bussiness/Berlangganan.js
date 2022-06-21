import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, NavWrapper } from "../HomePage/HomePageStyle";
import Navbar from "../Navbar";
import { MainContent } from "./BerlanggananStyle";
import { Content } from "./BussinessStyle";
import ComponentNavbar from "./ComponentNavbar";
import Porto from "./Porto.png";

function Berlangganan() {
	const Navigate = useNavigate();

	return (
		<Container>
			<Navbar />
			<Content>
				<ComponentNavbar />
				<MainContent>
					<h1>Penasarankan?</h1>
					<h1>
						<span onClick={() => Navigate("/Porto/Join")}>Yuk</span> lihat semua
						kontennya!
					</h1>
				</MainContent>
			</Content>
		</Container>
	);
}

export default Berlangganan;
