export interface confirmPasswordDTO {
	code?: string;
}

export interface getDataChangePasswordDTO {
	mail: string;
	code: string;
	newPassword: string;
}

export interface IResponseServiceDTO {
	payload?: any;
	message: string | "SUCCESS";
	status: number;
	data: any;
	code?: string;
}
