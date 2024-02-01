import Arrow from "@shared/components/arrow";
import CalendarComponent from "@shared/components/calendar";
import ContainerBackground from "@shared/components/containerBackground";
import {
	Body,
	CaptionOne,
	Overline,
	SubtitleLink,
} from "@shared/components/labels/styled";
import { formatDateDTO } from "@shared/utils";
import { useConstCard } from "@shared/utils/hooks";
import { useTheme } from "styled-components";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CircleStatus from "@shared/components/circleStatus";

interface EventsProps {
	showCard?: boolean;
	showEventsDay?: string | boolean;
}

export default function EventsCibersecurity({
	showCard = true,
	showEventsDay,
}: Readonly<EventsProps>) {
	const { t } = useTranslation("events_week");
	const router: any = useRouter();
	const [selectedDate, setSelectedDate] = useState<Date>(new Date());

	const theme = useTheme();
	const status = useConstCard();

	return (
		<div className="p-5">
			<ContainerBackground className="flex items-center flex-col">
				<SubtitleLink $weight={theme.fontWeight.semiBold}>
					{t("information_visual")}
				</SubtitleLink>
				<CaptionOne>
					{showEventsDay ? t("of_day") : t("last_eight_days")}
				</CaptionOne>
			</ContainerBackground>
			<div className="tablet:flex flex-wrap tablet:gap-2 mt-5">
				<ContainerBackground
					className={`flex-initial w-full ${
						!!showCard && "tablet:w-8/12"
					} mr-5 p-8 mb-5`}
				>
					<SubtitleLink $weight={theme.fontWeight.semiBold}>
						{t("events_for_priority")}
					</SubtitleLink>
					<div className="flex-column tablet:flex justify-between items-center">
						<iframe
							src={`/chart/prioritydonut?date=${formatDateDTO(
								selectedDate
							)}`}
							title="prioritydonut"
							className="w-full h-[300px]"
						/>
						<div className="grid gap-1 grid-cols-2 tablet:flex tablet:flex-col">
							{status.map((item) => (
								<div
									key={item.state}
									className={`flex border items-center my-5 mr-5 p-1 rounded-lg ${item.border}`}
								>
									<CircleStatus
										internalColor={item.internalColor}
										externalColor={item.externalColor}
									/>
									<Overline
										$weight={theme.fontWeight.semiBold}
										$color={item.color}
									>
										{item.state}
									</Overline>
								</div>
							))}
						</div>
					</div>
				</ContainerBackground>
				{showCard && (
					<ContainerBackground className="flex-1 w-full tablet:w-3/12 mb-5 p-8">
						<Body $weight={theme.fontWeight.semiBold}>
							{t("tickets_open_week")}
						</Body>
						<CalendarComponent
							onChange={(e: any) =>
								e && e instanceof Date && setSelectedDate(e)
							}
							value={selectedDate}
						/>
					</ContainerBackground>
				)}

				<ContainerBackground
					className={`flex-initial w-full ${
						!!showCard && "tablet:w-8/12"
					} mr-5 p-8 mb-5`}
				>
					<div className="flex justify-between">
						<SubtitleLink $weight={theme.fontWeight.semiBold}>
							{t("events_for_category")}
						</SubtitleLink>
						<Arrow
							action={() =>
								showEventsDay
									? router.push(
											"/events?showEventsDay=true&changeSection=true"
									  )
									: router.push(
											"/events?showEventsDay=false&changeSection=true"
									  )
							}
							nameIcon="right-arrow"
						/>
					</div>
					<iframe
						src={`/chart/categorybars?date=${formatDateDTO(
							selectedDate
						)}`}
						className="w-full h-[300px]"
						title="categorybars"
					/>
				</ContainerBackground>

				{showCard && (
					<ContainerBackground className="flex-1 w-full tablet:w-3/12 p-8 mb-5">
						<Body $weight={theme.fontWeight.semiBold}>
							{t("heatmap:events_by_solution")}
						</Body>
						<iframe
							src={`/chart/solutionbars?height=400&date=${formatDateDTO(
								selectedDate
							)}`}
							className="w-full h-[400px]"
							title="solutionbars"
						/>
					</ContainerBackground>
				)}
			</div>
		</div>
	);
}
