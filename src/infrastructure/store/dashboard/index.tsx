import { createSlice } from "@reduxjs/toolkit";
import initialState from "infrastructure/store/dashboard/initial-state";
import {
	getDataDashboard,
} from "infrastructure/store/dashboard/actions";

export const { actions, reducer } = createSlice({
	name: "dashboard",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getDataDashboard.fulfilled, (state, action) => {
			state.dashboard = action.payload;
		});
	},
});