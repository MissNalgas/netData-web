import { IUser } from "@domain/models";
import { ValidateOTPPayload } from "@infrastructure/store/user/types";

export interface IUserContext {
	user?: IUser;
	login(_email: string, _password: string): Promise<IUser>;
	logOut(): void;
	validateOtp(_payload: ValidateOTPPayload): Promise<string>;
}
