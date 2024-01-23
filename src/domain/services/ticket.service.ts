import {
	IFilters,
	ITicketPerSolution,
	ITicket,
	ITicketPerCategory,
	ITicketPerPriority,
	ITicketPerWeek,
} from "@domain/models";

export interface ITicketService {
	getAllTickets(_filters: IFilters): Promise<ITicketPerWeek>;
	getTicketDetail(
		_ticketId: number,
		_notificationId: number
	): Promise<ITicket>;
	getTicketPerCategory(_filters: IFilters): Promise<ITicketPerCategory>;
	getTicketsPerPriority(_filters: IFilters): Promise<ITicketPerPriority>;
	getTicketsPerSolution(_filters: IFilters): Promise<ITicketPerSolution>;
	getTicketWeek(_filters: IFilters): Promise<ITicket[]>;
}
