import { IFormResponse } from "@domain/models/register";
import { IAuthService } from "@domain/services/auth.service";
import { createAxios } from "@infrastructure/api/http/axios";
import { VAPID_KEY } from "@shared/constants";
import { getMessaging, getToken, isSupported } from "firebase/messaging";
import firebaseApp from "@shared/utils/firebase";
import {
	IRegisterAccount,
	RegisterResponseError,
	ResponseCheckMailFailed,
	ResponseCheckMailSuccessful,
} from "@infrastructure/store/auth/types";
class AuthRepository implements IAuthService {
	async validateIfEmailExists(
		email: string
	): Promise<ResponseCheckMailSuccessful | ResponseCheckMailFailed> {
		const axios = await createAxios();

		const emailResponse = await axios.post<
			ResponseCheckMailSuccessful | ResponseCheckMailFailed
		>("/api/auth/checkMail", {
			mail: email,
		});

		return emailResponse.data;
	}

	async registerUser(
		info: IRegisterAccount
	): Promise<RegisterResponseError | IFormResponse> {
		const axios = await createAxios();

		const isMessagingSupported = await isSupported();

		let messagingToken = "placeholder";

		if (isMessagingSupported) {
			const messaging = getMessaging(firebaseApp);
			messagingToken = await getToken(messaging, { vapidKey: VAPID_KEY });
		}

		const dataResponse = await axios.post<
			IRegisterAccount,
			RegisterResponseError | IFormResponse
		>("/api/auth/register", {
			mail: info.email,
			name: info.data.name,
			lastName: info.data.lastName,
			company: info.company,
			password: info.data.password,
			token: messagingToken,
		});

		return dataResponse;
	}
}

export const authRepository = new AuthRepository();
