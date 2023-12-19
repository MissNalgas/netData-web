import { IDashboard, responseDashboard } from "@domain/models";
import { IDashboardService } from "@domain/services/dashboard.service";
import { createAxiosApp } from "@infrastructure/api/http/axios";

class DashboardRepository implements IDashboardService {
	async getDashboardData(): Promise<IDashboard> {
		const axios = await createAxiosApp();
		const data = await axios.get<IDashboard, responseDashboard>(
			"/api/xelco/dashboard"
		);

		return data.data;
	}
}

export const dashboardRepository = new DashboardRepository();
