import { createSlice } from "@reduxjs/toolkit";
import initialState from "infrastructure/store/dashboard/initial-state";
import {
	getDataDashboard, getDataGraphicDay, getDataGraphicWeek,
} from "infrastructure/store/dashboard/actions";

export const { actions, reducer } = createSlice({
	name: "dashboard",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getDataDashboard.fulfilled, (state, action) => {
			state.loading = false;
			state.dashboard = action.payload;
		});
		builder.addCase(getDataDashboard.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getDataGraphicWeek.fulfilled, (state, action) => {
			state.loading = false;
			state.graphicWeek = action.payload;
		});
		builder.addCase(getDataGraphicWeek.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getDataGraphicDay.fulfilled, (state, action) => {
			state.loading = false;
			state.graphicDay = action.payload;
		});
		builder.addCase(getDataGraphicDay.pending, (state) => {
			state.loading = true;
		});
	},
});
