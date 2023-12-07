import { IUser } from "@domain/models";
import { userRecoverRepository } from "@infrastructure/api/repositories/recover-password/recover.repository";
import { userRepository } from "@infrastructure/api/repositories/user/user.repository";
import { getDataChangePasswordDTO } from "@infrastructure/model";
import { createAsyncThunk } from "@reduxjs/toolkit";
import initialState from "infrastructure/store/user/initial-state";
import { Contact, GetDataUserPayload } from "infrastructure/store/user/types";

const getDataUser = createAsyncThunk<IUser, GetDataUserPayload>(
	"user/getData",
	async (payload: GetDataUserPayload) => {
		const { email, password } = payload;
		const user = await userRepository.getUser(email, password);
		return user;
	}
);

const resetState = createAsyncThunk("user/cleanData", async (_, {}) => {
	localStorage.clear();
	return initialState.user;
});

const deleteAccount = createAsyncThunk("user/changePassword", async (_) => {
	const response = await userRepository.deleteAccout();
	return response;
});

const checkEmail = createAsyncThunk(
	"user/checkEmail",
	async (email: string) => {
		const response = await userRepository.checkEmail(email);
		return response;
	}
);
const recoverPassword = createAsyncThunk(
	"user/recoverPassword",
	async (email: string) => {
		const response = await userRecoverRepository.recoverPassword(email);
		return response;
	}
);

const changePassword = createAsyncThunk(
	"user/changePassword",
	async ({ mail, code, newPassword }: getDataChangePasswordDTO) => {
		const response = await userRecoverRepository.changePassword(
			mail,
			code,
			newPassword
		);

		return response;
	}
);

const contact = createAsyncThunk("user/contact", async (payload: Contact) => {
	const body = {
		body: payload.body,
		subject: payload.subject,
	};

	const response = await userRepository.contact(body);
	return response;
});

export {
	getDataUser,
	resetState,
	deleteAccount,
	recoverPassword,
	changePassword,
	contact,
	checkEmail,
};
