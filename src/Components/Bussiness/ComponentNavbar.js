import React, { useState, useEffect } from "react";
import {
	ContentNav,
	ContentHome,
	Logo,
	Wrapper,
	Registration,
	Burger,
	Hamburger,
	Hamburger2,
	Hamburger3,
} from "./BussinessStyle";

import { useNavigate } from "react-router-dom";

import Porto from "./Porto.png";

function ComponentNavbar() {
	const Navigate = useNavigate();

	const [Width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const HandleResize = () => {
			setWidth(window.innerWidth);
		};
		window.addEventListener("resize", HandleResize);

		return () => {
			window.removeEventListener("resize", HandleResize);
		};
	}, []);
	console.log(Width);

	const [Clicked, setClicked] = useState(false);

	return (
		<ContentNav>
			<Logo onClick={() => Navigate("/Porto")}>
				<img src={Porto} alt="" />
			</Logo>

			{Width >= 568 ? (
				<>
					<Wrapper>
						<ContentHome onClick={() => Navigate("/Porto/Subs")}>
							Stock
						</ContentHome>
						<ContentHome onClick={() => Navigate("/Porto/Subs")}>
							Education
						</ContentHome>

						<ContentHome onClick={() => Navigate("/Porto/Subs")}>
							Article
						</ContentHome>

						<Registration>
							<ContentHome onClick={() => Navigate("/Porto/Join")}>
								JOIN
							</ContentHome>
						</Registration>
					</Wrapper>
				</>
			) : (
				<>
					<Burger Clicked={Clicked} onClick={() => setClicked(true)}>
						{Clicked ? (
							<>
								<ContentHome onClick={() => Navigate("/Porto/Subs")}>
									Stock
								</ContentHome>
								<ContentHome onClick={() => Navigate("/Porto/Subs")}>
									Education
								</ContentHome>
								<ContentHome onClick={() => Navigate("/Porto/Subs")}>
									Article
								</ContentHome>{" "}
							</>
						) : (
							<>
								{" "}
								<Hamburger /> <Hamburger2 /> <Hamburger3 />{" "}
							</>
						)}
					</Burger>
				</>
			)}
		</ContentNav>
	);
}

export default ComponentNavbar;
