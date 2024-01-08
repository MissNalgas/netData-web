import Joyride, { CallBackProps, StoreHelpers } from "react-joyride"
import FirstTooltip from "./FirstTooltip";
import { useTranslation } from "react-i18next";
import { Overline } from "@shared/components/labels/styled";
import Icon from "@shared/components/icons";
import { useRef, useState } from "react";
import Image from "next/image";
import alarm from "/public/img/alarm_icon.png";
import fire from "/public/img/fire_1.png";
import tree from "/public/img/tree 1.png";
import clock from "/public/img/clock 1.png";
import { useDispatch, useSelector } from "react-redux";
import { hideTooltipModal, setCurrentTooltip } from "../slice";
import { RootState } from "@infrastructure/store";

export const JoyrideToast = () => {
    const { t:guide } = useTranslation("guide");
    const [step, setStep] = useState(0);
    const dispatch = useDispatch();
    const { showTooltip } = useSelector((state: RootState) => state.tooltips);
    const helpers = useRef<StoreHelpers>();

    const handleClickHelper = (method: "next" | "prev" | "close") => {
        const { next, prev, skip } = helpers.current!;
        switch (method) {
            case "next":
                next();
                break;
            case "prev":
                prev();
                break;
            case "close":
                skip();
                dispatch(hideTooltipModal());
                break;
        }
    };

    const joyrideSteps = [
        {
            target: "#step-1",
            content: <FirstTooltip
                handleClickHelper={handleClickHelper}
                description={<div>
                    {guide("icon_risk_right")}
                        <div className="flex flex-row justify-evenly items-center my-4">
                            <div className="w-12 h-12 bg-[#CCEBEA] rounded-full grid place-content-center">
                                <Image
                                    src={tree}
                                    width={33}
                                    height={33}
                                    alt="tooltip1"
                                />
                            </div>
                            <div className="w-12 h-12 bg-[#D5BEE1] rounded-full grid place-content-center">
                                <Image
                                    src={clock}
                                    width={33}
                                    height={33}
                                    alt="tooltip1"
                                />
                            </div>
                            <div className="w-12 h-12 bg-[#FDE2B9] rounded-full grid place-content-center">
                                <Image
                                    src={alarm}
                                    width={33}
                                    height={33}
                                    alt="tooltip1"
                                />
                            </div>
                            <div className="w-12 h-12 bg-[#FBB5A4] rounded-full grid place-content-center">
                                <Image
                                    src={fire}
                                    width={33}
                                    height={33}
                                    alt="tooltip1"
                                />
                            </div>
                        </div>
                    </div>}
                step={step}
                />,
            hideFooter: true,
        },
        {
            target: "#step-2",
            content:
                <FirstTooltip
                    handleClickHelper={handleClickHelper}
                    description={<Overline>
                        {guide("icon_refresh_left")}{" "}
                        <Icon icon="Reload" size={20} color="#F99E17" />{" "}
                        {guide("complement_icon_refresh_left")}
                    </Overline>}
                    step={step}
                />,
            hideCloseButton: true,
            hideFooter: true,
        },
        {
            target: "#step-3",
            content:
                <FirstTooltip
                    handleClickHelper={handleClickHelper}
                    description={guide("urgent_events_risk")}
                    step={step}
                />,
            hideCloseButton: true,
            hideFooter: true,
        },
        {
            target: "#step-4",
            content:
                <FirstTooltip
                    handleClickHelper={handleClickHelper}
                    step={step}
                    description={guide("bubble_chart")}
                />,
            hideCloseButton: true,
            hideFooter: true,
        },
        {
            target: "#step-5",
            content:
                <FirstTooltip
                    handleClickHelper={handleClickHelper}
                    step={step}
                    description={guide("event_categories")}
                />,
            hideCloseButton: true,
            hideFooter: true,
        },
        {
            target: "#step-6",
            content:
                <FirstTooltip
                    handleClickHelper={handleClickHelper}
                    step={step}
                    description={guide("events_of_the_week")}
                />,
            hideCloseButton: true,
            hideFooter: true,
        },
        {
            target: "#step-7",
            content:
                <FirstTooltip
                    handleClickHelper={handleClickHelper}
                    step={step}
                    description={guide("saving_our_services")}
                />,
            hideCloseButton: true,
            hideFooter: true,
        },
        {
            target: "#step-8",
            content:
                <FirstTooltip
                    handleClickHelper={handleClickHelper}
                    step={step}
                    description={guide("dashboard")}
                />,
            hideCloseButton: true,
            hideFooter: true,
        },
        {
            target: "#step-9",
            content:
                <FirstTooltip
                    handleClickHelper={handleClickHelper}
                    step={step}
                    description={<Overline>
                        {guide("heatmap")}{" "}
                        <Icon icon="temperature" size={20} color="#F99E17" />{" "}
                        {guide("continue_heatmap")}
                    </Overline>}
                />,
            hideCloseButton: true,
            hideFooter: true,
        },
        {
            target: "#step-10",
            content:
                <FirstTooltip
                    handleClickHelper={handleClickHelper}
                    step={step}
                    description={<Overline>
                        {guide("events")}{" "}
                        <Icon icon="bar-graph" size={20} color="#F99E17" />{" "}
                        {guide("continue_events")}
                    </Overline>}
                />,
            hideCloseButton: true,
            hideFooter: true,
        },
        {
            target: "#step-11",
            content:
                <FirstTooltip
                    handleClickHelper={handleClickHelper}
                    step={step}
                    description={<Overline>
                        {guide("notifications")}{" "}
                        <Icon icon="Bell" size={20} color="#F99E17" />{" "}
                        {guide("continue_notifications")}
                    </Overline>}
                />,
            hideCloseButton: true,
            hideFooter: true,
        },
        {
            target: "#step-12",
            content:
                <FirstTooltip
                    handleClickHelper={handleClickHelper}
                    step={step}
                    description={<Overline>{guide("icon_profile")}</Overline>}
                />,
            hideCloseButton: true,
            hideFooter: true,
        },
    ];

    const handleJoyrideCallback = (data:CallBackProps) => {
        const { index, action } = data;
        const step = index + 1;
        setStep(step);

        if(action === "reset"){
            dispatch(setCurrentTooltip(13))
        }
    };

    const setHelpers = (storeHelpers: StoreHelpers) => {
        helpers.current = storeHelpers;
    };

    return (
        <Joyride
            steps={joyrideSteps}
            run={showTooltip}
            continuous
            spotlightClicks={false}
            getHelpers={setHelpers}
            callback={handleJoyrideCallback}
            hideCloseButton={true}
            disableOverlayClose={true}
            hideBackButton={true}
            showSkipButton={false}
            styles={{
                options: {
                    zIndex: 10000,
                },
                tooltip: {
                    borderRadius: 30,
                    padding: 7,
                    paddingTop: 0,
                },
            }}
        />
    )
}