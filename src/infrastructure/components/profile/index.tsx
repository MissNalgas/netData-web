import { useRouter } from "next/navigation";

import ContainerBackground from "@shared/components/containerBackground";

import { CaptionOne, SubtitleLink } from "@shared/components/labels/styled";

import {
	PrimaryButton,
	SecondaryButton,
} from "@shared/components/buttons/styled";
import { useAuth } from "@infrastructure/containers/auth";
import Icon from "@shared/components/icons";
import { useTheme } from "styled-components";
import Logo from "/public/img/logo-sentria.png";

import {
	ContentBody,
	ContentHeader,
	ContentImage,
	ContentLogo,
	ImageProfile,
} from "./styled";

export default function ProfileComponent() {
	const auth = useAuth();
	const theme = useTheme();
	const router = useRouter();
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
							<Icon icon="account" size={22} />
						</div>
					</ContentHeader>

					<div className="flex flex-col justify-center items-center gap-y-2 p-10">
						<div>
							<SubtitleLink $weight={600}>
								Hola,
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
							disabled={false}
							type="submit"
							width={30}
						>
							<div className="flex flex-row gap-5">
								<Icon
									icon="info-circle"
									size={24}
									color="white"
								/>
								Guía de ayuda
							</div>
						</PrimaryButton>
						<PrimaryButton
							disabled={false}
							width={30}
							onClick={() => router.push("/notifications")}
						>
							<div className="flex flex-row gap-5">
								<Icon icon="Bell" size={24} color="white" />
								Notificaciones
							</div>
						</PrimaryButton>
						<PrimaryButton
							disabled={false}
							type="submit"
							width={30}
						>
							<div className="flex flex-row gap-5">
								<Icon
									icon="Paper-Plane"
									size={24}
									color="white"
								/>
								Reportar problemas de la app
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
								Eliminar cuenta
							</div>
						</SecondaryButton>
					</div>
				</div>
			</ContainerBackground>
		</main>
	);
}
