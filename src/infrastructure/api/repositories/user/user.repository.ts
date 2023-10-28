import { http } from "infrastructure/api/http/http";
import { UserDTO, ResultType } from "infrastructure/api/http/dto/UserDTO";

export const userRepository = {
	getDataUserRepository: async (id: number): Promise<ResultType> => {
		console.log("id", id);
		const dataUser: any = await http.get<UserDTO[]>(
			"https://randomuser.me/api/"
		);

		const data = dataUser.results[0];
		console.log("data", data);

		return {
			id: Number(data.id.value),
			name: data.name.first,
			document: 12345,
			email: data.email,
			isLogged: true
		};
	}
};
