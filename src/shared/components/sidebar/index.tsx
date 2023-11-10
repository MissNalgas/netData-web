"use client"
import Image from "next/image";
import { useMemo } from "react";
import SideButton, { ISideButton } from "./sideButton";
import { useAuth } from "@infrastructure/containers/auth";

export default function Sidebar() {

	const {logOut} = useAuth();

	const buttons = useMemo(() => ([
		{
			label: "Dashboard",
			icon: () => <i>i</i>,
			onClick: () => alert("dashboard"),
		},
		{
			label: "Heatmap",
			icon: () => <i>i</i>,
			onClick: () => alert("Heatmap"),
		},
		{
			label: "Eventos",
			icon: () => <i>i</i>,
			onClick: () => alert("eventos"),
		},
		{
			label: "Notificaciones",
			icon: () => <i>i</i>,
			onClick: () => alert("Notificaciones"),
		},
	] as ISideButton[]), []);

	const bottomButtons = useMemo(() => ([
		{
			label: "Guía de ayuda",
			icon: () => <i>i</i>,
			onClick: () => alert("ayuda"),
		},
		{
			label: "Mensaje de Sentria",
			icon: () => <i>i</i>,
			onClick: () => alert("mensaje"),
		},
	]), []);

	return (
		<div className="bg-gray-400 h-full max-h-full flex flex-col pb-6">
			<Image className="mx-4 my-8" alt="Sentria logo" src="/sentria.png" width={136} height={26}/>
			<div className="flex-1">
				{buttons.map(button => (
					<SideButton key={button.label} {...button}/>
				))}
			</div>
			<div>
				{bottomButtons.map(button => (
					<SideButton key={button.label} {...button}/>
				))}
			</div>
			<hr className="my-4 mx-6"/>
			<SideButton
				label="Cerrar sesión"
				icon={() => <i>i</i>}
				onClick={() => logOut()}
			/>
		</div>
	);
}
