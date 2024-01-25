export type IUser = {
	email: string;
	firstname: string;
	lastname: string;
	token: string;
	company: any;
	authotp: string | null;
};

export interface IOTPValidation {
	token: string;
}
