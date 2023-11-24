import ContainerBackground from "@shared/components/containerBackground";
import { ContainerFlex } from "../styled";
import { CaptionTwo, SubtitleLink } from "@shared/components/labels/styled";
import Arrow from "@shared/components/arrow";
import theme from "@theme/index";

export default function SavingMonthCard(){
    return(
        <ContainerBackground className="mt-4">
            <ContainerFlex>
                <CaptionTwo $weight={theme.fontWeight.bold}>Te estás ahorrando en el mes</CaptionTwo>
                <Arrow action={() => {}} nameIcon="right-arrow"/>
            </ContainerFlex>
            <SubtitleLink $color={theme.colors.orange50} $weight={theme.fontWeight.bold}>$8.000 USD</SubtitleLink>
        </ContainerBackground>
    )
}