import { IFilterForm, ITicket, IWeekGraph } from "@domain/models";

export interface ITicketService {
	getAllTickets(_filters: IFilterForm): Promise<IWeekGraph>;
	getTicketDetail(
		_ticketId: number,
		_notificationId: number
	): Promise<ITicket>;
}
