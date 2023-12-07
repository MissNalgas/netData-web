import { authRepository } from "@infrastructure/api/repositories/auth/register.repository";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	GetEmailUserPayload,
	IRegisterAccount,
	RegisterResponseError,
} from "./types";
import { IFormResponse } from "@domain/models";

const validateEmail = createAsyncThunk<string, GetEmailUserPayload>(
	"auth/getData",
	async (payload: GetEmailUserPayload) => {
		const { email } = payload;
		const validation = await authRepository.validateIfEmailExists(email);
		return validation;
	}
);

const registerDataForm = createAsyncThunk<
	RegisterResponseError | IFormResponse,
	IRegisterAccount
>("auth/dataForm", async (payload: IRegisterAccount) => {
	const response = await authRepository.registerUser(payload);
	return response;
});

export { validateEmail, registerDataForm };
