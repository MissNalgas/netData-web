import {
	IDashboard,
	IGraphicDay,
	IGraphicWeek,
	TicketPriority,
	FiltersGraphicDay,
	IResponseDashboard,
	ResponseGraphic,
	ResponseGraphicDay,
} from "@domain/models";
import { IDashboardService } from "@domain/services/dashboard.service";
import { createAxiosApp } from "@infrastructure/api/http/axios";

class DashboardRepository implements IDashboardService {
	async getDashboardData(): Promise<IDashboard> {
		const axios = await createAxiosApp();
		const data = await axios.get<IDashboard, IResponseDashboard>(
			"/api/xelco/dashboard"
		);

		return data.data;
	}

	async getGraphicWeek(data: TicketPriority): Promise<IGraphicWeek> {
		const axios = await createAxiosApp();
		const response = await axios.get<IGraphicWeek, ResponseGraphic>(
			"/api/xelco/graphic/week_oc",
			{
				params: {
					priority: data,
				},
			}
		);

		return response.data;
	}

	async getGraphicDay(_filters: FiltersGraphicDay): Promise<IGraphicDay> {
		const axios = await createAxiosApp();
		const response = await axios.get<IGraphicDay, ResponseGraphicDay>(
			"/api/xelco/graphic/day",
			{
				params: {
					day: _filters.day,
					type: _filters.type,
					priority: _filters.priority,
					status: _filters.status,
				},
			}
		);

		return response.data;
	}
}

export const dashboardRepository = new DashboardRepository();
