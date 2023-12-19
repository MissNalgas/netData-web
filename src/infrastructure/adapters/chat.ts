import { IResponseServiceDTO } from "@infrastructure/model";

export class ChatAdapter {
	static responseService(
		dataResponse: IResponseServiceDTO
	): IResponseServiceDTO {
		return {
			message: dataResponse.message || "",
			status: dataResponse.status || 400,
			data: dataResponse.data,
		};
	}
}
