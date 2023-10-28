import IcomoonReact from "icomoon-react";
import React, { ReactElement } from "react";

import iconSet from "./selection.json";

type IconProps = {
	color?: string;
	size: string | number;
	icon: string;
	className?: string;
	onClick?: (_: React.MouseEvent<HTMLButtonElement>) => void;
};

function Icon(props: IconProps): ReactElement {
	return (
		<IcomoonReact
			className={props.className}
			iconSet={iconSet}
			color={props.color}
			size={props.size}
			icon={props.icon}
			onClick={props.onClick}
		/>
	);
}

export default Icon;
