import React from "react";

import Tooltip from "@shared/components/tooltip";
import { Body, Overline } from "@shared/components/labels/styled";
import Icon from "@shared/components/icons";

interface props {
	visible: boolean;
}

const SecondTooltip = ({ visible }: props) => {
	const styles = {
		tooltip: {
			width: "612px",
			height: "201px",
		},
	};
	return (
		<Tooltip styles={styles.tooltip} visible={visible}>
			<div className="flex flex-col justify-center items-center m-1 w-5/6 gap-3 pl-5">
				<Body $weight={700}>¡Felicitaciones!</Body>
				<div className="my-3">
					<Overline>
						Has finalizado la guía de ayuda. Te recordamos que para
						volver a acceder a ella lo puedes hacer desde tu perfil{" "}
						<Icon icon="account" size={20} color="#F99E17" />
					</Overline>
				</div>
			</div>
		</Tooltip>
	);
};

export default SecondTooltip;
