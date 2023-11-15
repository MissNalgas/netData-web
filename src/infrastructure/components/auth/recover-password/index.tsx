import React, { FC } from "react";

import { ForgotPasswordForm } from "@infrastructure/containers";

import { ContentForm, SecondTitleCustom, TitleCustom } from "./styled";
import CodeInputForm from "@infrastructure/containers/forms/forgotPassword/code-input";
import ChangePasswordForm from "@infrastructure/containers/forms/forgotPassword/change-password";
import { useRouter } from "next/navigation";

interface IRecoverPasswordComponentProps {
	actionButton?: () => void;
	changeStateAction?: 1 | 2 | 3;
	setChangeAction?: (_value: 1 | 2 | 3) => void;
}

const RecoverPasswordComponent: FC<IRecoverPasswordComponentProps> = ({
	actionButton = () => {},
	changeStateAction,
	setChangeAction = () => {},
}: IRecoverPasswordComponentProps) => {
	const router = useRouter();
	return (
		<ContentForm>
			<TitleCustom center>
				{changeStateAction === 1 || changeStateAction === 2
					? "Reestablece tu contraseña"
					: changeStateAction === 3 &&
					  "¡Has Reestablecido tu Contraseña de forma exitosa!"}
			</TitleCustom>
			<SecondTitleCustom center>
				{(changeStateAction === 1 &&
					"Ingresa tu e-mail y te enviaremos un código de verificación para realizar la recuperación de la contraseña.") ||
					(changeStateAction === 2 &&
						"Introduce el código que fue enviado a tu correo eletrónico") ||
					(changeStateAction === 3 && "Ingresa tu nueva contraseña")}
			</SecondTitleCustom>
			{changeStateAction === 1 && (
				<CodeInputForm
					onSubmit={() => {
						actionButton(), setChangeAction(2);
					}}
				/>
			)}

			{changeStateAction === 2 && (
				<ForgotPasswordForm
					onSubmit={() => {
						actionButton(), setChangeAction(3);
					}}
				/>
			)}
			{changeStateAction === 3 && (
				<ChangePasswordForm onSubmit={() => router.push("login")} />
			)}
		</ContentForm>
	);
};

export default RecoverPasswordComponent;
