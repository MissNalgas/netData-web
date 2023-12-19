import { ChatState } from "./types";

const initialState: ChatState = {
	data: [],
	pending: false,
	error: false,
	success: false,
};

export default initialState;
