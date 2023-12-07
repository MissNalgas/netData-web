import { IResponseServiceDTO } from "@infrastructure/model";

export class ContactAdapter {
	static userFromDTO(contact: IResponseServiceDTO): IResponseServiceDTO {
		return {
			message: contact.message || "",
			status: contact.status || 400,
			data: contact.data,
		};
	}
}
