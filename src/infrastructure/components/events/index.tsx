import ContainerBackground from "@shared/components/containerBackground";
import InformationCard from "@shared/components/informationCard";
import { CaptionOne, Overline, SubtitleLink } from "@shared/components/labels/styled";
import theme from "@theme/index";
import magnet from "/public/img/magnet.png";
import Arrow from "@shared/components/arrow";
import Image from "next/image";
import alarm from "/public/img/alarm_icon.png";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import ColorGuide from "@shared/components/colorGuide";
import { useState } from "react";

export default function EventsTemplate() {
    const router = useRouter();
    const { t } = useTranslation("events_today");
    const [selectedTicket, setSelectedTicket] = useState(0);

    return(
        <div className="tablet:flex space-between mx-5 py-8 h-screen mb-32">
            <ContainerBackground className={`${selectedTicket === 0 ? "cel:block" : "cel:hidden"} tablet:block tablet:w-9/12 justify-center tablet:mr-8`}>
				<div className="flex flex-col items-center mb-5">
                    <div className="flex w-full justify-between">
                        <Arrow action={() => router.push("/")} nameIcon="left-arrow"/>
                        <div className="grid">
                            <SubtitleLink $weight={theme.fontWeight.bold} $center>
                                {t("title_tickes")}
                            </SubtitleLink>
                            <CaptionOne className="text-center">{t("subtitle")}</CaptionOne>
                        </div>
                        <div className="w-12 h-12 bg-orange20 rounded-full grid place-content-center">
                            <Image src={alarm} alt="Alarm" width={32} height={0} />
                        </div>
                    </div>
                    <ColorGuide/>
					<CaptionOne
						$weight={theme.fontWeight.semiBold}
						className="mt-3"
					>
						24 de Marzo de 2022
					</CaptionOne>
				</div>
				<InformationCard
                    imageLeft={magnet}
					textLeft="ID 4849384"
					textRight="10:00am"
                    textCenter="Exfiltration"
                    classContainer="bg-green10 cursor-pointer"
                    onClick={() => setSelectedTicket(2)}
				/>
                <InformationCard
                    imageLeft={magnet}
					textLeft="ID 4849384"
					textRight="10:00am"
                    textCenter="Exfiltration"
                    classContainer="bg-shadow20 cursor-pointer"
                    onClick={() => setSelectedTicket(3)}
				/>
                <InformationCard
                    imageLeft={magnet}
					textLeft="ID 4849384"
					textRight="10:00am"
                    textCenter="Exfiltration"
                    classContainer="bg-red10 cursor-pointer"
                    onClick={() => setSelectedTicket(4)}
				/>
			</ContainerBackground>

			<ContainerBackground className={`${selectedTicket > 0 ? "cel:block" : "cel:hidden"} tablet:block flex items-center flex-col justify-center`}>
				<Overline $weight={theme.fontWeight.bold}>
					¡No hay ningún ticket seleccionado! {selectedTicket}
				</Overline>
			</ContainerBackground>
        </div>
    )
}
