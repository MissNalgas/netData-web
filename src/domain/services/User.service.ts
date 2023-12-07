import { IUser } from "@domain/models";
import { IResponseServiceDTO } from "@infrastructure/model";

export interface IUserService {
	getUser(_email: string, _password: string): Promise<IUser>;
	deleteAccout(): Promise<IUser>;
}

export interface IRecoverPasswordService {
	checkEmail(_email: string): Promise<IResponseServiceDTO>;
	recoverPassword(_email: string): Promise<IResponseServiceDTO>;
	changePassword(
		_email: string,
		_code: string,
		_newPassword: string
	): Promise<IResponseServiceDTO>;
}
