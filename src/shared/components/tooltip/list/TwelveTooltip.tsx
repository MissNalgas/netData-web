import React from "react";

import Tooltip from "@shared/components/tooltip";
import { Overline } from "@shared/components/labels/styled";

interface props {
	visible: boolean;
}

const TwelveTooltip = ({ visible }: props) => {
	const styles = {
		tooltip: {
			width: "357px",
			height: "240px",
			top: "7ch",
			left: "39ch",
		},
		polygonStyles: {
			left: "1ch",
			transform: "rotateY(183deg)",
		},
	};
	return (
		<Tooltip
			styles={styles.tooltip}
			visible={visible}
			polygonStyle={styles.polygonStyles}
		>
			<div className="m-1 w-5/6">
				<Overline>
					Presionando el icono de perfil accederás a tu información
					personal y configuraciones. Aquí también encontrarás una
					guia de ayuda por si te pierdes en el camino.
				</Overline>
			</div>
		</Tooltip>
	);
};

export default TwelveTooltip;
