import {
	IFilters,
	ITIcketPerSolution,
	ITicket,
	ITicketPerCategory,
	ITicketPerPriority,
	ITicketPerWeek,
} from "@domain/models";
import { useEffect, useState } from "react";
import { ticketRepository } from "../repositories/tickets";

export function useAllTickets(filters?: IFilters) {
	const [data, setData] = useState<ITicketPerWeek | null>();

	useEffect(() => {
		if (
			!filters ||
			Object.values(filters).every((filter) => filter === null)
		)
			return setData(undefined);

		ticketRepository
			.getAllTickets(filters)
			.then(setData)
			.catch(() => {
				setData(null);
			});
	}, [filters]);

	return data;
}

export function useTicketDetail(
	ticketId: number | string,
	notificationId?: number
) {
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

export function useTicketPerCategory() {
	const [data, setData] = useState<ITicketPerCategory | null>();

	useEffect(() => {
		ticketRepository
			.getTicketPerCategory()
			.then(setData)
			.catch(() => {
				setData(null);
			});
	}, []);

	return data;
}

export function useTicketPerPriority() {
	const [data, setData] = useState<ITicketPerPriority | null>();

	useEffect(() => {
		ticketRepository
			.getTicketsPerPriority()
			.then(setData)
			.catch(() => {
				setData(null);
			});
	}, []);

	return data;
}

export function useTicketPerSolution() {
	const [data, setData] = useState<ITIcketPerSolution | null>();

	useEffect(() => {
		ticketRepository
			.getTicketsPerSolution()
			.then(setData)
			.catch(() => {
				setData(null);
			});
	}, []);

	return data;
}
