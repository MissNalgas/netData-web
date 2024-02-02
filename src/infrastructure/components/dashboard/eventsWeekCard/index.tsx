import Arrow from "@shared/components/arrow";
import ContainerBackground from "@shared/components/containerBackground";
import { BodyTwo, CaptionTwo } from "@shared/components/labels/styled";
import { ContainerFlex } from "../styled";
import theme from "@theme/index";
import CircleStatus from "@shared/components/circleStatus";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { IGraphicWeek } from "@domain/models";

export default function EventsWeekCard(props: IGraphicWeek) {
    const { open, closed } = props;
    const { t } = useTranslation("dashboard");
    const router = useRouter();

    return (
        <ContainerBackground className="my-4" id="step-5">
            <ContainerFlex $justify="space-between">
                <CaptionTwo $weight={theme.fontWeight.bold}>{t("events_of_the_week")}</CaptionTwo>
                <Arrow action={() => router.push("/events-cibersecurity")} nameIcon="right-arrow"/>
            </ContainerFlex>
            <div className="flex space-between">
                <iframe
                    src={`/chart/progressbars?height=500&events-open=${open}&events-closed=${closed}`}
                    className="h-[80px] flex pt-2"
                    title="solutionbars"
                />
                <div className="flex flex-col justify-between my-3">
                    <ContainerFlex className="items-center">
                        <CircleStatus internalColor="red40" externalColor="red20"/>
                        <BodyTwo $color={theme.colors.red40} $weight={theme.fontWeight.bold}>{t("open")}</BodyTwo>
                    </ContainerFlex>
                    <ContainerFlex className="items-center">
                        <CircleStatus internalColor="green40" externalColor="green20"/>
                        <BodyTwo $color={theme.colors.green40} $weight={theme.fontWeight.bold}>{t("closed")}</BodyTwo>
                    </ContainerFlex>
                </div>
            </div>
        </ContainerBackground>
    )
}
