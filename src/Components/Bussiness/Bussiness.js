import React from "react";
import { Container, NavWrapper } from "../HomePage/HomePageStyle";
import Navbar from "../Navbar";
import {
	Content,
	ContentNav,
	ContentHome,
	Logo,
	Wrapper,
	Registration,
	HeroSection,
	MainHeroWrapper,
	Photo,
	SecondLayer,
	ThirdLayer,
	FourthLayer,
	Footer,
	MediaSocial,
} from "./BussinessStyle";
import Porto from "./Porto.png";
import Source from "./Source1.png";
import Content1 from "./Content1.png";
import Research from "./Research.png";
import Research2 from "./Research2.png";
import Investasi from "./InvestasiAla.png";
import Instagram from "./Instagram.png";
import Twitter from "./Twitter.png";
import WhatsApp from "./WhatsApp.png";
import { useEffect } from "react";

function Bussiness() {
	useEffect(() => {
		alert("Scroll Down");
	}, []);

	return (
		<Container>
			<Navbar />
			<Content>
				<ContentNav>
					<Logo Picture={Porto}>Logo Detail</Logo>
					<Wrapper>
						<ContentHome>Stock</ContentHome>
						<ContentHome>Education</ContentHome>
						<ContentHome>Membership</ContentHome>
						<ContentHome>Article</ContentHome>
					</Wrapper>
					<Registration>
						<ContentHome>Login</ContentHome>
						<ContentHome>SIGN UP</ContentHome>
					</Registration>
				</ContentNav>

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
						<h1>Saatnya Kembangkan Portofoliomu</h1>
						<p>
							Kini kamu bisa mengembangkan portofoliomu dengan stockpick dan
							materi yang terpercaya bersama Porto
						</p>
					</Photo>

					<Photo>
						<img src={Content1} />
					</Photo>
				</SecondLayer>

				<ThirdLayer>
					<Photo>
						<img src={Research} />
						<img src={Research2} />
					</Photo>
					<Photo>
						<h1>Stockpick Dengan Research Yang Terpercaya</h1>
						<p>
							Dapatkan informasi mengenai stockpick terbaik yang dipilih
							berdasarkan riset akurat dan divalidasi oleh profesional di
							bidangnya.
						</p>
					</Photo>
				</ThirdLayer>

				<FourthLayer>
					<Photo>
						<h1>Video Edukasi Dan Webinar Ekslusif</h1>
						<p>
							Video Edukasi seputar saham dan Webinar Ekslusif dengan narasumber
							terbaik dari berbagai industri.
						</p>
					</Photo>
					<Photo>
						<img src={Investasi} />
					</Photo>

					<Footer>
						<h1>© 2021 Porto | PT Mahakarya Jenius Rangkaya</h1>
						<MediaSocial>
							<img src={Instagram} />
							<img src={Twitter} />
							<img src={WhatsApp} />
						</MediaSocial>
					</Footer>
				</FourthLayer>
			</Content>
		</Container>
	);
}

export default Bussiness;
