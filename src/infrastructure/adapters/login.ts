import { IUser } from "@domain/models";
import { IXelcoLoginDTO } from "@infrastructure/model";

export class LoginAdapter {
	static userFromDTO(xelcoLogin: IXelcoLoginDTO) : IUser {
		return {
			email: xelcoLogin.idToken?.payload?.email || "",
			firstname: xelcoLogin.idToken?.payload?.["custom:name"] || "",
			lastname: xelcoLogin.idToken?.payload?.["custom:last_name"] || "",
			token: xelcoLogin.idToken?.jwtToken || "",
		}
	}
}
