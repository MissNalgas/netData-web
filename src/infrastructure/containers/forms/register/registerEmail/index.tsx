import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import schema from "./validation-schema";
import TextInput from "@shared/components/textInput";
import {
	PrimaryButton,
} from "@shared/components/buttons/styled";
import { useTranslation } from "react-i18next";
interface IRegisterEmail {
	email: string;
    repeatEmail: string;
}

export default function RegisterEmailForm({ onSubmit }: RegisterEmailFormProps) {
    const { t } = useTranslation("register");
	const { handleSubmit } = useForm<IRegisterEmail>({
		resolver: yupResolver(schema),
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextInput
				name="email"
				label={`${t("email")}`}
				placeholder={`${t("email")}`}
				icon="message"
                require={true}
			/>
			<TextInput
				name="repeatEmail"
				label={`${t("confirm_email")}`}
				placeholder={`${t("confirm_email")}`}
				icon="message"
                require={true}
			/>
			<PrimaryButton type="submit" className="w-full" >
                {t("next")}
			</PrimaryButton>
		</form>
	);
}

interface RegisterEmailFormProps {
	onSubmit: (_data: IRegisterEmail) => void;
}
