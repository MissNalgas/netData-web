import { IRecoverPasswordService } from "@domain/services/User.service";
import { LoginAdapter } from "@infrastructure/adapters/login";
import { createAxios } from "@infrastructure/api/http/axios";
import { IResponseServiceDTO } from "@infrastructure/model";

class recoverPasswordRepository implements IRecoverPasswordService {
	async checkEmail(email: string): Promise<IResponseServiceDTO> {
		const axios = await createAxios();
		const body = {
			mail: email,
		};
		const checkEmailResponse = await axios.post<IResponseServiceDTO>(
			"/api/auth/checkMail",
			body
		);
		return LoginAdapter.checkEmailDTO({
			status: checkEmailResponse.status,
			message: checkEmailResponse.data.message,
			data: checkEmailResponse.data,
		});
	}
	async recoverPassword(email: string): Promise<IResponseServiceDTO> {
		const axios = await createAxios();

		const recoverResponse = await axios.post<IResponseServiceDTO>(
			"/api/auth/recoverPassword",
			{
				mail: email,
			}
		);

		return LoginAdapter.responseService({
			message: recoverResponse.data.message,
			status: recoverResponse.status,
			data: recoverResponse.data,
		});
	}
	async changePassword(
		mail: string,
		code: string,
		newPassword: string
	): Promise<IResponseServiceDTO> {
		const axios = await createAxios();
		const body = {
			mail,
			code,
			newPassword,
		};

		const confirmPasswordResponse = await axios.post<IResponseServiceDTO>(
			"/api/auth/confirmPassword",
			body
		);
		let message = confirmPasswordResponse.data.message;

		if (
			confirmPasswordResponse &&
			confirmPasswordResponse.data.code !== undefined
		) {
			if (confirmPasswordResponse.data.code === "CodeMismatchException") {
				message = "CodeMismatchException";
			} else if (
				confirmPasswordResponse.data.code === "ExpiredCodeException"
			) {
				message = "ExpiredCodeException";
			}
		}

		return LoginAdapter.responseService({
			message: message,
			status: confirmPasswordResponse.status,
			data: confirmPasswordResponse.data,
		});
	}
}

export const userRecoverRepository = new recoverPasswordRepository();
