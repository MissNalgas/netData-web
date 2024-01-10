import { createSlice } from "@reduxjs/toolkit";
import initialState from "infrastructure/store/layout/initial-state";
import { openDrawer, closeDrawer } from "./actions";

export const { actions, reducer } = createSlice({
	name: "layout",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(openDrawer, (state) => {
			state.isOpenDrawer = true;
		});
		builder.addCase(closeDrawer, (state) => {
			state.isOpenDrawer = false;
		});
	},
});
