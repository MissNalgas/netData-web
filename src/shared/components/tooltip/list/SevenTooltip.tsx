import React from "react";

import Tooltip from "@shared/components/tooltip";

interface props {
	visible: boolean;
}

const SevenTooltip = ({ visible }: props) => {
	const styles = {
		tooltip: {
			width: "357px",
			height: "250px",
			top: "40ch",
			right: "38ch",
		},
		tooltipText: {
			fontSize: 12,
			color: "red",
			marginTop: 17,
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
				imagen
				<div>
					<h1 style={styles.tooltipText}>
						<h1 style={styles.closeText}>X</h1>
						hola 2
					</h1>
				</div>
			</>
		</Tooltip>
	);
};

export default SevenTooltip;
