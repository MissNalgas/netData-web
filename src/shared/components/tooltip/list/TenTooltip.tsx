import React from "react";

import Tooltip from "@shared/components/tooltip";
import { Overline } from "@shared/components/labels/styled";
import Icon from "@shared/components/icons";

interface props {
	visible: boolean;
}

const TenTooltip = ({ visible }: props) => {
	const styles = {
		tooltip: {
			width: "357px",
			height: "250px",
			top: "23ch",
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
					Presionando el icono de las gráficas{" "}
					<Icon icon="bar-graph" size={20} color="#F99E17" />
					accederás a tus eventos de ciberseguridad del día, podrás
					ver todos los tickets que se han realizado las últimas 24
					horas.
				</Overline>
			</div>
		</Tooltip>
	);
};

export default TenTooltip;
