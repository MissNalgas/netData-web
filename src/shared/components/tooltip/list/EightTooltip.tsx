import React from "react";

import Tooltip from "@shared/components/tooltip";
import { Overline } from "@shared/components/labels/styled";
import { useTranslation } from "react-i18next";

interface props {
	visible: boolean;
}

const EightTooltip = ({ visible }: props) => {
	const styles = {
		tooltip: {
			width: "357px",
			height: "200px",
			top: "13ch",
			left: "32ch",
		},
		polygonStyles: {
			left: "1ch",
			transform: "rotateY(183deg)",
		},
	};
	const { t } = useTranslation("guide");

	return (
		<Tooltip
			styles={styles.tooltip}
			visible={visible}
			polygonStyle={styles.polygonStyles}
		>
			<div className="m-1 w-5/6">
				<Overline>{t("dashboard")}</Overline>
			</div>
		</Tooltip>
	);
};

export default EightTooltip;
