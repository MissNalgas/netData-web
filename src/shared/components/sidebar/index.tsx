"use client";
import Image from "next/image";
import { useMemo } from "react";
import SideButton, { ISideButton } from "./sideButton";
import { useAuth } from "@infrastructure/containers/auth";
import { useRouter } from "next/navigation";
import Icon from "@shared/components/icons";
import ContactComponent from "@shared/components/sidebar/contact";

import { showTooltipModal } from "@shared/components/tooltip/slice";
import { useAppDispatch } from "@hooks/index";
import { useTranslation } from "react-i18next";
import { matchesRegex } from "@shared/utils";

export default function Sidebar() {
	const router = useRouter();
	const { t } = useTranslation("sidebar");
	const dispatch = useAppDispatch();
	const { logOut } = useAuth();
	const { show } = ContactComponent();

	const buttons = useMemo(() => ([
		{
			label: `${t("dashboard")}`,
			icon: () => <Icon icon="Sentria" size={24} color="white"/>,
			onClick: () => router.push("/"),
			isActive: matchesRegex(/^(\/|\/savings)$/),
		},
		{
			label: `${t("heatmap")}`,
			icon: () => <Icon icon="temperature" size={24} color="white"/>,
			onClick: () => router.push("/heatmap"),
			isActive: matchesRegex(/^\/heatmap$/),
		},
		{
			label: `${t("events")}`,
			icon: () => <Icon icon="bar-graph" size={24} color="white"/>,
			onClick: () => router.push("/events"),
		},
		{
			label: `${t("notifications")}`,
			icon: () => <Icon icon="Bell" size={24} color="white"/>,
			onClick: () => router.push("notifications"),
			isActive: matchesRegex(/^\/notifications$/),
		},
	] as ISideButton[]), [router, t]);

	const bottomButtons = useMemo(
		() => [
			{
				label: `${t("guide")}`,
				icon: () => <Icon icon="info-circle" size={24} color="white" />,
				onClick: () => {
					router.push("/");
					dispatch(showTooltipModal());
				},
			},
			{
				label: `${t("message_sentria")}`,
				icon: () => <Icon icon="Paper-Plane" size={24} color="white" />,
				onClick: () => show(),
			},
		],
		[dispatch, router, show, t]
	);

	return (
		<div className="bg-shadow40 h-full max-h-full flex flex-col pb-6">
			<Image
				className="mx-4 my-8"
				alt="Sentria logo"
				src="/sentria.png"
				width={136}
				height={26}
			/>
			<div className="flex-1">
				{buttons.map((button) => (
					<SideButton key={button.label} {...button} />
				))}
			</div>
			<div>
				{bottomButtons.map((button) => (
					<SideButton key={button.label} {...button} />
				))}
			</div>
			<hr className="my-4 mx-6" />
			<SideButton
				label={t("close_sesion")}
				icon={() => <Icon icon="Logout" size={24} color="white" />}
				onClick={() => {
					logOut();
					localStorage.removeItem("tokenApp");
				}}
			/>
		</div>
	);
}
