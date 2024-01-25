import { AppState } from "./types";

const initialState: AppState = {
	user: {
		token: "",
		firstname: "",
		email: "",
		lastname: "",
		company: "",
		authotp: null,
	},
	pending: false,
	error: false,
};

export default initialState;
