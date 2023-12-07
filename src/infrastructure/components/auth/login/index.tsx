import React, { useState } from "react";

import { LoginForm } from "@infrastructure/containers";

import { ContentForm, SecondTitleCustom, TitleCustom } from "./styled";
import { useAuth } from "@infrastructure/containers/auth";
import { ILogin } from "@infrastructure/containers/forms/login";
import LoaderComponent from "@shared/components/loader";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";

const LoginComponent: React.FC = () => {
	const { login } = useAuth();
	const { t } = useTranslation("login");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = (data: ILogin) => {
		setIsLoading(true);
		login(data.email, data.password)
			.then(() => {
				toast.success(t("success"));
			})
			.catch(() => {
				toast.error(t("error"));
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

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
			<TitleCustom $center>{t("welcome_title")}</TitleCustom>
			<SecondTitleCustom $center>{t("subTitle")}</SecondTitleCustom>
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
