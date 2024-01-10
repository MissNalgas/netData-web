import Arrow from "@shared/components/arrow";
import ContainerBackground from "@shared/components/containerBackground";
import { BodyTwo, CaptionTwo, Overline } from "@shared/components/labels/styled";
import { ContainerFlex } from "../styled";
import theme from "@theme/index";
import CircleStatus from "@shared/components/circleStatus";
import { useTranslation } from "react-i18next";
import { IGraphicWeek } from "@domain/models";


export default function EventsWeekCard(props: IGraphicWeek) {
    const { open, closed } = props;
    const { t } = useTranslation("dashboard");

    return (
        <ContainerBackground className="my-4">
            <ContainerFlex>
                <CaptionTwo $weight={theme.fontWeight.bold}>{t("events_of_the_week")}</CaptionTwo>
                <Arrow action={() => {}} nameIcon="right-arrow"/>
            </ContainerFlex>
            <ContainerFlex>
                <ContainerFlex>
                    <div className="w-12 bg-red40 rounded-2xl mr-2"/>
                    <Overline $weight={theme.fontWeight.bold}>{open ?? 0}</Overline>
                </ContainerFlex>
                <ContainerFlex className="items-center">
                    <CircleStatus internalColor="red40" externalColor="red20"/>
                    <BodyTwo $color={theme.colors.red40} $weight={theme.fontWeight.bold}>{t("open")}</BodyTwo>
                </ContainerFlex>
            </ContainerFlex>
            <ContainerFlex className="mt-2">
                <ContainerFlex>
                    <div className="w-20 bg-green40 rounded-2xl mr-2"/>
                    <Overline $weight={theme.fontWeight.bold}>{closed ?? 0}</Overline>
                </ContainerFlex>
                <ContainerFlex className="items-center">
                    <CircleStatus internalColor="green40" externalColor="green20"/>
                    <BodyTwo $color={theme.colors.green40} $weight={theme.fontWeight.bold}>{t("closed")}</BodyTwo>
                </ContainerFlex>
            </ContainerFlex>
        </ContainerBackground>
    )
}