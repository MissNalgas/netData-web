export interface confirmPasswordDTO {
	code?: string;
}

export interface getDataChangePasswordDTO {
	mail: string;
	code: string;
	newPassword: string;
}

export interface IResponseServiceDTO {
	message: string;
	status: number;
	data: any;
	code?: string;
}
