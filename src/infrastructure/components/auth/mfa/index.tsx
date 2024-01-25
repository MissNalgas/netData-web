import { yupResolver } from "@hookform/resolvers/yup";
import CodeInput from "@shared/components/codeInput";
import { Controller, useForm } from "react-hook-form";
import codeSchema from "./schema";
import { PrimaryButton } from "@shared/components/buttons/styled";
import Qr from "@shared/components/qr";
import { useTranslation } from "react-i18next";


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
