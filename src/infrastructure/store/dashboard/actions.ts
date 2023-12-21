import { IDashboard, IGraphicWeek, Priority } from "@domain/models";
import { dashboardRepository } from "@infrastructure/api/repositories/dashboard/dashboard.repository";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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

const getDataGraphicWeek = createAsyncThunk<IGraphicWeek, Priority>(
	"dashboard/getDataGraphicWeek",
	async (payload: Priority) => {
		const { priority } = payload;
		try {
			const response = await dashboardRepository.getGraphicWeek(priority);
			return response;
		} catch (err) {
			toast.error("error");
		}
	}
);

export { getDataDashboard, getDataGraphicWeek };
