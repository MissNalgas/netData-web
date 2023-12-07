import { AppState } from "infrastructure/store/auth/types";

const initialState: AppState = {
	validationEmail: false,
	pending: false,
	error: false,
};

export default initialState;
