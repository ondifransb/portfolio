import styled, { keyframes } from "styled-components";

export const Form = styled.div`
	box-sizing: border-box;
	margin: 0;
	padding: 0;

	width: clamp(12rem, 35vw, 50rem);
	height: 50%;

	border: none;
	border-radius: clamp(0.5rem, 1rem, 1rem);

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	background: rgba(255, 255, 255, 0.2);
	border-radius: 16px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(6.7px);
	-webkit-backdrop-filter: blur(6.7px);

	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	@media only screen and (max-width: 414px) {
		width: clamp(18rem, 40vw, 40rem);
	}

	h3 {
		font-size: clamp(1rem, 2vw, 2vw);
		font-family: "Roboto", sans-serif;
		font-weight: bolder;
		text-align: center;

		span {
			color: #001aff;
			cursor: pointer;
			transition: 0.1s ease-in;

			&:hover {
				letter-spacing: 0.05rem;
				color: #c90000;
			}
		}
	}
`;

const Animation = keyframes`
from{
    opacity: 0;
	transform: translate(-5%, -5%);
}
to{
    opacity: 1;
    top: 0%;
	left: 0%;
	transform: translate(0%, 0%);
}
`;

export const Input = styled.input`
	box-sizing: border-box;
	margin: 0;
	padding: 0 1rem;

	display: flex;
	justify-content: center;
	align-items: center;

	font-size: clamp(1rem, 1vw, 1vw);
	font-family: "Roboto", sans-serif;
	font-weight: bolder;

	width: 75%;
	height: clamp(1.5rem, 2vw, 2vw);

	border: none;
	border-radius: clamp(0.5rem, 1rem, 1rem);

	background-color: white;

	display: flex;
	justify-content: center;
	align-items: center;

	animation: ${Animation} 1s ease-out forwards;
`;

export const Button = styled.div`
	box-sizing: border-box;
	margin: 0;
	padding: 0;

	width: 75%;
	height: 10%;

	cursor: pointer;

	border: none;
	border-radius: clamp(0.5rem, 1rem, 1rem);

	background-color: green;

	display: flex;
	justify-content: center;
	align-items: center;
`;
