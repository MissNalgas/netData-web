import {
	IFilters,
	ITicketPerSolution,
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
	ticketId: number | string | undefined | null,
	notificationId?: number
) {
	const [data, setData] = useState<ITicket | null>();

	useEffect(() => {
		if (!ticketId) return;

		ticketRepository
			.getTicketDetail(ticketId, notificationId)
			.then(setData)
			.catch(() => {
				setData(null);
			});
	}, [ticketId, notificationId]);

	return data;
}

export function useTicketPerCategory(filters?: IFilters) {
	const [data, setData] = useState<ITicketPerCategory | null>();

	useEffect(() => {
		if (filters === undefined) return;

		ticketRepository
			.getTicketPerCategory(filters)
			.then(setData)
			.catch(() => {
				setData(null);
			});
	}, [filters]);

	return data;
}

export function useTicketPerPriority(filter?: IFilters) {
	const [data, setData] = useState<ITicketPerPriority | null>();

	useEffect(() => {
		if (filter === undefined) return;

		ticketRepository
			.getTicketsPerPriority(filter)
			.then(setData)
			.catch(() => {
				setData(null);
			});
	}, [filter]);

	return data;
}

export function useTicketPerSolution(filters?: IFilters) {
	const [data, setData] = useState<ITicketPerSolution | null>();

	useEffect(() => {
		if (!filters) return;

		ticketRepository
			.getTicketsPerSolution(filters)
			.then(setData)
			.catch(() => {
				setData(null);
			});
	}, [filters]);

	return data;
}
