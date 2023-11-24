import ContainerBackground from "@shared/components/containerBackground";
import InformationCard from "@shared/components/informationCard";
import { CaptionTwo, Overline } from "@shared/components/labels/styled";
import theme from "@theme/index";
import Fire from "/public/img/fire_1.png";
import Alarm from "/public/img/alarm_icon.png";

export default function NotificationsComponent() {
    return (
        <div className="flex space-between mx-5 py-8 h-screen mb-32">
            <ContainerBackground className="grow justify-center mr-8">
                <div className="flex flex-col items-center mb-5">
                    <Overline $weight={theme.fontWeight.bold} $center>Tus notificaciones</Overline>
                    <CaptionTwo>De último mes</CaptionTwo>
                    <CaptionTwo $weight={theme.fontWeight.semiBold} className="mt-3">24 de Marzo de 2022</CaptionTwo>
                </div>
                <InformationCard
                    textLeft="Se ha creado un ticker nuevo"
                    textRight="ID 4759485"
                />
                <InformationCard
                    textLeft="Se ha creado un ticker nuevo"
                    textRight="ID 4759485"
                />
                <InformationCard
                    imageLeft={Alarm}
                    textLeft="¡Cuidado! manejas un nivel de riesgo alto"
                />
                <InformationCard
                    imageLeft={Fire}
                    textLeft="¡Alerta! manejas un nivel de riesgo de urgente revisión"
                />
            </ContainerBackground>
            <ContainerBackground className="flex items-center">
                <Overline $weight={theme.fontWeight.bold}>¡No hay ningún ticket seleccionado!</Overline>
            </ContainerBackground>
        </div>
    )
}