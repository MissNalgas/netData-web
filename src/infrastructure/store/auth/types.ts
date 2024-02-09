export type AppState = {
	validationEmail: ResponseCheckMailFailed | ResponseCheckMailFailed;
	pending: boolean;
	error: boolean;
};

export interface GetEmailUserPayload {
	email: string;
}

export interface ResponseCheckMailSuccessful {
	id: number;
	idRequester: number;
	name: string;
	message: string;
}

export interface ResponseCheckMailFailed {
	message: string;
	id?: number;
}

export interface IRegisterAccount {
	data: {
		name: string;
		lastName: string;
		company?: string;
		password: string;
		repeatPassword: string;
	};
	email: string;
	company: string;
}

export interface IFormRegister {
	name: string;
	lastName: string;
	company?: string;
	password: string;
	repeatPassword: string;
}

export interface RegisterResponseError {
	data: {
		message: string;
		status: number;
	};
}
