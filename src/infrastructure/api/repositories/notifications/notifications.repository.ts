import { createAxiosApp } from "@infrastructure/api/http/axios";

import { NotificationItem } from "@infrastructure/model/notifications";
import { INotificationsService } from "@domain/services/notifications.service";
import { NotificationsAdapter } from "@infrastructure/adapters/notifications";

class NotificationsRepository implements INotificationsService {
	async getNotificationsApi(): Promise<[NotificationItem] | any> {
		const axios = await createAxiosApp();

		try {
			const getCommentsResponse = await axios.get<
				[NotificationItem] | any
			>("/api/xelco/getNotificationV2");
			let message = "SUCCESS";
			if (getCommentsResponse.status === 201 && message !== "SUCCESS") {
				message = "FAILED";
			}
			return NotificationsAdapter.responseService({
				message: message,
				status: getCommentsResponse.status,
				data: getCommentsResponse.data,
				success: true,
				error: false,
			});
		} catch (error: any) {
			let messageError = "ERROR";

			if (error.response.status === 401) {
				messageError = "TokenExpiredError";
			}
			return NotificationsAdapter.responseServiceError({
				message: messageError,
				status: error.response.status,
				success: false,
				error: true,
			});
		}
	}
}

export const notificationRepository = new NotificationsRepository();
