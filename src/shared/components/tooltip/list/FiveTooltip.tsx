import React from "react";

import Tooltip from "@shared/components/tooltip";
import { Overline } from "@shared/components/labels/styled";

interface props {
	visible: boolean;
}

const FiveTooltip = ({ visible }: props) => {
	const styles = {
		tooltip: {
			width: "357px",
			height: "290px",
			top: "65ch",
			left: "19ch",
		},
	};
	return (
		<Tooltip styles={styles.tooltip} visible={visible}>
			<div className="m-1 w-5/6">
				<Overline>
					Aquí te saldrán todas las categorias de eventos de
					ciberseguridad a las cuales tu compañia está expuesta. El
					número en la parte superior derecha de estas indica el # de
					incidentes que están ocurriendo desde las últimas 24 horas
					¡inspeccionalas!
				</Overline>
			</div>
		</Tooltip>
	);
};

export default FiveTooltip;
