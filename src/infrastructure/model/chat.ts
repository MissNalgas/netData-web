export interface Message {
	id: number;
	user_id: number;
	to_emails: string[];
	body: string;
	body_text: string;
	ticket_id: number;
	created_at: Date;
	updated_at: Date;
	incoming: boolean;
	private: boolean;
	support_email: null | string;
	source: number;
	from_email: null | string;
	cc_emails: any[];
	bcc_emails: any[] | null;
	attachments: any[];
}

export interface SendMessage {
	ticketId: string;
	reply: string;
}
