import styled, { keyframes } from "styled-components";

export const Container = styled.div`
	box-sizing: border-box;
	padding: 0 3rem;
	margin: 0;
	width: 100%;
	height: 100vh;
`;
export const NavbarStyle = styled.div`
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	width: 100%;

	position: fixed;
	z-index: 100;

	background-color: white;
`;
export const NavWrapper = styled.div`
	box-sizing: border-box;
	padding: 0;
	width: fit-content;
	display: flex;
	justify-content: space-between;
	font-size: clamp(1rem, 2vw, 2vw);
	font-weight: lighter;
`;
export const Home = styled.div`
	box-sizing: border-box;
	padding: 0;
	margin: 0 1rem 0 0;
	display: flex;
	width: fit-content;
	height: fit-content;
	cursor: pointer;
	align-items: center;

	&:hover {
		font-weight: normal;
	}
`;
export const About = styled.div`
	box-sizing: border-box;
	padding: 0;
	margin: 0 1rem 0 0;
	display: flex;
	width: fit-content;
	height: fit-content;
	cursor: pointer;
	align-items: center;

	&:hover {
		font-weight: normal;
	}
`;
export const Contact = styled.div`
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	display: flex;
	width: fit-content;
	height: fit-content;
	cursor: pointer;
	align-items: center;

	&:hover {
		font-weight: normal;
	}
`;
export const MainHero = styled.div`
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
`;

const WellcomingAnimation = keyframes`
to{
	opacity: 1;
	transform: translate(0%, 0%);
}
`;

export const Wellcoming = styled.div`
	box-sizing: border-box;
	padding: 0;
	position: relative;

	opacity: 0;

	transform: translate(-5%, 5%);

	animation: ${WellcomingAnimation} 1.5s 2s ease-in forwards;

	@media (min-width: 319px) {
	}
	@media (min-width: 481px) {
	}
	@media (min-width: 1281px) {
	}
`;
export const HiThere = styled.div`
	display: block;
	font-size: clamp(2rem, 5vw, 5vw);
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	width: fit-content;
`;
export const Thankyou = styled.div`
	display: block;
	font-size: 3rem;
	font-weight: lighter;
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	width: fit-content;
	font-size: clamp(0.8rem, 4vw, 4vw);
`;
export const Hope = styled.div`
	display: block;
	font-size: 2rem;
	font-weight: lighter;
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	width: fit-content;
	font-size: clamp(0.55rem, 2vw, 2vw);
`;
export const SecondSection = styled.div`
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
`;
export const BioWrapper = styled.div`
	overflow: hidden;
	box-sizing: border-box;
	margin: 0;
	width: 72rem;
	height: 90%;
	position: relative;
	top: 0%;
	left: 50%;
	transform: translate(-50%, 0%);
	border-radius: 2rem;
	display: flex;
	justify-content: space-around;

	p {
		height: fit-content;
		overflow: scroll;
		font-size: clamp(0.8rem, 0.5vw, 1rem);
		font-weight: lighter;
		position: absolute;
		bottom: 3rem;
		text-align: justify;
		width: 85%;

		::-webkit-scrollbar {
			width: 0px;
		}

		@media screen and (max-width: 1100px) {
			color: black;
			top: 58%;
		}
	}
`;
export const Name = styled.div`
	box-sizing: border-box;
	border-right: 0.15rem solid black;
	margin: 0;
	width: 30vw;
	height: fit-content;
	position: relative;
	top: 50%;
	transform: translateY(-50%);
	color: black;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 1100px) {
		padding: 0rem;
	}

	h1 {
		font-size: clamp(1rem, 5vw, 5vw);
		line-height: 1.2;
		font-weight: lighter;
		text-align: right;
	}

	h1:nth-child(1) {
		font-weight: normal;
	}
`;
export const Picture = styled.div`
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	width: fit-content;
	height: fit-content;
	color: white;
	position: relative;
	top: 50%;
	transform: translateY(-50%);
`;
export const Photo = styled.div`
	box-sizing: border-box;
	border-radius: 50%;
	padding: 0;
	margin: 0;
	width: clamp(15rem, 25vw, 35rem);
	height: clamp(15rem, 25vw, 35rem);
	background-color: red;
	background-image: url(${(props) => props.Picture});
	background-size: cover;
	background-position: center;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	float: left;

	&::before {
		position: absolute;
		content: "";
		left: clamp(0.5rem, 2vw, 2vw);
		top: 50%;
		transform: translateY(-50%);
		height: 100%;
		width: 100%;
		background-color: white;
		border-radius: 50%;
		transition: 1s ease-in;
		z-index: -1;
	}

	&:hover:before {
		left: 50rem;
	}

	@media screen and (max-width: 1100px) {
		width: clamp(5rem, 20vw, 35rem);
		height: clamp(5rem, 20vw, 35rem);
	}
`;
export const ThirdSection = styled.div`
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
`;
export const ThingWrapper = styled.div`
	/* overflow: hidden; */
	box-sizing: border-box;
	display: flex;
	align-items: center;
	border-radius: 2rem;
	padding: 0.5rem;
	margin: 0;
	width: 95%;
	height: 85%;
	position: relative;
	top: 0%;
	left: 50%;
	transform: translate(-50%, 0%);
	background: black;
`;
export const Arrow = styled.div`
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	width: 100%;
	height: 5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const Arrow1 = styled.div`
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	background: white;
`;
export const Arrow2 = styled.div`
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	background: white;
`;
export const SliderWrapper = styled.div`
	overflow: hidden;
	box-sizing: border-box;
	border-radius: 2rem;
	padding: 0;
	margin: 0;
	width: 95%;
	height: 90%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: white;
`;
