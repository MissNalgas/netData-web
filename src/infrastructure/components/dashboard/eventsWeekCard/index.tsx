import Arrow from "@shared/components/arrow";
import ContainerBackground from "@shared/components/containerBackground";
import { BodyTwo, CaptionTwo, Overline } from "@shared/components/labels/styled";
import { ContainerFlex } from "../styled";
import theme from "@theme/index";
import CircleStatus from "@shared/components/circleStatus";
import { useTranslation } from "react-i18next";
import { IGraphicWeek } from "@domain/models";
import { useRouter } from "next/navigation";
import ProgressBar from "@shared/components/progressBar";

export default function EventsWeekCard(props: IGraphicWeek) {
    const { open, closed } = props;
    const { t } = useTranslation("dashboard");
    const router = useRouter();
    const maxIncidents = 500;

    return (
        <ContainerBackground className="my-4" id="step-6">
            <ContainerFlex $justify="space-between">
                <CaptionTwo $weight={theme.fontWeight.bold}>{t("events_of_the_week")}</CaptionTwo>
                <Arrow action={() => router.push("/events-cibersecurity")} nameIcon="right-arrow"/>
            </ContainerFlex>
            <ContainerFlex>
                <ContainerFlex>
                    <ProgressBar incidents={open ?? 0} maxIncidents={maxIncidents} bgColor={theme.colors.red40}/>
                    <Overline $weight={theme.fontWeight.bold}>{open ?? 0}</Overline>
                </ContainerFlex>
                <ContainerFlex className="items-center">
                    <CircleStatus internalColor="red40" externalColor="red20"/>
                    <BodyTwo $color={theme.colors.red40} $weight={theme.fontWeight.bold}>{t("open")}</BodyTwo>
                </ContainerFlex>
            </ContainerFlex>
            <ContainerFlex className="mt-2">
                <ContainerFlex>
                    <ProgressBar incidents={closed ?? 0} maxIncidents={maxIncidents} bgColor={theme.colors.green40}/>
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
