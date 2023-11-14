import React from "react";

import { LoginForm } from "@infrastructure/containers";

import { ContentForm, SecondTitleCustom, TitleCustom } from "./styled";

interface ILoginComponentProps {
	login: () => void;
}

const LoginComponent: React.FC<ILoginComponentProps> = ({
	login
}: ILoginComponentProps) => (
	<ContentForm>
		<TitleCustom center>¡Bienvenido a Sentria!</TitleCustom>
		<SecondTitleCustom center>
			Inicia sesión para mantenerte al tanto de tus reportes
		</SecondTitleCustom>
		<LoginForm onSubmit={() => login()} />
	</ContentForm>
);

export default LoginComponent;
