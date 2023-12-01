import React from "react";

import Tooltip from "@shared/components/tooltip";
import { Overline } from "@shared/components/labels/styled";
import Icon from "@shared/components/icons";

interface props {
	visible: boolean;
}

const NineTooltip = ({ visible }: props) => {
	const styles = {
		tooltip: {
			width: "357px",
			height: "270px",
			top: "18ch",
			left: "32ch",
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
					Presionando el icono del termómetro{" "}
					<Icon icon="temperature" size={20} color="#F99E17" />{" "}
					accederás a tu heatmap, función con la cual podrás acceder a
					cualquier ticket que se haya realizado para tu compañia,
					podrás encontrar del más reciente al más antiguo.
				</Overline>
			</div>
		</Tooltip>
	);
};

export default NineTooltip;
