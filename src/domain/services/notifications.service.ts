import { NotificationItem } from "@infrastructure/model/notifications";

export interface INotificationsService {
	getNotificationsApi(): Promise<[NotificationItem]>;
}
