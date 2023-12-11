export type AppState = {
	validationEmail: boolean | string;
	pending: boolean;
	error: boolean;
};

export interface GetEmailUserPayload {
	email: string;
}

export interface IRegisterAccount {
	data: {
		name: string;
		lastName: string;
		company: string;
		password: string;
		repeatPassword: string;
	};
	email: string;
}

export interface IFormRegister {
	name: string;
	lastName: string;
	company: string;
	password: string;
	repeatPassword: string;
}

export interface RegisterResponseError {
	data: {
		message: string;
		status: string;
	};
}
