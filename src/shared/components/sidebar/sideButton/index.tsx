import { Overline } from "@shared/components/labels/styled";
import { usePathname } from "next/navigation";
import React from "react";

export default function SideButton({label, icon, onClick, isActive} : ISideButton) {
	const pathname = usePathname();

	return (
		<button
			className={`flex items-center text-white gap-2 text-lg p-3 desktop:px-6 w-full transition ${isActive?.(pathname) ? "bg-primary" : "hover:bg-[#00003030]"}`}
			onClick={onClick}
		>
			{icon()}
			<Overline $color="white" $weight={600} className="tablet:hidden desktop:block">{label}</Overline>
		</button>
	);
}

export interface ISideButton {
	label: string;
	icon: () => React.ReactNode;
	onClick: () => void;
	isActive?: (_pathname: string) => void;
}
