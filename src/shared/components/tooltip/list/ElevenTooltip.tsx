import React from "react";

import Tooltip from "@shared/components/tooltip";
import { Overline } from "@shared/components/labels/styled";
import Icon from "@shared/components/icons";
import { useTranslation } from "react-i18next";

interface props {
	visible: boolean;
}

const ElevenTooltip = ({ visible }: props) => {
	const styles = {
		tooltip: {
			width: "357px",
			height: "213px",
			top: "30ch",
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
				<Overline>
					{t("notifications")}{" "}
					<Icon icon="Bell" size={20} color="#F99E17" />{" "}
					{t("continue_notifications")}
				</Overline>
			</div>
		</Tooltip>
	);
};

export default ElevenTooltip;
