import { IRegister, registerRequest } from "@domain/models/register";
import { IAuthService } from "@domain/services/auth.service";
import { createAxios } from "@infrastructure/api/http/axios";

class AuthRepository implements IAuthService {
	async validateIfEmailExists(email: string): Promise<boolean> {
		const axios = await createAxios();

		const emailResponse = await axios.post<IRegister>(
			"/api/auth/checkMail",
			{
				mail: email,
			}
		);

		return emailResponse.data.message === "Mail already exist";
	}

	async registerUser(data: registerRequest): Promise<boolean> {
		const axios = await createAxios();

		const emailResponse = await axios.post<IRegister>(
			"/api/auth/checkMail",
			{
				mail: data.mail,
				name: data.name,
				lastName: data.lastName,
				company: data.company,
				password: data.password,
				token: data.token,
			}
		);

		return emailResponse.data.message === "Mail already exist";
	}
}

export const authRepository = new AuthRepository();
