import { IFilterForm, ITicket, IWeekGraph } from "@domain/models";
import { useEffect, useState } from "react";
import { ticketRepository } from "../repositories/tickets";

export function useAllTickets(filters?: IFilterForm) {
	const [data, setData] = useState<IWeekGraph | null>();

	useEffect(() => {
		if (!filters) return;
		ticketRepository
			.getAllTickets(filters)
			.then(setData)
			.catch(() => {
				setData(null);
			});
	}, [filters]);

	return data;
}

export function useTicketDetail(ticketId: number, notificationId: number) {
	const [data, setData] = useState<ITicket | null>();

	useEffect(() => {
		ticketRepository
			.getTicketDetail(ticketId, notificationId)
			.then(setData)
			.catch(() => {
				setData(null);
			});
	}, [ticketId, notificationId]);

	return data;
}
