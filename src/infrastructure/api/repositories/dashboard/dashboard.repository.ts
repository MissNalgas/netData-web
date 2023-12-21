import {
	IDashboard,
	IGraphicWeek,
	Priority,
	responseDashboard,
	responseGraphic,
} from "@domain/models";
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

	async getGraphicWeek(data: Priority): Promise<IGraphicWeek> {
		const axios = await createAxiosApp();
		const response = await axios.get<IGraphicWeek, responseGraphic>(
			"api/xelco/graphic/week_oc",
			{
				params: {
					priority: data.priority,
				},
			}
		);

		return response.data;
	}
}

export const dashboardRepository = new DashboardRepository();
