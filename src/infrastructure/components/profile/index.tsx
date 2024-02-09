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
import {
	BodyTwo,
	CaptionOne,
	Overline,
	SubtitleLink,
} from "@shared/components/labels/styled";

import ModalTooltip from "@shared/components/modalTooltip";
import Logo from "/public/img/logo-sentria.png";

import {
	ContentBody,
	ContentCardModalItem,
	ContentHeader,
	ContentImage,
	ContentLogo,
	ImageProfile,
} from "./styled";
import { useTranslation } from "react-i18next";
import Toggle from "@shared/components/toggle";
import { useAppDispatch } from "@hooks/index";
import { showTooltipModal } from "@shared/components/tooltip/slice";
import { deleteAccount } from "@infrastructure/store/user/actions";
import { toast } from "react-toastify";
import ContactComponent from "@shared/components/sidebar/contact";

export default function ProfileComponent(): JSX.Element {
	const auth = useAuth();
	const theme = useTheme();
	const router = useRouter();
	const { show } = ContactComponent();
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
			Notification?.permission === "denied";
			localStorage.setItem("notifications", "false");
		} else if (Notification?.permission !== "granted") {
			Notification?.requestPermission().then((permission) => {
				if (permission === "granted") {
					localStorage.setItem("notifications", "true");
				} else if (permission === "denied") {
					localStorage.setItem("notifications", "false");
				}
			});
		}

		setIsOpen(false);
	};

	const handleDelete = () => {
		dispatch(deleteAccount())
			.then(() => {
				toast.success(t("message_deleted"));
			})
			.catch(() => {
				toast.error(t("message_error"));
			});
	};

	const renderModal = () => {
		return (
			<ModalTooltip
				tooltipStyles={{}}
				isOpen={isOpen}
				onActionModal={() => setIsOpen(!isOpen)}
			>
				<ContentCardModalItem className="flex flex-row items-center justify-between gap-2 h-14">
					<div className="flex flex-row items-center justify-between  w-full">
						<div className="flex flex-row items-center justify-start gap-3">
							<Icon
								icon="Bell"
								size={24}
								color={theme.colors.orange50}
							/>
							<Overline $weight={600} $size="16px">
								{t("notifications")}
							</Overline>
						</div>
						<div>
							<Toggle
								actionToggle={(checked) => {
									toggleNotifications(checked);
								}}
							/>
						</div>
					</div>
				</ContentCardModalItem>
				<ContentCardModalItem className="h-28">
					<div className="flex flex-row items-center justify-start gap-3 ">
						<Icon
							icon="account"
							size={24}
							color={theme.colors.orange50}
						/>
						<Overline $weight={600}>{t("language")}</Overline>
					</div>
					<div className="flex flex-row items-center justify-between gap-2 my-2">
						<PrimaryButton
							disabled={false}
							onClick={() => _setLang("es")}
						>
							<BodyTwo $color="#FFFF" $weight={600}>
								{t("es")}
							</BodyTwo>
						</PrimaryButton>
						<SecondaryButton
							disabled={false}
							onClick={() => _setLang("en")}
						>
							<BodyTwo $color="#F37335" $weight={600}>
								{t("en")}
							</BodyTwo>
						</SecondaryButton>
					</div>
				</ContentCardModalItem>
			</ModalTooltip>
		);
	};
	return (
		<main className="flex space-between mx-5 py-8 h-screen mb-32">
			<ContainerBackground className="grow justify-center p-10 h-min">
				<div className="desktop:p-10">
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
						{renderModal()}
					</ContentHeader>

					<div className="flex flex-col justify-center items-center gap-y-2 p-10">
						<div>
							<SubtitleLink $weight={600}>
								{t("greeting")}
								{", "}
								<SubtitleLink
									$color={theme.colors.orange50}
									$weight={theme.fontWeight.semiBold}
								>
									{auth.user?.firstname}
								</SubtitleLink>
							</SubtitleLink>
						</div>
						<div className="flex justify-center">
							<span className="text-primary font-semibold mr-2">
								<Icon icon="office-building1" size={24} />
							</span>
							<CaptionOne className="text-primary" $weight={600}>
								{JSON.parse(auth.user?.company).name}
							</CaptionOne>
						</div>
					</div>

					<ContentBody>
						<PrimaryButton
							width={24}
							onClick={() => {
								router.push("/");
								dispatch(showTooltipModal());
							}}
						>
							<div className="flex flex-row gap-2 ">
								<Icon
									icon="info-circle"
									size={24}
									color="white"
								/>
								<BodyTwo $color="#Ffff" $weight={600}>
									{t("help_guide")}
								</BodyTwo>
							</div>
						</PrimaryButton>
						<PrimaryButton
							width={24}
							onClick={() => router.push("/notifications")}
						>
							<div className="flex flex-row gap-2 ">
								<Icon icon="Bell" size={24} color="white" />
								<BodyTwo $color="#Ffff" $weight={600}>
									{t("notifications")}
								</BodyTwo>
							</div>
						</PrimaryButton>
						<PrimaryButton
							disabled={false}
							width={24}
							onClick={show}
						>
							<div className="flex flex-row gap-2">
								<Icon
									icon="Paper-Plane"
									size={24}
									color="white"
								/>
								<BodyTwo $color="#Ffff" $weight={600}>
									{t("report")}
								</BodyTwo>
							</div>
						</PrimaryButton>
					</ContentBody>
					<div className="flex justify-center my-8 tablet:w-4/12 m-auto">
						<SecondaryButton
							disabled={false}
							width={64}
							onClick={handleDelete}
						>
							<div className="flex flex-row gap-2 ">
								<Icon
									icon="account"
									size={24}
									color={theme.colors.orange50}
								/>
								<BodyTwo $color="#F37335" $weight={600}>
									{t("delete_account")}
								</BodyTwo>
							</div>
						</SecondaryButton>
					</div>
				</div>
			</ContainerBackground>
		</main>
	);
}
