import { IOTPValidation, IUser } from "@domain/models";
import { IResponseServiceDTO } from "@infrastructure/model";
import { Contact } from "@infrastructure/store/user/types";

export interface IUserService {
	getUser(_email: string, _password: string): Promise<IUser>;
	validateOtp(
		_email: string,
		_password: string,
		_code: string | number,
		_secret?: string
	): Promise<IOTPValidation>;
	deleteAccout(): Promise<IUser>;
	checkEmail(_email: string): Promise<IResponseServiceDTO>;
	contact(_body: Contact): Promise<any>;
}

export interface IRecoverPasswordService {
	recoverPassword(_email: string): Promise<IResponseServiceDTO>;
	changePassword(
		_email: string,
		_code: string,
		_newPassword: string
	): Promise<IResponseServiceDTO>;
}
