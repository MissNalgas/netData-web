import EventCard from "@shared/components/eventCard";
import SimpleSlider from "@shared/components/slider";
import ContainerBackground from "@shared/components/containerBackground";
import { SubtitleLink } from "@shared/components/labels/styled";
import theme from "@theme/index";
import CardChart from "./cardChart";
import EventsWeekCard from "./eventsWeekCard";
import IncidentsCard from "./incidentsCard";
import SavingMonthCard from "./savingMonthCard";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@infrastructure/store";
import InitialTooltip from "@shared/components/tooltip/list/InitialTooltip";
import FirstTooltip from "@shared/components/tooltip/list/FirstTooltip";
import SecondTooltip from "@shared/components/tooltip/list/SecondTooltip";
import ThirdTooltip from "@shared/components/tooltip/list/ThirdTooltip";
import FourTooltip from "@shared/components/tooltip/list/FourTooltip";
import FiveTooltip from "@shared/components/tooltip/list/FiveTooltip";
import SixTooltip from "@shared/components/tooltip/list/SixTooltip";
import SevenTooltip from "@shared/components/tooltip/list/SevenTooltip";
import EightTooltip from "@shared/components/tooltip/list/EightTooltip";
import NineTooltip from "@shared/components/tooltip/list/NineTooltip";
import TenTooltip from "@shared/components/tooltip/list/TenTooltip";
import ElevenTooltip from "@shared/components/tooltip/list/ElevenTooltip";
import TwelveTooltip from "@shared/components/tooltip/list/TwelveTooltip";
import FinalTooltip from "@shared/components/tooltip/list/FinshTooltip";
import { useTranslation } from "react-i18next";
import { allEvents } from "@shared/utils/eventsList";
import { getDataDashboard, getDataGraphicDay, getDataGraphicWeek } from "@infrastructure/store/dashboard/actions";
import { useAppDispatch } from "@hooks/use-dispatch";
import Topbar from "@shared/components/topbar";
import { Day, Ticket } from "@domain/models";
import { TicketStatus } from "@shared/constants/statusList";
import { dashboardDataInitial } from "@infrastructure/store/dashboard/types";
import LoaderComponent from "@shared/components/loader";

export default function Dashboard() {
	const { t } = useTranslation("dashboard");
    const dispatch = useAppDispatch();
    const { dashboard, loading, graphicWeek, graphicDay } = useSelector((state: RootState) => state.dashboard);
    const [day, setDay] = useState<"today" | "yesterday">("today");
    const [dashboardDay, setDashboardDay] = useState<Day>(dashboardDataInitial);
    const [_priorityTickets, setPriorityTickets] = useState<number[]>([]);

    useEffect(() => {
        dispatch(getDataDashboard()).unwrap();
        dispatch(getDataGraphicWeek({ priority: "all" })).unwrap();
        dispatch(getDataGraphicDay({
            day: day,
            type: "general",
            status: "open",
            priority: "all",
        })).unwrap();
    }, [dispatch, day]);

	const SlideInfo = allEvents.map((event, index) => (
		<EventCard
			key={index}
			title={t(event.event)}
			description={t(event.description)}
			image={event.image}
            ticketsCount={dashboardDay?.tickets[event.machineName] ? dashboardDay?.tickets[event.machineName].length : 0}
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
			let ticketsPriority;
			if (day === "yesterday") {
				setDashboardDay(dashboard?.yesterday);
				ticketsPriority = dashboard?.yesterday?.ticketsForPriorityByDepartment
					?.filter((ticket: Ticket) => [TicketStatus?._open, TicketStatus?._pending].includes(ticket?.status))
					.map((ticket: Ticket) => ticket?.priority);
			} else {
				setDashboardDay(dashboard.today);
				ticketsPriority = dashboard.today?.ticketsForPriorityByDepartment
					?.filter((ticket: Ticket) => [TicketStatus?._open, TicketStatus?._pending].includes(ticket?.status))
					.map((ticket: Ticket) => ticket?.priority);
			}
			setPriorityTickets(ticketsPriority ?? []);
		}
	}, [dashboard, day]);

    if(loading) return <LoaderComponent/>

	return (
		<>
			<InitialTooltip visible={currentTooltip === 0} />
			<FirstTooltip visible={currentTooltip === 1} />
			<SecondTooltip visible={currentTooltip === 2} />
			<ThirdTooltip visible={currentTooltip === 3} />
			<FourTooltip visible={currentTooltip === 4} />
			<FiveTooltip visible={currentTooltip === 5} />
			<SixTooltip visible={currentTooltip === 6} />
			<SevenTooltip visible={currentTooltip === 7} />
			<EightTooltip visible={currentTooltip === 8} />
			<NineTooltip visible={currentTooltip === 9} />
			<TenTooltip visible={currentTooltip === 10} />
			<ElevenTooltip visible={currentTooltip === 11} />
			<TwelveTooltip visible={currentTooltip === 12} />
			<FinalTooltip visible={currentTooltip === 13} />
			<Topbar screen="dashboard" onPressGroupButton={changeTime} />
			<div className="m-8 flex justify-between">
				{/* Chart card */}
				<div className="grow basis-2/3">
					<CardChart data={graphicDay}/>
				</div>
				<div className="flex ml-5 basis-1/3 flex-col justify-between">
					{/* Incidents card */}
					<IncidentsCard textDescription={t("risk_high_urgent")} numIncidents={graphicDay?.High ?? 0}/>
					{/* Events week card*/}
					<EventsWeekCard open={graphicWeek?.open} closed={graphicWeek?.closed}/>
					{/* Saving month card*/}
					<SavingMonthCard saving={dashboard?.today?.saving?.f}/>
				</div>
			</div>
			{/* Category events */}
			<ContainerBackground className="mx-5">
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
