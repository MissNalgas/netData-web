import Arrow from "@shared/components/arrow";
import CalendarComponent from "@shared/components/calendar";
import ContainerBackground from "@shared/components/containerBackground";
import { Body, CaptionOne, SubtitleLink } from "@shared/components/labels/styled";
import theme from "@theme/index";
import { useTranslation } from "react-i18next";

export default function EventsCibersecurity() {
    const { t } = useTranslation("events_week");
    return (
        <div className="p-5">
            <ContainerBackground className="flex items-center flex-col">
                <SubtitleLink $weight={theme.fontWeight.semiBold}>{t("information_visual")}</SubtitleLink>
                <CaptionOne>{t("last_eight_days")}</CaptionOne>
            </ContainerBackground>
            <div className="tablet:flex flex-wrap tablet:gap-2 mt-5">
                <ContainerBackground className="flex-initial w-full tablet:w-8/12 mr-5 mb-5 p-8">
                    <SubtitleLink $weight={theme.fontWeight.semiBold}>{t("events_for_priority")}</SubtitleLink>
                        <iframe
                            src="/chart/prioritydonut"
                            className="w-full h-[300px]"
                        />
                </ContainerBackground>
                <ContainerBackground className="flex-1 w-full tablet:w-3/12 mb-5 p-8">
                    <Body $weight={theme.fontWeight.semiBold}>{t("tickets_open_week")}</Body>
                    <CalendarComponent/>
                </ContainerBackground>
                <ContainerBackground className="flex-initial w-full tablet:w-8/12 mr-5 p-8 mb-5">
                    <div className="flex justify-between">
                        <SubtitleLink $weight={theme.fontWeight.semiBold}>{t("events_for_category")}</SubtitleLink>
                        <Arrow action={() => {}} nameIcon="right-arrow"/>
                    </div>
                    <iframe
                        src="/chart/categorybars"
                        className="w-full h-[300px]"
                    />
                </ContainerBackground>
                <ContainerBackground className="flex-1 w-full tablet:w-3/12 p-8 mb-5">
                    <Body $weight={theme.fontWeight.semiBold}>{t("heatmap:events_by_solution")}</Body>
                    <iframe
                        src="/chart/solutionbars?height=400"
                        className="w-full h-[400px]"
                    />
                </ContainerBackground>
            </div>
        </div>
    );
}