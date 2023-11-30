import React from "react";

import Tooltip from "@shared/components/tooltip";

interface props {
	visible: boolean;
}

const FourTooltip = ({ visible }: props) => {
	const styles = {
		tooltip: {
			width: "357px",
			height: "201px",
			top: "57ch",
			left: "17ch",
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
						hola 3
					</h1>
				</div>
			</>
		</Tooltip>
	);
};

export default FourTooltip;
