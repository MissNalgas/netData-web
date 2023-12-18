import { IFilterForm, ITicket, IWeekGraph } from "@domain/models";
import { ITicketService } from "@domain/services/ticket.service";
import { TicketAdapter } from "@infrastructure/adapters";
import { createAxiosApp } from "@infrastructure/api/http/axios";
import { IWeekGraphDTO } from "@infrastructure/model";
class TicketRepository implements ITicketService {
	async getAllTickets(filters: IFilterForm): Promise<IWeekGraph> {
		//@todo - remove this after the endpoint is working

		return TicketAdapter.weekGraphFromDTO({
			data: [[[2]]],
			hours: [[2]],
			days: [["monday"]],
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
					custom_fields: null as any,
				})),
		});

		/* eslint-disable no-unreachable */
		const axios = await createAxiosApp();

		const params = TicketAdapter.paramsFromFilter(filters);
		const result = await axios.post<IWeekGraphDTO>(
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
}

export const ticketRepository = new TicketRepository();
