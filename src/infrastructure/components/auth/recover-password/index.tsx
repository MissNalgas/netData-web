import React, { FC } from "react";

import { ForgotPasswordForm } from "@infrastructure/containers";

import {
	ContentForm,
	SecondTitleCustom,
	TitleCustom,
	TextInfoCustom,
} from "./styled";
import CodeInputForm from "@infrastructure/containers/forms/forgotPassword/code-input";
import ChangePasswordForm from "@infrastructure/containers/forms/forgotPassword/change-password";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { PrimaryButton } from "@shared/components/buttons/styled";
import LogoImage from "/public/img/computer.png";
import ErrorImage from "/public/img/error-closed.png";

interface IRecoverPasswordComponentProps {
	actionButton?: () => void;
	changeStateAction?: 1 | 2 | 3 | 4;
	setChangeAction?: (_value: 1 | 2 | 3 | 4) => void;
}

const RecoverPasswordComponent: FC<IRecoverPasswordComponentProps> = ({
	changeStateAction,
	setChangeAction = () => {},
}: IRecoverPasswordComponentProps) => {
	const router = useRouter();
	const isSucces = false;
	const messages = {
		1: "Reestablece tu contraseña",
		2: "Reestablece tu contraseña",
		3: "Reestablece tu contraseña",
		4: isSucces
			? "¡Has Reestablecido tu Contraseña de forma exitosa!"
			: "Upss... ha ocurrido un error",
	};

	const message =
		messages[changeStateAction ?? 1] || "Upss... ha ocurrido un error";
	return (
		<ContentForm>
			<TitleCustom center>{message}</TitleCustom>
			<SecondTitleCustom center>
				{(changeStateAction === 1 &&
					"Ingresa tu e-mail y te enviaremos un código de verificación para realizar la recuperación de la contraseña.") ||
					(changeStateAction === 2 &&
						"Introduce el código que fue enviado a tu correo eletrónico") ||
					(changeStateAction === 3 && "Ingresa tu nueva contraseña")}
			</SecondTitleCustom>
			{changeStateAction === 1 && (
				<ForgotPasswordForm
					onSubmit={() => {
						setChangeAction(2);
					}}
				/>
			)}

			{changeStateAction === 2 && (
				<CodeInputForm
					onSubmit={() => {
						setChangeAction(3);
					}}
				/>
			)}
			{changeStateAction === 3 && (
				<ChangePasswordForm
					onSubmit={() => {
						setChangeAction(4);
					}}
				/>
			)}
			{changeStateAction === 4 && (
				<div className="flex flex-col justify-center items-center gap-5">
					<Image
						src={isSucces ? LogoImage : ErrorImage}
						width={272}
						height={159}
						alt="Logo"
						priority
					/>
					{!isSucces && (
						<TextInfoCustom
							className="
					text-sm
					block
					text-center
				"
						>
							No ha sido posible reestablecer tu contraseña por favor vuelve a
							intentarlo o ¡ ponte en contacto con nosotros!
						</TextInfoCustom>
					)}

					<PrimaryButton onClick={() => router.push("login")}>
						{isSucces ? "Iniciar sesión" : "Intentar de nuevo"}
					</PrimaryButton>
				</div>
			)}
		</ContentForm>
	);
};

export default RecoverPasswordComponent;
