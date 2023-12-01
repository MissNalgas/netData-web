import React from "react";

import Tooltip from "@shared/components/tooltip";
import { Overline } from "@shared/components/labels/styled";

interface props {
	visible: boolean;
}

const ThirdTooltip = ({ visible }: props) => {
	const styles = {
		tooltip: {
			width: "357px",
			height: "249px",
			top: "26ch",
			right: "25ch",
		},
	};
	return (
		<Tooltip styles={styles.tooltip} visible={visible}>
			<div className="m-1 w-5/6">
				<Overline>
					¡Cuidado cuando te salga este mensaje! Aquí se mostrarán tus
					eventos urgentes y de alto riesgo del día, presionandolo
					podrás dirigirte a ellos directamente.
				</Overline>
			</div>
		</Tooltip>
	);
};

export default ThirdTooltip;
