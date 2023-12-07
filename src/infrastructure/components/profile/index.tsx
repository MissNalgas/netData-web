import { useRouter } from "next/navigation";
import { useTheme } from "styled-components";
import { JSX, useCallback, useState } from "react";

import { useAuth } from "@infrastructure/containers/auth";
import Icon from "@shared/components/icons";
import ContainerBackground from "@shared/components/containerBackground";
import {
	PrimaryButton,
	SecondaryButton,
} from "@shared/components/buttons/styled";
import { CaptionOne, SubtitleLink } from "@shared/components/labels/styled";

import { useSideModal } from "@shared/components/sideModal";
import Modal from "@shared/components/modal";
import Logo from "/public/img/logo-sentria.png";

import {
	ContentBody,
	ContentCardModalItem,
	ContentHeader,
	ContentImage,
	ContentLogo,
	ImageProfile,
} from "./styled";
import ChatForm, { IChatForm } from "@infrastructure/containers/forms/chat";
import { useTranslation } from "react-i18next";
import Toggle from "@shared/components/toggle";
import { useAppDispatch } from "@hooks/index";
import { showTooltipModal } from "@shared/components/tooltip/slice";
import { contact, deleteAccount } from "@infrastructure/store/user/actions";
import { ToastContainer, toast } from "react-toastify";

export default function ProfileComponent(): JSX.Element {
	const auth = useAuth();
	const theme = useTheme();
	const router = useRouter();
	const sideModal = useSideModal();
	const { t, i18n } = useTranslation("profile");
	const [isOpen, setIsOpen] = useState(false);

	const dispatch = useAppDispatch();

	const _setLang = useCallback(
		async (lang: "es" | "en") => {
			await i18n?.changeLanguage(lang);
			localStorage.setItem("language", lang);
			setIsOpen(false);
		},
		[i18n]
	);

	const toggleNotifications = (isCheked: boolean) => {
		if (isCheked) {
			Notification.permission === "denied";
			localStorage.setItem("notifications", "false");
		} else {
			if (Notification.permission !== "granted") {
				Notification.requestPermission().then((permission) => {
					if (permission === "granted") {
						console.log("Permisos de notificación concedidos.");
						localStorage.setItem("notifications", "true");
					} else if (permission === "denied") {
						console.log("Permisos de notificación denegados.");
						localStorage.setItem("notifications", "false");
					}
				});
			}
		}

		setIsOpen(false);
	};

	const handleSubmit = (data: IChatForm) => {
		dispatch(
			contact({
				body: data.affair,
				subject: data.message,
			})
		)
			.then(() => {
				sideModal.toggle({});
				toast.success(t("message_sent"));
			})
			.catch(() => {
				sideModal.toggle({});
				toast.error(t("message_error"));
			})
			.finally(() => {
				sideModal.toggle({});
			});
	};

	const handleDelete = () => {
		dispatch(deleteAccount())
			.then((res) => {
				console.log("response", res);
				toast.success(t("message_deleted"));
			})
			.catch(() => {
				toast.error(t("message_error"));
			});
	};
	const show = () => {
		sideModal.toggle({
			content: () => (
				<section className="p-5">
					<button
						className="w-12 h-12 rounded-full bg-gray-100 items-center flex justify-center"
						onClick={() => sideModal.toggle({})}
					>
						<Icon icon="Cancel" size={22} />
					</button>
					<div className="my-5">
						<CaptionOne>{t("contact")}</CaptionOne>
					</div>

					<ChatForm onSubmit={handleSubmit} />
				</section>
			),
		});
	};
	return (
		<main className="flex space-between mx-5 py-8 h-screen mb-32">
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={true}
				newestOnTop={true}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>

			<ContainerBackground className="grow justify-center p-10 h-min	">
				<div className="p-10">
					<ContentHeader>
						<ContentLogo>
							<ContentImage>
								<ImageProfile src={Logo} alt="logo" />
							</ContentImage>
						</ContentLogo>

						<button
							className="w-12 h-12 rounded-full bg-gray-100 items-center flex justify-center"
							onClick={() => setIsOpen(!isOpen)}
						>
							<Icon icon="Setting" size={22} />
						</button>
						<Modal
							typeModal="config"
							isOpen={isOpen}
							onActionModal={() => setIsOpen(!isOpen)}
						>
							<ContentCardModalItem className="flex flex-row items-center justify-between gap-2 h-14">
								<div className="flex flex-row items-center justify-start gap-3 ">
									<Icon
										icon="Bell"
										size={24}
										color={theme.colors.orange50}
									/>
									<SubtitleLink $weight={600}>
										{t("notifications")}
									</SubtitleLink>
									<Toggle
										actionToggle={(checked) => {
											toggleNotifications(checked);
										}}
									/>
								</div>
							</ContentCardModalItem>
							<ContentCardModalItem className="h-28">
								<div className="flex flex-row items-center justify-start gap-3 ">
									<Icon
										icon="account"
										size={24}
										color={theme.colors.orange50}
									/>
									<SubtitleLink $weight={600}>
										{t("language")}
									</SubtitleLink>
								</div>
								<div className="flex flex-row items-center justify-between gap-2">
									<PrimaryButton
										disabled={false}
										onClick={() => _setLang("es")}
									>
										{t("es")}
									</PrimaryButton>
									<SecondaryButton
										disabled={false}
										onClick={() => _setLang("en")}
									>
										{t("en")}
									</SecondaryButton>
								</div>
							</ContentCardModalItem>
						</Modal>
					</ContentHeader>

					<div className="flex flex-col justify-center items-center gap-y-2 p-10">
						<div>
							<SubtitleLink $weight={600}>
								{t("greeting")}
								{","}
								<span className="text-primary font-semibold">
									{auth.user?.firstname}
								</span>
							</SubtitleLink>
						</div>
						<div>
							<span className="text-primary font-semibold">
								<Icon icon="office-building1" size={24} />
							</span>
							<CaptionOne className="text-primary" $weight={600}>
								Redeban
							</CaptionOne>
						</div>
					</div>

					<ContentBody>
						<PrimaryButton
							width={30}
							onClick={() => {
								router.push("/");
								dispatch(showTooltipModal());
							}}
						>
							<div className="flex flex-row gap-5">
								<Icon
									icon="info-circle"
									size={24}
									color="white"
								/>
								{t("help_guide")}
							</div>
						</PrimaryButton>
						<PrimaryButton
							width={30}
							onClick={() => router.push("/notifications")}
						>
							<div className="flex flex-row gap-5">
								<Icon icon="Bell" size={24} color="white" />
								{t("notifications")}
							</div>
						</PrimaryButton>
						<PrimaryButton
							disabled={false}
							width={30}
							onClick={show}
						>
							<div className="flex flex-row gap-5">
								<Icon
									icon="Paper-Plane"
									size={24}
									color="white"
								/>
								{t("report")}
							</div>
						</PrimaryButton>
					</ContentBody>
					<div className="flex justify-center my-8">
						<SecondaryButton
							disabled={false}
							width={30}
							onClick={handleDelete}
						>
							<div className="flex flex-row gap-5">
								<Icon
									icon="account"
									size={24}
									color={theme.colors.orange50}
								/>
								{t("delete_account")}
							</div>
						</SecondaryButton>
					</div>
				</div>
			</ContainerBackground>
		</main>
	);
}
