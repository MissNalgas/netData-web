import React, { useState, useEffect } from "react";
import { Card, CardsContainer, Dot, DotContainer, Slide, SliderContainer, SliderTrack } from "./styles";
import Icon from "../icons";

interface SimpleSliderProps {
  slides: React.JSX.Element[];
}

const SimpleSlider: React.FC<SimpleSliderProps> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [visibleCards, setVisibleCards] = useState<number>(4);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index * visibleCards);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + visibleCards >= slides.length ? 0 : prevIndex + visibleCards));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - visibleCards < 0 ? slides.length - visibleCards : prevIndex - visibleCards));
    };

    const updateVisibleCards = () => {
        const screenWidth = window.innerWidth;
        const newVisibleCards = Math.floor(screenWidth / (200 + 16));
        setVisibleCards(Math.min(newVisibleCards, 4));
    };

    useEffect(() => {
        updateVisibleCards();
        window.addEventListener("resize", updateVisibleCards);
        return () => {
            window.removeEventListener("resize", updateVisibleCards);
        };
    }, []);

    return (
        <div className="flex items-center">
            <div className="bg-yellow rounded-full mr-5 cursor-pointer" onClick={() => prevSlide()}>
                <Icon icon="left-arrow-1" size={32} color="white"/>
            </div>
            <SliderContainer>
                <SliderTrack style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}>
                    {slides.map((slide, index) => (
                    <Slide key={index}>
                        <CardsContainer>
                            {slides.slice(index * visibleCards, (index + 1) * visibleCards).map((card, cardIndex) => (
                                <Card key={cardIndex}>{card}</Card>
                            ))}
                        </CardsContainer>
                    </Slide>
                    ))}
                </SliderTrack>
                <DotContainer>
                    {Array.from({ length: Math.ceil(slides.length / visibleCards) }).map((_, index) => (
                        <Dot
                            key={index}
                            active={index === Math.floor(currentIndex / visibleCards)}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </DotContainer>
            </SliderContainer>
            <div className="bg-yellow rounded-full cursor-pointer ml-5" onClick={() => nextSlide()}>
                <Icon icon="right-arrow-1" size={32} color="white"/>
            </div>
        </div>
    );
};

export default SimpleSlider;