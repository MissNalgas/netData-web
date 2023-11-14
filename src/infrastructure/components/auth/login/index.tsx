import React from "react";
import Image from "next/image";

import { LoginForm } from "@infrastructure/containers";
import LogoImage from "/public/sentria_white.png";

import {
	LoginContainer,
	LoginContainerLeft,
	LoginContainerRight,
	ContentForm,
	SecondTitleCustom,
	TitleCustom,
	ContentHeaderLogo,
} from "./styled";

const LoginComponent: React.FC = () => (
	<LoginContainer>
		<ContentHeaderLogo>
			<Image src={LogoImage} width={150} height={80} alt="Logo" priority />
		</ContentHeaderLogo>
		<LoginContainerLeft>
			<ContentForm>
				<TitleCustom center>¡Bienvenido a Sentria!</TitleCustom>
				<SecondTitleCustom center>
					Inicia sesión para mantenerte al tanto de tus reportes
				</SecondTitleCustom>
				<LoginForm onSubmit={() => {}} />
			</ContentForm>
		</LoginContainerLeft>
		<LoginContainerRight>
			<Image src={LogoImage} width={272} height={159} alt="Logo" priority />
		</LoginContainerRight>
	</LoginContainer>
);

export default LoginComponent;
