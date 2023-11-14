"use client";

import { NextPage } from "next";
import LoginComponent from "@infrastructure/components/auth/login";

const Login: NextPage = () => {
	return (
		<main className="flex flex-col justify-center items-center min-h-screen h-full">
			<LoginComponent login={() => {}} />
		</main>
	);
};

export default Login;
