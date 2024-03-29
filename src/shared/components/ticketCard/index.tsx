import Image from "next/image";
import mockupImg from "./mockupImg";
import { ITicket } from "@domain/models";
import { getDateHour } from "@shared/utils";

export default function TicketCard({ ticket, onClick }: TicketCardProps) {
	return (
		<button
			onClick={onClick}
			className="bg-gray-100 rounded-lg p-2 flex items-center w-full justify-between"
		>
			<Image width={30} height={30} src={mockupImg} alt="Mockup img" />
			<b>ID {ticket.id}</b>
			<span className="text-sm">{ticket.category}</span>
			<span className="text-sm">{`${getDateHour(
				ticket.createdAt
			)}`}</span>
		</button>
	);
}

interface TicketCardProps {
	ticket: ITicket;
	onClick?: () => void;
}
