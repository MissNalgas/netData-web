import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initial-state";
import {
	contact,
	deleteAccount,
	getDataUser,
	resetState,
	checkEmail,
	validateOTP,
} from "./actions";

export const { actions, reducer } = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getDataUser.fulfilled, (state, action) => {
			state.user = action.payload;
		});
		builder.addCase(validateOTP.fulfilled, (state, action) => {
			state.user.token = action.payload;
		});
		builder.addCase(contact.fulfilled, (state, action) => {
			action.payload;
		});
		builder.addCase(checkEmail.fulfilled, (state, action) => {
			action.payload;
		});
		builder.addCase(deleteAccount.fulfilled, (state, action) => {
			state.user = action.payload;
		});
		builder.addCase(resetState.fulfilled, (state, action) => {
			state.user = action.payload;
		});
	},
});
