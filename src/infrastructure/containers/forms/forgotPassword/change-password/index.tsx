import { validationPassword } from "@shared/utils";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import TextInput from "@shared/components/textInput";
import { PrimaryButton } from "@shared/components/buttons/styled";
import RequirePassword from "@shared/components/requirePassword";
import { useTranslation } from "react-i18next";
export interface IChangePassword {
	password?: string;
	repeatPassword?: string;
}

export default function ChangePasswordForm({
	onSubmit,
}: ChangePasswordFormProps) {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<IChangePassword>({
		resolver: yupResolver(validationPassword),
		mode: "all",
	});
	const { t } = useTranslation("forgot_password");
	const isError = !!errors.password || !!errors.repeatPassword;
	const showValidationInputs = isValid;

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextInput
				label={t("password")}
				placeholder={t("new_password")}
				icon="lock-key"
				iconright="eye"
				type="password"
				error={errors.password?.message}
				helperText={errors.password?.message}
				{...register("password")}
			/>
			<TextInput
				label={t("confirm_password")}
				placeholder={t("confirm_password")}
				icon="lock-key"
				iconright="eye"
				type="password"
				error={errors.repeatPassword?.message}
				helperText={errors.repeatPassword?.message}
				{...register("repeatPassword")}
			/>
			{showValidationInputs && <RequirePassword isError={isError} />}

			<PrimaryButton type="submit" className="w-full my-2">
				{t("recover_password")}
			</PrimaryButton>
		</form>
	);
}

interface ChangePasswordFormProps {
	onSubmit: (_data: IChangePassword) => void;
}
