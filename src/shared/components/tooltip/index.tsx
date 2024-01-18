import React, { JSX, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { hideTooltipModal, showTooltipModal } from "./slice";
import { PrimaryButton } from "@shared/components/buttons/styled";
import { RootState } from "@infrastructure/store";
import ModalTooltip from "@shared/components/modalTooltip";
import { useTranslation } from "react-i18next";

interface props {
	visible: boolean;
	children: JSX.Element;
	styles?: React.CSSProperties;
	polygonStyle?: any;
}

const Tooltip = ({
	visible,
	children,
	styles: tooltipStyles,
	polygonStyle,
}: props) => {
	const { t } = useTranslation("guide");
	const styles = {
		background: {
			width: "100%",
		},
		tooltip: {
			backgroundColor: "white",
			padding: "20px 25px",
			borderRadius: "40px",
		},
	};

	const { currentTooltip, totalTooltip, showTooltip } = useSelector(
		(state: RootState) => state.tooltips
	);
	const dispatch = useDispatch();
	const isLastTooltip = currentTooltip > totalTooltip;
	const guide = localStorage.getItem("guide");
	useEffect(() => {
		if (guide === "true") {
			dispatch(showTooltipModal());
		}
	}, [dispatch, guide]);

	const closeAction = () => {
		localStorage.setItem("guide", "false");
		closeModal();
	};

	const closeModal = async () => {
		dispatch(hideTooltipModal());
	};

	return (
		<ModalTooltip
			isOpen={showTooltip && visible}
			onActionModal={() => {}}
			tooltipStyles={tooltipStyles}
			showPolygon={currentTooltip !== 0 && currentTooltip !== 13}
			polygonStyle={polygonStyle}
		>
			<div style={styles.background}>
				<div style={(styles.tooltip, tooltipStyles)}>
					<div>{children}</div>
					{isLastTooltip && (<div className="flex flex-row justify-center items-center w-90">
                        <PrimaryButton onClick={() => closeAction()} width={50}>
                            {t("finished_guide")}
                        </PrimaryButton>
                    </div>)}
				</div>
			</div>
		</ModalTooltip>
	);
};

export default Tooltip;
