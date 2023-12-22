import { IFilters, ITicket, TicketStatus } from "@domain/models";
import { useAllTickets } from "@infrastructure/api/hooks";
import TwoColumnLayout from "@shared/components/buttons/twoColumnLayout";
import FilterInput from "@shared/components/filterInput";
import Image from "next/image";
import { useEffect, useState } from "react";
import TicketDetail from "../ticketDetail";
import { useTranslation } from "react-i18next";
import Pagination from "@shared/components/pagination";
import { useArrayPagination } from "@shared/hooks";
import FilterDetail from "../filterDetail";
import ColorGuide from "@shared/components/colorGuide";
import InformationCard from "@shared/components/informationCard";
import magnet from "/public/img/magnet.png";
import { format } from "date-fns";

export default function HeatmapTemplate() {

	const { t } = useTranslation();
	const [filter, setFilter] = useState<IFilters>();
	const data = useAllTickets(filter);
	const [selectedTicket, setSelectedTicket] = useState<ITicket | null>(null);
	const [tickets, page, setPage, maxPages] = useArrayPagination(data?.tickets);

	const selectTicket = (ticket: ITicket) => {
		setSelectedTicket(ticket);
	};

	useEffect(() => {
		const firstTicket = data?.tickets[0];

		firstTicket && setSelectedTicket(firstTicket);
	}, [data]);

	return (
		<TwoColumnLayout>
			<div className="flex flex-col gap-4">
				<div className="card p-4 h-[max-content] flex flex-col items-center">
					<h2 className="text-2xl font-bold">{t("heatmap:heatmap")}</h2>
					<h3 className="text-xl">{t("heatmap:your_ticket_history")}</h3>
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
						src="/chart/heatmap?height=500"
					/>
				</div>
				{!!tickets.length && (
					<>
						<div className="card p-4">
							<h2 className="text-2xl font-bold">
								{t("heatmap:events_by_priority")}
							</h2>
							<iframe
								src="/chart/prioritydonut"
								className="w-full h-[300px]"
							/>
						</div>
						<div className="card p-4">
							<h2 className="text-2xl font-bold">
								{t("heatmap:events_by_category")}
							</h2>
							<iframe
								src="/chart/categorybars"
								className="w-full h-[300px]"
							/>
						</div>
						<div className="card p-4 flex flex-col gap-4">
							<div className="flex justify-center">
								<ColorGuide className="w-full"/>
							</div>
							{!!filter?.date && (
								<h2 className="text-center font-bold text-lg">
									{filter?.date.toLocaleDateString()}
								</h2>
							)}
							<div className="flex flex-col">
								{tickets.map(ticket => (
									<button onClick={() => selectTicket(ticket)} key={ticket.id}>
										<InformationCard
											imageLeft={magnet}
											textLeft={`ID ${ticket.id}`}
											textRight={format(ticket.createdAt, "hh:mm aaa")}
											textCenter={ticket.category}
											classContainer={
												ticket.status === TicketStatus.Open ? (
													"bg-red10"
												) : (
													"bg-green10"
												)
											}
										/>
									</button>
								))}

							</div>
							<div className="grid place-content-center">
								<Pagination selectedPage={page} setSelectedPage={setPage} totalPages={maxPages}/>
							</div>
						</div>
					</>
				)}
			</div>
			<div className="flex flex-col h-full gap-4">
				<div className="card flex items-center p-4">
					<Image
						src="/img/Diseño sin título (2) 1.png"
						alt="Ticket icon"
						width={100}
						height={0}
					/>
					<span className="font-bold">
						{t("heatmap:you_selected_this_number")}
					</span>
					<h1 className="text-8xl font-bold text-primary">0</h1>
				</div>
				<div className="card p-4">
						{selectedTicket ? (
							<TicketDetail onClose={() => setSelectedTicket(null)} ticket={selectedTicket}/>
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
							src="/chart/solutionbars?height=400"
							className="w-full h-[400px]"
						/>
					</div>
				)}
			</div>
		</TwoColumnLayout>
	);
}
