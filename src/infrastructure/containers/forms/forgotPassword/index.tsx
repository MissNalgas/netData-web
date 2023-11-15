import { emailValidation } from "@shared/utils";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

import TextInput from "@shared/components/textInput";
import { PrimaryButton } from "@shared/components/buttons/styled";
interface IForgotPassword {
	email: string;
}

const schema = yup.object({
	email: emailValidation(),
});

export default function ForgotPasswordForm({
	onSubmit,
}: ForgotPasswordFormProps) {
	const { handleSubmit } = useForm<IForgotPassword>({
		resolver: yupResolver(schema),
	});
	const router = useRouter();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextInput
				name="email"
				label="Correo corporativo"
				placeholder="correo@example.com"
				icon="account"
			/>
			<PrimaryButton type="submit" className="w-full">
				Enviar código
			</PrimaryButton>
			<div className="flex justify-between my-2">
				<label
					className="text-sm text-primary"
					onClick={() => router.push("login")}
				>
					Volver al inicio de sesión
				</label>
			</div>
		</form>
	);
}

interface ForgotPasswordFormProps {
	onSubmit: (_data: IForgotPassword) => void;
}
