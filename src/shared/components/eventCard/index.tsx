import theme from "@theme/index";
import { TitleCard, DescriptionCard, Container, ImageContainer, BadgeContainer, Photo } from "./styled";
import { StaticImageData } from "next/image";

interface IEventCardProps {
    image: StaticImageData;
    number: string | number;
    title: string;
    description: string;
}

export default function EventCard(props: IEventCardProps) {
    const {image, number, title, description} = props;

    return (
        <div className="border border-orange50 rounded-2xl p-3 w-44 h-full">
            <Container>
                <ImageContainer>
                    <Photo src={image} alt="event" />
                </ImageContainer>
                <BadgeContainer>
                    {number}
                </BadgeContainer>
            </Container>
            <TitleCard $weight={theme.fontWeight.bold}>{title}</TitleCard>
            <DescriptionCard>{description}</DescriptionCard>
        </div>
    )
}