import { AppState } from "infrastructure/store/user/types";

const initialState: AppState = {
	user: {
		id: 0,
		name: "",
		document: 0,
		email: "",
		isLogged: false
	},
	pending: false,
	error: false
};

export default initialState;
