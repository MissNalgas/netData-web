import { IUser } from "@domain/models";

export type AppState = {
	user: IUser;
	pending: boolean;
	error: boolean;
};
