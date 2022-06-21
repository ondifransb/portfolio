import styled, { keyframes, css } from "styled-components";
import { NavbarStyle, Home } from "../HomePage/HomePageStyle";

export const Content = styled.div`
	height: 90%;
	width: 100%;
	background-image: linear-gradient(#17e9e1, #1ca7ec);
	box-shadow: inset 0px 0px 15px 0px #089c97;
	position: relative;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	overflow-y: scroll; //mengatur Y axis
	overflow-x: hidden; //mengatur X axis
	border-radius: 2rem;

	//scroll-bar style
	::-webkit-scrollbar {
		width: 0px;
	}
`;

export const ContentNav = styled(NavbarStyle)`
	display: flex;
	justify-content: space-between;
	padding: 1rem 1rem;
	width: 100%;
	position: fixed;
	left: 50%;
	transform: translateX(-50%);

	background-color: transparent;
`;

export const ContentHome = styled(Home)`
	font-size: clamp(0.5rem, 2vw, 1.5rem);
	font-family: "Heebo", sans-serif;
	letter-spacing: 0.2rem;
	color: white;
	transition: 0.2s ease-out;
	padding: 0.1rem;

	display: flex;
	float: right;

	&:hover {
		letter-spacing: 0.4rem;
		color: #23cc8c;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 67.6%;
`;

export const Logo = styled.div`
	font-size: clamp(0.5rem, 2vw, 1.5rem);
	font-family: "Heebo", sans-serif;
	width: 6%;
	color: transparent;
	cursor: pointer;

	display: flex;
	align-items: center;

	img {
		width: 90%;
	}

	@media only screen and (max-width: 414px) {
		img {
			width: 100%;
		}

		width: 15%;
	}
`;

const Animation1 = keyframes`
0%{
    transform: translateY(0%);
}
50%{
    transform: translateY(-10%);
}
100%{
    transform: translateY(0%);
}
`;

export const Registration = styled.div`
	width: 37%;

	display: flex;
	justify-content: flex-end;

	${ContentHome}:nth-child(1) {
		color: darkblue;
		animation: ${Animation1} 1s ease-in infinite;

		&:hover {
			border-bottom: 0.15rem solid darkblue;
		}
	}
`;

const BurgerAnimationON = keyframes`
from{
	width: clamp(2rem, 2vw, 2vw);
}
to{
	width: 40vw;
	background-color: transparent;
}
`;

const BurgerAnimationOFF = keyframes`
from{
	width: clamp(2rem, 2vw, 2vw);
}
to{
	width: clamp(2rem, 2vw, 2vw);
}
`;

export const Burger = styled.div`
	box-sizing: border-box;
	padding: 0;
	margin: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	width: clamp(2rem, 2vw, 2vw);
	height: clamp(0.5rem, 3vw, 3vw);

	border-radius: clamp(1rem, 2vw, 2vw);
	border: none;

	cursor: pointer;
	transition: 0.2s ease-in;
	animation: ${(props) =>
		props.Clicked
			? css`
					${BurgerAnimationON} 0.3s ease-in forwards;
			  `
			: css`
					${BurgerAnimationOFF} 0.3s ease-in forwards;
			  `};
`;

export const Hamburger = styled.div`
	box-sizing: border-box;
	padding: 0;
	margin: 0;

	height: 40%;
	width: 5%;
	background-color: #14caa0;

	border-radius: 2px;
`;

export const Hamburger2 = styled(Hamburger)`
	box-sizing: border-box;
	padding: 0;
	margin: 0;

	height: 60%;
	background-color: #0fb08b;
	margin-left: 2px;
`;

export const Hamburger3 = styled(Hamburger)`
	box-sizing: border-box;
	padding: 0;
	margin: 0;

	height: 80%;
	background-color: #0eaf89;
	margin-left: 2px;
`;

export const HeroSection = styled.div`
	width: 95%;
	height: 92%;
	position: relative;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	padding: 2rem 0;

	@media only screen and (max-width: 414px) {
		height: 70%;
		top: 40%;
	}

	h1 {
		display: inline;
		font-size: clamp(3rem, 5vw, 8rem);
		font-family: "Heebo", sans-serif;
		color: #1d3557;
		text-shadow: 1px 0px 2px black;
	}

	h1:nth-child(2) {
		font-family: "Heebo", sans-serif;
		color: #356d65;
	}
`;

export const MainHeroWrapper = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 80%;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 0;

	h1:nth-child(4) {
		width: 100%;
		position: absolute;
		bottom: 0;
		color: white;
		font-size: clamp(0.8rem, 2vw, 2vw);
		font-family: "Heebo", sans-serif;
		left: 50%;
		transform: translate(-50%);
		text-shadow: 1px 1px 2px black;
		opacity: 0.8;
	}
