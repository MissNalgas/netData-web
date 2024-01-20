import { IFilters, ITicket, TicketStatus } from "@domain/models";
import { useAllTickets, useTicketDetail } from "@infrastructure/api/hooks";
import TwoColumnLayout from "@shared/components/buttons/twoColumnLayout";
import FilterInput from "@shared/components/filterInput";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import TicketDetail from "../ticketDetail";
import { useTranslation } from "react-i18next";
import Pagination from "@shared/components/pagination";
import { useArrayPagination } from "@shared/hooks";
import FilterDetail from "../filterDetail";
import ColorGuide from "@shared/components/colorGuide";
import InformationCard from "@shared/components/informationCard";
import magnet from "/public/img/magnet.png";
import { format } from "date-fns";
import { formatFiltersToQuery, getFormattedDate } from "@shared/utils";
import LoaderComponent from "@shared/components/loader";

export default function HeatmapTemplate() {
	const { t, i18n } = useTranslation();
	const [filter, setFilter] = useState<IFilters>();
	const data = useAllTickets(filter);
	const [selectedTicket, setSelectedTicket] = useState<ITicket | null>(null);
	const [tickets, page, setPage, maxPages] = useArrayPagination(
		data?.tickets
	);
	const todayDate = useMemo(() => {
		const date = new Date();
		date.setHours(0, 0, 0, 0);
		return date;
	}, []);
	const dataTicket = useTicketDetail(`${selectedTicket?.id}`);

	const [isLoading, setIsLoading] = useState<boolean>(false);
	useEffect(() => {
		const firstTicket = data?.tickets[0];

		firstTicket && setSelectedTicket(firstTicket);
	}, [data]);

	useEffect(() => {
		if (dataTicket?.id === undefined) {
			setIsLoading(true);
		} else {
			setIsLoading(false);
		}
	}, [dataTicket?.id]);
	const selectTicket = (ticket: ITicket) => {
		setIsLoading(true);
		setSelectedTicket(ticket);
	};

	return (
		<TwoColumnLayout>
			<div className="flex flex-col gap-4">
				<div className="card p-4 h-[max-content] flex flex-col items-center">
					<h2 className="text-2xl font-bold">
						{t("heatmap:heatmap")}
					</h2>
					<h3 className="text-xl">
						{t("heatmap:your_ticket_history")}
					</h3>
					<div className="w-full max-w-[400px]">
						<FilterInput
							filter={filter}
							placeholder={t("heatmap:number_of_ticket")}
							onChange={setFilter}
						/>
					</div>
					<FilterDetail
						filter={filter}
						setFilter={setFilter}
						className="mb-4"
					/>
					<iframe
						className="w-full max-w-[500px] h-[500px] bg-gray-100 rounded-lg p-2"
						src={`/chart/heatmap?height=500&${formatFiltersToQuery({
							category: filter?.category ?? null,
							risk: filter?.risk ?? null,
							status: filter?.status ?? null,
							date: filter?.date ?? todayDate,
							id: filter?.id ?? null,
						})}`}
						title="heatmap"
					/>
				</div>
				{!!tickets.length && (
					<>
						<div className="card p-4">
							<h2 className="text-2xl font-bold">
								{t("heatmap:events_by_priority")}
							</h2>
							<iframe
								src={`/chart/prioritydonut${
									filter
										? `?${formatFiltersToQuery(filter)}`
										: ""
								}`}
								title="prioritydonut"
								className="w-full h-[300px]"
							/>
						</div>
						<div className="card p-4">
							<h2 className="text-2xl font-bold">
								{t("heatmap:events_by_category")}
							</h2>
							<iframe
								src={`/chart/categorybars${
									filter
										? `?${formatFiltersToQuery(filter)}`
										: ""
								}`}
								title="categorybars"
								className="w-full h-[300px]"
							/>
						</div>
						<div className="card p-4 flex flex-col gap-4">
							<div className="flex justify-center">
								<ColorGuide className="w-full" />
							</div>
							{!!filter?.date && (
								<h2 className="text-center font-bold text-lg">
									{getFormattedDate(
										filter.date,
										i18n?.resolvedLanguage || "en"
									)}
								</h2>
							)}
							<div className="flex flex-col">
								{tickets.map((ticket) => (
									<button
										onClick={() => selectTicket(ticket)}
										key={ticket.id}
									>
										<InformationCard
											imageLeft={magnet}
											textLeft={`ID ${ticket.id}`}
											textRight={format(
												ticket.createdAt,
												"hh:mm aaa"
											)}
											textCenter={ticket.category}
											classContainer={
												ticket.status ===
												TicketStatus.Open
													? "bg-red10"
													: "bg-green10"
											}
										/>
									</button>
								))}
							</div>
							<div className="grid place-content-center">
								<Pagination
									selectedPage={page}
									setSelectedPage={setPage}
									totalPages={maxPages}
								/>
							</div>
						</div>
					</>
				)}
			</div>
			<div className="flex flex-col h-full gap-4">
				<div className="card flex items-center p-4 gap-2">
					<div className="p-3 bg-gray10 rounded-lg">
						<Image
							src="/img/magnifying_glass.png"
							alt="Ticket icon"
							width={40}
							height={40}
						/>
					</div>
					<span className="font-bold">
						{t("heatmap:you_selected_this_number")}
					</span>
					<h1 className="text-8xl font-bold text-primary">0</h1>
				</div>
				<div className="card p-4">
					{selectedTicket ? (
						<>
							{isLoading ? (
								<LoaderComponent />
							) : (
								<TicketDetail
									onClose={() => setSelectedTicket(null)}
									ticket={{
										...dataTicket,
									}}
								/>
							)}
						</>
					) : (
						<div className="grid place-content-center min-h-[400px]">
							<span className="text-center font-bold text-xl">
								{t("heatmap:there_is_no_selected_ticket")}
							</span>
						</div>
					)}
				</div>
				{!!tickets.length && (
					<div className="card p-4">
						<h2 className="text-2xl font-bold">
							{t("heatmap:events_by_solution")}
						</h2>
						<iframe
							src={`/chart/solutionbars?height=400${
								filter ? `&${formatFiltersToQuery(filter)}` : ""
							}`}
							className="w-full h-[400px]"
							title="solutionbars"
						/>
					</div>
				)}
			</div>
		</TwoColumnLayout>
	);
}
