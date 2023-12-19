import { IDashboard } from "@domain/models";
import { dashboardRepository } from "@infrastructure/api/repositories/dashboard/dashboard.repository";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getDataDashboard = createAsyncThunk<IDashboard>(
	"dashboard/getDataDashboard",
	async (payload, state) => {
		try {
			const response = await dashboardRepository.getDashboardData();
			return response;
		} catch (err) {
			return state.rejectWithValue(err);
		}
	}
);

export { getDataDashboard };
