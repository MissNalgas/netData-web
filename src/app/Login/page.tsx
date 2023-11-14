"use client";

import { NextPage } from "next";
import { useAuth } from "@infrastructure/containers/auth";
import LoginComponent from "@infrastructure/components/auth/login";
import LayoutComponent from "@infrastructure/components/auth/layout";

const Login: NextPage = () => {
	const { login } = useAuth();

	return (
		<LayoutComponent>
			<LoginComponent login={() => login()} />
		</LayoutComponent>
	);
};

export default Login;
