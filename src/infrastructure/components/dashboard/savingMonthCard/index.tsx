import ContainerBackground from "@shared/components/containerBackground";
import { ContainerFlex } from "../styled";
import { CaptionTwo, SubtitleLink } from "@shared/components/labels/styled";
import Arrow from "@shared/components/arrow";
import theme from "@theme/index";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/navigation";

export default function SavingMonthCard(){
    const { t } = useTranslation("dashboard");
    const router = useRouter();

    return(
        <ContainerBackground className="mt-4">
            <ContainerFlex>
                <CaptionTwo $weight={theme.fontWeight.bold}>{t("saving_our_services")}</CaptionTwo>
                <Arrow action={() => router.push("/savings")}  nameIcon="right-arrow"/>
            </ContainerFlex>
            <SubtitleLink $color={theme.colors.orange50} $weight={theme.fontWeight.bold}>$8.000 USD</SubtitleLink>
        </ContainerBackground>
    )
}
