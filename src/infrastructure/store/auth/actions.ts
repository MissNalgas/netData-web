import { authRepository } from "@infrastructure/api/repositories/auth/register.repository";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface GetEmailUserPayload {
	email: string;
}

const validateEmail = createAsyncThunk<boolean, GetEmailUserPayload>(
	"auth/getData",
	async (payload: GetEmailUserPayload) => {
		const { email } = payload;
		const validation = await authRepository.validateIfEmailExists(email);
		return validation;
	}
);

export { validateEmail };
