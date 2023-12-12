import { usePathname } from "next/navigation";
import React from "react";

export default function SideButton({label, icon, onClick, isActive} : ISideButton) {
	const pathname = usePathname();

	return (
		<button
			className={`flex items-center text-white gap-2 text-lg p-3 px-6 w-full transition ${isActive?.(pathname) ? "bg-primary" : "hover:bg-[#00003030]"}`}
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
	isActive?: (_pathname: string) => void;
}
