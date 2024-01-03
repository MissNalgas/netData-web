import { createSlice } from "@reduxjs/toolkit";
import initialState from "infrastructure/store/layout/initial-state";
import { changeStateDrawer } from "./actions";

export const { actions, reducer } = createSlice({
	name: "layout",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(changeStateDrawer, (state, action) => {
			state.isOpenDrawer = action.payload;
		});
	},
});
