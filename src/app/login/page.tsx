"use client";

import { NextPage } from "next";
import LoginComponent from "@infrastructure/components/auth/login";
import LayoutComponent from "@infrastructure/components/auth/layout";
import { useState } from "react";
import MFAComponent, { IMFA } from "@infrastructure/components/auth/mfa";
import type { ILogin } from "@infrastructure/containers/forms/login";
import { useAuth } from "@infrastructure/containers/auth";
import { useMerge } from "@shared/utils/hooks";
import LoaderComponent from "@shared/components/loader";

const Login: NextPage = () => {

	const [needsMFA, setNeedsMFA] = useState(false);
	const [loginData, setLoginData] = useMerge({email: "", password: "", code: ""});
	const [isLoading, setIsLoading] = useState(false);
	const {login} = useAuth();

	const handleSubmit = (data : ILogin) => {
		setLoginData({
			email: data.email,
			password: data.password,
		});
		setNeedsMFA(true);
	}

	const submitCode = (data: IMFA) => {
		setLoginData({
			code: data.code,
		});

		setIsLoading(true);
		login(loginData.email, loginData.password).finally(() => {
			setIsLoading(false);
		});
	}

	return (
		<LayoutComponent>
			{needsMFA ? (
				<MFAComponent onSubmit={submitCode}/>
			) : (
				<LoginComponent onSubmit={handleSubmit}/>
			)}
			{isLoading && (
				<div className="fixed top-0 left-0 w-full h-full grid place-content-center bg-white">
					<LoaderComponent/>
				</div>
			)}
		</LayoutComponent>
	);
};

export default Login;
