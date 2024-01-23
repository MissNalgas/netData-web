import React, { useState } from "react";

import { LoginForm } from "@infrastructure/containers";

import { ContentForm, SecondTitleCustom, TitleCustom } from "./styled";
import { useAuth } from "@infrastructure/containers/auth";
import { ILogin } from "@infrastructure/containers/forms/login";
import LoaderComponent from "@shared/components/loader";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { SentriaError } from "@shared/utils/error";
import LogoSentria from "/public/img/logo-sentria.png";
import Image from "next/image";

const LoginComponent: React.FC = () => {
	const { login } = useAuth();
	const { t } = useTranslation("login");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = (data: ILogin) => {
		setIsLoading(true);
		login(data.email, data.password)
			.finally(() => {
				setIsLoading(false);
			})
			.catch((err) => {
				if (err instanceof SentriaError) {
					toast.error(err.message);
				} else {
					toast.error(
						"Hubo un error al iniciar sesión, por favor, vuelve a intentar"
					);
				}
			});
	};

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
			<SecondTitleCustom $center={true}>
				{t("subTitle")}
			</SecondTitleCustom>
			<LoginForm disableSubmit={isLoading} onSubmit={handleSubmit} />
			{isLoading && (
				<div className="fixed top-0 left-0 w-full bg-white">
					<LoaderComponent />
				</div>
			)}
		</ContentForm>
	);
};

export default LoginComponent;
