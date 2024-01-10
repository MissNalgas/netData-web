import {
	IDashboard,
	IGraphicDay,
	IGraphicWeek,
	TicketPriority,
	filtersGraphicDay,
} from "@domain/models";

export interface IDashboardService {
	getDashboardData(): Promise<IDashboard>;
	getGraphicWeek(_priority: TicketPriority): Promise<IGraphicWeek>;
	getGraphicDay(_filters: filtersGraphicDay): Promise<IGraphicDay>;
}
