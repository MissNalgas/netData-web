import React from "react";

import Tooltip from "@shared/components/tooltip";
import { Overline } from "@shared/components/labels/styled";
import Image from "next/image";
import alarm from "/public/img/alarm_icon.png";
import fire from "/public/img/fire_1.png";
import tree from "/public/img/tree 1.png";
import clock from "/public/img/clock 1.png";

interface props {
	visible: boolean;
}

const FirstTooltip = ({ visible }: props) => {
	const styles = {
		tooltip: {
			width: "395px",
			top: "9ch",
			right: "4ch",
		},
	};
	return (
		<Tooltip styles={styles.tooltip} visible={visible}>
			<div className="m-1 w-5/6">
				<Overline>
					Con este icono identificas el riesgo general en el que se
					encuentra tu compañia respecto a ataques de ciberseguridad.
					Podrás ver a medida que uses la app la aparición de los
					siguientes iconos de riesgo.
				</Overline>

				<div className="flex flex-row gap-4 justify-center items-center my-2">
					<div className="w-12 h-12 bg-[#CCEBEA] rounded-full grid place-content-center">
						<Image
							src={tree}
							width={33}
							height={33}
							alt="tooltip1"
						/>
					</div>
					<div className="w-12 h-12 bg-[#D5BEE1] rounded-full grid place-content-center">
						<Image
							src={clock}
							width={33}
							height={33}
							alt="tooltip1"
						/>
					</div>
					<div className="w-12 h-12 bg-[#FDE2B9] rounded-full grid place-content-center">
						<Image
							src={alarm}
							width={33}
							height={33}
							alt="tooltip1"
						/>
					</div>
					<div className="w-12 h-12 bg-[#FBB5A4] rounded-full grid place-content-center">
						<Image
							src={fire}
							width={33}
							height={33}
							alt="tooltip1"
						/>
					</div>
				</div>
			</div>
		</Tooltip>
	);
};

export default FirstTooltip;
