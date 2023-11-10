"use client";

import { NextPage } from "next";
import { useAuth } from "@infrastructure/containers/auth";
import { PrimaryButton, SecondaryButton } from "@shared/components/buttons/styled";

const Login: NextPage = () => {

	const { login } = useAuth();

	return (
		<div className="flex flex-col justify-center items-center min-h-screen h-full">
			<h1>Welcome to Sentria!</h1>
			<PrimaryButton width={40} onClick={() => login()}>Inicio</PrimaryButton>
            <SecondaryButton width={40}>Seon</SecondaryButton>
		</div>
	);
};

export default Login;
