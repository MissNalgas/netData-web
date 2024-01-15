import {
	IFilters,
	ITIcketPerSolution,
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
		//@todo - remove this after the endpoint is working

		const mockData = TicketAdapter.weekGraphFromDTO({
			data: [
				[2, 3, 1],
				[1, 2, 3],
			],
			hours: [1, 2, 3],
			days: ["monday"],
			tickets: Array(100)
				.fill(null)
				.map((_, i) => ({
					agent: "Francis Parra",
					subject: "Subject",
					group_id: 23,
					department_id: 23,
					category: "Category",
					sub_category: "my category",
					item_category: "Item category",
					requester_id: 2,
					responder_id: 12,
					due_by: new Date().toString(),
					fr_escalated: false,
					deleted: false,
					spam: false,
					email_config_id: "asda@email.com",
					fwd_emails: ["example@example.com"],
					reply_cc_emails: ["example@example.com"],
					cc_emails: ["dsadas"],
					is_escalated: false,
					fr_due_by: new Date().toString(),
					priority: 2,
					source: 3,
					status: 1,
					created_at: new Date().toString(),
					updated_at: new Date().toString(),
					requested_for_id: 2,
					to_emails: null,
					id: i + 10,
					type: "id",
					description: "descripotion",
					description_text: "description text",
					workspace_id: 3,
					custom_fields: {
						persistencia: "lorem",
						objetivos: "Mejorar 1, 2, 3",
						usuarios: "paco1, paco2, paco3",
						sistema: "Sistema 1",
						ttps: "SSL",
						que_necesitamos_hacer: "Mejorar A",
						que_estamos_haciendo: "Mejorando B",
					} as any,
				})),
		});
		return mockData;

		/* eslint-disable no-unreachable */
		const axios = await createAxiosApp();

		const params = TicketAdapter.paramsFromFilter(filters);
		const result = await axios.post<ITicketsPerWeekDTO>(
			"/api/xelco/graphic/week",
			params
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

	async getTicketWeek(): Promise<ITicket> {
		const axios = await createAxiosApp();
		try {
			const result = await axios.get(`/api/xelco/ticketsforWeek`);
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

	async getTicketPerCategory(): Promise<ITicketPerCategory> {
		//@todo - Remove mock data
		return TicketAdapter.ticketPerCategoryFromDTO({
			categories_es: ["Categoría 1", "Categoría 2"],
			categories_en: ["Category 1", "Category 2"],
			count: [4, 3],
		});

		const axios = await createAxiosApp();
		const result = await axios.get<ITicketPerCategoryDTO>(
			"/api/xelco/graphic/category"
		);
		return TicketAdapter.ticketPerCategoryFromDTO(result.data);
	}

	async getTicketsPerPriority(): Promise<ITicketPerPriority> {
		//@todo - Remove mock data
		return TicketAdapter.ticketPerPriorityFromDTO({
			Low: 2,
			Medium: 3,
			High: 2,
			Urgent: 3,
			total: 10,
			tickets: 123,
		});

		const axios = await createAxiosApp();
		const result = await axios.get<ITicketPerPriorityDTO>(
			"/api/xelco/graphic/solutions"
		);
		return TicketAdapter.ticketPerPriorityFromDTO(result.data);
	}

	async getTicketsPerSolution(): Promise<ITIcketPerSolution> {
		return TicketAdapter.ticketPerSolutionFromDTO({
			solutions_es: ["Solucion A", "Solucion B", "Solucion C"],
			solutions_en: ["Solution A", "Solution B", "Solution C"],
			count: [6, 12, 18],
		});

		const axios = await createAxiosApp();
		const response = await axios.get<ITicketPerSolutionDTO>(
			"/api/xelco/graphic/solutions"
		);
		return TicketAdapter.ticketPerSolutionFromDTO(response.data);
	}
}

export const ticketRepository = new TicketRepository();
