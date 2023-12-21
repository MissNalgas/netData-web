import { IDashboard, IGraphicWeek, Priority } from "@domain/models";

export interface IDashboardService {
	getDashboardData(): Promise<IDashboard>;
	getGraphicWeek(_priority: Priority): Promise<IGraphicWeek>;
}
