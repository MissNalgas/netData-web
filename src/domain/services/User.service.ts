import { UserData } from "domain/models/User";
import { userRepository } from "infrastructure/api/repositories/user/user.repository";

export const UserDataService = {
	getUserDataService: (id: number): Promise<UserData> =>
		userRepository.getDataUserRepository(id)
};
