import styled, { keyframes } from "styled-components";

const Animation = keyframes`
from{
    opacity: 0;
	transform: translate(-2%, -2%);
}
to{
    opacity: 1;
    top: 0%;
	left: 0%;
	transform: translate(0%, 0%);
}
`;

export const MainContent = styled.div`
	width: 100%;
	box-sizing: border-box;
	margin: 0;
	padding: 0;

	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);

	h1 {
		height: 100%;

		text-align: center;
		font-family: "Heebo", sans-serif;
		color: white;

		animation: ${Animation} 1s ease-out forwards;
	}
	h1:nth-child(1) {
		font-size: clamp(1rem, 6vw, 6rem);
	}
	h1:nth-child(2) {
		font-size: clamp(1rem, 4vw, 4rem);

		span {
			color: red;
			cursor: pointer;
			transition: 0.1s ease-in;

			&:hover {
				color: darkblue;
				border-bottom: 0.15rem solid darkblue;
			}
		}
	}
`;
