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
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { SentriaError } from "@shared/utils/error";

const Login: NextPage = () => {

	const [otpauth, setOtpAuth] = useState<null | string>();
	const [loginData, setLoginData] = useMerge({email: "", password: "", code: ""});
	const [isLoading, setIsLoading] = useState(false);
	const {login, validateOtp} = useAuth();
	const { t } = useTranslation();

	const handleSubmit = (data : ILogin) => {
		setIsLoading(true);
		login(data.email, data.password).then((userData) => {
			setLoginData({
				email: data.email,
				password: data.password,
			});
			setOtpAuth(userData.authotp);
		}).catch(err => {
			if (err instanceof SentriaError) {
				toast.error(err.message);
			} else {
				toast.error(t("login:there_was_an_error"));
			}
		}).finally(() => {
			setIsLoading(false);
		});
	}

	const submitCode = (data: IMFA) => {

		setIsLoading(true);
		setLoginData({
			code: data.code,
		});

		const otpSecret = otpauth && new URL(otpauth).searchParams.get("secret");

		validateOtp({
			email: loginData.email,
			password: loginData.password,
			code: data.code,
			secret: otpSecret || undefined,
		}).then(() => {

		}).finally(() => {
			setIsLoading(false);
		}).catch(() => {
			toast.error(t("login:invalid_code"));
		});
	}

	return (
		<LayoutComponent>
			{otpauth !== undefined ? (
				<MFAComponent otpauth={otpauth} onSubmit={submitCode}/>
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
