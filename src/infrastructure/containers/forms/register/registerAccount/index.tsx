import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaRegisterAccount } from "./validation-schema";
import TextInput from "@shared/components/textInput";
import {
	PrimaryButton,
} from "@shared/components/buttons/styled";
import RequirePassword from "@shared/components/requirePassword";
import { useTranslation } from "react-i18next";
interface IRegisterAccount {
	name: string;
    lastName: string;
    company: string;
    password: string;
    repeatPassword: string;
}

export default function RegisterAccountForm({ onSubmit }: RegisterAccountFormProps) {
    const { t } = useTranslation("register");
	const { handleSubmit } = useForm<IRegisterAccount>({
		resolver: yupResolver(schemaRegisterAccount),
	});
    const isError = false;

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextInput
				name="name"
				label={t("names")}
				placeholder={t("names")}
				icon="account"
                require={true}
			/>
			<TextInput
				name="lastName"
				label={t("last_name")}
				placeholder={t("last_name")}
				icon="message"
                require={true}
			/>
            <TextInput
				name="company"
				label={t("company_name")}
				placeholder={t("company_name")}
				icon="office-building"
                require={true}
			/>
            <TextInput
				label={t("password")}
				name="password"
				icon="lock-key"
                type="password"
				placeholder={t("new_password")}
                iconright="eye"
                require={true}
			/>
            <TextInput
				label={t("confirm_password")}
				name="repeatPassword"
				icon="lock-key"
                type="password"
				placeholder={t("confirm_password")}
                iconright="eye"
                require={true}
			/>
            <RequirePassword isError={isError}/>
			<PrimaryButton type="submit" className="w-full">
				{t("next")}
			</PrimaryButton>
		</form>
	);
}

interface RegisterAccountFormProps {
	onSubmit: (_data: IRegisterAccount) => void;
}
