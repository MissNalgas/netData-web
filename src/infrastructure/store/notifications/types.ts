export type NotificationState = {
	data: NotificationItem[];
	success: boolean;
	pending?: boolean;
	error: boolean;
	message: string;
	status: string | number;
};

export interface NotificationItem {
	id: number;
	ticket_id: any;
	ticket_id_inc: string;
	message_subject: string;
	message_body: string;
	risk: string;
	status: any;
	notificationStatus: string;
	created_at: string;
}

export interface NotificationResponseError {
	message: string;
	status: string;
	success: boolean;
	pending?: boolean;
	error: boolean;
}
