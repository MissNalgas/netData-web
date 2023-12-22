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
	Open = 1,
	Closed = 0,
}

export interface ITicket {
	subject: string;
	id: number;
	category: string;
	createdAt: Date;
	customFields: ICustomFields;
	status: TicketStatus;
	agent: string;
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
}

export interface ITicketPerCategory {
	categoriesEn: string[];
	categoriesEs: string[];
	count: number[];
}

export interface ITIcketPerSolution {
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
