const stateval = (state = 2, action) => {
	switch (action.typle) {
		case "true":
			return state + 2;
		case "false":
			return state - 3;
	}
	return state;
};

export default stateval;
