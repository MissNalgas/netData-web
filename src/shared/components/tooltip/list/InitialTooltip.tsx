import React from "react";

import Tooltip from "@shared/components/tooltip";
import { Overline } from "@shared/components/labels/styled";
import {
	PrimaryButton,
	SecondaryButton,
} from "@shared/components/buttons/styled";
import {
	ContentInitialTooltipMain,
	ContentInitialTooltip,
	TitleOne,
	TitleSecond,
} from "./styled";
import { useSelector } from "react-redux";
import { setCurrentTooltip, hideTooltipModal } from "../slice";
import { RootState } from "@infrastructure/store/reducers";
import { useAppDispatch } from "@hooks/index";
import { useTranslation } from "react-i18next";

interface props {
	visible: boolean;
}

const InitialTooltip = ({ visible }: props) => {
	const styles = {
		tooltip: {
			width: "100%",
			height: "342px",
		},
	};
	const dispatch = useAppDispatch();
	const { t } = useTranslation("guide");
	const { currentTooltip } = useSelector(
		(state: RootState) => state.tooltips
	);
	return (
		<Tooltip styles={styles.tooltip} visible={visible}>
			<ContentInitialTooltipMain>
				<TitleOne>{t("welcome_title")}</TitleOne>
				<Overline>
					{t("description_guide")}
					<Overline
						style={{
							color: "#F99E17",
							margin: "0px 5px",
						}}
					>
						{t("close_guide")}
					</Overline>
					{t("continue_description_guide")}
				</Overline>
				<TitleSecond>{t("has_init_guide")}</TitleSecond>
				<ContentInitialTooltip>
					<SecondaryButton
						width={260}
						onClick={() => {
							localStorage.setItem("guide", "false");

							dispatch(hideTooltipModal());
						}}
					>
						{t("no_guide")}
					</SecondaryButton>
					<PrimaryButton
						onClick={() =>
							dispatch(setCurrentTooltip(currentTooltip + 1))
						}
						width={260}
					>
						{t("yes_guide")}
					</PrimaryButton>
				</ContentInitialTooltip>
			</ContentInitialTooltipMain>
		</Tooltip>
	);
};

export default InitialTooltip;
