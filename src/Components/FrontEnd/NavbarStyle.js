import styled from "styled-components";

export const Container = styled.div`
	z-index: 100;
	box-sizing: border-box;
	margin: 0;
	padding: clamp(1rem, 1.5vw, 1.5vw);

	width: 100%;
	font-family: "Hubballi", cursive;

	overflow-y: scroll;
	overflow-x: hidden;

	display: flex;
	align-items: center;

	position: absolute;
	top: 0;

	h2 {
		font-size: clamp(1rem, 2vw, 2vw);
		color: white;

		cursor: pointer;
		transition: 0.2s ease-in;

		&:hover {
			letter-spacing: 2px;
		}
	}
`;

export const ButtonWrapper = styled.div`
	box-sizing: border-box;
	margin: 0;

	width: 17%;
	height: fit-content;

	display: flex;
	justify-content: space-between;

	position: absolute;
	right: clamp(1rem, 1.5vw, 1.5vw);

	div {
		padding: 0 15px;
		font-family: "Hubballi", cursive;
		font-size: clamp(1rem, 2vw, 2vw);
		font-weight: 900;
		color: white;

		border-radius: 10px;

		cursor: pointer;
		transition: 0.1s ease-in;

		&:hover {
			transform: scale(1.1);
		}
	}

	div:nth-child(1) {
		background-color: black;
	}

	div:nth-child(2) {
		background-color: #065a33;
	}
`;
