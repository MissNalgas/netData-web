import { IUser } from "@domain/models";
import { IUserService } from "@domain/services/User.service";
import { LoginAdapter } from "@infrastructure/adapters/login";
import { createAxios } from "@infrastructure/api/http/axios";
import { IXelcoInscriptionDTO, IXelcoLoginDTO } from "@infrastructure/model";

class UserRepository implements IUserService {

    async getUser(email: string, password: string): Promise<IUser> {
		const axios = await createAxios();
		const registerTokenResponse = await axios.post<IXelcoInscriptionDTO>("/api/xelco/inscription", {
			token: "@todo:getTokenFromFirebase",
		});
		const xelcoToken = registerTokenResponse.data.response;
		if (!xelcoToken) throw new Error("Xelco inscription did not return a valid token");

		const loginResponse = await axios.post<IXelcoLoginDTO>("/api/auth/login", {
			token: xelcoToken,
			mail: email,
			password,
		});

		return LoginAdapter.userFromDTO(loginResponse.data);
    }
}

export const userRepository = new UserRepository();
