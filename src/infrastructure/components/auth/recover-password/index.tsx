import React, { FC, useState } from "react";

import { ForgotPasswordForm } from "@infrastructure/containers";

import { ContentForm, SecondTitleCustom, TitleCustom } from "./styled";
import CodeInputForm from "@infrastructure/containers/forms/forgotPassword/code-input";
import ChangePasswordForm, {
	IChangePassword,
} from "@infrastructure/containers/forms/forgotPassword/change-password";
import { useRouter } from "next/navigation";
import ErrorImage from "@shared/components/errorImage";
import ErrorClose from "/public/img/error-closed.png";
import Computer from "/public/img/computer.png";
import { useTranslation } from "react-i18next";
import { IForgotPassword } from "@infrastructure/containers/forms/forgotPassword";
import { useAppDispatch } from "@hooks/index";
import { ToastContainer, toast } from "react-toastify";
import {
	changePassword,
	checkEmail,
	recoverPassword,
} from "@infrastructure/store/user/actions";

interface IRecoverPasswordComponentProps {
	actionButton?: () => void;
	changeStateAction?: 1 | 2 | 3 | 4;
	setChangeAction?: (_value: 1 | 2 | 3 | 4) => void;
}

const RecoverPasswordComponent: FC<IRecoverPasswordComponentProps> = ({
	changeStateAction,
	setChangeAction = () => {},
}: IRecoverPasswordComponentProps) => {
	const { t } = useTranslation("recover_password");
	const dispatch = useAppDispatch();
	const [saveEmailTemporary, setSaveEmailTemporary] = useState<string>("");
	const [saveCode, setSaveCode] = useState<string>("");
	const [isSucces, setIsSucces] = useState<boolean>(false);

	const router = useRouter();
	const title = t("recover_password");
	const messages = {
		1: title,
		2: title,
		3: title,
		4: isSucces ? t("title_success") : t("title_error"),
	};

	const handleSendCode = (email: string) => {
		dispatch(recoverPassword(email))
			.then((res: any) => {
				if (
					res.payload.status === 201 &&
					res.payload.data.name === "LimitExceededException"
				) {
					toast.error(t("LimitExceededException"));
				} else {
					setChangeAction(2);
				}
			})
			.catch(() => {
				toast.error("Error al enviar el mensaje");
			});
		setSaveEmailTemporary(email);
	};
	const handleCheckEmail = (data: IForgotPassword) => {
		const email = data.email;
		dispatch(checkEmail(email))
			.then((res: any) => {
				if (
					res.payload.status === 201 &&
					res.payload.message === "Mail not found in requesters"
				) {
					toast.error(t("message_sent"));
				} else {
					handleSendCode(email);
				}
			})
			.catch(() => {
				toast.error("Error al enviar el mensaje");
			});
	};

	const handleChangePassword = (data: IChangePassword) => {
		const password = data.password;
		const newPassword = data?.repeatPassword;
		if (password !== newPassword) {
			toast.error(t("passwords_not_match"));
			return;
		} else {
			dispatch(
				changePassword({
					mail: saveEmailTemporary,
					code: saveCode,
					newPassword: (newPassword && newPassword) || "",
				})
			)
				.then((res: any) => {
					if (
						res.payload.status === 201 &&
						res.payload.message !== "SUCCESS"
					) {
						setIsSucces(false);
						setChangeAction(4);
					} else {
						setIsSucces(true);
						setChangeAction(4);
					}
				})
				.catch(() => {
					toast.error("Error al enviar el mensaje");
				});
		}
	};
	const message = messages[changeStateAction ?? 1] || t("title_error");
	return (
		<ContentForm>
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
			<TitleCustom $center>{message}</TitleCustom>
			<SecondTitleCustom $center>
				{(changeStateAction === 1 && t("type_email_sentria")) ||
					(changeStateAction === 2 && t("code_sentria")) ||
					(changeStateAction === 3 && t("new_password"))}
			</SecondTitleCustom>
			{changeStateAction === 1 && (
				<ForgotPasswordForm onSubmit={handleCheckEmail} />
			)}

			{changeStateAction === 2 && (
				<CodeInputForm
					sendAgainAction={() => {
						saveEmailTemporary &&
							handleSendCode(saveEmailTemporary);
					}}
					getCode={(code) => setSaveCode(code)}
					onSubmit={() => {
						setChangeAction(3);
					}}
				/>
			)}
			{changeStateAction === 3 && (
				<ChangePasswordForm onSubmit={handleChangePassword} />
			)}
			{changeStateAction === 4 && (
				<ErrorImage
					image={isSucces ? Computer : ErrorClose}
					textButton={
						isSucces ? t("button_success") : t("button_error")
					}
					onClickButton={() =>
						isSucces ? router.push("login") : setChangeAction(1)
					}
					description={!isSucces ? t("description_error") : ""}
				/>
			)}
		</ContentForm>
	);
};

export default RecoverPasswordComponent;
