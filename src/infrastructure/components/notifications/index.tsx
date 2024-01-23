import ContainerBackground from "@shared/components/containerBackground";
import InformationCard from "@shared/components/informationCard";
import {
	CaptionTwo,
	Overline,
	TitleSecond,
} from "@shared/components/labels/styled";
import theme from "@theme/index";
import Fire from "/public/img/fire_1.png";
import Alarm from "/public/img/alarm_icon.png";
import Tree from "/public/img/tree 1.png";
import Clock from "/public/img/clock 1.png";

import { useAppDispatch } from "@hooks/use-dispatch";
import { useTypedSelector } from "@hooks/index";
import { getNotifications } from "@infrastructure/store/notifications/actions";
import { useEffect, useState } from "react";
import LoaderComponent from "@shared/components/loader";
import { NotificationItem } from "@infrastructure/store/notifications/types";
import { useTranslation } from "react-i18next";
import { getFormattedDate, pagination } from "@shared/utils";
import Pagination from "@shared/components/pagination";
import TicketDetail from "../heatmap/ticketDetail";
import { ITicket } from "@domain/models";
import TwoColumnLayout from "@shared/components/buttons/twoColumnLayout";
import { useTicketDetail } from "@infrastructure/api/hooks";

export default function NotificationsComponent() {
	const dispatch = useAppDispatch();
	const notificationsData = useTypedSelector((state) => state.notifications);
	const { t, i18n } = useTranslation("notifications");
	const [page, setPage] = useState<number>(1);
	const [selectedTicket, setSelectedTicket] = useState<ITicket | null>(null);
	const [dataTicket, isLoadingDetail] = useTicketDetail(`${selectedTicket}`);

	const selectTicket = (ticket: ITicket) => {
		setSelectedTicket(ticket);
	};

	useEffect(() => {
		dispatch(getNotifications()).unwrap();
	}, [dispatch, t]);

	const listNotifications = [...notificationsData.data]
		.sort(
			(a, b) =>
				new Date(b.created_at).getTime() -
				new Date(a.created_at).getTime()
		)
		.reduce((prev: any, curr: any) => {
			let index = getFormattedDate(
				new Date(curr.created_at),
				i18n.language
			);
			prev[index] !== undefined
				? prev[index].push(curr)
				: (prev[index] = [curr]);
			return prev;
		}, {});

	const paginationData = pagination(Object.keys(listNotifications), 5);

	const renderNotifications = () => {
		const currentPageData = paginationData[page - 1] || [];

		if (currentPageData.length > 0) {
			return currentPageData.map((date: any) => (
				<div key={date}>
					<CaptionTwo
						$weight={theme.fontWeight.semiBold}
						className="block mb-5 text-center"
					>
						{date}
					</CaptionTwo>
					{listNotifications[date].map(
						(notification: NotificationItem) => (
							<div
								key={notification.id}
								onClick={() => {
									if (notification.ticket_id) {
										return selectTicket(
											notification.ticket_id
										);
									}
								}}
							>
								<InformationCard
									imageLeft={
										(notification.risk === "Low" && Tree) ||
										(notification.risk === "Urgent" &&
											Fire) ||
										(notification.risk === "High" &&
											Alarm) ||
										(notification.risk === "Medium" &&
											Clock) ||
										Fire
									}
									textLeft={notification.message_body}
									textRight={notification.ticket_id}
									showIconLeft={
										notification.ticket_id && true
									}
								/>
							</div>
						)
					)}
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
		<TwoColumnLayout>
			<ContainerBackground className="grow">
				<div className="flex flex-col items-center mb-5">
					<Overline $weight={theme.fontWeight.bold} $center>
						{t("your_notifications")}
					</Overline>
					<CaptionTwo>{t("from_last_week")}</CaptionTwo>
				</div>
				<div className="flex flex-col h-5/6 justify-between mb-10">
					<div
						style={{
							height: "70vh",
							overflowY: "scroll",
						}}
					>
						{renderNotifications()}
					</div>
					<div className="items-center flex justify-center">
						<Pagination
							selectedPage={page}
							setSelectedPage={setPage}
							totalPages={paginationData.length}
						/>
					</div>
				</div>
			</ContainerBackground>

			<ContainerBackground className="flex items-center flex-col justify-center">
				{selectedTicket ? (
					<>
						{(isLoadingDetail || !dataTicket) ? (
							<LoaderComponent />
						) : (
							<TicketDetail
								onClose={() => setSelectedTicket(null)}
								ticket={dataTicket}
							/>
						)}
					</>
				) : (
					<TitleSecond $weight={theme.fontWeight.bold} $center>
						{t("no_tickets_selected")}
					</TitleSecond>
				)}
			</ContainerBackground>
		</TwoColumnLayout>
	);
}
