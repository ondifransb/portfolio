import React, { useState, useEffect } from "react";
import { Container, NavWrapper } from "../HomePage/HomePageStyle";
import Navbar from "../Navbar";
import {
	Content,
	HeroSection,
	MainHeroWrapper,
	Photo,
	SecondLayer,
	ThirdLayer,
	FourthLayer,
	Footer,
	MediaSocial,
} from "./BussinessStyle";
import Source from "./Source1.png";
import Content1 from "./Content1.png";
import Research from "./Research.png";
import Research2 from "./Research2.png";
import Investasi from "./InvestasiAla.png";
import Instagram from "./Instagram.png";
import Twitter from "./Twitter.png";
import WhatsApp from "./WhatsApp.png";
import ComponentNavbar from "./ComponentNavbar";

function Bussiness() {
	const [Width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const HandleResize = () => {
			setWidth(window.innerWidth);
		};
		window.addEventListener("resize", HandleResize);

		return () => {
			window.removeEventListener("resize", HandleResize);
		};
	}, []);
	console.log(Width);

	return (
		<Container>
			<Navbar />
			<Content>
				<ComponentNavbar />

				<HeroSection>
					<h1>Special </h1>
					<h1>Webinar</h1>
					<MainHeroWrapper>
						<Photo>
							<h1>Market Outlook 2022</h1>
						</Photo>
						<Photo>
							<h1>MSCI February Review</h1>
						</Photo>
						<Photo>
							<h1>Banking 101</h1>
						</Photo>
						<h1>Eksklusif Untuk Member PORTO</h1>
					</MainHeroWrapper>
				</HeroSection>

				<SecondLayer>
					<Photo>
						<h1>
							Saatnya Kembangkan Portofoliomu
							<p>
								Kini kamu bisa mengembangkan portofoliomu dengan stockpick dan
								materi yang terpercaya bersama Porto
							</p>
						</h1>
					</Photo>

					{Width <= 568 ? null : (
						<>
							<Photo>
								<img src={Content1} />
							</Photo>
						</>
					)}
				</SecondLayer>

				<ThirdLayer>
					{Width <= 568 ? null : (
						<>
							<Photo>
								<img src={Research} />
								<img src={Research2} />
							</Photo>
						</>
					)}

					<Photo>
						<h1>
							Stockpick Dengan Research Terpercaya
							<p>
								Dapatkan informasi mengenai stockpick terbaik yang dipilih
								berdasarkan riset akurat dan divalidasi oleh profesional di
								bidangnya.
							</p>
						</h1>
					</Photo>
				</ThirdLayer>

				<FourthLayer>
					<Photo>
						<h1>
							Video Edukasi dan Webinar Ekslusif
							<p>
								Dapatkan akses ke video edukasi seputar pasar saham dan
								kesempatan mengikuti webinar eksklusif yang diisi oleh
								narasumber terbaik di bidangnya.
							</p>
						</h1>
					</Photo>

					{Width <= 568 ? null : (
						<>
							<Photo>
								<img src={Investasi} />
							</Photo>
						</>
					)}

					<Footer>
						<h1>© 2021 Porto | PT Mahakarya Jenius Rangkaya</h1>
						<MediaSocial>
							<a href="https://instagram.com/porto.id">
								<img src={Instagram} />
							</a>
							<a href="https://twitter.com/porto__id">
								<img src={Twitter} />
							</a>
							<a href="https://api.whatsapp.com/send/?phone=6281282288225&text&app_absent=0">
								<img src={WhatsApp} />
							</a>
						</MediaSocial>
					</Footer>
				</FourthLayer>
			</Content>
		</Container>
	);
}

export default Bussiness;
