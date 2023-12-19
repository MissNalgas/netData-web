import { Message, SendMessage } from "@infrastructure/model/chat";
import { IResponseServiceDTO } from "@infrastructure/model/recover-password";

export interface IChatService {
	getCommentsApi(_id: number): Promise<Message>;
	sendCommentApi(_data: SendMessage): Promise<IResponseServiceDTO | void>;
}
