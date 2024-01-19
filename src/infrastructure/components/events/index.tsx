import ContainerBackground from "@shared/components/containerBackground";
import InformationCard from "@shared/components/informationCard";
import {
	CaptionOne,
	Overline,
	SubtitleLink,
	TitleSecond,
} from "@shared/components/labels/styled";
import magnet from "/public/img/magnet.png";
import Arrow from "@shared/components/arrow";
// import Image from "next/image";
// import alarm from "/public/img/alarm_icon.png";
import { useSearchParams, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import ColorGuide from "@shared/components/colorGuide";
import { useEffect, useState } from "react";
import { ticketRepository } from "@infrastructure/api/repositories/tickets";
import { ITicket, TicketStatus } from "@domain/models";
import LoaderComponent from "@shared/components/loader";
import {
	getFormattedDate,
	pagination,
	getDateHour,
	categoryNameToMachineName,
} from "@shared/utils";
import Pagination from "@shared/components/pagination";
import { i18n } from "next-i18next";
import TicketDetail from "../heatmap/ticketDetail";
import { useTicketDetail } from "@infrastructure/api/hooks";
import { categoriesIcon } from "@shared/utils/categories";
import { useTheme } from "styled-components";
import EventsCibersecurity from "../dashboard/eventsCibersecurity";
import FilterInput from "@shared/components/filterInput";

export default function EventsTemplate() {
	const router = useRouter();
	const params = useSearchParams();
	const showEventsDay = params.get("showEventsDay");
	const changeSectionParam = params.get("changeSection");

	const { t } = useTranslation("events_today");
	const week = useTranslation("events_week");

	const [selectedTicket, setSelectedTicket] = useState<ITicket | any>(null);
	const [dataTickets, setDataTickets] = useState<ITicket[]>([]);
	const [page, setPage] = useState<number>(1);

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const dataTicket = useTicketDetail(`${selectedTicket}`);
	const theme = useTheme();
	const selectTicket = (ticket: ITicket | any) => {
		setIsLoading(true);
		setSelectedTicket(ticket);
	};
	const currentDate = new Date().toDateString();
	const renderCategoryIcon = (category: string) => {
		const machineName = categoryNameToMachineName(category);
		const iconResult = categoriesIcon().find(
			(value) => value.machineName === machineName
		);

		if (iconResult !== undefined) {
			return iconResult.icon;
		}

		return magnet;
	};
	useEffect(() => {
		ticketRepository
			.getTicketWeek()
			.then((dataTicket: any) => {
				if (showEventsDay === "true") {
					const filterDate = dataTicket.filter((item: ITicket) => {
						const itemDate = new Date(item?.createdAt);
						const itemDateWithoutTime = itemDate.toDateString();

						return itemDateWithoutTime === currentDate;
					});
					setDataTickets(filterDate);
				} else {
					setDataTickets(dataTicket);
				}
			})
			.catch(() => {
				setDataTickets([]);
			});
	}, [currentDate, showEventsDay]);
	useEffect(() => {
		if (dataTicket?.id === undefined) {
			setIsLoading(true);
		} else {
			setIsLoading(false);
		}
	}, [dataTicket?.id]);
	if (dataTickets?.length === 0) {
		return <LoaderComponent />;
	}
	const listTickets = [...dataTickets]
		.sort(
			(a, b) =>
				new Date(b?.createdAt).getTime() -
				new Date(a?.createdAt).getTime()
		)
		.reduce((prev: any, curr: any) => {
			console.log("curr?.createdA", curr?.createdA);
			let index = getFormattedDate(
				new Date(curr?.createdAt),
				i18n?.language
			);
			prev[index] !== undefined
				? prev[index].push(curr)
				: (prev[index] = [curr]);
			return prev;
		}, {});

	const paginationData = pagination(Object.keys(listTickets), 3);
	const renderTickets = () => {
		const currentPageData = paginationData[page - 1] || [];

		if (currentPageData.length > 0) {
			return currentPageData.map((date: any) => (
				<div key={date}>
					<CaptionOne
						$weight={theme.fontWeight.semiBold}
						className="block mb-5 text-center"
					>
						{date}
					</CaptionOne>

					{listTickets[date].map((ticket: ITicket) => (
						<div
							key={ticket.id}
							onClick={() => {
								if (ticket.id) {
									return selectTicket(ticket.id);
								}
							}}
						>
							<InformationCard
								imageLeft={renderCategoryIcon(ticket?.category)}
								textCenter={`ID ${ticket?.id}`}
								textLeft={ticket?.category}
								textRight={getDateHour(ticket?.createdAt)}
								showIconLeft={true}
								bgColor={
									(ticket.status === TicketStatus?.Open &&
										theme.colors.orange20) ||
									((ticket.status === TicketStatus?.Closed ||
										ticket.status ===
											TicketStatus?.Pending) &&
										theme.colors.green10) ||
									theme.colors.gray10
								}
							/>
						</div>
					))}
				</div>
			));
		} else {
			return currentPageData.length === 0 ? (
				<Overline $weight={theme.fontWeight.bold}>
					{t("you_do_not_have_any_tickets")}
				</Overline>
			) : (
				<LoaderComponent />
			);
		}
	};

	return (
		<>
			{changeSectionParam ? (
				<div className="tablet:flex space-between mx-5 py-8 h-screen mb-32">
					<ContainerBackground
						className={`${
							selectedTicket === 0 ? "cel:block" : "cel:hidden"
						} tablet:block tablet:w-9/12 justify-center tablet:mr-8`}
					>
						<div className="flex flex-col items-center mb-5">
							<div className="flex w-full justify-between">
								<Arrow
									action={() => router.push("/")}
									nameIcon="left-arrow"
									showMore={false}
								/>
								<div className="grid">
									<SubtitleLink
										$weight={theme.fontWeight.bold}
										$center
									>
										{showEventsDay === "true"
											? t("title_tickes")
											: week.t("tickets_event")}
									</SubtitleLink>
									{showEventsDay === "true" && (
										<CaptionOne className="text-center">
											{t("subtitle")}
										</CaptionOne>
									)}
								</div>

								<div
								// className="w-12 h-12 bg-orange20 rounded-full grid place-content-center"
								>
									{/* <Image
								src={alarm}
								alt="Alarm"
								width={32}
								height={0}
							/> */}
								</div>
							</div>
							<ColorGuide />
							<FilterInput placeholder="# de ticket" />
						</div>
						<div
							style={{
								height: "65vh",
								overflowY: "scroll",
							}}
						>
							{dataTickets.length > 0 && renderTickets()}
						</div>

						<div className="items-center flex justify-center">
							<Pagination
								selectedPage={page}
								setSelectedPage={setPage}
								totalPages={paginationData.length}
							/>
						</div>
					</ContainerBackground>

					<ContainerBackground
						className={`${
							selectedTicket > 0 ? "cel:block" : "cel:hidden"
						} tablet:block flex items-center flex-col justify-center`}
					>
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
							<TitleSecond
								$weight={theme.fontWeight.bold}
								$center
							>
								{t("no_tickets_selected")}
							</TitleSecond>
						)}
					</ContainerBackground>
				</div>
			) : (
				<EventsCibersecurity
					showCard={false}
					showEventsDay={showEventsDay || false}
				/>
			)}
		</>
	);
}
