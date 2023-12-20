"use client";
import Image from "next/image";
import { useEffect, useMemo } from "react";
import SideButton, { ISideButton } from "./sideButton";
import { useAuth } from "@infrastructure/containers/auth";
import { useRouter } from "next/navigation";
import Icon from "@shared/components/icons";
import ContactComponent from "@shared/components/sidebar/contact";

import { showTooltipModal } from "@shared/components/tooltip/slice";
import { useAppDispatch, useTypedSelector } from "@hooks/index";
import { useTranslation } from "react-i18next";
import { matchesRegex } from "@shared/utils";
import { getNotifications } from "@infrastructure/store/notifications/actions";

export default function Sidebar() {
	const router = useRouter();
	const { t } = useTranslation("sidebar");
	const dispatch = useAppDispatch();
	const { logOut } = useAuth();
	const { show } = ContactComponent();
	const notificationsData = useTypedSelector((state) => state.notifications);
	const countNotifications = useMemo(
		() => notificationsData.data?.length,
		[notificationsData.data]
	);
	useEffect(() => {
		dispatch(getNotifications()).unwrap();
	}, [dispatch]);
	const buttons = useMemo(
		() =>
			[
				{
					label: `${t("dashboard")}`,
					icon: () => <Icon icon="Sentria" size={24} color="white" />,
					onClick: () => router.push("/"),
					isActive: matchesRegex(/^(\/|\/savings)$/),
				},
				{
					label: `${t("heatmap")}`,
					icon: () => (
						<Icon icon="temperature" size={24} color="white" />
					),
					onClick: () => router.push("/heatmap"),
					isActive: matchesRegex(/^\/heatmap$/),
				},
				{
					label: `${t("events")}`,
					icon: () => (
						<Icon icon="bar-graph" size={24} color="white" />
					),
					onClick: () => router.push("/events"),
				},
				{
					label: `${t("notifications")}`,
					icon: () => {
						return (
							<div className="relative">
								<div className="absolute w-3.5 h-3.5 bg-[purple] flex items-center justify-center rounded-2xl left-[1ch] top-[0ch]">
									<span className="text-[10px] font-bold">
										{countNotifications}
									</span>
								</div>

								<Icon icon="Bell" size={24} color="white" />
							</div>
						);
					},
					onClick: () => router.push("notifications"),
					isActive: matchesRegex(/^\/notifications$/),
				},
			] as ISideButton[],
		[router, t]
	);

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
