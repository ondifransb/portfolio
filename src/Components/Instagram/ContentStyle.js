import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
	box-sizing: border-box;
	margin: 0;
	padding: 0;

	width: 95%;
	height: 91%;

	display: flex;
	align-items: center;

	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
`;

export const ContentWrapper = styled.div`
	box-sizing: border-box:
	margin: 0;
	padding: 0;

	width: 72%;
	height: 100%;


	overflow-y: scroll;
	overflow-x: hidden;

	::-webkit-scrollbar {
		display: none;
	}
`;

export const ProfileWrapper = styled.div`
	box-sizing: border-box:
	margin: 0;
	padding: 0;

	width: 26%;
	height: 95%;

	background: rgba(255, 255, 255, 0.41);
	border-radius: 16px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	
	position: absolute;
	right: 0;
`;

export const StoriesWrapper = styled.div`
	box-sizing: border-box;
	margin: 1rem 0;

	width: 100%;
	height: 12%;

	background: rgba(255, 255, 255, 0.41);
	border-radius: 16px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);

	border-radius: clamp(0.4rem, 0.8rem, 0.8rem);

	overflow-y: hidden;
	overflow-x: scroll;

	::-webkit-scrollbar {
		display: none;
	}
`;
export const Wrapper = styled.div`
	width: 100rem;
	height: 100%;
	display: flex;
	align-items: center;
`;
export const Stories = styled.div`
	margin: 0 0.5rem;
	box-sizing: border-box;
	width: 3.5rem;
	height: 3.5rem;

	background-image: url(${(props) => props.Image});
	background-size: 100%;
	background-position: center;

	cursor: pointer;

	border-radius: 50%;
	border: 3px solid #e0b4f6;

	transition: 0.1s ease-in;
	display: inline-block;

	&:hover {
		transform: scale(1.2);
	}
`;

export const ExploreWrapper = styled.div`
	width: 100%;
	height: 250%;

	border-radius: clamp(0.4rem, 0.8rem, 0.8rem);

	background: rgba(255, 255, 255, 0.41);
	border-radius: 16px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);

	display: flex;
	align-items: center;

	h1 {
		font-size: 10rem;
		text-align: center;
		color: #e9e9e9;
	}
`;
