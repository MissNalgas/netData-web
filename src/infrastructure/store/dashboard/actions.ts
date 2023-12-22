import {
	IDashboard,
	IGraphicDay,
	IGraphicWeek,
	TicketPriority,
	filtersGraphicDay,
} from "@domain/models";
import { dashboardRepository } from "@infrastructure/api/repositories/dashboard/dashboard.repository";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getDataDashboard = createAsyncThunk<IDashboard>(
	"dashboard/getDataDashboard",
	async (_payload, state) => {
		try {
			const response = await dashboardRepository.getDashboardData();
			return response;
		} catch (err) {
			return state.rejectWithValue(err);
		}
	}
);

const getDataGraphicWeek = createAsyncThunk<IGraphicWeek, TicketPriority>(
	"dashboard/getDataGraphicWeek",
	async (payload, store) => {
		try {
			const response = await dashboardRepository.getGraphicWeek(payload);
			return response;
		} catch (err) {
			toast.error("error");
			return store.rejectWithValue(err);
		}
	}
);

const getDataGraphicDay = createAsyncThunk<IGraphicDay, filtersGraphicDay>(
	"dashboard/getDataGraphicDay",
	async (payload, state) => {
		try {
			const response = await dashboardRepository.getGraphicDay(payload);
			return response;
		} catch (err) {
			toast.error("error");
			return state.rejectWithValue(err);
		}
	}
);

export { getDataDashboard, getDataGraphicWeek, getDataGraphicDay };
