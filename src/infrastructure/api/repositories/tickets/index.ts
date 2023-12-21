import {
	IFilterForm,
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
	ITicketsPerWeekDTO,
} from "@infrastructure/model";
class TicketRepository implements ITicketService {
	async getAllTickets(filters: IFilterForm): Promise<ITicketPerWeek> {
		//@todo - remove this after the endpoint is working

		const mockData = TicketAdapter.weekGraphFromDTO({
			data: [
				[2, 3, 1],
				[1, 2, 3],
			],
			hours: [1, 2, 3],
			days: ["monday"],
			tickets: Array(5)
				.fill(null)
				.map((_, i) => ({
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
					status: 23,
					created_at: new Date().toString(),
					updated_at: new Date().toString(),
					requested_for_id: 2,
					to_emails: null,
					id: i,
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
		ticketId: number,
		notificationId: number
	): Promise<ITicket> {
		const axios = await createAxiosApp();

		const result = await axios.post(`/api/xelco/ticketsForId/${ticketId}`, {
			id: notificationId,
		});

		return result.data;
	}

	async getTicketPerCategory(): Promise<ITicketPerCategory> {
		//@todo - Remove mock data
		return TicketAdapter.ticketPerCategoryFromDTO({
			categories_es: ["Categoria 1", "Categoria 2"],
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
}

export const ticketRepository = new TicketRepository();
