import React from "react";

import { LoginForm } from "@infrastructure/containers";

import { ContentForm, SecondTitleCustom, TitleCustom } from "./styled";
import { ILogin } from "@infrastructure/containers/forms/login";
import LoaderComponent from "@shared/components/loader";
import { useTranslation } from "react-i18next";
import LogoSentria from "/public/img/logo-sentria.png";
import Image from "next/image";

const LoginComponent: React.FC<LoginComponentProps> = ({onSubmit, isLoading}) => {
	const { t } = useTranslation("login");

	return (
		<ContentForm>
			<Image
				width={80}
				height={80}
				alt="Logo Sentria"
				src={LogoSentria}
				className="mx-auto tablet:hidden mb-8"
			/>
			<TitleCustom $center>{t("welcome_title")}</TitleCustom>
			<SecondTitleCustom $center>{t("subTitle")}</SecondTitleCustom>
			<LoginForm disableSubmit={isLoading} onSubmit={onSubmit} />
			{isLoading && (
				<div className="fixed top-0 left-0 w-full bg-white">
					<LoaderComponent />
				</div>
			)}
		</ContentForm>
	);
};

export default LoginComponent;

interface LoginComponentProps {
	onSubmit: (_data: ILogin) => void;
	isLoading?: boolean;

}
