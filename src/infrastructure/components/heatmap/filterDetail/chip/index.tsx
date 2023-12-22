import Icon from "@shared/components/icons";
import React from "react";

export default function Chip({children, onClose} : ChipProps) {
	return (
		<div className="bg-orange20 py-1 px-2 rounded-xl flex items-center">
			<span className="text-sm text-gray50">{children}</span>
			<button onClick={onClose} className="grid place-content-center">
				<Icon icon="Cancel" size="18px"/>
			</button>
		</div>
	);
}
interface ChipProps {
	children?: React.ReactNode;
	onClose?: () => void;
}
