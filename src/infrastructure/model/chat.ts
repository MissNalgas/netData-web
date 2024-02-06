export interface Message {
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

export interface SendMessage {
	ticketId: string;
	reply: string;
}

export interface IResponseServiceChatDTO {
	statusText: string;
	status: number | string;
	data: any;
	code?: string;
}
