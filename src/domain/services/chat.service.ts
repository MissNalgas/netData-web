import {
	IResponseServiceChatDTO,
	Message,
	SendMessage,
} from "@infrastructure/model/chat";

export interface IChatService {
	getCommentsApi(_id: number): Promise<[Message]>;
	sendCommentApi(_data: SendMessage): Promise<IResponseServiceChatDTO | void>;
}
