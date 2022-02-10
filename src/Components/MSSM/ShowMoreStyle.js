import styled, { keyframes, css } from "styled-components";

export const Content = styled.div`
	height: 90%;
	width: 100%;

	/* background-color: red; */
	box-shadow: inset 0px 0px 5px 0px gray;

	position: relative;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);

	overflow-y: hidden; //mengatur Y axis
	overflow-x: hidden; //mengatur X axis
	border-radius: 2rem;

	//scroll-bar style
	::-webkit-scrollbar {
		width: 0px;
	}
`;

export const ProjectWrapper = styled.div`
	box-sizing: border-box;
	margin: 0;
	padding: 0rem 3rem 3rem 3rem;

	display: grid;
	grid-template-columns: auto auto auto;
	column-gap: 30px;

	width: 100%;
	height: 100%;

	overflow-y: hidden; //mengatur Y axis
	overflow-x: hidden; //mengatur X axis

	//scroll-bar style
	::-webkit-scrollbar {
		width: 0px;
	}
`;

export const Project = styled.div`
	width: 100%;
	height: 90%;
	cursor: pointer;

	border: none;
	border-radius: 0.5rem;

	box-shadow: 4px 4px 6px 0px #c9c9c9;

	background-image: url(${(props) => props.Picture});
	background-size: cover;
	background-position: center;

	transition: 0.2s ease-out;

	&:hover {
		background-size: 102%;
	}
`;

export const CompletedWrapper = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;
	height: 100%;

	position: relative;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);

	overflow-y: hidden; //mengatur Y axis
	overflow-x: hidden; //mengatur X axis

	//scroll-bar style
	::-webkit-scrollbar {
		width: 0px;
	}

	h1 {
		font-family: "Roboto", sans-serif;
		font-size: clamp(1rem, 2vw, 3rem);
		text-transform: uppercase;

		margin-left: clamp(3rem, 3vw, 3rem);
		position: relative;

		span {
			text-shadow: 0px 0px 0px black;
			font-weight: 900;
			letter-spacing: clamp(1px, 1px, 2px);
		}
	}
`;

const AnimationIfTrue = keyframes`
from{
	transform: translate(99.99%, -100%);
}
to{
	transform: translate(0%, -100%);
}
`;

const AnimationIfFalse = keyframes`
from{
	transform: translate(0%, -100%);
}
to{
	transform: translate(99.99%, -100%);
}
`;

export const OnGoinWrapper = styled.div`
	width: 100%;
	height: 100%;

	background-color: white;

	display: flex;
	flex-direction: column;

	position: relative;
	transform: translate(99.99%, -100%);

	animation: ${(props) =>
		props.animate
			? css`
					${AnimationIfTrue} 2s ease-in-out forwards
			  `
			: css`
					${AnimationIfFalse} 2s ease-in-out forwards
			  `};

	h1 {
		font-family: "Roboto", sans-serif;
		font-size: clamp(1rem, 2vw, 3rem);
		text-transform: uppercase;

		margin-left: clamp(3rem, 3vw, 3rem);
		position: relative;

		span {
			text-shadow: 0px 0px 0px black;
			font-weight: 900;
			letter-spacing: clamp(1px, 1px, 2px);
		}
	}
`;

const TriggerAnimationTrue = keyframes`
from{
	background-color: black;
}
to{
	background-color: white;
}
`;

const TriggerAnimationFalse = keyframes`
from{
	background-color: white;
}
to{
	background-color: black;
}
`;

export const OnGoingTrigger1 = styled.div`
	width: 1%;
	height: 10%;

	cursor: pointer;

	border: none;
	border-radius: 1rem;

	background-color: black;

	position: absolute;
	left: 0%;
	top: 45%;
	transform: translate(-50%, -20%);

	animation: ${(props) =>
		props.animate
			? css`
					${TriggerAnimationTrue} 2s ease-in-out forwards
			  `
			: css`
					${TriggerAnimationFalse} 2s ease-in-out forwards
			  `};
`;

export const OnGoingTrigger2 = styled.div`
	width: 1%;
	height: 10%;

	cursor: pointer;

	border: none;
	border-radius: 1rem;

	background-color: red;

	position: absolute;
	left: 100%;
	top: 45%;
	transform: translate(-50%, -20%);

	animation: ${(props) =>
		props.animate
			? css`
					${TriggerAnimationFalse} 2s ease-in-out forwards
			  `
			: css`
					${TriggerAnimationTrue} 2s ease-in-out forwards
			  `};
`;
