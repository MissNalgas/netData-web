import { IUser } from "@domain/models";
import { userRepository } from "@infrastructure/api/repositories/user/user.repository";
import { createAsyncThunk } from "@reduxjs/toolkit";
import initialState from "infrastructure/store/user/initial-state";

interface GetDataUserPayload {
	email: string;
	password: string;
}

const getDataUser = createAsyncThunk<IUser, GetDataUserPayload>("user/getData", async (payload: GetDataUserPayload) => {
	const {email, password} = payload;
	const user = await userRepository.getUser(email, password);
	return user;
});

const resetState = createAsyncThunk("user/cleanData", async (_, {}) => {
	localStorage.clear();
	return initialState.user;
});

export { getDataUser, resetState };
