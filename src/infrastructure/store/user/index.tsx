import { createSlice } from "@reduxjs/toolkit";
import initialState from "infrastructure/store/user/initial-state";
import {
	contact,
	deleteAccount,
	getDataUser,
	resetState,
	checkEmail,
} from "infrastructure/store/user/actions";

export const { actions, reducer } = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getDataUser.fulfilled, (state, action) => {
			state.user = action.payload;
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
