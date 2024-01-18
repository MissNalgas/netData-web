import ContainerBackground from "@shared/components/containerBackground";
import InformationCard from "@shared/components/informationCard";
import {
	CaptionOne,
	Overline,
	SubtitleLink,
	TitleSecond,
} from "@shared/components/labels/styled";
import theme from "@theme/index";
import magnet from "/public/img/magnet.png";
import Arrow from "@shared/components/arrow";
import Image from "next/image";
import alarm from "/public/img/alarm_icon.png";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import ColorGuide from "@shared/components/colorGuide";
import { useEffect, useState } from "react";
import { ticketRepository } from "@infrastructure/api/repositories/tickets";
import { ITicket } from "@domain/models";
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

export default function EventsTemplate() {
	const router = useRouter();
	const { t } = useTranslation("events_today");
	const [selectedTicket, setSelectedTicket] = useState<ITicket | any>(null);
	const [dataTickets, setDataTickets] = useState<ITicket[]>([]);
	const [page, setPage] = useState<number>(1);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const dataTicket = useTicketDetail(`${selectedTicket}`);

	const selectTicket = (ticket: ITicket | any) => {
		setIsLoading(true);
		setSelectedTicket(ticket);
	};
	const currentDate = new Date().toISOString();
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
				console.log("dataTicket", dataTicket);
				const filterDate = dataTicket.filter((item: ITicket) => {
					const itemDate = new Date(item.createdAt);
					const itemDateWithoutTime = itemDate.toISOString();

					return itemDateWithoutTime === currentDate;
				});
				console.log("filterDate", filterDate);
				setDataTickets(filterDate);
			})
			.catch(() => {
				setDataTickets([]);
			});
	}, []);
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
	console.log("dataTickets", dataTickets);
	const listTickets = [...dataTickets]
		.sort(
			(a, b) =>
				new Date(b.createdAt).getTime() -
				new Date(a.createdAt).getTime()
		)
		.reduce((prev: any, curr: any) => {
			let index = getFormattedDate(
				new Date(curr.createdAt),
				i18n?.language
			);
			prev[index] !== undefined
				? prev[index].push(curr)
				: (prev[index] = [curr]);
			return prev;
		}, {});

	const paginationData = pagination(Object.keys(listTickets), 1);
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
							/>
						</div>
					))}
				</div>
			));
		} else {
			return currentPageData.length === 0 ? (
				<Overline $weight={theme.fontWeight.bold}>
					{t("you_do_not_have_any_notifications")}
				</Overline>
			) : (
				<LoaderComponent />
			);
		}
	};

	return (
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
								{t("title_tickes")}
							</SubtitleLink>
							<CaptionOne className="text-center">
								{t("subtitle")}
							</CaptionOne>
						</div>
						<div className="w-12 h-12 bg-orange20 rounded-full grid place-content-center">
							<Image
								src={alarm}
								alt="Alarm"
								width={32}
								height={0}
							/>
						</div>
					</div>
					<ColorGuide />
				</div>
				<div
					style={{
						height: "70vh",
						overflowY: "scroll",
					}}
				>
					{renderTickets()}
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
					<TitleSecond $weight={theme.fontWeight.bold} $center>
						{t("no_tickets_selected")}
					</TitleSecond>
				)}
			</ContainerBackground>
		</div>
	);
}
