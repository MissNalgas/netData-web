import { ICustomFields, IFilterForm, ITicket, ITicketPerCategory, ITicketPerPriority, IWeekGraph } from "@domain/models";
import {
	IFilterParamDTO,
	ITicketCustomFieldsDTO,
	ITicketDTO,
	ITicketPerCategoryDTO,
	ITicketPerPriorityDTO,
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

	static customFieldsFromDTO(customFieldsDTO: ITicketCustomFieldsDTO) : ICustomFields {
		return {
			persistent: customFieldsDTO.persistencia,
			objectives: customFieldsDTO.objetivos,
			user: customFieldsDTO.usuarios,
			system: customFieldsDTO.sistema,
			https: customFieldsDTO.ttps,
			whatWeNeedYouToDo: customFieldsDTO.que_necesitamos_hacer,
			whatWeAreDoing: customFieldsDTO.que_estamos_haciendo,
		}
	}

	static ticketFromDTO(ticketDTO: ITicketDTO): ITicket {
		return {
			subject: ticketDTO.subject,
			id: ticketDTO.id,
			category: ticketDTO.category,
			createdAt: new Date(ticketDTO.created_at),
			customFields: TicketAdapter.customFieldsFromDTO(ticketDTO.custom_fields),
		};
	}

	static weekGraphFromDTO(weehGraphDTO: IWeekGraphDTO): IWeekGraph {
		return {
			tickets: weehGraphDTO.tickets.map(TicketAdapter.ticketFromDTO),
		};
	}

	static ticketPerCategoryFromDTO(tickerPerCategoryDTO: ITicketPerCategoryDTO) : ITicketPerCategory {
		return {
			categoriesEn: tickerPerCategoryDTO.categories_en,
			categoriesEs: tickerPerCategoryDTO.categories_es,
			count: tickerPerCategoryDTO.count,
		}
	}

	static ticketPerPriorityFromDTO(tickerPerPriorityDTO: ITicketPerPriorityDTO) : ITicketPerPriority {
		return {
			low: tickerPerPriorityDTO.Low,
			medium: tickerPerPriorityDTO.Medium,
			high: tickerPerPriorityDTO.High,
			urgent: tickerPerPriorityDTO.Urgent,
			tickets: tickerPerPriorityDTO.tickets,
		}
	}
}
