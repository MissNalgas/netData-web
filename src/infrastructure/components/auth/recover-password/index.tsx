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
import { toast } from "react-toastify";
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
	const [isSuccess, setIsSuccess] = useState<boolean>(false);

	const router = useRouter();
	const title = t("recover_password");
	const messages = {
		1: title,
		2: title,
		3: title,
		4: isSuccess ? t("title_success") : t("title_error"),
	};

	const handleSendCode = async (email: string) => {
		try {
			const res: any = await dispatch(recoverPassword(email));

			if (
				res.payload.status === 201 &&
				res.payload.data.name === "LimitExceededException"
			) {
				toast.error(t("limitExceededException"));
			} else {
				setChangeAction(2);
			}
		} catch (error) {
			toast.error(t("title_error"));
		}
		setSaveEmailTemporary(email);
	};

	const handleCheckEmail = async (data: IForgotPassword) => {
		const email = data.email;
		try {
			const res: any = await dispatch(checkEmail(email));
			if (
				res.payload.status === 201 &&
				res.payload.message === "Mail already exist"
			) {
				await handleSendCode(email);
			} else if (
				res.payload.status === 201 &&
				res.payload.message === "Mail not found in requesters"
			) {
				toast.error(t("message_not_sent"));
			}
		} catch (error) {
			toast.error(t("title_error"));
		}
	};

	const handleChangePassword = async (data: IChangePassword) => {
		const password = data.password;
		const newPassword = data?.repeatPassword;
		if (password !== newPassword) {
			toast.error(t("passwords_not_match"));
		} else {
			try {
				const res: any = await dispatch(
					changePassword({
						mail: saveEmailTemporary,
						code: saveCode,
						newPassword: newPassword ?? "",
					})
				);
				if (res.payload.message === "FAILED") {
					setIsSuccess(false);
					setChangeAction(4);
				} else {
					setIsSuccess(true);
					setChangeAction(4);
				}
			} catch (error) {
				toast.error(t("title_error"));
			}
		}
	};

	const handleClickArrow = () => {
		switch (changeStateAction) {
			case 3:
				setChangeAction(2);
				break;
			case 2:
				setChangeAction(1);
				break;
			case 1:
				router.push("login");
				break;
			default:
				break;
		}
	};

	const message = messages[changeStateAction ?? 1] || t("title_error");
	return (
		<ContentForm>
			<TitleCustom $center>{message}</TitleCustom>
			<SecondTitleCustom $center>
				{(changeStateAction === 1 && t("type_email_sentria")) ||
					(changeStateAction === 2 && t("code_sentria")) ||
					(changeStateAction === 3 && t("new_password"))}
			</SecondTitleCustom>
			{changeStateAction === 1 && (
				<ForgotPasswordForm
					onSubmit={handleCheckEmail}
					handleClickArrow={() => handleClickArrow()}
				/>
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
					handleClickArrow={() => handleClickArrow()}
				/>
			)}
			{changeStateAction === 3 && (
				<ChangePasswordForm onSubmit={handleChangePassword} />
			)}
			{changeStateAction === 4 && (
				<ErrorImage
					image={isSuccess ? Computer : ErrorClose}
					textButton={
						isSuccess ? t("button_success") : t("button_error")
					}
					onClickButton={() =>
						isSuccess ? router.push("login") : setChangeAction(1)
					}
					description={!isSuccess ? t("description_error") : ""}
				/>
			)}
		</ContentForm>
	);
};

export default RecoverPasswordComponent;
