import { IResponseServiceChatDTO } from "@infrastructure/model";

export class ChatAdapter {
	static responseService(
		dataResponse: IResponseServiceChatDTO
	): IResponseServiceChatDTO {
		return {
			statusText: dataResponse.statusText || "",
			status: dataResponse.status || 400,
			data: dataResponse.data,
		};
	}
}
