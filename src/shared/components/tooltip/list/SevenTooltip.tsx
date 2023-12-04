import React from "react";

import Tooltip from "@shared/components/tooltip";
import { Overline } from "@shared/components/labels/styled";

interface props {
	visible: boolean;
}

const SevenTooltip = ({ visible }: props) => {
	const styles = {
		tooltip: {
			width: "357px",
			height: "180px",
			top: "40ch",
			right: "38ch",
		},
	};
	return (
		<Tooltip styles={styles.tooltip} visible={visible}>
			<div className="m-1 w-5/6">
				<Overline>
					Aquí podrás ver cuánto te has ahorrado contratando nuestro
					servicios.
				</Overline>
			</div>
		</Tooltip>
	);
};

export default SevenTooltip;
