"use client";

import { NextPage } from "next";
import LoginComponent from "@infrastructure/components/auth/login";
import LayoutComponent from "@infrastructure/components/auth/layout";

const Login: NextPage = () => {
	return (
		<LayoutComponent>
			<LoginComponent />
		</LayoutComponent>
	);
};

export default Login;
