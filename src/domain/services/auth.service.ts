import { IFormResponse } from "@domain/models";
import {
	IRegisterAccount,
	RegisterResponseError,
	ResponseCheckMailFailed,
	ResponseCheckMailSuccessful,
} from "@infrastructure/store/auth/types";

export interface IAuthService {
	validateIfEmailExists(
		_email: string
	): Promise<ResponseCheckMailSuccessful | ResponseCheckMailFailed>;
	registerUser(
		_data: IRegisterAccount
	): Promise<RegisterResponseError | IFormResponse>;
}
