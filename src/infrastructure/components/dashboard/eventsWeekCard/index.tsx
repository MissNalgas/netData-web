import Arrow from "@shared/components/arrow";
import ContainerBackground from "@shared/components/containerBackground";
import { CaptionTwo } from "@shared/components/labels/styled";
import { ContainerFlex } from "../styled";
import theme from "@theme/index";
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
            <iframe
                src={`/chart/progressbars?height=500&events-open=${open}&events-closed=${closed}`}
                className="h-[80px] w-full flex pt-2"
                title="solutionbars"
            />
        </ContainerBackground>
    )
}
