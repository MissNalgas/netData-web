import React, { FC } from "react";

import { ForgotPasswordForm } from "@infrastructure/containers";

import { ContentForm, SecondTitleCustom, TitleCustom } from "./styled";
import CodeInputForm from "@infrastructure/containers/forms/forgotPassword/code-input";
import ChangePasswordForm from "@infrastructure/containers/forms/forgotPassword/change-password";
import { useRouter } from "next/navigation";
import ErrorImage from "@shared/components/errorImage";
import ErrorClose from "/public/img/error-closed.png";
import Computer from "/public/img/computer.png";
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
	const isSucces = true;
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
			<TitleCustom $center>{message}</TitleCustom>
			<SecondTitleCustom $center>
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
				<ErrorImage
					image={isSucces ? Computer : ErrorClose}
					textButton={isSucces ? "Iniciar sesión" : "Intentar de nuevo"}
					onClickButton={() =>
						isSucces ? router.push("login") : setChangeAction(1)
					}
					description={
						!isSucces
							? "No ha sido posible crear tu cuenta por favor vuelve a intentarlo o ¡ponte en contacto con nosotros!"
							: ""
					}
				/>
			)}
		</ContentForm>
	);
};

export default RecoverPasswordComponent;
