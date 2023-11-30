import React from "react";

import Tooltip from "@shared/components/tooltip";
import { Overline } from "@shared/components/labels/styled";
import Icon from "@shared/components/icons";

interface props {
	visible: boolean;
}

const SecondTooltip = ({ visible }: props) => {
	const styles = {
		tooltip: {
			width: "357px",
			height: "217px",
			top: "9ch",
			left: "23ch",
		},
	};
	return (
		<Tooltip styles={styles.tooltip} visible={visible}>
			<div className="m-1 w-5/6">
				<Overline>
					Aquí podrás ver la última actualización de tus datos de
					ciberseguridad, presionando el icono de{" "}
					<Icon icon="Reload" size={20} color="#F99E17" /> podrá
					actualizar la información.
				</Overline>
			</div>
		</Tooltip>
	);
};

export default SecondTooltip;
