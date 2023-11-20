import React, { useState } from "react";

import { LoginForm } from "@infrastructure/containers";

import { ContentForm, SecondTitleCustom, TitleCustom } from "./styled";
import { useAuth } from "@infrastructure/containers/auth";
import { ILogin } from "@infrastructure/containers/forms/login";

const LoginComponent: React.FC = () => {
	const {login} = useAuth();
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = (data : ILogin) => {
		setIsLoading(true);
		login(data.email, data.password).finally(() => {
			setIsLoading(false);
		})
	}


	return (
		<ContentForm>
			<TitleCustom $center>¡Bienvenido a Sentria!</TitleCustom>
			<SecondTitleCustom $center>
				Inicia sesión para mantenerte al tanto de tus reportes
			</SecondTitleCustom>
			<LoginForm disableSubmit={isLoading} onSubmit={handleSubmit} />
		</ContentForm>
	);
};

export default LoginComponent;
