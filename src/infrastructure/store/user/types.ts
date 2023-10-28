export type CustomerData = {
	id: number;
	email: string;
	name: string;
	document: number;
	isLogged?: boolean;
};

export type AppState = {
	user: CustomerData;
	pending: boolean;
	error: boolean;
};
