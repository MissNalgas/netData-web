import { IUser } from "@domain/models";

export interface IUserService {
	getUser(_email: string, _password: string): Promise<IUser>;
}
