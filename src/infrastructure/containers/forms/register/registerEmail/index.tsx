import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
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
	const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IRegisterEmail>({
        mode: "all",
		resolver: yupResolver(schema),
        criteriaMode: "all",
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                control={control}
                name="email"
                render={({ field }) => (
                    <TextInput
                        error={errors.email?.message}
                        name={field.name}
                        label={`${t("email")}`}
                        placeholder={`${t("email")}`}
                        icon="message"
                        onChange={(e) => field.onChange(e)}
                    />
                )}/>
            <Controller
                control={control}
                name="repeatEmail"
                render={({ field }) => (
                    <TextInput
                        error={errors.repeatEmail?.message}
                        name={field.name}
                        label={`${t("confirm_email")}`}
                        placeholder={`${t("confirm_email")}`}
                        icon="message"
                        onChange={(e) => field.onChange(e)}
                    />
                )}/>
			<PrimaryButton type="submit" className="w-full" disabled={!isValid}>
                {t("next")}
			</PrimaryButton>
		</form>
	);
}

interface RegisterEmailFormProps {
	onSubmit: (_data: IRegisterEmail) => void;
}
