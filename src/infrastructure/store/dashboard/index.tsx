import { createSlice } from "@reduxjs/toolkit";
import initialState from "infrastructure/store/dashboard/initial-state";
import {
	getDataDashboard, getDataGraphicWeek,
} from "infrastructure/store/dashboard/actions";

export const { actions, reducer } = createSlice({
	name: "dashboard",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getDataDashboard.fulfilled, (state, action) => {
			state.dashboard = action.payload;
		});
        builder.addCase(getDataGraphicWeek.fulfilled, (state, action) => {
			state.graphicWeek = action.payload;
		});
	},
});