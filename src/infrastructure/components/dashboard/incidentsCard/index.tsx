import Arrow from "@shared/components/arrow";
import ContainerBackground from "@shared/components/containerBackground";
import { CaptionTwo, TitleOne } from "@shared/components/labels/styled";
import theme from "@theme/index";
import Image from "next/image";
import Risk from "/public/img/card_risk.png";

interface IncidentsCardProps {
    textDescription: string;
    numIncidents: number;
}

export default function IncidentsCard(props: IncidentsCardProps) {
    const { textDescription, numIncidents } = props;

    return (
        <ContainerBackground className="flex mb-4 items-center">
            <div className="bg-shadow20 rounded-xl p-2">
                <Image src={Risk} alt="risk" width={82}/>
            </div>
            <CaptionTwo className="wrap mx-2 ml-4" $weight={theme.fontWeight.bold}>{textDescription}</CaptionTwo>
            <TitleOne $color={theme.colors.orange50}>{numIncidents}</TitleOne>
            <Arrow action={() => {}} nameIcon="right-arrow"/>
        </ContainerBackground>
    )
}