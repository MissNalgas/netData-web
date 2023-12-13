import React from "react";

import Tooltip from "@shared/components/tooltip";
import { Overline } from "@shared/components/labels/styled";
import { useTranslation } from "react-i18next";

interface props {
	visible: boolean;
}

const FourTooltip = ({ visible }: props) => {
	const styles = {
		tooltip: {
			width: "357px",
			height: "180px",
			top: "57ch",
			left: "17ch",
		},
	};
	const { t } = useTranslation("guide");

	return (
		<Tooltip styles={styles.tooltip} visible={visible}>
			<div className="m-1 w-5/6">
				<Overline>{t("bubble_chart")}</Overline>
			</div>
		</Tooltip>
	);
};

export default FourTooltip;
