import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserDataService } from "domain/services/User.service";
import initialState from "infrastructure/store/user/initial-state";

const getDataUser = createAsyncThunk("user/getData", async (id: number) => {
	const response = await UserDataService.getUserDataService(id);
	return response;
});

const resetState = createAsyncThunk("user/cleanData", async (_, {}) => {
	localStorage.clear();
	return initialState.user;
});

export { getDataUser, resetState };
