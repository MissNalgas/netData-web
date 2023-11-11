"use client";

import { NextPage } from "next";
// import { useAuth } from "@infrastructure/containers/auth";
import LoginComponent from "@infrastructure/components/auth/login";

const Login: NextPage = () => {
	// const { login } = useAuth();

	return (
		<main className="flex flex-col justify-center items-center min-h-screen h-full">
			<LoginComponent />

			{/* <h1>Welcome to Sentria!</h1>
			<button className="underline" onClick={() => login()}>Inicio</button> */}
		</main>
	);
};

export default Login;
