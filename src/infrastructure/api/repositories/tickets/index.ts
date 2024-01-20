import {
	IFilters,
	ITicketPerSolution,
	ITicket,
	ITicketPerCategory,
	ITicketPerPriority,
	ITicketPerWeek,
} from "@domain/models";
import { ITicketService } from "@domain/services/ticket.service";
import { TicketAdapter } from "@infrastructure/adapters";
import { createAxiosApp } from "@infrastructure/api/http/axios";
import {
	ITicketPerCategoryDTO,
	ITicketPerPriorityDTO,
	ITicketPerSolutionDTO,
	ITicketsPerWeekDTO,
} from "@infrastructure/model";
class TicketRepository implements ITicketService {
	async getAllTickets(filters: IFilters): Promise<ITicketPerWeek> {
		const axios = await createAxiosApp();

		const params = TicketAdapter.paramsFromFilter(filters);
		const result = await axios.get<ITicketsPerWeekDTO>(
			"/api/xelco/graphic/week",
			{
				params,
			}
		);

		return TicketAdapter.weekGraphFromDTO(result.data);
	}

	async getTicketDetail(
		ticketId: number | string,
		notificationId?: number
	): Promise<ITicket> {
		const axios = await createAxiosApp();
		try {
			const result = await axios.post(
				`/api/xelco/ticketsForId/${ticketId}`,
				{
					idNotification: notificationId,
				}
			);
			return {
				agent: result.data.agent,
				category: result.data.category,
				createdAt: result.data.created_at,
				customFields: result.data.upset,
				id: result.data.id,
				status: result.data.status,
				subject: result.data.subject,
			};
		} catch (error) {
			return Promise.reject(error);
		}
	}

	async getTicketWeek(filters?: IFilters | undefined): Promise<ITicket> {
		const axios = await createAxiosApp();
		try {
			let result;
			const params = TicketAdapter.paramsFromFilter(filters);
			if (filters) {
				result = await axios.get("/api/xelco/ticketsforWeek", {
					params,
				});
			} else {
				result = await axios.get("/api/xelco/ticketsforWeek");
			}

			return result.data.map((ticket: ITicket) => ({
				agent: ticket.agent,
				category: ticket.category,
				createdAt: ticket.created_at,
				customFields: ticket.upset,
				id: ticket.id,
				status: ticket.status,
				subject: ticket.subject,
			}));
		} catch (error) {
			return Promise.reject(error);
		}
	}

	async getTicketPerCategory(
		filters?: IFilters
	): Promise<ITicketPerCategory> {
		const axios = await createAxiosApp();
		const result = await axios.get<ITicketPerCategoryDTO>(
			"/api/xelco/graphic/category",
			{ params: TicketAdapter.paramsFromFilter(filters) }
		);
		return TicketAdapter.ticketPerCategoryFromDTO(result.data);
	}

	async getTicketsPerPriority(
		filters: IFilters
	): Promise<ITicketPerPriority> {
		const axios = await createAxiosApp();
		const result = await axios.get<ITicketPerPriorityDTO>(
			"/api/xelco/graphic/day",
			{
				params: {
					...TicketAdapter.paramsFromFilter(filters),
					type: "general",
					day: "today",
				},
			}
		);
		return TicketAdapter.ticketPerPriorityFromDTO(result.data);
	}

	async getTicketsPerSolution(
		filters: IFilters
	): Promise<ITicketPerSolution> {
		const axios = await createAxiosApp();
		const response = await axios.get<ITicketPerSolutionDTO>(
			"/api/xelco/graphic/solutions",
			{ params: TicketAdapter.paramsFromFilter(filters) }
		);
		return TicketAdapter.ticketPerSolutionFromDTO(response.data);
	}
}

export const ticketRepository = new TicketRepository();
