import { createAsyncThunk } from "@reduxjs/toolkit";
import { notificationRepository } from "@infrastructure/api/repositories/notifications/notifications.repository";

const getNotifications = createAsyncThunk(
	"notifications/getNotifications",
	async (_) => {
		const responseComments =
			await notificationRepository.getNotificationsApi();
		return responseComments;
	}
);

export { getNotifications };
