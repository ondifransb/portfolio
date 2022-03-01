import styled, { keyframes, css } from "styled-components";
import {
	Content,
	ContentNav,
	Wrapper,
	ContentHome,
	Logo,
} from "../Bussiness/BussinessStyle";

export const MainWrapper = styled(Content)`
	background: black;
	background-size: cover;
	background-position: center;
	box-shadow: inset 0px 0px 10px 0px white;
	overflow-y: scroll; //mengatur Y axis
	overflow-x: hidden; //mengatur X axis

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
