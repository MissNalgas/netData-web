import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
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
    company?: string;
    password: string;
    repeatPassword: string;
}

export default function RegisterAccountForm({ onSubmit }: RegisterAccountFormProps) {
    const { t } = useTranslation("register");

    const {
        control,
        handleSubmit,
        register,
        formState: { errors, isValid },
    } = useForm<IRegisterAccount>({
        mode: "all",
		resolver: yupResolver(schemaRegisterAccount),
        criteriaMode: "all",
	});
    const isError = false;

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                control={control}
                name="name"
                render={({ field }) => (
                    <TextInput
                        name={field.name}
                        label={t("names")}
                        placeholder={t("names")}
                        icon="account"
                        type="text"
                        error={errors.name?.message}
                        onChange={(e) => field.onChange(e)}
                    />
                )}/>
            <Controller
                control={control}
                name="lastName"
                render={({ field }) => (
                    <TextInput
                        name={field.name}
                        label={t("last_name")}
                        placeholder={t("last_name")}
                        icon="message"
                        error={errors.lastName?.message}
                        onChange={(e) => field.onChange(e)}
                    />
                )}/>
                <TextInput
                    disabled
                    value="Netdata - SENTRIA"
                    name="company"
                    label={t("company_name")}
                    placeholder={t("company_name")}
                    icon="office-building"
                    error={errors.company?.message}
                />
                <TextInput
                    placeholder={`${t("new_password")}`}
                    icon="lock-key"
                    iconright="eye"
                    type="password"
                    label={t("password")}
                    error={errors.password?.message}
                    {...register("password")}
                />
                <TextInput
                    placeholder={t("confirm_password")}
                    icon="lock-key"
                    iconright="eye"
                    type="password"
                    label={t("confirm_password")}
                    error={errors.repeatPassword?.message}
                    {...register("repeatPassword")}
                />
            <RequirePassword isError={isError}/>
			<PrimaryButton type="submit" className="w-full" disabled={!isValid}>
				{t("next")}
			</PrimaryButton>
		</form>
	);
}

interface RegisterAccountFormProps {
	onSubmit: (_data: IRegisterAccount) => void;
}
