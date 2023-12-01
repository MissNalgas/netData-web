import { useRouter } from "next/navigation";
import { useTheme } from "styled-components";

import { useAuth } from "@infrastructure/containers/auth";
import Icon from "@shared/components/icons";
import ContainerBackground from "@shared/components/containerBackground";
import {
	PrimaryButton,
	SecondaryButton,
} from "@shared/components/buttons/styled";
import { CaptionOne, SubtitleLink } from "@shared/components/labels/styled";

import { useSideModal } from "@shared/components/sideModal";

import Logo from "/public/img/logo-sentria.png";

import {
	ContentBody,
	ContentHeader,
	ContentImage,
	ContentLogo,
	ImageProfile,
} from "./styled";
import ChatForm from "@infrastructure/containers/forms/chat";
import { useTranslation } from "react-i18next";

export default function ProfileComponent() {
	const auth = useAuth();
	const theme = useTheme();
	const router = useRouter();
	const sideModal = useSideModal();
    const { t } = useTranslation("profile");
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
						<CaptionOne>
							¿Tienes algún problema con el funcionamiento de la
							app? envíanos un mensaje y pronto nos pondremos en
							contacto contigo.
						</CaptionOne>
					</div>

					<ChatForm onSubmit={() => console.log()} />
				</section>
			),
		});
	};
	return (
		<main className="flex space-between mx-5 py-8 h-screen mb-32">
			<ContainerBackground className="grow justify-center p-10 h-min	">
				<div className="p-10">
					<ContentHeader>
						<ContentLogo>
							<ContentImage>
								<ImageProfile src={Logo} alt="logo" />
							</ContentImage>
						</ContentLogo>

						<div className="w-12 h-12 rounded-full bg-gray-100 items-center flex justify-center">
							<Icon icon="Setting" size={22} />
						</div>
					</ContentHeader>

					<div className="flex flex-col justify-center items-center gap-y-2 p-10">
						<div>
							<SubtitleLink $weight={600}>
								{t("greeting")}
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
							onClick={() => router.push("/")}
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
						<SecondaryButton disabled={false} width={30}>
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
