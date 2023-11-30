import React from "react";

import Tooltip from "@shared/components/tooltip";
import { Overline } from "@shared/components/labels/styled";

interface props {
	visible: boolean;
}

const FourTooltip = ({ visible }: props) => {
	const styles = {
		tooltip: {
			width: "357px",
			height: "180px",
			top: "57ch",
			left: "17ch",
		},
	};
	return (
		<Tooltip styles={styles.tooltip} visible={visible}>
			<div className="m-1 w-5/6">
				<Overline>
					Mira en esta gráfica de burbuja, el nivel de riesgo de tus
					eventos del día.
				</Overline>
			</div>
		</Tooltip>
	);
};

export default FourTooltip;
