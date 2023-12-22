"use client"
import theme from "@theme/index";
import { PrimaryButton, SecondaryButton } from "../buttons/styled";
import { Body, CaptionOne, Overline } from "../labels/styled";
import { useTranslation } from "react-i18next";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onPressYes: () => void;
}

export default function ModalQuestion(props: ModalProps){
    const { isOpen, onClose, onPressYes} = props;
    const { t } = useTranslation("information");

    return(
        <div className={`fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-700 overflow-hidden z-50 ${isOpen ? "block" : "hidden"}`}>
            <div className="bg-white rounded-[32px] p-8 max-w-xl">
                <Body $weight={theme.fontWeight.bold} className="block mb-5 text-center">{t("you_still_there")}</Body>
                <Overline className="block mb-2">{t("security_close_sesion")}</Overline>
                <CaptionOne $weight={theme.fontWeight.bold} className="block text-center my-5">{t("five_minutes_close")}</CaptionOne>
                <div className="flex">
                    <SecondaryButton onClick={onClose}>{t("no_close_session")}</SecondaryButton>
                    <PrimaryButton onClick={onPressYes}>{t("yes_im_still_here")}</PrimaryButton>
                </div>
            </div>
        </div>
    )
}