`;

export const Photo = styled.div`
	width: 30%;
	height: clamp(10rem, 20vw, 20vw);
	border-radius: clamp(1rem, 2vw, 2vw);
	box-shadow: 2px 8px 15px 0px #1276a8;
	background-image: linear-gradient(#9ca7ec, #89e9e1);
	transition: 0.2s ease-out;
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;

	h1 {
		display: inline;
		font-size: clamp(0.5rem, 2vw, 2vw);
		font-family: "Heebo", sans-serif;
		color: #ffff;
		opacity: 0.7;
		transition: 0.2s ease-in;
		line-height: clamp(2rem, 4vw, 4vw);
	}

	p {
		display: block;
		font-size: clamp(0.6rem, 1.5vw, 1.5vw);
		font-family: "Roboto", sans-serif;
		text-align: justify;
		line-height: normal;
	}

	&:hover {
		transform: scale(1.05);
	}
`;

export const SecondLayer = styled(HeroSection)`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 1rem 0;

	@media only screen and (max-width: 414px) {
		height: 40%;
	}

	position: relative;

	h1 {
		width: fit-content;
		text-align: left;
		font-size: clamp(1.5rem, 4vw, 6rem);
		text-shadow: 2px 2px 2px #1276a8;
	}

	${Photo}:nth-child(1) {
		display: flex;
		justify-content: center;
		flex-direction: column;
		box-shadow: none;
		background: none;

		position: relative;
		float: left;

		@media only screen and (max-width: 414px) {
			width: 60%;
			h1 {
				line-height: 1rem;
			}
		}

		h1 {
			position: absolute;
			font-size: clamp(1rem, 4vw, 6rem);
		}

		&:hover {
			transform: scale(1.05);
			h1 {
				color: black;
				text-shadow: 2px 1px 2px #1276a8;
			}
		}
	}

	${Photo}:nth-child(2) {
		display: flex;
		align-items: center;
		box-shadow: none;
		background: none;
		width: 60%;
		height: fit-content;

		img {
			width: 100%;
			height: 100%;
		}

		&:hover {
			transform: scale(1);
		}
	}
`;

const Animation2 = keyframes`
0%{
	left: -8rem;
	top: 6rem;
	transform: scale(1.2);
}
50%{
	left: -7.5rem;
	top: 6.5rem;
	transform: scale(1.25);
}
100%{
	left: -8rem;
	top: 6rem;
	transform: scale(1.2);
}
`;

export const ThirdLayer = styled(SecondLayer)`
	${Photo}:nth-child(1) {
		display: flex;
		flex-direction: row;
		box-shadow: none;
		background: none;
		width: 60%;
		height: 50%;

		img {
			transform: scale(1.2);
			width: 50%;
		}

		img:nth-child(2) {
			position: relative;
			left: -8rem;
			top: 6rem;
			transform: scale(1.2);
			animation: ${Animation2} 3s ease-in-out infinite;
		}

		&:hover {
			transform: scale(1);
		}
	}

	${Photo}:nth-child(2) {
		box-shadow: none;
		display: flex;
		flex-direction: column;
		width: 40%;

		h1 {
			width: fit-content;
			text-align: left;
			font-size: clamp(2rem, 4vw, 6rem);
			text-shadow: 2px 2px 2px #1276a8;
		}

		p {
			display: block;
			font-size: clamp(1rem, 1.8vw, 2rem);
			font-family: "Roboto", sans-serif;
			width: 90%;
			text-align: justify;
			color: white;
			transition: 0.2s ease-in;
		}

		&:hover {
			transform: scale(1.05);
			h1 {
				color: black;
				text-shadow: 2px 1px 2px #1276a8;
				p {
					color: black;
				}
			}
		}
	}
`;

export const FourthLayer = styled(SecondLayer)`
	${Photo}:nth-child(1) {
		display: flex;
		justify-content: center;
		flex-direction: column;
		box-shadow: none;
		background: none;

		position: relative;
		float: left;

		@media only screen and (max-width: 414px) {
			width: 60%;
		}

		h1 {
			position: absolute;
		}

		&:hover {
			transform: scale(1.05);
			h1 {
				color: black;
				text-shadow: 2px 1px 2px #1276a8;
			}
		}
	}

	${Photo}:nth-child(2) {
		background: yellow;
		display: flex;
		align-items: center;
		box-shadow: none;
		background: none;
		width: 60%;
		height: fit-content;

		img {
			width: 100%;
			height: 100%;
		}

		&:hover {
			transform: scale(1);
		}
	}
`;

export const Footer = styled.div`
	width: 100%;
	height: 5%;
	position: absolute;
	bottom: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;

	h1 {
		font-size: clamp(0.5rem, 1vw, 1vw);
		font-family: "Heebo", sans-serif;
		color: white;

		@media only screen and (max-width: 500px) {
			opacity: 0;
		}
	}
`;

export const MediaSocial = styled.a`
	width: fit-content;
	height: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: clamp(2rem, 3vw, 3vw);
		height: clamp(2rem, 3vw, 3vw);

		justify-content: space-around;

		cursor: pointer;

		transition: 0.1s ease-in;

		transform: scale(0.5);

		&:hover {
			transform: scale(0.7);
		}
	}
`;
