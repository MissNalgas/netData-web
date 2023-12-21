import {
	IFilterForm,
	ITIcketPerSolution,
	ITicket,
	ITicketPerCategory,
	ITicketPerPriority,
	ITicketPerWeek,
} from "@domain/models";

export interface ITicketService {
	getAllTickets(_filters: IFilterForm): Promise<ITicketPerWeek>;
	getTicketDetail(
		_ticketId: number,
		_notificationId: number
	): Promise<ITicket>;
	getTicketPerCategory(): Promise<ITicketPerCategory>;
	getTicketsPerPriority(): Promise<ITicketPerPriority>;
	getTicketsPerSolution(): Promise<ITIcketPerSolution>;
}
