import { IDashboard } from "@domain/models";
import { dashboardRepository } from "@infrastructure/api/repositories/dashboard/dashboard.repository";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getDataDashboard = createAsyncThunk<IDashboard>(
	"dashboard/getDataDashboard",
	async (payload, state) => {
		try {
			const dashboard = await dashboardRepository.getDashboardData();
			return dashboard;
		} catch (err) {
			return state.rejectWithValue(err);
		}
	}
);

export { getDataDashboard };
