import React from "react";

import Tooltip from "@shared/components/tooltip";
import { Body, Overline } from "@shared/components/labels/styled";
import Icon from "@shared/components/icons";
import { useTranslation } from "react-i18next";

interface props {
	visible: boolean;
}

const SecondTooltip = ({ visible }: props) => {
	const styles = {
		tooltip: {
			width: "100%",
			height: "auto",
		},
	};
	const { t } = useTranslation("guide");

	return (
		<Tooltip styles={styles.tooltip} visible={visible}>
			<div className="flex flex-col justify-center items-center m-1 w-5/6 gap-3 pl-5">
				<Body $weight={700}>{t("congratulations")}</Body>
				<div className="my-3">
					<Overline>
						{t("congratulations_description")}{" "}
						<Icon icon="account" size={20} color="#F99E17" />
					</Overline>
				</div>
			</div>
		</Tooltip>
	);
};

export default SecondTooltip;
