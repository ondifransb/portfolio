import styled, { keyframes, css } from "styled-components";
import {
	Content,
	ContentNav,
	Wrapper,
	ContentHome,
	Logo,
} from "../Bussiness/BussinessStyle";
import Background from "./Background.jpeg";

export const MainWrapper = styled(Content)`
	background-image: url(${Background});
	background-size: cover;
	background-position: center;
	box-shadow: inset 0px 0px 10px 0px white;
	overflow-y: scroll; //mengatur Y axis
	overflow-x: hidden; //mengatur X axis
`;

export const Navigation = styled(ContentNav)`
	background: white;
	padding: 1rem 1rem 0 1rem;
	width: 100%;
	position: relative;
`;

export const NavWrapper = styled(Wrapper)``;

export const Nav = styled(ContentHome)`
	color: black;
`;

export const LogoContent = styled(Logo)`
	width: fit-content;
	height: 100%;
	background-size: cover;
	background-image: url(${(props) => props.Picture});

	a {
		text-decoration: none;
		opacity: 0;
	}
`;

export const Glass = styled.div`
	width: 100%;
	height: 92.2%;

	background: rgba(255, 255, 255, 0);
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(8px);
	-webkit-backdrop-filter: blur(8px);

	position: relative;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: white;
	text-align: center;

	h1 {
		margin: 2rem;
		width: 50%;
		height: fit-content;

		font-size: clamp(0.7rem, 2vw, 2vw);
		text-shadow: 2px 2px 2px #26c4a4;
		font-weight: bolder;
		border: none;

		span {
			transition: 0.3s ease-out;
			filter: blur(10px);
			border: none;
		}

		&:hover {
			span {
				color: red;
				text-shadow: none;
				filter: blur(0px);
				border: none;
			}
		}
	}

	:nth-child(3) {
		span {
			color: red;
			text-shadow: 2px 2px 2px #ce0000;
			filter: blur(0px);
		}
	}
`;

export const ProjectWrapper = styled.div`
	width: 95%;
	height: 90%;
	background: rgba(255, 255, 255, 0);
	border-radius: 1rem;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(8.3px);
	-webkit-backdrop-filter: blur(8.3px);
	border: 1px solid rgba(255, 255, 255, 0.1);
	overflow-y: scroll; //mengatur Y axis
	overflow-x: hidden; //mengatur X axis
	margin: 0 0 2rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;

	::-webkit-scrollbar {
		width: 0px;
	}
`;

export const Projects = styled.div`
	width: 40%;
	height: 90%;
	padding: 2rem;
	background: rgba(255, 255, 255, 0.1);
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(4.7px);
	-webkit-backdrop-filter: blur(4.7px);
	border-radius: 1rem;
	margin: 2rem;

	transition: 0.3s ease-in;
	cursor: pointer;

	@media only screen and (max-width: 736px) {
		width: 95%;
		height: fit-content;

		&:hover {
			transform: scale(1.05);
			backdrop-filter: blur(5px);
			-webkit-backdrop-filter: blur(5px);
			h1 {
				color: red;
				transform: scale(1.05);
				filter: blur(2px);
			}
			p {
				transform: scale(0.9);
				filter: blur(2px);
			}
		}
	}

	&:hover {
		transform: scale(1.05);
		backdrop-filter: blur(14px);
		-webkit-backdrop-filter: blur(14px);
		h1 {
			color: red;
			transform: scale(1.05);
			filter: blur(0px);
		}
		p {
			transform: scale(0.9);
			filter: blur(0px);
		}
	}

	p {
		font-size: clamp(0.5rem, 2vw, 2vw);
	}

	h1 {
		text-align: center;
		font-size: clamp(1rem, 2vw, 2vw);
		text-shadow: 2px 2px 2px black;
		filter: blur(15px);
		width: 100%;
		margin: 0;
		transition: 0.3s ease-in;
	}

	p {
		font-size: clamp(0.9rem, 2vw, 3rem);
		height: 50%;
		text-align: justify;
		filter: blur(6px);
		font-family: "Roboto";
		transition: 0.3s ease-in;
		border: none;
	}
`;
