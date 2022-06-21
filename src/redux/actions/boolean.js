const reducer2 = (state = false, action) => {
	switch (action.type) {
		case "Kurang":
			return state + 1;
		case "Tambah":
			return state - 1;
	}
	return state;
};

export default reducer2;
