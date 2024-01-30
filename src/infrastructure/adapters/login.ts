import { IUser } from "@domain/models";
import { IResponseServiceDTO, IXelcoLoginDTO } from "@infrastructure/model";

export class LoginAdapter {
	static userFromDTO(xelcoLogin: IXelcoLoginDTO): IUser {
		return {
			email: xelcoLogin.idToken?.payload?.email ?? "",
			firstname: xelcoLogin.idToken?.payload?.["custom:name"] ?? "",
			lastname: xelcoLogin.idToken?.payload?.["custom:last_name"] ?? "",
			token: xelcoLogin.idToken?.jwtToken ?? "",
			company: xelcoLogin.idToken?.payload?.["custom:company"] ?? "",
			authotp: xelcoLogin.otpauth ?? null,
		};
	}

	static responseService(
		checkEmail: IResponseServiceDTO
	): IResponseServiceDTO {
		return {
			message: checkEmail.message ?? "",
			status: checkEmail.status ?? 400,
			data: checkEmail.data,
		};
	}
}
