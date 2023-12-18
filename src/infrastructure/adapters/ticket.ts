import { IFilterForm, ITicket, IWeekGraph } from "@domain/models";
import {
	IFilterParamDTO,
	ITicketDTO,
	IWeekGraphDTO,
	PriorityDTO,
	StatusDTO,
} from "@infrastructure/model";
import { formatDateDTO } from "@shared/utils";

export class TicketAdapter {
	static paramsFromFilter(filter: IFilterForm): IFilterParamDTO {
		return {
			priority: filter.risk
				? (filter.risk.value as PriorityDTO)
				: undefined,
			status: filter.status
				? (filter.status.value as StatusDTO)
				: undefined,
			category: filter.category ? filter.category.value : undefined,
			date: filter.date ? formatDateDTO(filter.date) : undefined,
		};
	}

	static ticketFromDTO(ticketDTO: ITicketDTO): ITicket {
		return {
			subject: ticketDTO.subject,
			id: ticketDTO.id,
			category: ticketDTO.category,
			createdAt: new Date(ticketDTO.created_at),
		};
	}

	static weekGraphFromDTO(weehGraphDTO: IWeekGraphDTO): IWeekGraph {
		return {
			tickets: weehGraphDTO.tickets.map(TicketAdapter.ticketFromDTO),
		};
	}
}
