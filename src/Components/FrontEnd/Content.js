import React, { useState } from "react";
import { Container, Circle, BaseFE } from "./ContentStyle";

function Content() {
	const [Click, setClick] = useState(false);

	return (
		<Container>
			<BaseFE Clicked={Click}>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>JAVASCRIPT</li>
				</ul>
			</BaseFE>
			<Circle onClick={() => setClick(true)} Clicked={Click} />
		</Container>
	);
}

export default Content;
