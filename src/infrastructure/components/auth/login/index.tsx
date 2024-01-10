import React from "react";

import { LoginForm } from "@infrastructure/containers";

import { ContentForm, SecondTitleCustom, TitleCustom } from "./styled";
import { ILogin } from "@infrastructure/containers/forms/login";

const LoginComponent: React.FC<LoginComponentProps> = ({onSubmit}) => {

	return (
		<ContentForm>
			<TitleCustom $center>¡Bienvenido a Sentria!</TitleCustom>
			<SecondTitleCustom $center>
				Inicia sesión para mantenerte al tanto de tus reportes
			</SecondTitleCustom>
			<LoginForm onSubmit={onSubmit}/>
		</ContentForm>
	);
};

export default LoginComponent;

interface LoginComponentProps {
	onSubmit: (_data: ILogin) => void;

}
