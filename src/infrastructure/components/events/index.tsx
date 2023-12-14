import ContainerBackground from "@shared/components/containerBackground";
import InformationCard from "@shared/components/informationCard";
import { BodyTwo, CaptionOne, Overline, SubtitleLink } from "@shared/components/labels/styled";
import theme from "@theme/index";
import magnet from "/public/img/magnet.png";
import Arrow from "@shared/components/arrow";
import Image from "next/image";
import alarm from "/public/img/alarm_icon.png";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function EventsTemplate() {
    const router = useRouter();
    const { t } = useTranslation("events_today");

    return(
        <div className="flex space-between mx-5 py-8 h-screen mb-32">
            <ContainerBackground className="grow justify-center mr-8">
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
                    <div className="flex w-4/6 justify-evenly mt-5 mb-3">
                        <div className="flex border py-1 px-7 rounded-md items-center">
                            <div className="w-3 h-3 bg-red10 mr-2"/>
                            <BodyTwo $weight={600} $color={theme.colors.red30}>{t("status_pending")}</BodyTwo>
                        </div>
                        <div className="flex border px-7 rounded-md items-center">
                            <div className="w-3 h-3 bg-orange10 mr-2"/>
                            <BodyTwo $weight={600} $color={theme.colors.orange50}>{t("status_in_review")}</BodyTwo>
                        </div>
                        <div className="flex border px-7 rounded-md items-center">
                            <div className="w-3 h-3 bg-green10 mr-2"/>
                            <BodyTwo $weight={600} $color={theme.colors.green50}>{t("status_close")}</BodyTwo>
                        </div>
                    </div>
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
                    classContainer="bg-green10"
				/>
                <InformationCard
                    imageLeft={magnet}
					textLeft="ID 4849384"
					textRight="10:00am"
                    textCenter="Exfiltration"
                    classContainer="bg-shadow20"
				/>
                <InformationCard
                    imageLeft={magnet}
					textLeft="ID 4849384"
					textRight="10:00am"
                    textCenter="Exfiltration"
                    classContainer="bg-red10"
				/>
			</ContainerBackground>

			<ContainerBackground className="flex items-center flex-col justify-center">
				<Overline $weight={theme.fontWeight.bold}>
					¡No hay ningún ticket seleccionado!
				</Overline>
			</ContainerBackground>
        </div>
    )
}