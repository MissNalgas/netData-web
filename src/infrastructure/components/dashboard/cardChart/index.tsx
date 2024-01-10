import ContainerBackground from "@shared/components/containerBackground";
import { ContainerFlex } from "../styled";
import { Overline, SubtitleLink } from "@shared/components/labels/styled";
import Arrow from "@shared/components/arrow";
import ExampleChart from "@app/chart/example/component";
import CircleStatus from "@shared/components/circleStatus";
import theme from "@theme/index";
import colors from "@theme/colors";
import { useTranslation } from "next-i18next";

export default function CardChart() {
    const { t } = useTranslation("dashboard")

    const status = [{
        state: `${t("low")}`,
        internalColor: "bg-green40",
        externalColor: "bg-green20",
        border: "border-green40",
        color: colors.green40,
    }, {
        state: `${t("medium")}`,
        internalColor: "bg-purple50",
        externalColor: "bg-purple20",
        border: "border-purple50",
        color: colors.purple50,
    }, {
        state: `${t("high")}`,
        internalColor: "bg-orange50",
        externalColor: "bg-orange20",
        border: "border-orange50",
        color: colors.orange50,
    }, {
        state: `${t("urgent")}`,
        internalColor: "bg-red40",
        externalColor: "bg-red20",
        border: "border-red40",
        color: colors.red40,
    }];

    return (
        <ContainerBackground className="grow">
            <ContainerFlex className="items-center">
                <SubtitleLink $weight={theme.fontWeight.bold} className="my-5 block">{t("daily_watering_level")}</SubtitleLink>
                <Arrow action={() => {}} nameIcon="right-arrow"/>
            </ContainerFlex>
            <div className="flex-column tablet:flex justify-between items-center" id="step-4">
                <ExampleChart/>
                <div className="grid gap-1 grid-cols-2 tablet:flex tablet:flex-col">
                    {status.map((item, index) => (
                        <div key={index} className={`flex border items-center my-5 mr-5 p-1 rounded-lg ${item.border}`}>
                            <CircleStatus internalColor={item.internalColor} externalColor={item.externalColor}/>
                            <Overline $weight={theme.fontWeight.semiBold} $color={item.color}>{item.state}</Overline>
                        </div>
                    ))}
                </div>
            </div>
        </ContainerBackground>
    )
}
