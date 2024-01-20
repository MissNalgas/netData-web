export interface ICustomFields {
	persistent: string;
	objectives: string;
	user: string;
	system: string;
	https: string;
	whatWeNeedYouToDo: string;
	whatWeAreDoing: string;
}

/* eslint-disable no-unused-vars */
export enum TicketStatus {
	Open = 2,
	Pending = 3,
	Closed = 5,
}

export interface ITicket {
	filter?(arg0: (item?: ITicket) => boolean): unknown;
	subject: string;
	id: number;
	category: string;
	createdAt: Date;
	customFields: ICustomFields;
	status: TicketStatus;
	agent: string;
	created_at?: Date;
	upset?: string;
}

export type FilterOption = {
	value: string;
	label: string;
};

export interface IFilters {
	category: null | FilterOption;
	status: null | FilterOption;
	risk: null | FilterOption;
	date: null | Date;
	id: null | number;
}

export interface ITicketPerCategory {
	categoriesEn: string[];
	categoriesEs: string[];
	count: number[];
}

export interface ITicketPerSolution {
	solutionsEn: string[];
	solutionsEs: string[];
	counts: number[];
}

export interface ITicketPerPriority {
	low: number;
	medium: number;
	high: number;
	urgent: number;
	tickets: number;
}

/* eslint-disable no-unused-vars */
export enum TicketPriority {
	Low = "low",
	Medium = "medium",
	High = "high",
	Urgent = "urgent",
	All = "all",
}

export interface ITicketPerWeek {
	data: number[][];
	hours: number[];
	days: string[];
	tickets: ITicket[];
}
