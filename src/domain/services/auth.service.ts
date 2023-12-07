import { IFormResponse } from "@domain/models";
import {
	IRegisterAccount,
	RegisterResponseError,
} from "@infrastructure/store/auth/types";

export interface IAuthService {
	validateIfEmailExists(_email: string): Promise<boolean>;
	registerUser(
		_data: IRegisterAccount
	): Promise<RegisterResponseError | IFormResponse>;
}
