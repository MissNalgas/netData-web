import { IUser } from "@domain/models";

export type AppState = {
	user: IUser;
	pending: boolean;
	error: boolean;
};

export interface GetDataUserPayload {
	email: string;
	password: string;
}

export interface ValidateOTPPayload {
	email: string;
	password: string;
	code: number | string;
	secret?: string;
}

export interface Contact {
	subject: string;
	body: string;
}
