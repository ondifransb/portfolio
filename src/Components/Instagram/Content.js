import React, { useState } from "react";
import {
	Container,
	ContentWrapper,
	ProfileWrapper,
	StoriesWrapper,
	ExploreWrapper,
	Wrapper,
	Stories,
	ProfileSec,
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
					<h1>NONE TO SEE HERE YET</h1>
				</ExploreWrapper>
			</ContentWrapper>
			<ProfileWrapper>
				<ProfileSec>
					<div>
						<Stories Image={Profile} />
					</div>
				</ProfileSec>
			</ProfileWrapper>
		</Container>
	);
}

export default Content;
