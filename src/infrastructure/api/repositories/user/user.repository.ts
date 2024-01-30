import { IOTPValidation, IUser } from "@domain/models";
import { IUserService } from "@domain/services/User.service";
import { ContactAdapter } from "@infrastructure/adapters";
import { LoginAdapter } from "@infrastructure/adapters/login";
import { createAxios, createAxiosApp } from "@infrastructure/api/http/axios";
import {
	IResponseServiceDTO,
	IXelcoErrorDTO,
	IXelcoInscriptionDTO,
	IXelcoLoginDTO,
} from "@infrastructure/model";
import { Contact } from "@infrastructure/store/user/types";
import { VAPID_KEY, XELCO_TOKEN } from "@shared/constants";
import { SentriaError } from "@shared/utils/error";
import { AuthError } from "@shared/utils/error/auth";
import firebaseApp from "@shared/utils/firebase";
import { getMessaging, getToken, isSupported } from "firebase/messaging";

class UserRepository implements IUserService {
	async getUser(email: string, password: string): Promise<IUser> {
		const axios = await createAxios();

		const isMessagingSupported = await isSupported();

		/* If the browser does not support push notifications we send a garbage token
		 * This because the token field is required in the current login implementation
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

		typeof window !== "undefined" &&
			window.localStorage.setItem(XELCO_TOKEN, xelcoToken);

		const loginResponse = await axios.post<
			IXelcoLoginDTO | IXelcoErrorDTO | any
		>("/api/auth/login", {
			token: xelcoToken,
			mail: email,
			password,
			device: "web",
		});

		localStorage.setItem(
			"tokenApp",
			loginResponse?.data?.idToken?.jwtToken ?? ""
		);

		if (localStorage.getItem("guide") === null)
			localStorage.setItem("guide", "true");

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

	async validateOtp(
		email: string,
		password: string,
		code: string | number,
		secret?: string | undefined
	): Promise<IOTPValidation> {
		const xelcoToken =
			typeof window !== "undefined" &&
			window.localStorage.getItem(XELCO_TOKEN);
		const axios = await createAxios();
		const response = await axios.post("/api/auth/otp", {
			mail: email,
			password,
			secret,
			otp: code,
			token: xelcoToken,
		});

		const token = response.data.token;

		if (!token)
			throw new SentriaError(
				AuthError.InvalidToken,
				"The OTP token is invalid"
			);

		if (typeof window !== "undefined") {
			window.localStorage.setItem("tokenApp", response.data.token);
		}

		return {
			token: response.data.token,
		};
	}

	async checkEmail(email: string): Promise<IResponseServiceDTO> {
		try {
			const axios = await createAxios();
			const body = {
				mail: email,
			};
			const checkEmailResponse = await axios.post(
				"/api/auth/checkMail",
				body
			);
			return LoginAdapter.responseService({
				status: checkEmailResponse.status,
				message: checkEmailResponse.data.message,
				data: checkEmailResponse.data,
			});
		} catch (error) {
			throw error;
		}
	}

	async deleteAccout(): Promise<IUser> {
		const axios = await createAxiosApp();
		const deleteAccoutResponse = await axios.post<IXelcoLoginDTO>(
			"/api/auth/deleteAccount"
		);

		return LoginAdapter.userFromDTO(deleteAccoutResponse.data);
	}

	async contact(body: Contact): Promise<any> {
		const axios = await createAxiosApp();
		const contactResponse = await axios.post<any>(
			"/api/xelco/sendMail",
			body
		);

		return ContactAdapter.userFromDTO(contactResponse.data);
	}
}

export const userRepository = new UserRepository();
