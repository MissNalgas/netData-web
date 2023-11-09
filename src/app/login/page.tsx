"use client";

import { NextPage } from "next";
import { useAuth } from "@infrastructure/containers/auth";

const Login: NextPage = () => {

	const { login } = useAuth();

	return (
		<div className="flex flex-col justify-center items-center min-h-screen h-full">
			<h1>Welcome to Sentria!</h1>
			<button className="underline" onClick={() => login()}>Inicio</button>
		</div>
	);
};

export default Login;
