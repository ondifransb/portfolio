import styled from "styled-components";
import { Home } from "@styled-icons/octicons/Home";
import { ChatBubbleOutline } from "@styled-icons/material-outlined/ChatBubbleOutline";
import { ImageAdd } from "@styled-icons/boxicons-regular/ImageAdd";
import { Compass } from "@styled-icons/feather/Compass";
import { Heart } from "@styled-icons/bootstrap/Heart";
import { Circle } from "@styled-icons/bootstrap/Circle";

export const Container = styled.div`
	box-sizing: border-box;
	padding: clamp(0.5rem, 0.5vw, 0.5vw) clamp(1rem, 1.5vw, 1.5vw);
	margin: 0;

	width: 100%;

	font-family: "Hubballi", cursive;

	box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.1);

	background: rgba(255, 255, 255, 0.41);
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);

	overflow-y: scroll;
	overflow-x: hidden;

	display: flex;

	position: relative;

	align-items: center;
	justify-content: space-between;

	div {
		cursor: pointer;
		img {
			height: clamp(1rem, 3.2vw, 3.2vw);
			width: clamp(2.5rem, 8vw, 8vw);
			display: flex;
			justify-content: center;
			align-items: center;

			transition: 0.15s ease-in;
			&:hover {
				transform: translateY(-15%);
			}
		}
	}
`;

export const ButtonWrapper = styled.div`
	box-sizing: border-box;
	margin: 0;

	width: clamp(5rem, 25vw, 25vw);
	height: clamp(1rem, 2vw, 2vw);

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const SearchBar = styled.input`
	box-sizing: border-box;
	margin: 0;
	padding: 0 0.5rem;

	font-size: clamp(0.5rem, 1vw, 1vw);
	text-align: center;

	width: clamp(5rem, 25vw, 25vw);
	height: clamp(1rem, 2vw, 2vw);
	background-color: #e8e8e8;

	border: none;
	border-radius: clamp(0.1rem, 0.6vw, 0.6vw);
`;
//icons start
export const HomeIcon = styled(Home)`
	transform: scale(0.4);
	width: fit-content;
	height: fit-content;

	transition: 0.15s ease-in;
	&:hover {
		transform: translateY(-2%) scale(0.4);
	}
`;
export const ChatIcon = styled(ChatBubbleOutline)`
	transform: scale(0.4);
	width: fit-content;
	height: fit-content;

	transition: 0.15s ease-in;
	&:hover {
		transform: translateY(-2%) scale(0.4);
	}
`;
export const AddIcon = styled(ImageAdd)`
	transform: scale(0.4);
	width: fit-content;
	height: fit-content;

	transition: 0.15s ease-in;
	&:hover {
		transform: translateY(-2%) scale(0.4);
	}
`;
export const CompassIcon = styled(Compass)`
	transform: scale(0.4);
	width: fit-content;
	height: fit-content;

	transition: 0.15s ease-in;
	&:hover {
		transform: translateY(-2%) scale(0.4);
	}
`;
export const HeartIcon = styled(Heart)`
	transform: scale(0.4);
	width: fit-content;
	height: fit-content;

	transition: 0.15s ease-in;
	&:hover {
		transform: translateY(-2%) scale(0.4);
	}
`;
export const ProfilePicture = styled(Circle)`
	transform: scale(0.4);
	width: fit-content;
	height: fit-content;

	transition: 0.15s ease-in;
	&:hover {
		transform: translateY(-2%) scale(0.4);
	}
`;
//icon end
