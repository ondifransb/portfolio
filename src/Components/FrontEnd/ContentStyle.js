import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
	box-sizing: border-box;
	margin: 0;
	padding: 0;

	width: 100%;

	display: flex;
	justify-content: space-around;
	align-items: center;

	position: absolute;
`;

const CircleAnimation = keyframes`
to{
    transform: translateX(-10rem);
    background-color: #a5f0c5;

    width: 10rem;
	height: 10rem;
}
`;

export const Circle = styled.div`
	box-sizing: border-box;
	margin: 0;
	padding: 0;

	width: 20rem;
	height: 20rem;
	border-radius: 50%;

	background-color: #ffff;

	z-index: 1;
	animation: ${(props) =>
		props.Clicked &&
		css`
			${CircleAnimation} 1s ease-in forwards
		`};
`;

const BaseAnimation = keyframes`
to{
    opacity: 1;
    width: 35%;
}
`;

export const BaseFE = styled.div`
	box-sizing: border-box;
	margin: 0;
	padding: 0;

	width: 1%;
	height: 100%;

	position: absolute;
	left: 35rem;

	opacity: 0;
	border-radius: 1rem;
	z-index: 0;
	animation: ${(props) =>
		props.Clicked &&
		css`
			${BaseAnimation} 1s  ease-in forwards
		`};

	display: flex;
	align-items: center;
	justify-content: center;

	ul {
		color: white;
		font-size: clamp(1rem, 2vw, 2vw);
		font-family: "Hubballi", cursive;
		font-weight: 600;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		height: 70%;
		list-style-type: none;

		li {
			cursor: pointer;
			transition: 0.1s ease-in;

			&:hover {
				transform: scale(1.08);
				color: #a5f0c5;
				transform: translateX(1rem);
			}
		}
	}
`;
