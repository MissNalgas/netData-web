import { createSlice } from "@reduxjs/toolkit";
import initialState from "infrastructure/store/chat/initial-state";
import { getComments } from "./actions";

export const { actions, reducer } = createSlice({
	name: "chat",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getComments.fulfilled, (state, action) => {
			state.data = action.payload;
		});
	},
});
