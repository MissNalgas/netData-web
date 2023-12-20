import { IDashboard } from "@domain/models";

export interface IDashboardService {
	getDashboardData(): Promise<IDashboard>;
}
