import EventCard from "@shared/components/eventCard";
import SimpleSlider from "@shared/components/slider";
import ContainerBackground from "@shared/components/containerBackground";
import { SubtitleLink } from "@shared/components/labels/styled";
import theme from "@theme/index";
import CardChart from "./cardChart";
import EventsWeekCard from "./eventsWeekCard";
import IncidentsCard from "./incidentsCard";
import SavingMonthCard from "./savingMonthCard";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@infrastructure/store";
import { useTranslation } from "react-i18next";
import { allEvents } from "@shared/utils/eventsList";
import {
	getDataDashboard,
	getDataGraphicDay,
} from "@infrastructure/store/dashboard/actions";
import { useAppDispatch } from "@hooks/use-dispatch";
import Topbar from "@shared/components/topbar";
import { Day, TicketPriority } from "@domain/models";
import { dashboardDataInitial } from "@infrastructure/store/dashboard/types";
import LoaderComponent from "@shared/components/loader";
import { JoyrideToast } from "@shared/components/tooltip/list/JoyrideToast";
import { useRefetch } from "@infrastructure/containers/refetch";

export default function Dashboard() {
	const { t } = useTranslation("dashboard");
	const dispatch = useAppDispatch();
	const { dashboard, loading, graphicDay } = useSelector(
		(state: RootState) => state.dashboard
	);
	const [day, setDay] = useState<"today" | "yesterday">("today");
	const [dashboardDay, setDashboardDay] = useState<Day>(dashboardDataInitial);
	const joyrideRef = useRef();
	const refetchEvent = useRefetch();

	const fetchData = useCallback(() => {
		dispatch(getDataDashboard()).unwrap();
		dispatch(
			getDataGraphicDay({
				day: day,
				type: "general",
				status: "open",
				priority: TicketPriority.Low,
			})
		).unwrap();
	}, [dispatch, day]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	useEffect(() => {
		const cb = () => {
			fetchData();
		};

		refetchEvent.addListener(cb);

		return () => {
			refetchEvent.removeListener(cb);
		};
	}, [refetchEvent, fetchData]);

	const SlideInfo = allEvents.map((event) => (
		<EventCard
			key={event.id}
			title={t(event.event)}
			description={t(event.description)}
			image={event.image}
			ticketsCount={
				dashboardDay?.tickets[event.machineName]
					? dashboardDay?.tickets[event.machineName].length
					: 0
			}
		/>
	));
	const scrollRef = useRef<any>();

	const { currentTooltip } = useSelector(
		(state: RootState) => state.tooltips
	);

	useEffect(() => {
		let y = 0;
		if (currentTooltip >= 5) {
			y = 500;
		}
		scrollRef.current?.scrollTo({
			y,
			animated: true,
		});
	}, [currentTooltip]);

	const changeTime = (isActive: boolean) => {
		isActive ? setDay("today") : setDay("yesterday");
	};

	useEffect(() => {
		if (dashboard) {
			if (day === "yesterday") {
				setDashboardDay(dashboard?.yesterday);
			} else {
				setDashboardDay(dashboard.today);
			}
		}
	}, [dashboard, day]);

	if (loading) return <LoaderComponent />;

	return (
		<>
			<Topbar
				screen="dashboard"
				onPressGroupButton={changeTime}
				day={day}
			/>
			<JoyrideToast joyrideRef={joyrideRef} />
			<div className="m-8 tablet:flex justify-between">
				{/* Chart card */}
				<div className="grow basis-2/3">
					<CardChart />
				</div>
				<div className="flex cel:mt-8 tablet:mt-0 tablet:ml-5 basis-1/3 flex-col justify-between">
					{/* Incidents card */}
					<IncidentsCard
						textDescription={t("risk_high_urgent")}
						numIncidents={graphicDay?.High ?? 0}
					/>
					{/* Events week card*/}
					<EventsWeekCard isToday={day === "today"}/>
					{/* Saving month card*/}
					<SavingMonthCard saving={dashboard?.today?.saving?.f} />
				</div>
			</div>
			{/* Category events */}
			<ContainerBackground className="mx-8" id="step-4">
				<SubtitleLink
					$weight={theme.fontWeight.bold}
					className="my-5 block"
				>
					{t("event_categories")}
				</SubtitleLink>
				<SimpleSlider slides={SlideInfo} />
			</ContainerBackground>
		</>
	);
}
