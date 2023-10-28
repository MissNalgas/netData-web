export type ResultType = {
	id: number;
	name: string;
	email: string;
	document: number;
	isLogged: boolean;
};
export interface UserDTO {
	results: ResultType[];
}
