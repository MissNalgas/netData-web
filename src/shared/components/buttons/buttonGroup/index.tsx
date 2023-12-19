import { Overline } from "@shared/components/labels/styled";
import React, { useState } from "react";
import { ButtonLeft, ButtonRight, Container } from "./styled";
import theme from "@theme/index";

interface SwitchButtonProps {
    textButtonLeft: string;
    textButtonRight: string;
    bgColor: string;
    activeColor: string;
}

const SwitchButton = (props: SwitchButtonProps) => {
    const { textButtonRight, textButtonLeft, bgColor, activeColor } = props;
    const [isSwitched, setIsSwitched] = useState(false);

    const handleSwitchToggle = () => {
        setIsSwitched((prev) => !prev);
    };

    return (
        <Container $bgColor={bgColor}>
            <ButtonLeft onClick={() => handleSwitchToggle()} $isSwitch={isSwitched} $bgColor={activeColor}>
                <Overline $color={isSwitched ? theme.colors.gray50 : theme.colors.white} $weight={theme.fontWeight.semiBold}>{textButtonLeft}</Overline>
            </ButtonLeft>
            <ButtonRight onClick={() => handleSwitchToggle()} $isSwitch={isSwitched} $bgColor={activeColor}>
                <Overline $color={!isSwitched ? theme.colors.gray50 : theme.colors.white} $weight={theme.fontWeight.semiBold}>{textButtonRight}</Overline>
            </ButtonRight>
        </Container>
    );
};

export default SwitchButton;