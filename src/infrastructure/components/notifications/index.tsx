import ContainerBackground from "@shared/components/containerBackground";
import InformationCard from "@shared/components/informationCard";
import { CaptionTwo, Overline } from "@shared/components/labels/styled";
import theme from "@theme/index";
import Fire from "/public/img/fire_1.png";
import Alarm from "/public/img/alarm_icon.png";
import Tree from "/public/img/tree 1.png";
import Clock from "/public/img/clock 1.png";

import { useAppDispatch } from "@hooks/use-dispatch";
import { useTypedSelector } from "@hooks/index";
import { getNotifications } from "@infrastructure/store/notifications/actions";
import { useEffect } from "react";
import LoaderComponent from "@shared/components/loader";
import { NotificationItem } from "@infrastructure/store/notifications/types";
import { format } from "date-fns";
import { es, enUS } from "date-fns/locale";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export default function NotificationsComponent() {
	const dispatch = useAppDispatch();
	const notificationsData = useTypedSelector((state) => state.notifications);
	const { t, i18n } = useTranslation("notifications");
	useEffect(() => {
		dispatch(getNotifications()).unwrap();
		if (notificationsData.error) {
			toast.error(t("token_expired"));
		}
	}, [dispatch, notificationsData.error, t]);
	const date = new Date();
	return (
		<div className="flex space-between mx-5 py-8 h-screen mb-32 overflow-auto">
			<ContainerBackground className="grow justify-center mr-8">
				<div className="flex flex-col items-center mb-5">
					<Overline $weight={theme.fontWeight.bold} $center>
						{t("your_notifications")}
					</Overline>
					<CaptionTwo>{t("from_last_week")}</CaptionTwo>
					<CaptionTwo
						$weight={theme.fontWeight.semiBold}
						className="mt-3"
					>
						{format(date, "dd 'de' MMMM 'de' yyyy", {
							locale: i18n.language === "en" ? enUS : es,
						})}
					</CaptionTwo>
				</div>

				{notificationsData?.data?.length > 0 ? (
					notificationsData?.data?.map(
						(notification: NotificationItem) => (
							<div key={notification.id}>
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
									showIconLeft={false}
								/>
							</div>
						)
					)
				) : notificationsData?.data?.length === 0 ? (
					<Overline $weight={theme.fontWeight.bold}>
						{t("you_do_not_have_any_notifications")}
					</Overline>
				) : (
					<LoaderComponent />
				)}
			</ContainerBackground>

			<ContainerBackground className="flex items-center flex-col">
				<Overline $weight={theme.fontWeight.bold}>
					{t("no_tickets_selected")}
				</Overline>
			</ContainerBackground>
		</div>
	);
}
