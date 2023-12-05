export interface IAuthService {
	validateIfEmailExists(_email: string): Promise<boolean>;
}
