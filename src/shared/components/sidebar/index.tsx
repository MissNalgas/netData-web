"use client"
import Image from "next/image";
import { useMemo } from "react";
import SideButton, { ISideButton } from "./sideButton";
import { useAuth } from "@infrastructure/containers/auth";
import { useRouter } from "next/navigation";
import Icon from "../icons";

export default function Sidebar() {
    const router = useRouter();

	const {logOut} = useAuth();

	const buttons = useMemo(() => ([
		{
			label: "Dashboard",
			icon: () => <Icon icon="Sentria" size={24} color="white"/>,
			onClick: () => router.push("/"),
		},
		{
			label: "Heatmap",
			icon: () => <Icon icon="temperature" size={24} color="white"/>,
			onClick: () => router.push("/heatmap"),
		},
		{
			label: "Eventos",
			icon: () => <Icon icon="bar-graph" size={24} color="white"/>,
			onClick: () => alert("eventos"),
		},
		{
			label: "Notificaciones",
			icon: () => <Icon icon="Bell" size={24} color="white"/>,
			onClick: () => router.push("notifications"),
		},
	] as ISideButton[]), [router]);

	const bottomButtons = useMemo(() => ([
		{
			label: "Guía de ayuda",
			icon: () => <Icon icon="info-circle" size={24} color="white"/>,
			onClick: () => alert("ayuda"),
		},
		{
			label: "Mensaje de Sentria",
			icon: () => <Icon icon="Paper-Plane" size={24} color="white"/>,
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
				icon={() => <Icon icon="Logout" size={24} color="white"/>}
				onClick={() => logOut()}
			/>
		</div>
	);
}
