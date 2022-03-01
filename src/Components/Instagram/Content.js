import React, { useState } from "react";
import {
	Container,
	ContentWrapper,
	ProfileWrapper,
	StoriesWrapper,
	ExploreWrapper,
	Wrapper,
	Stories,
} from "./ContentStyle";
import Profile from "./Profile.png";

function Content() {
	const [Click, setClick] = useState(false);

	return (
		<Container>
			<ContentWrapper>
				<StoriesWrapper>
					<Wrapper>
						<Stories Image={Profile} />
						<Stories Image={Profile} />
						<Stories Image={Profile} />
						<Stories Image={Profile} />
						<Stories Image={Profile} />
						<Stories Image={Profile} />
						<Stories Image={Profile} />
						<Stories Image={Profile} />
						<Stories Image={Profile} />
						<Stories Image={Profile} />
						<Stories Image={Profile} />
						<Stories Image={Profile} />
						<Stories Image={Profile} />
						<Stories Image={Profile} />
						<Stories Image={Profile} />
						<Stories Image={Profile} />
						<Stories Image={Profile} />
						<Stories Image={Profile} />
						<Stories Image={Profile} />
						<Stories Image={Profile} />
						<Stories Image={Profile} />
						<Stories Image={Profile} />
					</Wrapper>
				</StoriesWrapper>
				<ExploreWrapper>
					<h1>NONE TO SEE HERE</h1>
				</ExploreWrapper>
			</ContentWrapper>
			<ProfileWrapper></ProfileWrapper>
		</Container>
	);
}

export default Content;
