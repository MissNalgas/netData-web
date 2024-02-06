import {
	IDashboard,
	IGraphicDay,
	IGraphicWeek,
	TicketPriority,
	FiltersGraphicDay,
} from "@domain/models";

export interface IDashboardService {
	getDashboardData(): Promise<IDashboard>;
	getGraphicWeek(_priority: TicketPriority): Promise<IGraphicWeek>;
	getGraphicDay(_filters: FiltersGraphicDay): Promise<IGraphicDay>;
}
