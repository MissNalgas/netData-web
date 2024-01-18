import {
	ICustomFields,
	IFilters,
	ITicketPerSolution,
	ITicket,
	ITicketPerCategory,
	ITicketPerPriority,
	ITicketPerWeek,
	TicketStatus,
} from "@domain/models";
import {
	IFilterParamDTO,
	ITicketCustomFieldsDTO,
	ITicketDTO,
	ITicketPerCategoryDTO,
	ITicketPerPriorityDTO,
	PriorityDTO,
	StatusDTO,
	ITicketsPerWeekDTO,
	ITicketPerSolutionDTO,
} from "@infrastructure/model";
import { formatDateDTO } from "@shared/utils";

export class TicketAdapter {
	static paramsFromFilter(filter: IFilters): IFilterParamDTO {
		return {
			priority: filter.risk
				? (filter.risk.value as PriorityDTO)
				: PriorityDTO.All,
			status: filter.status
				? (filter.status.value as StatusDTO)
				: StatusDTO.Open,
			category: filter.category ? filter.category.value : undefined,
			date: filter.date ? formatDateDTO(filter.date) : undefined,
		};
	}

	static customFieldsFromDTO(
		customFieldsDTO: ITicketCustomFieldsDTO
	): ICustomFields {
		return {
			persistent: customFieldsDTO.persistencia,
			objectives: customFieldsDTO.objetivos,
			user: customFieldsDTO.usuarios,
			system: customFieldsDTO.sistema,
			https: customFieldsDTO.ttps,
			whatWeNeedYouToDo: customFieldsDTO.que_necesitamos_hacer,
			whatWeAreDoing: customFieldsDTO.que_estamos_haciendo,
		};
	}

	static ticketFromDTO(ticketDTO: ITicketDTO): ITicket {
		return {
			subject: ticketDTO.subject,
			id: ticketDTO.id,
			category: ticketDTO.category,
			createdAt: new Date(ticketDTO.created_at),
			customFields: TicketAdapter.customFieldsFromDTO(
				ticketDTO.custom_fields
			),
			status: ticketDTO.status as unknown as TicketStatus,
			agent: ticketDTO.agent,
		};
	}

	static weekGraphFromDTO(weehGraphDTO: ITicketsPerWeekDTO): ITicketPerWeek {
		return {
			tickets: weehGraphDTO.tickets.map(TicketAdapter.ticketFromDTO),
			data: weehGraphDTO.data,
			hours: weehGraphDTO.hours,
			days: weehGraphDTO.days,
		};
	}

	static ticketPerCategoryFromDTO(
		tickerPerCategoryDTO: ITicketPerCategoryDTO
	): ITicketPerCategory {
		return {
			categoriesEn: tickerPerCategoryDTO.categories_en,
			categoriesEs: tickerPerCategoryDTO.categories_es,
			count: tickerPerCategoryDTO.count,
		};
	}

	static ticketPerPriorityFromDTO(
		tickerPerPriorityDTO: ITicketPerPriorityDTO
	): ITicketPerPriority {
		return {
			low: tickerPerPriorityDTO.Low,
			medium: tickerPerPriorityDTO.Medium,
			high: tickerPerPriorityDTO.High,
			urgent: tickerPerPriorityDTO.Urgent,
			tickets: tickerPerPriorityDTO.tickets,
		};
	}

	static ticketPerSolutionFromDTO(
		solutionDTO: ITicketPerSolutionDTO
	): ITicketPerSolution {
		return {
			solutionsEn: solutionDTO.solutions_en,
			solutionsEs: solutionDTO.solutions_es,
			counts: solutionDTO.count,
		};
	}
}
