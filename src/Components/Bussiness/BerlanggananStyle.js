import styled from "styled-components";

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
