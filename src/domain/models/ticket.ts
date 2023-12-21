export interface ICustomFields {
	persistent: string;
	objectives: string;
	user: string;
	system: string;
	https: string;
	whatWeNeedYouToDo: string;
	whatWeAreDoing: string;
}
export interface ITicket {
	subject: string;
	id: number;
	category: string;
	createdAt: Date;
	customFields: ICustomFields;
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

export interface ITicketPerCategory {
	categoriesEn: string[];
	categoriesEs: string[];
	count: number[];
}

export interface ITicketPerPriority {
	low: number;
	medium: number;
	high: number;
	urgent: number;
	tickets: number;
}

export interface ITicketPerWeek {
	data: number[][];
	hours: number[];
	days: string[];
	tickets: ITicket[];
}
