import { IUser } from "@domain/models";

export interface IUserContext {
	user?: IUser;
	login(_email: string, _password: string): Promise<void>;
	logOut(): void;
}
