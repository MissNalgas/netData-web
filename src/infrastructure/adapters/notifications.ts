import {
	NotificationResponseError,
	NotificationState,
} from "@infrastructure/store/notifications/types";

export class NotificationsAdapter {
	static responseService(dataResponse: NotificationState): NotificationState {
		return {
			message: dataResponse.message,
			status: dataResponse.status,
			data: dataResponse.data,
			success: dataResponse.success,
			error: dataResponse.error,
		};
	}
	static responseServiceError(
		dataResponse: NotificationResponseError
	): NotificationResponseError {
		return {
			message: dataResponse.message,
			status: dataResponse.status,
			success: dataResponse.status === "200",
			error: dataResponse.status !== "200",
		};
	}
}
