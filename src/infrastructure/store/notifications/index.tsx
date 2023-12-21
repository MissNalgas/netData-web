import { createSlice } from "@reduxjs/toolkit";
import initialState from "infrastructure/store/notifications/initial-state";
import { getNotifications } from "./actions";

export const { actions, reducer } = createSlice({
	name: "notifications",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getNotifications.fulfilled, (state, action) => {
			state.data = action.payload.data ?? [];
			state.status = action.payload.status;
			state.success = action.payload.success;
			state.error = action.payload.error;
			state.message = action.payload.message;
		});
	},
});
