import { AppState } from "infrastructure/store/auth/types";

const initialState: AppState = {
	validationEmail: "",
	pending: false,
	error: false,
};

export default initialState;
