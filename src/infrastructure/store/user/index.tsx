import { createSlice } from "@reduxjs/toolkit";
import initialState from "infrastructure/store/user/initial-state";
import { getDataUser, resetState } from "infrastructure/store/user/actions";

export const { actions, reducer } = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getDataUser.fulfilled, (state, action) => {
			state.user = action.payload;
		});
		builder.addCase(resetState.fulfilled, (state, action) => {
			state.user = action.payload;
		});
	},
});
