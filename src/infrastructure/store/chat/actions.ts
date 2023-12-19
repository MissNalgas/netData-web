import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetIdTicketPayload } from "./types";
// import { IFormResponse } from "@domain/models";
import { chatRepository } from "@infrastructure/api/repositories/chat/chat.repository";
import { SendMessage } from "@infrastructure/model/chat";
// import { Message } from "yup";

const getComments = createAsyncThunk(
	"chat/getComments",
	async (payload: GetIdTicketPayload) => {
		const { id } = payload;
		const responseComments = await chatRepository.getCommentsApi(id);
		return responseComments;
	}
);

const sendComment = createAsyncThunk(
	"chat/sendComment",
	async (payload: SendMessage) => {
		const body = {
			ticketId: payload.ticketId,
			reply: payload.reply,
		};
		const response = await chatRepository.sendCommentApi(body);
		return response;
	}
);

export { sendComment, getComments };
