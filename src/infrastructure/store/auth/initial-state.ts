import { AppState } from "infrastructure/store/auth/types";

const initialState: AppState = {
	validationEmail: {
		message: "",
	},
	pending: false,
	error: false,
};

export default initialState;
