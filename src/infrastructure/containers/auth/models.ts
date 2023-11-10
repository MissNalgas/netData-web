import { IUser } from "@domain/models";

export interface IUserContext {
	user?: IUser;
	login() : void;
	logOut() : void;
}
