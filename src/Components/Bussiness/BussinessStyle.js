import styled, { keyframes } from "styled-components";
import { NavbarStyle, Home } from "../HomePage/HomePageStyle";
import Content1 from "./Content1.png";

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
	/* background: #837474; */
	display: flex;
	justify-content: space-between;
	padding: 1rem 1rem;
	width: 95%;
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
`;

export const Wrapper = styled.div`
	/* background: #837474; */
	display: flex;
	justify-content: space-between;
	width: 50%;
	/* background-color: red; */

	@media only screen and (max-width: 600px) {
		opacity: 0;
	}
`;

export const ContentHome = styled(Home)`
	font-size: clamp(0.5rem, 2vw, 1.5rem);
	font-family: "Heebo", sans-serif;
	letter-spacing: 0.2rem;
	color: white;
	transition: 0.2s ease-out;
	padding: 0.1rem;

	&:hover {
		letter-spacing: 0.4rem;
		color: #23cc8c;
	}
`;

export const Logo = styled.div`
	font-size: clamp(0.5rem, 2vw, 1.5rem);
	font-family: "Heebo", sans-serif;
	width: fit-content;
	height: 100%;
	background-image: url(${(props) => props.Picture});
	background-size: cover;
	color: transparent;
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
	display: flex;
	justify-content: space-between;
	font-size: clamp(0.5rem, 2vw, 1.5rem);
	font-family: "Heebo", sans-serif;
	text-align: center;

	${ContentHome}:nth-child(2) {
		border-bottom: 0.2rem solid black;
		color: black;
		animation: ${Animation1} 1s ease-in infinite;
	}
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
	width: 90%;
	height: 85%;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 0;

	h1:nth-child(4) {
		position: absolute;
		bottom: 0;
		color: white;
		font-size: clamp(0.9rem, 2vw, 3rem);
		font-family: "Heebo", sans-serif;
		left: 50%;
		transform: translate(-50%);
		text-shadow: 1px 1px 2px black;
		opacity: 0.8;
	}
`;

export const Photo = styled.div`
	width: 30%;
	height: 70%;
	border-radius: 2rem;
	box-shadow: 2px 8px 15px 0px #1276a8;
	background-image: linear-gradient(#9ca7ec, #89e9e1);
	transition: 0.2s ease-out;
	position: relative;
	cursor: pointer;

	h1 {
		display: inline;
		font-size: clamp(1rem, 2vw, 4rem);
		font-family: "Heebo", sans-serif;
		color: #ffff;
		opacity: 0.7;
		transition: 0.2s ease-in;
	}

	&:hover {
		transform: scale(1.05);
	}
`;

export const SecondLayer = styled(HeroSection)`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin: 1rem 0;

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
	}

	${Photo}:nth-child(1) {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-direction: column;
		box-shadow: none;
		background: none;
		h1 {
			/* line-height: clamp(1rem, 8vh, 6rem); */
		}
		p {
			width: 100%;
			line-height: normal;
			color: white;
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
		/* align-items: center; */
		justify-content: flex-start;
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
		justify-content: flex-start;
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
		}

		&:hover {
			transform: scale(1.05);
			h1 {
				color: black;
				text-shadow: 2px 1px 2px #1276a8;
			}
		}
	}
`;

export const FourthLayer = styled(SecondLayer)`
	${Photo}:nth-child(1) {
		display: flex;
		align-items: flex-start;
		box-shadow: none;
		background: none;

		&:hover {
			transform: scale(1.05);
			h1 {
				color: black;
				text-shadow: 2px 1px 2px #1276a8;
			}
		}
	}

	${Photo}:nth-child(2) {
		box-shadow: none;
		background: none;
		display: flex;
		align-items: center;
		width: 50%;
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
		font-size: clamp(0.5rem, 1vw, 1rem);
		font-family: "Heebo", sans-serif;
		color: white;
	}
`;

export const MediaSocial = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;

	img {
		width: fit-content;
		justify-content: space-around;

		transform: scale(0.5);
	}
`;
