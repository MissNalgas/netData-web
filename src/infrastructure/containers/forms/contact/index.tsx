import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import schema from "./validation-schema";
import TextInput from "@shared/components/textInput";
import { PrimaryButton } from "@shared/components/buttons/styled";
import { useTranslation } from "react-i18next";

export interface IContactForm {
	affair: string;
	message: string;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
	const {
		handleSubmit,
		register,
		formState: { errors, isValid },
	} = useForm<IContactForm>({
		resolver: yupResolver(schema),
	});

	const { t } = useTranslation("profile");

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextInput
				label={t("contactForm.affair")}
				placeholder={t("contactForm.writeYourMessage")}
				error={errors.affair?.message}
				{...register("affair")}
			/>
			<TextInput
				istextarea={true}
				height="h-40"
				label={t("contactForm.yourMessage")}
				placeholder={t("contactForm.writeYourMessage")}
				error={errors.affair?.message}
				{...register("message")}
			/>
			<PrimaryButton disabled={!isValid} type="submit" className="w-full">
				{t("contactForm.send")}
			</PrimaryButton>
		</form>
	);
}

interface ContactFormProps {
	onSubmit: (_data: IContactForm) => void;
}
