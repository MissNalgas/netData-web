import React from "react";

export default function SideButton({label, icon, onClick} : ISideButton) {
	return (
		<button
			className="flex items-center text-white gap-2 text-lg p-3 hover:bg-[#00003030] px-6 w-full"
			onClick={onClick}
		>
			{icon()}
			{label}
		</button>
	);
}

export interface ISideButton {
	label: string;
	icon: () => React.ReactNode;
	onClick: () => void;
}
