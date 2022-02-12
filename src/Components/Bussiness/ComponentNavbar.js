import React, { useState, useEffect } from "react";
import {
	ContentNav,
	ContentHome,
	Logo,
	Wrapper,
	Registration,
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

	return (
		<ContentNav>
			<Logo onClick={() => Navigate("/Porto")} Picture={Porto}>
				Logo Detail
			</Logo>
			<Wrapper>
				<ContentHome onClick={() => Navigate("/Porto/Subs")}>Stock</ContentHome>

				{Width <= 568 ? null : (
					<>
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
					</>
				)}
			</Wrapper>
		</ContentNav>
	);
}

export default ComponentNavbar;
