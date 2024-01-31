export interface GetDataChangePasswordDTO {
	mail: string;
	code: string;
	newPassword: string;
}

export interface IResponseServiceDTO {
	payload?: any;
	message:
		| string
		| "SUCCESS"
		| "FAILED"
		| "CodeMismatchException"
		| "ExpiredCodeException";
	status: number | string;
	data: any;
	code?: string;
}
