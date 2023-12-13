import React from "react";

import Tooltip from "@shared/components/tooltip";
import { Overline } from "@shared/components/labels/styled";
import Icon from "@shared/components/icons";
import { useTranslation } from "react-i18next";

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
	const { t } = useTranslation("guide");
	return (
		<Tooltip styles={styles.tooltip} visible={visible}>
			<div className="m-1 w-5/6">
				<Overline>
					{t("icon_refresh_left")}{" "}
					<Icon icon="Reload" size={20} color="#F99E17" />{" "}
					{t("complement_icon_refresh_left")}
				</Overline>
			</div>
		</Tooltip>
	);
};

export default SecondTooltip;
