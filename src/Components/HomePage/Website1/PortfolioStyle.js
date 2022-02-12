import styled from "styled-components";

export const Container = styled.div`
	box-sizing: border-box;
	padding: 0 3rem;
	margin: 0;
	width: 100%;
	height: 100vh;
`;
export const MainWrapper = styled.div`
	box-sizing: border-box;
	padding: 1rem 0 1rem 0;
	margin: 0;
	width: 100%;
	background-image: linear-gradient(180deg, white 10%, black);
`;
export const Tittle = styled.div`
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: clamp(1rem, 5vw, 8rem); //clamp(px/rem, vw/vw, px/rem)

	h1 {
		font-family: "Heebo", sans-serif;
		color: white;
		/* font stroke using shadowbox */
		text-shadow: clamp(-0.1rem, -0.2rem, -0.2rem)
				clamp(-0.1rem, -0.2rem, -0.2rem) 0 black,
			clamp(0.1rem, 0.2rem, 0.2rem) clamp(-0.1rem, -0.2rem, -0.2rem) 0 black,
			clamp(-0.1rem, -0.2rem, -0.2rem) clamp(0.1rem, 0.2rem, 0.2rem) 0 black,
			clamp(0.1rem, 0.2rem, 0.2rem) clamp(0.1rem, 0.2rem, 0.2rem) 0 black;

		sup {
			transition: all 0.2s ease-in;
		}

		&:hover sup {
			text-shadow: none;
			color: red;
		}
	}
	h1:nth-child(2) {
		color: black;
		font-weight: lighter;
		font-family: "Roboto", sans-serif;
		text-shadow: none;
	}
`;
export const Wrapper = styled.div`
	box-sizing: border-box;
	padding: 1rem;
	margin: 0 0 10rem 0;
	display: flex;
	position: relative;
	padding: 2rem;

	//component child styled
	&:nth-child(1) {
		justify-content: flex-start;
	}

	&:nth-child(2) {
		justify-content: flex-end;
	}

	&:nth-child(3) {
		justify-content: flex-start;
	}

	&:nth-child(4) {
		justify-content: flex-end;
	}
`;
export const Content = styled.div`
	box-sizing: border-box;
	padding: 0;
	width: 50%;
	height: 45rem;
	border: none;
	overflow: hidden;
	box-shadow: 0 4px 15px -1px rgba(0, 0, 0, 0.5);
	transition: all 0.8s ease-in;

	&:hover {
		box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.5);
		width: 85%;
	}
	&:hover h1 {
		left: -23%;
		opacity: 1;
	}
`;
export const Img = styled.div`
	width: 100%;
	height: 100%;
	background-image: url(${(props) => props.Picture});
	transform: scale(1.2);
	transition: transform 0.8s 0.8s ease-in-out, opacity 0.1s ease-in;

	${Content}:hover & {
		transform: scale(1);
		opacity: 0.5;
	}
`;
export const Button = styled.div`
	font-family: "Roboto", sans-serif;
	font-size: clamp(1rem, 3vw, 3rem);
	color: white;
	width: fit-content;
	height: fit-content;
	position: absolute;
	bottom: -2rem;
	opacity: 0;
	transition: all 0.5s ease-in;
	cursor: pointer;

	${Content}:hover & {
		bottom: 2rem;
		opacity: 0.5;
	}
`;
export const Desc = styled.div`
	box-sizing: border-box;
	padding: 0;
	margin: 0 0 1rem 1rem;
	width: 50%;
	height: fit-content;
	color: white;

	h1 {
		font-size: 6rem;
		line-height: 1;
		font-family: "Roboto", sans-serif;
		text-align: left;
	}

	p {
		font-size: clamp(20px, 1rem, 2em);
		text-align: justify;
		font-weight: lighter;
	}
`;
export const Desc2 = styled(Desc)`
	margin: 1rem 1rem 0 0;
	left: 0rem;

	h1 {
		text-align: right;
	}
`;
