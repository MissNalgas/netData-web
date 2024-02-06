import Arrow from "@shared/components/arrow";
import ContainerBackground from "@shared/components/containerBackground";
import { CaptionTwo } from "@shared/components/labels/styled";
import { ContainerFlex } from "../styled";
import theme from "@theme/index";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { formatDateDTO } from "@shared/utils";
import { useEffect, useState } from "react";

export default function EventsWeekCard({ isToday }: { isToday: boolean }) {
    const { t } = useTranslation("dashboard");
    const router = useRouter();
    const [date, setDate] = useState(new Date);

    useEffect(() => {
        let dateGraphic = new Date();
        if(!isToday) {
            dateGraphic.setDate(dateGraphic.getDate() -1);
        }
        setDate(dateGraphic);
    }, [isToday]);

    return (
        <ContainerBackground className="my-4" id="step-5">
            <ContainerFlex $justify="space-between">
                <CaptionTwo $weight={theme.fontWeight.bold}>{t("events_of_the_week")}</CaptionTwo>
                <Arrow action={() => router.push("/events-cibersecurity")} nameIcon="right-arrow"/>
            </ContainerFlex>
            <iframe
                src={`/chart/progressbars?height=500&date=${formatDateDTO(date)}`}
                className="h-[80px] w-full flex pt-2"
                title="solutionbars"
            />
        </ContainerBackground>
    )
}
