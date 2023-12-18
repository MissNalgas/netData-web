export interface ITicket {
	subject: string;
	id: number;
	category: string;
	createdAt: Date;
}

export type FilterOption = {
	value: string;
	label: string;
};

export interface IFilterForm {
	category: null | FilterOption;
	status: null | FilterOption;
	risk: null | FilterOption;
	date: null | Date;
}

export interface IWeekGraph {
	tickets: ITicket[];
}
