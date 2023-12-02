import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import schema from "./validation-schema";
import TextInput from "@shared/components/textInput";
import {
	PrimaryButton,
	SecondaryButton,
} from "@shared/components/buttons/styled";
import { useSideModal } from "@shared/components/sideModal";
import { useTranslation } from "react-i18next";

export interface ILogin {
	email: string;
	password: string;
}

export default function LoginForm({ onSubmit, disableSubmit }: LoginFormProps) {
	const { handleSubmit, register } = useForm<ILogin>({
		resolver: yupResolver(schema),
	});
	const router = useRouter();
	const sideModal = useSideModal();
    const { t } = useTranslation("login");

	const show = () => {
		sideModal.toggle({
			content: () => (
				<div>
					<button onClick={() => sideModal.toggle({})}>close</button>
					<h1 className="text-xl font-bold text-center">This is an example</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ea.
					</p>

				</div>
			),
		});
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextInput
				label={`${t("email")}`}
				placeholder={`${t("type_email")}`}
				icon="account"
				{...register("email")}
			/>
			<div className="flex justify-between my-2">
				<label className="text-sm">{t("password")}</label>
				<label
					className="text-sm text-primary"
					onClick={() => router.push("recover-password")}
				>
					{t("forgot")}
				</label>
			</div>
			<TextInput
				placeholder={`${t("type_password")}`}
				icon="lock-key"
				iconright="eye"
				type="password"
				{...register("password")}
			/>
			<PrimaryButton disabled={disableSubmit} type="submit" className="w-full">
				{t("sign_in")}
			</PrimaryButton>
			<SecondaryButton onClick={show} type="button" className="w-full">
				{t("register")}
			</SecondaryButton>
		</form>
	);
}

interface LoginFormProps {
	onSubmit: (_data: ILogin) => void;
	disableSubmit?: boolean;
}
