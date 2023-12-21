import { NotificationState } from "./types";

const initialState: NotificationState = {
	data: [],
	pending: false,
	error: false,
	success: false,
	message: "",
	status: "",
};

export default initialState;
