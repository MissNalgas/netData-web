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

	const { currentTooltip } = useSelector(
		(state: RootState) => state.tooltips
	);
	return (
		<Tooltip styles={styles.tooltip} visible={visible}>
			<ContentInitialTooltipMain>
				<TitleOne>¡Bienvenido a sentria!</TitleOne>
				<Overline>
					En esta guia de ayuda entenderás cómo funciona el dashboard
					de Sentria y sus funcionalidades. Como primer paso, te
					invitamos a seguir la guía de ayuda para que logres
					aprovechar al máximo cada una de las funcionalidades. Si
					quieres abandonar la guía oprime
					<Overline
						style={{
							color: "#F99E17",
							margin: "0px 5px",
						}}
					>
						Cerrar guía
					</Overline>
					en la parte inferior de la pantalla.
				</Overline>
				<TitleSecond>¿Quieres iniciar la guía?</TitleSecond>
				<ContentInitialTooltip>
					<SecondaryButton
						width={260}
						onClick={() => dispatch(hideTooltipModal())}
					>
						No, sigo por mi cuenta
					</SecondaryButton>
					<PrimaryButton
						onClick={() =>
							dispatch(setCurrentTooltip(currentTooltip + 1))
						}
						width={260}
					>
						Si, iniciar guía
					</PrimaryButton>
				</ContentInitialTooltip>
			</ContentInitialTooltipMain>
		</Tooltip>
	);
};

export default InitialTooltip;
