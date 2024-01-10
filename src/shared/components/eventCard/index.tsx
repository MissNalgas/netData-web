import theme from "@theme/index";
import { TitleCard, DescriptionCard, Container, ImageContainer, BadgeContainer, Photo } from "./styled";
import { StaticImageData } from "next/image";

interface IEventCardProps {
    image: StaticImageData;
    title: string;
    description: string;
    ticketsCount: number;
}

export default function EventCard(props: IEventCardProps) {
    const {image, title, description, ticketsCount} = props;

    return (
        <div className="border border-orange50 rounded-2xl p-3 w-44 h-full pb-10">
            <Container>
                <ImageContainer>
                    <Photo src={image} alt="event" />
                </ImageContainer>
                <BadgeContainer>
                    <div className="bg-blue20 rounded-full p-2 px-3">
                        {ticketsCount}
                    </div>
                </BadgeContainer>
            </Container>
            <TitleCard $weight={theme.fontWeight.bold}>{title}</TitleCard>
            <DescriptionCard>{description}</DescriptionCard>
        </div>
    )
}