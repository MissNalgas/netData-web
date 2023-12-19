import { IFormResponse } from "@domain/models/register";
import { createAxiosApp } from "@infrastructure/api/http/axios";

import { RegisterResponseError } from "@infrastructure/store/auth/types";
import { Message, SendMessage } from "@infrastructure/model/chat";
import { IChatService } from "@domain/services/chat.service";
import { IResponseServiceDTO } from "@infrastructure/model";
import { ChatAdapter } from "@infrastructure/adapters/chat";

class ChatRepository implements IChatService {
	async getCommentsApi(id: number): Promise<Message> {
		const axios = await createAxiosApp();

		const getCommentsResponse = await axios.get<Message>(
			`/api/xelco/getReply/${id}`
		);
		return getCommentsResponse.data;
	}

	async sendCommentApi(
		data: SendMessage
	): Promise<IResponseServiceDTO | void> {
		const axios = await createAxiosApp();

		const dataResponse = await axios.post<
			SendMessage,
			RegisterResponseError | IFormResponse
		>("/api/xelco/addReply", {
			ticketId: data.ticketId,
			reply: data.reply,
		});

		return ChatAdapter.responseService({
			message: dataResponse.data.message,
			status: dataResponse.data.status,
			data: dataResponse.data,
		});
	}
}

export const chatRepository = new ChatRepository();
