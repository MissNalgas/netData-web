import React, { ReactNode } from "react";

import { Overline } from "@shared/components/labels/styled";
import Icon from "@shared/components/icons";
import { ContentButtonMain } from "../styled";
import { useTranslation } from "react-i18next";

interface props {
	visible?: boolean;
    handleClickHelper: (_method: "next" | "prev" | "close" | "open") => void;
    step?: number;
    description: ReactNode;
}

const FirstTooltip = (props: props) => {
    const { handleClickHelper, step, description } = props;
    const { t } = useTranslation("guide");

	return (
        <>
            <div className="my-2 grid">
                <Overline className="text-left">{description}</Overline>
            </div>
            <ContentButtonMain>
                <button
                    className="w-9 h-9 bg-shadow20 rounded-full grid place-content-center"
                    onClick={() => handleClickHelper("prev")}>
                    <Icon icon="left-arrow" size={30} />
                </button>
                <Overline $color="#F99E17" $weight={700}>
                    {step}/12
                </Overline>
                <button
                    className="w-9 h-9 bg-shadow20 rounded-full grid place-content-center"
                    onClick={() => handleClickHelper("next")}>
                    <Icon icon="right-arrow" size={30} />
                </button>
            </ContentButtonMain>
            <Overline
                $color="#F99E17"
                $center
                onClick={() => handleClickHelper("close")}
                className="cursor-pointer">
                    {t("close_guide")}
                </Overline>
        </>
	);
};

export default FirstTooltip;
