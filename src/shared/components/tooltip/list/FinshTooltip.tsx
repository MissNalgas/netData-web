import React from "react";

import Tooltip from "@shared/components/tooltip";

interface props {
	visible: boolean;
}

const SecondTooltip = ({ visible }: props) => {
	const styles = {
		tooltip: {
			width: "612px",
		},
		tooltipText: {
			fontSize: 12,
			lineHeight: 19,
			color: "red",
		},
		alignSelf: { alignSelf: "center" },
		closeText: {
			color: "red",
			fontSize: 12,
		},
	};
	return (
		<Tooltip styles={styles.tooltip} visible={visible}>
			<>
				¡Felicitaciones!
				<div>
					<h1 style={styles.tooltipText}>
						<h1 style={styles.closeText}>X</h1>
						hola final
					</h1>
				</div>
			</>
		</Tooltip>
	);
};

export default SecondTooltip;
