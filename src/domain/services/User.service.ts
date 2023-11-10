import { IUser } from "domain/models/User";
import { userRepository } from "infrastructure/api/repositories/user/user.repository";

export const UserDataService = {
	getUserDataService: (id: number): Promise<IUser> =>
		userRepository.getDataUserRepository(id)
};
