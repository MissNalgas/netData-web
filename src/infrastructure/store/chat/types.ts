export interface GetIdTicketPayload {
	id: number;
}

export type ChatState = {
	data: any;
	success: boolean;
	pending: boolean;
	error: boolean;
};

export interface ChatResponseError {
	data: {
		message: string;
		status: string;
	};
}
