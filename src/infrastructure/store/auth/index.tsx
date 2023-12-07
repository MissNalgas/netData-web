import { createSlice } from "@reduxjs/toolkit";
import initialState from "infrastructure/store/auth/initial-state";
import { validateEmail } from "./actions";

export const { actions, reducer } = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(validateEmail.fulfilled, (state, action) => {
			state.validationEmail = action.payload;
		});
	},
});