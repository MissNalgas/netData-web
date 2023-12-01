import EventCard from "@shared/components/eventCard";
import SimpleSlider from "@shared/components/slider";
import ContainerBackground from "@shared/components/containerBackground";
import { SubtitleLink } from "@shared/components/labels/styled";
import theme from "@theme/index";
import on from "/public/img/on_1.png";
import bomb from "/public/img/bomb_1.png";
import targetShooting from "/public/img/target_shooting_1.png";
import binoculars from "/public/img/binoculars_1.png";
import CardChart from "./cardChart";
import EventsWeekCard from "./eventsWeekCard";
import IncidentsCard from "./incidentsCard";
import SavingMonthCard from "./savingMonthCard";
import { useTranslation } from "next-i18next";

export default function Dashboard() {
    const { t } = useTranslation("dashboard");

    const allEvents = [{
        event: `${t("execution_event")}`,
        description: `${t("description_execution")}`,
        number: 3,
        image: on,
    }, {
        event: `${t("initial_access")}`,
        description: `${t("description_initial_access")}`,
        number: 3,
        image: targetShooting,
    }, {
        event: `${t("exploits_event")}`,
        description: `${t("description_exploits")}`,
        number: 3,
        image: bomb,
    }, {
        event: `${t("restriction_event")}`,
        description: `${t("description_restriction")}`,
        number: 3,
        image: targetShooting,
    }, {
        event: `${t("discovery_event")}`,
        description: `${t("description_discovery")}`,
        number: 3,
        image: binoculars,
    }];

    const SlideInfo = allEvents.map((event, index) => (
        <EventCard
            key={index}
            title={event.event}
            description={event.description}
            number={event.number}
            image={event.image}
        />
    ));

	return (
        <>
            <div className="m-8 flex justify-between">
                {/* Chart card */}
                <div className="grow basis-2/3">
                    <CardChart/>
                </div>
                <div className="flex ml-5 basis-1/3 flex-col justify-between">
                    {/* Incidents card */}
                    <IncidentsCard textDescription={t("risk_high_urgent")}/>
                    {/* Events week card*/}
                    <EventsWeekCard/>
                    {/* Saving month card*/}
                    <SavingMonthCard/>
                </div>
            </div>
            {/* Category events */}
            <ContainerBackground className="mx-5">
                <SubtitleLink $weight={theme.fontWeight.bold} className="my-5 block">{t("event_categories")}</SubtitleLink>
                <SimpleSlider slides={SlideInfo}/>
            </ContainerBackground>
        </>

	);
}
