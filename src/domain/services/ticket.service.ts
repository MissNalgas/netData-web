import {
	IFilterForm,
	ITicket,
	ITicketPerCategory,
	ITicketPerPriority,
	IWeekGraph,
} from "@domain/models";

export interface ITicketService {
	getAllTickets(_filters: IFilterForm): Promise<IWeekGraph>;
	getTicketDetail(
		_ticketId: number,
		_notificationId: number
	): Promise<ITicket>;
	getTicketPerCategory(): Promise<ITicketPerCategory>;
	getTicketsPerPriority(): Promise<ITicketPerPriority>;
}
