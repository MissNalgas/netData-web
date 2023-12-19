export interface GetIdTicketPayload {
	id: number;
}

export type ChatState = {
	data: chatObject[];
	success: boolean;
	pending: boolean;
	error: boolean;
};

export interface chatObject {
	attachments: any[];
	bcc_emails: any[];
	body: string;
	body_text: string;
	cc_emails: any[];
	created_at: string;
	from_email: string;
	id: number;
	incoming: boolean;
	private: boolean;
	source: number;
	support_email: string;
	ticket_id: number;
	to_emails: string[];
	updated_at: string;
	user_id: number;
}
export interface ChatResponseError {
	data: {
		message: string;
		status: string;
	};
}
