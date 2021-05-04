const INITIAL_STATE = {
	accountId: null,
	username: "",
	email: "",
	roleId: null,
	imagepath: "",
	isLogin: false,
	isFinished: false,
};

export const authReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				...action.payload,
				isLogin: true,
			};
		case "AUTH_FINISHED":
			return {
				...state,
				isFinished: true,
			};
		case "LOGOUT":
			return INITIAL_STATE;
		default:
			return state;
	}
};
