import styled, { keyframes } from "styled-components";

export const NavWrapper = styled.div`
	margin: 0;
	padding: 0 2rem;
	box-sizing: border-box;
	width: 100%;
	height: 50px;
	box-shadow: 1px 0px 6px 1px gray;
	position: relative;
	background-color: white;
	justify-content: flex-start;
	border-bottom: 0.1rem black;
`;

export const NavbarWrapper = styled.div`
	margin: 0;
	padding: clamp(0.5rem, 0.2vw, 0.8rem);
	width: fit-content;
	height: fit-content;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const NavLogo = styled.div`
	width: fit-content;
	height: 100%;
	cursor: pointer;
	display: flex;
	align-items: center;
`;

const LogoAnimation = keyframes`
0%{
	opacity: 0;
}
50%{
	opacity: 1;
}
75%{
	opacity: 1;
}
100%{
	opacity: 0;

}
`;

const HeroAnimation = keyframes`
0%{
	background: black;
}
50%{
	background: black;
}
100%{
	background: white;
}
`;

const DescAnimation = keyframes`
0%{
	opacity: 0;
	top: 48.8%;
	left: 48.8%;
}
100%{
	opacity: 1;
	top: 50%;
	left: 50%;
}
`;

const ShowAnimation = keyframes`
0%{
	margin-top: 0;
	opacity: 0;
}
100%{
	margin-top: clamp(0.5rem, 0.5vw, 1rem);
	opacity: 0.3;
}
`;

export const HeroWrapper = styled.div`
	width: 100%;
	height: 100%;
	background: white;
	color: black;
	background: black;
	animation: ${HeroAnimation} 1s 1.9s ease-in forwards;
	overflow: hidden;

	${NavLogo} {
		width: 100%;
		height: fit-content;
	}

	img {
		animation: ${LogoAnimation} 2s ease-in forwards;
		opacity: 1;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

export const Desc = styled.div`
	width: 90%;
	height: fit-content;

	position: relative;
	top: 48%;
	left: 48%;
	transform: translate(-50%, -50%);

	display: flex;
	flex-direction: column;

	font-family: "SansGX";

	opacity: 0;
	transition: 1s ease-in;
	animation: ${DescAnimation} 1s 2s ease-in forwards;

	@media only screen and (max-width: 414px) {
		width: 90%;
	}

	h1 {
		font-size: clamp(1rem, 2vw, 2vw);
		height: fit-content;
		text-align: justify;
	}
	h3 {
		font-size: clamp(1rem, 2vw, 2vw);
		font-weight: lighter;
		height: fit-content;
		text-align: justify;

		span {
			/* font-weight: 450; */
			/* font-style: italic; */
		}
	}
	p {
		font-size: clamp(0.8rem, 1.5vw, 1.5vw);
		transition: 0.2s ease-in-out;
		margin-top: 0;
		opacity: 0;

		width: fit-content;
		position: relative;
		top: 0%;
		left: 50%;
		transform: translate(-50%, 0%);

		cursor: pointer;

		animation: ${ShowAnimation} 1s 4s forwards;
		transition: 0.2s ease-in;

		&:hover {
			color: gray;
			letter-spacing: 1px;
			opacity: 1;
		}
	}
`;

export const Projects = styled.div`
	width: 100%;
	height: fit-content;
	box-sizing: border-box;
	margin: 0;
	padding: 0;

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	align-content: space-around;

	div {
		width: fit-content;
		height: fit-content;

		font-size: clamp(2rem, 2vw, 3rem);
		font-family: "Roboto", sans-serif;
		font-weight: lighter;
		cursor: pointer;

		&:hover {
			font-weight: bolder;
		}
	}
`;
