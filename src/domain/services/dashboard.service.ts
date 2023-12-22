import {
	IDashboard,
	IGraphicDay,
	IGraphicWeek,
	Priority,
	filtersGraphicDay,
} from "@domain/models";

export interface IDashboardService {
	getDashboardData(): Promise<IDashboard>;
	getGraphicWeek(_priority: Priority): Promise<IGraphicWeek>;
	getGraphicDay(_filters: filtersGraphicDay): Promise<IGraphicDay>;
}
