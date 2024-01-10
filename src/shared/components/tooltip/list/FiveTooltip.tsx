import React from "react";

import Tooltip from "@shared/components/tooltip";
import { Overline } from "@shared/components/labels/styled";
import { useTranslation } from "react-i18next";

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
	const { t } = useTranslation("guide");

	return (
		<Tooltip styles={styles.tooltip} visible={visible}>
			<div className="m-1 w-5/6">
				<Overline>{t("event_categories")}</Overline>
			</div>
		</Tooltip>
	);
};

export default FiveTooltip;
