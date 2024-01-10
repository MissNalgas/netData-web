import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import schema from "./validation-schema";
import TextInput from "@shared/components/textInput";
import { PrimaryButton } from "@shared/components/buttons/styled";
import { useTranslation } from "react-i18next";

export interface IChatForm {
	reply: string;
}

export default function ChatForm({ onSubmit }: ChatFormProps) {
	const {
		handleSubmit,
		register,
		formState: { errors, isValid },
	} = useForm<IChatForm>({
		resolver: yupResolver(schema),
	});

	const { t } = useTranslation("information");

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextInput
				placeholder={t("write_your_message")}
				iconright="Paper-Plane"
				className="
				bg-shadow20
								disabled:text-gray-400
								rounded-lg
								h-12
								focus:outline-gray20
								z-10
								px-2
								w-full
								mt-1
								pr-12
						"
				{...register("reply")}
				error={errors.reply?.message}
			/>
			<PrimaryButton disabled={!isValid} type="submit" className="w-full">
				{t("send")}
			</PrimaryButton>
		</form>
	);
}

interface ChatFormProps {
	onSubmit: (_data: IChatForm) => void;
}
