"use client";

import { NextPage } from "next";
import { useAuth } from "@infrastructure/containers/auth";
import LoginComponent from "@infrastructure/components/auth/login";

const Login: NextPage = () => {
	const { login } = useAuth();

	return (
		<main className="flex flex-col justify-center items-center min-h-screen h-full">
			<LoginComponent login={() => login()} />
		</main>
	);
};

export default Login;
