import React from "react";

import { Overline } from "@shared/components/labels/styled";
import Image from "next/image";
import alarm from "/public/img/alarm_icon.png";
import fire from "/public/img/fire_1.png";
import tree from "/public/img/tree 1.png";
import clock from "/public/img/clock 1.png";
import { useTranslation } from "react-i18next";
import { TooltipFirst } from "./styled";

interface props {
	visible: boolean;
}

const FirstTooltip = ({ visible }: props) => {
	const styles = {
		tooltip: {
			top: "9ch",
			right: "4ch",
		},
	};
	const { t } = useTranslation("guide");
	return (
		<TooltipFirst styles={styles.tooltip} visible={visible}>
			<div className=" m-2">
				<Overline>{t("icon_risk_right")}</Overline>
				<div className="flex flex-row gap-4 justify-center items-center my-4">
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
		</TooltipFirst>
	);
};

export default FirstTooltip;
