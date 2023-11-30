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
import { useEffect, useRef } from "react";
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

export default function Dashboard() {
	const allEvents = [
		{
			event: "Ejecución",
			description: "Se está intentando correr código malicioso",
			number: 3,
			image: on,
		},
		{
			event: "Acceso inicial",
			description: "Se está intentando entrar a tu network",
			number: 3,
			image: targetShooting,
		},
		{
			event: "Exploits",
			description: "Riesgo de desarrollo de exploits",
			number: 3,
			image: bomb,
		},
		{
			event: "Restricción",
			description: "Acciones preventivas a tomar",
			number: 3,
			image: targetShooting,
		},
		{
			event: "Descubrimiento",
			description: "Intenta entender tu entorno",
			number: 3,
			image: binoculars,
		},
	];

	const SlideInfo = allEvents.map((event, index) => (
		<EventCard
			key={index}
			title={event.event}
			description={event.description}
			number={event.number}
			image={event.image}
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
			<div className="m-8 flex justify-between">
				{/* Chart card */}
				<div className="grow basis-2/3">
					<CardChart />
				</div>
				<div className="flex ml-5 basis-1/3 flex-col justify-between">
					{/* Incidents card */}
					<IncidentsCard />
					{/* Events week card*/}
					<EventsWeekCard />
					{/* Saving month card*/}
					<SavingMonthCard />
				</div>
			</div>
			{/* Category events */}
			<ContainerBackground className="mx-5">
				<SubtitleLink
					$weight={theme.fontWeight.bold}
					className="my-5 block"
				>
					Eventos de ciber seguridad por categoría
				</SubtitleLink>
				<SimpleSlider slides={SlideInfo} />
			</ContainerBackground>
		</>
	);
}
