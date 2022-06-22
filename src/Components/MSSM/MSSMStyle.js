import styled from "styled-components";
import { Content } from "../Bussiness/BussinessStyle";

export const MainWrapper = styled(Content)`
	background-image: none;
	border: 0.1rem solid black;
	box-shadow: none;
	background: white;
	overflow: hidden;
`;

export const AvanaLogo = styled.div`
	width: 15%;
	height: 6%;
	background-image: url(${(props) => props.Picture});
	background-size: cover;
	background-position: center;

	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	filter: blur(2px);
	-webkit-filter: blur(2px);
	cursor: pointer;
	z-index: 10001;

	transition: 0.2s ease-in;

	&:hover {
		filter: blur(0px);
		-webkit-filter: blur(0px);
	}

	@media only screen and (max-width: 736px) {
		width: 65%;
		height: 6%;
	}
`;
