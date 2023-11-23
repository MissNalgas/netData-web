import Arrow from "@shared/components/arrow";
import ContainerBackground from "@shared/components/containerBackground";
import { BodyTwo, CaptionTwo, Overline } from "@shared/components/labels/styled";
import { ContainerFlex } from "../styled";
import theme from "@theme/index";
import CircleStatus from "@shared/components/circleStatus";

export default function EventsWeekCard() {
    return (
        <ContainerBackground className="my-4">
            <ContainerFlex>
                <CaptionTwo $weight={theme.fontWeight.bold}>Eventos de ciberseguridad de la semana</CaptionTwo>
                <Arrow action={() => {}} nameIcon="right-arrow"/>
            </ContainerFlex>
            <ContainerFlex>
                <ContainerFlex>
                    <div className="w-12 bg-red40 rounded-2xl mr-2"/>
                    <Overline $weight={theme.fontWeight.bold}>15</Overline>
                </ContainerFlex>
                <ContainerFlex className="items-center">
                    <CircleStatus internalColor="red40" externalColor="red20"/>
                    <BodyTwo $color={theme.colors.red40} $weight={theme.fontWeight.bold}>Abiertos</BodyTwo>
                </ContainerFlex>
            </ContainerFlex>
            <ContainerFlex className="mt-2">
                <ContainerFlex>
                    <div className="w-20 bg-green40 rounded-2xl mr-2"/>
                    <Overline $weight={theme.fontWeight.bold}>35</Overline>
                </ContainerFlex>
                <ContainerFlex className="items-center">
                    <CircleStatus internalColor="green40" externalColor="green20"/>
                    <BodyTwo $color={theme.colors.green40} $weight={theme.fontWeight.bold}>Abiertos</BodyTwo>
                </ContainerFlex>
            </ContainerFlex>
        </ContainerBackground>
    )
}