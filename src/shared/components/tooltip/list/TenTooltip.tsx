import React from "react";

import Tooltip from "@shared/components/tooltip";

interface props {
	visible: boolean;
}

const TenTooltip = ({ visible }: props) => {
	const styles = {
		tooltip: {
			width: "357px",
			height: "313px",
			top: "23ch",
			left: "32ch",
		},
		polygonStyles: {
			left: "1ch",
			transform: "rotateY(183deg)",
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
		<Tooltip
			styles={styles.tooltip}
			visible={visible}
			polygonStyle={styles.polygonStyles}
		>
			<>
				imagen
				<div>
					<h1 style={styles.tooltipText}>
						<h1 style={styles.closeText}>X</h1>
						hola 8
					</h1>
				</div>
			</>
		</Tooltip>
	);
};

export default TenTooltip;
