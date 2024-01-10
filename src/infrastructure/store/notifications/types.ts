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

export interface Notification {
	id: number;
	ticket_id: null | string;
	ticket_id_inc: null | string;
	message_subject: string;
	message_body: string;
	risk: null;
	status: null | string;
	notificationStatus: string;
	created_at: string;
}
