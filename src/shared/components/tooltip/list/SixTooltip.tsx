import React from "react";

import Tooltip from "@shared/components/tooltip";
import { Overline } from "@shared/components/labels/styled";

interface props {
	visible: boolean;
}

const SixTooltip = ({ visible }: props) => {
	const styles = {
		tooltip: {
			width: "357px",
			height: "220px",
			top: "42ch",
			right: "38ch",
		},
	};
	return (
		<Tooltip styles={styles.tooltip} visible={visible}>
			<div className="m-1 w-5/6">
				<Overline>
					En esta sección se acumularán los eventos de ciberseguridad
					los últimos 8 días, podrás ver los que siguen en revisión y
					los que ya cerraron.
				</Overline>
			</div>
		</Tooltip>
	);
};

export default SixTooltip;
