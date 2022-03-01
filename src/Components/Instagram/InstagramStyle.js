import styled, { keyframes, css } from "styled-components";

export const MainWrapper = styled.div`
	height: 90%;
	width: 100%;

	border: 0.1rem solid gray;

	background-color: #e9e9e9;

	position: relative;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);

	display: flex;
	flex-direction: column;

	overflow-y: scroll; //mengatur Y axis
	overflow-x: hidden; //mengatur X axis

	border-radius: 2rem;

	//scroll-bar style
	::-webkit-scrollbar {
		width: 0px;
	}
`;
