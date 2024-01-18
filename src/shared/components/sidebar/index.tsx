"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
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
import LogoSentria from "/public/img/logo-sentria.png";
import { closeDrawer } from "@infrastructure/store/layout/actions";
import { useSelector } from "react-redux";
import { RootState } from "@infrastructure/store";
import Logo from "/public/img/logo-sentria.png";
import { format } from "date-fns";
import { BodyTwo } from "../labels/styled";
import theme from "@theme/index";

export default function Sidebar() {
	const router = useRouter();
	const { t } = useTranslation("sidebar");
	const dispatch = useAppDispatch();
	const { logOut } = useAuth();
	const date = new Date();
	const { show } = ContactComponent();
	const [saveCountNotifications, saveCountNotificationsSet] = useState(0);
	const { user } = useSelector((state: RootState) => state.user);
	const notificationsData = useTypedSelector((state) => state.notifications);

	const countNotifications = useMemo(
		() => notificationsData.data?.length,
		[notificationsData.data]
	);
	useEffect(() => {
		dispatch(getNotifications()).unwrap();
		saveCountNotificationsSet(countNotifications);
	}, [dispatch, countNotifications]);

	const buttons = useMemo(
		() =>
			[
				{
					label: `${t("dashboard")}`,
					icon: () => <Icon icon="Sentria" size={24} color="white" />,
					onClick: () => {
						router.push("/");
						dispatch(closeDrawer(false));
					},
					isActive: matchesRegex(/^(\/|\/savings)$/),
					id: "step-8",
				},
				{
					label: `${t("heatmap")}`,
					icon: () => (
						<Icon icon="temperature" size={24} color="white" />
					),
					onClick: () => {
						router.push("/heatmap");
						dispatch(closeDrawer(false));
					},
					isActive: matchesRegex(/^\/heatmap$/),
					id: "step-9",
				},
				{
					label: `${t("events")}`,
					icon: () => (
						<Icon icon="bar-graph" size={24} color="white" />
					),
					onClick: () => {
						router.push("/events");
						dispatch(closeDrawer(false));
					},
					isActive: matchesRegex(/^\/events$/),
					id: "step-10",
				},
				{
					label: `${t("notifications")}`,
					icon: () => {
						return (
							<div className="relative">
								<div className="absolute w-3.5 h-3.5 bg-[purple] flex items-center justify-center rounded-2xl left-[1ch] top-[0ch]">
									<span className="text-[10px] font-bold">
										{saveCountNotifications}
									</span>
								</div>

								<Icon icon="Bell" size={24} color="white" />
							</div>
						);
					},
					onClick: () => {
						router.push("notifications");
						dispatch(closeDrawer(false));
					},
					isActive: matchesRegex(/^\/notifications$/),
					id: "step-11",
				},
			] as ISideButton[],
		[router, saveCountNotifications, t, dispatch]
	);

	const bottomButtons = useMemo(
		() => [
			{
				label: `${t("guide")}`,
				icon: () => <Icon icon="info-circle" size={24} color="white" />,
				onClick: () => {
					router.push("/");
					dispatch(showTooltipModal());
					dispatch(closeDrawer(false));
				},
			},
			{
				label: `${t("message_sentria")}`,
				icon: () => <Icon icon="Paper-Plane" size={24} color="white" />,
				onClick: () => {
					show();
					dispatch(closeDrawer(false));
				},
			},
		],
		[dispatch, router, show, t]
	);

	return (
		<div className="bg-shadow40 h-full max-h-full flex flex-col pb-6 cel:p-5 tablet:p-0">
			<div className="flex justify-between items-center pr-4">
				<Image
					className="mx-4 my-8 tablet:hidden desktop:block"
					alt="Sentria logo"
					src="/sentria.png"
					width={136}
					height={26}
				/>
				<Icon
					className="tablet:w-0"
					icon="Cancel"
					size={32}
					color="white"
					onClick={() => dispatch(closeDrawer(false))}
				/>
			</div>
			<Image
				className="mx-auto my-8 cel:hidden tablet:block desktop:hidden"
				alt="Sentria logo"
				src={LogoSentria}
				width={30}
				height={26}
			/>
			<div
				className="cel:flex tablet:hidden items-center mb-5 border-b-white border-b cel:py-4 tablet:py-0"
				onClick={() => {
					router.push("/profile");
					dispatch(closeDrawer(false));
				}}
			>
				<div className="w-12 h-12 rounded-full bg-gray50 items-center flex justify-center mr-3">
					<Image src={Logo} alt="logo" width={20} height={20} />
				</div>
				<div className="flex flex-col">
					<BodyTwo $color="white">
						{t("greeting")}
						{", "}
						<BodyTwo
							$color={theme.colors.orange}
							className="text-primary font-semibold"
						>
							{user?.firstname}
						</BodyTwo>
					</BodyTwo>
					<BodyTwo
						$color="white"
						className="flex flex-row items-center gap-1"
					>
						{t("last_update")}, <b>{format(date, "p")}</b>
						<Icon
							icon="Reload"
							size={22}
							color="white"
							className="ml-5"
						/>
					</BodyTwo>
				</div>
			</div>
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
