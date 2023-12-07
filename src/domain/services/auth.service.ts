import { IFormResponse } from "@domain/models";
import {
	IRegisterAccount,
	RegisterResponseError,
} from "@infrastructure/store/auth/types";

export interface IAuthService {
	validateIfEmailExists(_email: string): Promise<string>;
	registerUser(
		_data: IRegisterAccount
	): Promise<RegisterResponseError | IFormResponse>;
}
