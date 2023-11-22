import EventCard from "@shared/components/eventCard";
import SimpleSlider from "@shared/components/slider";
import Image from "next/image";
import Risk from "/public/img/card_risk.png";
import ContainerBackground from "@shared/components/containerBackground";
import Icon from "@shared/components/icons";
import { BodyTwo, CaptionTwo, Overline, SubtitleLink, TitleOne } from "@shared/components/labels/styled";
import colors from "@theme/colors";
import { ContainerFlex } from "./styled";
import theme from "@theme/index";
import on from "/public/img/on_1.png";
import bomb from "/public/img/bomb_1.png";
import targetShooting from "/public/img/target_shooting_1.png";
import binoculars from "/public/img/binoculars_1.png";

export default function Dashboard() {
    const allEvents = [{
        event: "Ejecución",
        description: "Se está intentando correr código malicioso",
        number: 3,
        image: on,
    }, {
        event: "Acceso inicial",
        description: "Se está intentando entrar a tu network",
        number: 3,
        image: targetShooting,
    }, {
        event: "Exploits",
        description: "Riesgo de desarrollo de exploits",
        number: 3,
        image: bomb,
    }, {
        event: "Restricción",
        description: "Acciones preventivas a tomar",
        number: 3,
        image: targetShooting,
    }, {
        event: "Descubrimiento",
        description: "Intenta entender tu entorno",
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
                <ContainerBackground className="grow">
                    Gráfica
                </ContainerBackground>
                <div className="ml-5">
                    <ContainerBackground className="flex mb-4 items-center">
                        <div className="bg-shadow20 rounded-2xl">
                            <Image
                                src={Risk}
                                alt="risk"
                            />
                        </div>
                        <CaptionTwo className="wrap mx-2" $weight={theme.fontWeight.bold}>¡Tienes incidentes potenciales de alto riesgo!</CaptionTwo>
                        <TitleOne $color={colors.orange50}>3</TitleOne>
                        <div className="bg-shadow20 rounded-full ml-1">
                            <Icon
                                icon="right-arrow"
                                size={25}
                            />
                        </div>
                    </ContainerBackground>
                    <ContainerBackground className="my-4">
                        <ContainerFlex>
                            <CaptionTwo $weight={theme.fontWeight.bold}>Eventos de ciberseguridad de la semana</CaptionTwo>
                            <div className="bg-shadow20 rounded-full">
                                <Icon
                                    icon="right-arrow"
                                    size={25}
                                />
                            </div>
                        </ContainerFlex>
                        <ContainerFlex>
                            <ContainerFlex>
                                <div className="w-12 bg-red40 rounded-2xl mr-2"/>
                                <Overline $weight={theme.fontWeight.bold}>15</Overline>
                            </ContainerFlex>
                            <ContainerFlex className="items-center">
                                <div className="bg-red20 w-4 h-4 rounded-full flex items-center justify-center mr-2"><div className="bg-red rounded-full w-2 h-2"/></div>
                                <BodyTwo>Abiertos</BodyTwo>
                            </ContainerFlex>
                        </ContainerFlex>
                        <ContainerFlex className="mt-2">
                            <ContainerFlex>
                                <div className="w-20 bg-green40 rounded-2xl mr-2"/>
                                <Overline $weight={theme.fontWeight.bold}>35</Overline>
                            </ContainerFlex>
                            <ContainerFlex className="items-center">
                                <div className="bg-green20 w-4 h-4 rounded-full flex items-center justify-center mr-2"><div className="bg-green40 rounded-full w-2 h-2"/></div>
                                <BodyTwo>Abiertos</BodyTwo>
                            </ContainerFlex>
                        </ContainerFlex>
                    </ContainerBackground>
                    <ContainerBackground className="mt-4">
                        <ContainerFlex>
                            <CaptionTwo $weight={theme.fontWeight.bold}>Te estás ahorrando en el mes</CaptionTwo>
                            <div className="bg-shadow20 rounded-full">
                                <Icon
                                    icon="right-arrow"
                                    size={25}
                                />
                            </div>
                        </ContainerFlex>
                        <SubtitleLink $color={colors.orange50} $weight={theme.fontWeight.bold}>$8.000 USD</SubtitleLink>
                    </ContainerBackground>
                </div>
            </div>
            <ContainerBackground className="mx-5">
                <SubtitleLink $weight={theme.fontWeight.bold} className="my-5 block">Eventos de ciber seguridad por categoría</SubtitleLink>
                <SimpleSlider slides={SlideInfo}/>
            </ContainerBackground>
        </>

	);
}
