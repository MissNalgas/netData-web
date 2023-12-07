import { IUser } from "@domain/models";
import { IUserService } from "@domain/services/User.service";
import { LoginAdapter } from "@infrastructure/adapters/login";
import { createAxios } from "@infrastructure/api/http/axios";
import {
	IXelcoErrorDTO,
	IXelcoInscriptionDTO,
	IXelcoLoginDTO,
} from "@infrastructure/model";
import { VAPID_KEY } from "@shared/constants";
import { SentriaError } from "@shared/utils/error";
import { AuthError } from "@shared/utils/error/auth";
import firebaseApp from "@shared/utils/firebase";
import { getMessaging, getToken, isSupported } from "firebase/messaging";

class UserRepository implements IUserService {
	async getUser(email: string, password: string): Promise<IUser> {
		const axios = await createAxios();

		const isMessagingSupported = await isSupported();

		/* If the browser does not support push notifications we send a garbage token
		 * This because the token is required in the current login implementation
		 */
		let messagingToken = "placeholder";

		if (isMessagingSupported) {
			const messaging = getMessaging(firebaseApp);
			messagingToken = await getToken(messaging, { vapidKey: VAPID_KEY });
		}

		const registerTokenResponse = await axios.post<IXelcoInscriptionDTO>(
			"/api/xelco/inscription",
			{
				token: messagingToken,
			}
		);
		const xelcoToken = registerTokenResponse.data.response;
		if (!xelcoToken)
			throw new Error("Xelco inscription did not return a valid token");

		const loginResponse = await axios.post<IXelcoLoginDTO | IXelcoErrorDTO>(
			"/api/auth/login",
			{
				token: xelcoToken,
				mail: email,
				password,
			}
		);

		const code = "code" in loginResponse.data && loginResponse.data.code;

		if (code === "NotAuthorizedException") {
			throw new SentriaError(
				AuthError.NotAuthorized,
				"Correo o contraseña no válido"
			);
		}

		if (code === "UserNotConfirmedException") {
			throw new SentriaError(
				AuthError.NotConfirmed,
				"¡Tu usuario se encuentra inactivo! Valida tu cuenta a través del enlace enviado a tu bandeja de entrada o al spam del correo registrado, ten en cuenta que este enlace tiene una vigencia de 24 horas, de lo contrario deberás solicitar un correo nuevo."
			);
		}

		if (code) {
			throw new SentriaError(
				AuthError.NotRegistered,
				"Usuario no registrado"
			);
		}

		return LoginAdapter.userFromDTO(loginResponse.data as IXelcoLoginDTO);
	}
}

export const userRepository = new UserRepository();
