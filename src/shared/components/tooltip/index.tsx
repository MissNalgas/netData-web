import React, { JSX } from "react";

import { useDispatch, useSelector } from "react-redux";

import { hideTooltipModal, setCurrentTooltip } from "./slice";
import { PrimaryButton } from "@shared/components/buttons/styled";
import { RootState } from "@infrastructure/store";
import Modal from "@shared/components/modal";

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
	const styles = {
		background: {
			flex: 1,
		},
		tooltip: {
			backgroundColor: "white",
			padding: "20px 25px", // Utilizando la forma abreviada de padding
			borderRadius: "40px", // Usa cadenas para valores de borde
		},
		actionButton: {
			width: "35px", // Asegúrate de especificar las unidades para valores numéricos
			height: "35px", // También puedes usar cadenas para valores de tamaño
			borderRadius: "20px",
			backgroundColor: "red",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
		closeButton: {
			width: "20px",
			borderRadius: "15px",
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: "white",
			position: "absolute",
			left: "20px",
		},
		actionContainer: {
			marginTop: "20px", // Asegúrate de especificar las unidades para valores numéricos
			marginBottom: "5px",
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
		},
		countText: {
			color: "red",
			fontSize: "14px", // Especifica las unidades para tamaños de fuente
			lineHeight: "17px",
		},
		buttonFinish: {
			width: "100%",
			height: "35px",
		},
	};

	const { currentTooltip, totalTooltip, showTooltip } = useSelector(
		(state: RootState) => state.tooltips
	);
	const dispatch = useDispatch();
	const isFirstTooltip = currentTooltip === 0;
	const isLastTooltip = currentTooltip > totalTooltip;

	const renderActions = (): JSX.Element => {
		if (isLastTooltip) {
			return (
				<div style={styles.actionContainer}>
					<PrimaryButton onClick={() => closeModal()}>
						Finalizar guia
					</PrimaryButton>
				</div>
			);
		}

		return (
			<div>
				<div style={styles.actionContainer}>
					{!isFirstTooltip && (
						<>
							{currentTooltip > 1 ? (
								<button
									onClick={() =>
										dispatch(
											setCurrentTooltip(
												currentTooltip - 1
											)
										)
									}
									style={styles.actionButton}
								>
									x
								</button>
							) : (
								<div style={{ width: 35 }} />
							)}
							<h4 style={styles.countText}>
								{currentTooltip}/{totalTooltip}
							</h4>
						</>
					)}
					{currentTooltip !== 0 && (
						<button
							onClick={() =>
								dispatch(setCurrentTooltip(currentTooltip + 1))
							}
							style={styles.actionButton}
						>
							xsss
						</button>
					)}
				</div>
				<button
					onClick={() => closeModal()}
					style={styles.actionButton}
				>
					Cerrar guia
				</button>
			</div>
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
					{renderActions()}
				</div>
			</div>
		</Modal>
	);
};

export default Tooltip;
