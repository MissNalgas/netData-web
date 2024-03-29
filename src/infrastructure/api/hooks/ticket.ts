import {
	IFilters,
	ITicketPerSolution,
	ITicket,
	ITicketPerCategory,
	ITicketPerPriority,
	ITicketPerWeek,
	TicketPriority,
	IGraphicWeek,
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
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (!ticketId) return;

		setIsLoading(true);

		ticketRepository
			.getTicketDetail(ticketId, notificationId)
			.then(setData)
			.catch(() => {
				setData(null);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [ticketId, notificationId]);

	return [data, isLoading] as const;
}

export function useTicketPerCategory(filters?: IFilters) {
	const [data, setData] = useState<ITicketPerCategory | null>();

	useEffect(() => {
		if (!filters) return;

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

export function useGetEventsWeek(
	priority: TicketPriority,
	date?: string | null
) {
	const [data, setData] = useState<IGraphicWeek | null>();

	useEffect(() => {
		if (!priority) return;

		ticketRepository
			.getEventsWeek(priority, date)
			.then(setData)
			.catch(() => {
				setData(null);
			});
	}, [priority, date]);

	return data;
}
