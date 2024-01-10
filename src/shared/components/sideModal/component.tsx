import React from "react";

export function SideModalComponent({
	children,
	show,
}: SideModalComponentProps) {
	return (
		<div
			className={`w-96 bg-white h-full absolute top-0 right-0 border-l-2 ${
				show ? "" : "translate-x-full"
			} transition`}
		>
			{children}
		</div>
	);
}

interface SideModalComponentProps {
	children?: React.ReactNode;
	show: boolean;
}
