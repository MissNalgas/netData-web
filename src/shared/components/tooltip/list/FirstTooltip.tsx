import React from "react";

import Tooltip from "@shared/components/tooltip";

interface props {
	visible: boolean;
}

const FirstTooltip = ({ visible }: props) => {
	const styles = {
		tooltip: {
			width: "357px",
			height: "257px",
			top: "9ch",
			right: "4ch",
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
						hola 1
					</h1>
				</div>
			</>
		</Tooltip>
	);
};

export default FirstTooltip;
