import React, { JSX, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { hideTooltipModal, setCurrentTooltip, showTooltipModal } from "./slice";
import { PrimaryButton } from "@shared/components/buttons/styled";
import { RootState } from "@infrastructure/store";
import Modal from "@shared/components/modal";
import Icon from "@shared/components/icons";
import { Overline } from "@shared/components/labels/styled";
import { ContentButtonMain } from "./styled";
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
	const isFirstTooltip = currentTooltip === 0;
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
	const renderActions = (): JSX.Element => {
		if (isLastTooltip) {
			return (
				<div className="flex flex-row justify-center items-center w-90">
					<PrimaryButton onClick={() => closeAction()} width={50}>
						{t("finished_guide")}
					</PrimaryButton>
				</div>
			);
		}

		return (
			<>
				<ContentButtonMain>
					{!isFirstTooltip && (
						<>
							{currentTooltip > 1 ? (
								<button
									className="w-9 h-9 bg-shadow20 rounded-full grid place-content-center"
									onClick={() =>
										dispatch(
											setCurrentTooltip(
												currentTooltip - 1
											)
										)
									}
								>
									<Icon icon="left-arrow" size={30} />
								</button>
							) : (
								<div style={{ width: 35 }} />
							)}
							<Overline $color="#F99E17" $weight={700}>
								{currentTooltip}/{totalTooltip}
							</Overline>
						</>
					)}
					{currentTooltip !== 0 && (
						<button
							className="w-9 h-9 bg-shadow20 rounded-full grid place-content-center"
							onClick={() =>
								dispatch(setCurrentTooltip(currentTooltip + 1))
							}
						>
							<Icon icon="right-arrow" size={30} />
						</button>
					)}
				</ContentButtonMain>
				{currentTooltip !== 0 && (
					<div className="flex flex-row justify-center py-2 w-11/12">
						<button onClick={() => closeAction()}>
							<Overline $color="#F99E17" $weight={600}>
								{t("close_guide")}
							</Overline>
						</button>
					</div>
				)}
			</>
		);
	};

	const closeModal = async () => {
		dispatch(hideTooltipModal());
	};

	return (
		<Modal
			isOpen={showTooltip && visible}
			onActionModal={() => {}}
			tooltipStyles={tooltipStyles}
			showPolygon={currentTooltip !== 0 && currentTooltip !== 13}
			polygonStyle={polygonStyle}
		>
			<div style={styles.background}>
				<div style={(styles.tooltip, tooltipStyles)}>
					<div>{children}</div>
					{currentTooltip !== 0 && renderActions()}
				</div>
			</div>
		</Modal>
	);
};

export default Tooltip;
