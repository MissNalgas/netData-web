import { createAxiosApp } from "@infrastructure/api/http/axios";

import {
	IResponseServiceChatDTO,
	Message,
	SendMessage,
} from "@infrastructure/model/chat";
import { IChatService } from "@domain/services/chat.service";
import { ChatAdapter } from "@infrastructure/adapters/chat";

class ChatRepository implements IChatService {
	async getCommentsApi(id: number | string): Promise<[Message]> {
		const axios = await createAxiosApp();

		const getCommentsResponse = await axios.get<[Message]>(
			`/api/xelco/getReply/${id}`
		);
		return getCommentsResponse.data;
	}

	async sendCommentApi(
		data: SendMessage
	): Promise<IResponseServiceChatDTO | void> {
		const axios = await createAxiosApp();

		const dataResponse = await axios.post<IResponseServiceChatDTO | void>(
			"/api/xelco/addReply",
			{
				ticketId: data.ticketId,
				reply: data.reply,
			}
		);
		console.log("dataResponse", dataResponse);
		return ChatAdapter.responseService({
			statusText: dataResponse.statusText,
			status: dataResponse.status,
			data: dataResponse.data,
		});
	}
}

export const chatRepository = new ChatRepository();
