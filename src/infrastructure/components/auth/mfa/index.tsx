import { yupResolver } from "@hookform/resolvers/yup";
import CodeInput from "@shared/components/codeInput";
import { Controller, useForm } from "react-hook-form";
import codeSchema from "./schema";
import { PrimaryButton } from "@shared/components/buttons/styled";
import Qr from "@shared/components/qr";
import { useTranslation } from "react-i18next";
import Image from "next/image";


export interface IMFA {
	code: string;
}

export default function MFAComponent({onSubmit, otpauth} : MFAComponentProps) {

	const { control, formState: {isValid}, handleSubmit } = useForm<IMFA>({
		resolver: yupResolver(codeSchema),
		defaultValues: {
			code: "",
		},
	});
	const { t } = useTranslation("login");

	return (
		<form className="flex flex-col items-center justify-center gap-4 max-w-screen-sm m-4" onSubmit={handleSubmit(onSubmit)}>
			<h1 className="text-3xl font-bold text-gray50 text-center">
				{t("two_factor_authentication")}
			</h1>
			{otpauth ? (
				<>
					<ol className="list-decimal pl-6">
						<li>
							{t("scan_the_qr_code")}
						</li>
						<div className="flex gap-2 justify-center items-stretch my-2">
							<a target="_blank" href="https://support.google.com/accounts/answer/1066447?hl=es&co=GENIE.Platform%3DAndroid">
								<Image src="/img/google_auth.png" alt="Google Authenticator" width={60} height={60}/>
							</a>
							<div className="border-r"/>
							<a target="_blank" href="https://www.microsoft.com/es-co/security/mobile-authenticator-app">
								<Image src="/img/microsoft_auth.png" alt="Microsoft Authenticator" width={60} height={60}/>
							</a>
						</div>
						<li>
							{t("enter_six_digit_code")}
						</li>
					</ol>
					<Qr uri={otpauth}/>
				</>
			) : (
				<p className="text-center">
					{t("enter_six_digit_code_generated")}
				</p>
			)}
			<Controller
				control={control}
				name="code"
				render={({field: {value, onChange}}) => (
					<CodeInput value={value} onChange={onChange}/>
				)}

			/>
			<PrimaryButton disabled={!isValid}>
				{t("next")}
			</PrimaryButton>
		</form>
	);
}

interface MFAComponentProps {
	onSubmit: (_data : IMFA) => void;
	otpauth: string | null;
}
