import ContainerBackground from "@shared/components/containerBackground";
import { ContainerFlex } from "../styled";
import { CaptionTwo, SubtitleLink } from "@shared/components/labels/styled";
import Arrow from "@shared/components/arrow";
import theme from "@theme/index";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/navigation";
import { currencyFormat } from "@shared/utils";

interface SavingCardProps {
    saving?: number;
};

export default function SavingMonthCard(props: SavingCardProps){
    const { saving } = props;
    const { t } = useTranslation("dashboard");
    const router = useRouter();

    return(
        <ContainerBackground className="mt-4" id="step-7">
            <ContainerFlex $justify="space-between">
                <CaptionTwo $weight={theme.fontWeight.bold}>{t("saving_our_services")}</CaptionTwo>
                <Arrow action={() => router.push("/savings")}  nameIcon="right-arrow"/>
            </ContainerFlex>
            <SubtitleLink $color={theme.colors.orange50} $weight={theme.fontWeight.bold}>{currencyFormat(saving ?? 0)} USD</SubtitleLink>
        </ContainerBackground>
    )
}
