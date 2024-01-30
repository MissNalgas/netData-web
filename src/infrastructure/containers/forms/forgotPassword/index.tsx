import { emailValidation } from "@shared/utils";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

import TextInput from "@shared/components/textInput";
import { PrimaryButton } from "@shared/components/buttons/styled";
import { useTranslation } from "react-i18next";
import { Overline } from "@shared/components/labels/styled";
import theme from "@theme/index";
import Icon from "@shared/components/icons";

export interface IForgotPassword {
	email: string;
}

const schema = yup.object({
	email: emailValidation(),
});

export default function ForgotPasswordForm({
	onSubmit,
	handleClickArrow,
}: ForgotPasswordFormProps) {
	const {
		handleSubmit,
		register,
		formState: { errors, isValid },
	} = useForm<IForgotPassword>({
		resolver: yupResolver(schema),
	});
	const router = useRouter();
	const { t } = useTranslation("recover_password");

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="py-5">
				<TextInput
					label={`${t("email")}`}
					placeholder={`${t("email")}`}
					icon="message"
					require
					error={errors.email?.message}
					{...register("email")}
				/>
			</div>
			<PrimaryButton type="submit" className="w-full" disabled={!isValid}>
				{t("next")}
			</PrimaryButton>
			<div className="cel:text-center my-2 cel:text-wrap gap-1">
				<Overline onClick={() => router.push("login")}>
					{t("has_code_sent")}
				</Overline>
				<Overline
					$color={theme.colors.orange}
					className="cel:block tablet:ml-2 tablet:inline"
					onClick={() => {}}
				>
					{t("send_again_code")}
				</Overline>
			</div>
			<div
				className="flex items-center justify-center cel:text-center my-2 cel:text-wrap gap-1 py-5"
				aria-hidden="true"
				onClick={handleClickArrow}
			>
				<Icon icon="left-arrow" size="32" />
				<Overline
					$color={theme.colors.gray50}
					$weight={600}
					className="cel:block tablet:ml-2 tablet:inline"
					onClick={() => {}}
				>
					{t("go_back")}
				</Overline>
			</div>
		</form>
	);
}

interface ForgotPasswordFormProps {
	onSubmit: (_data: IForgotPassword) => void;
	handleClickArrow?: () => void;
}
