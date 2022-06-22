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

	background-image: url(${(props) =>
		props.animate2 ? props.Picture2 : props.Picture});
	background-size: cover;
	background-position: center;

	transition: 0.2s ease-out;

	&:hover {
		background-size: 102%;
	}

	@media only screen and (max-width: 414px) {
		&:hover {
			background-size: 400%;
		}
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
	box-shadow: inset 0px 0px 5px 0px gray;

	display: flex;
	flex-direction: column;

	position: absolute;
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
	opacity: 1;
}
to{
	opacity: 0;
}
`;

const TriggerAnimationFalse = keyframes`
from{
	opacity: 0;
}
to{
	opacity: 1;
}
`;

export const OnGoingTrigger1 = styled.div`
	width: clamp(12px, 1%, 1%);
	height: 10%;

	cursor: pointer;

	border: none;
	border-radius: 0.5rem;

	background-color: black;

	position: absolute;
	left: 0%;
	top: 45%;
	transform: translate(-50%, -25%);

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
	width: clamp(12px, 1%, 1%);
	height: 10%;

	cursor: pointer;

	border: none;
	border-radius: 0.5rem;

	background-color: black;

	position: absolute;
	left: 100%;
	top: 45%;
	transform: translate(-50%, -25%);

	animation: ${(props) =>
		props.animate
			? css`
					${TriggerAnimationFalse} 2s ease-in-out forwards
			  `
			: css`
					${TriggerAnimationTrue} 2s ease-in-out forwards
			  `};
`;

export const OnGoingTrigger3 = styled.div`
	cursor: pointer;

	border: none;
	border-radius: 50%;

	position: absolute;
	left: 51%;
	bottom: clamp(50px, 10%, 50px);
	z-index: 10000001;

	color: black;

	p {
		font-size: clamp(0.8rem, 1vw, 2vw);
		opacity: 0.5;
		transition: 0.1s ease-in;

		&:hover {
			opacity: 1;
			transform: scale(1.05);
		}
	}

	@media only screen and (max-width: 414px) {
		top: 90%;
		left: 54%;
	}
`;

export const OnGoingTrigger4 = styled(OnGoingTrigger3)`
	left: 47%;

	@media only screen and (max-width: 414px) {
		left: 36%;
	}
`;
