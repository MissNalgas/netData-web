import { IRecoverPasswordService } from "@domain/services/User.service";
import { LoginAdapter } from "@infrastructure/adapters/login";
import { createAxios } from "@infrastructure/api/http/axios";
import { IResponseServiceDTO } from "@infrastructure/model";

class RecoverPasswordRepository implements IRecoverPasswordService {
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

		if (confirmPasswordResponse?.data?.code !== undefined) {
			if (confirmPasswordResponse.data.code === "CodeMismatchException") {
				message = "CodeMismatchException";
			} else if (
				confirmPasswordResponse.data.code === "ExpiredCodeException"
			) {
				message = "ExpiredCodeException";
			}
		}
		if (confirmPasswordResponse.status === 201 && message !== "SUCCESS") {
			message = "FAILED";
		}

		return LoginAdapter.responseService({
			message: message,
			status: confirmPasswordResponse.status,
			data: confirmPasswordResponse.data,
		});
	}
}

export const userRecoverRepository = new RecoverPasswordRepository();
