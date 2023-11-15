import { emailValidation } from "@shared/utils";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import TextInput from "@shared/components/textInput";
import { PrimaryButton } from "@shared/components/buttons/styled";
interface IForgotPassword {
	email: string;
}

const schema = yup.object({
	email: emailValidation(),
});

export default function ChangePasswordForm({
	onSubmit,
}: ChangePasswordFormProps) {
	const { handleSubmit } = useForm<IForgotPassword>({
		resolver: yupResolver(schema),
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextInput
				name="password"
				label="Contraseña"
				placeholder="correo@example.com"
				icon="lock-key"
				iconright="eye"
			/>
			<TextInput
				name="passwordNew"
				label="Confirma tu contraseña"
				placeholder="Confirma tu contraseña"
				icon="lock-key"
				iconright="eye"
			/>
			<div className="flex flex-col justify-between ">
				<label className="text-sm">Asegúrate que tu contraseña contenga:</label>
				<label className="text-sm">Mínimo 8 carácteres</label>
				<label className="text-sm">Mínimo una mayúscula y minúscula</label>
				<label className="text-sm">Mínimo un carácter especial (!”?@#).</label>
				<label className="text-sm">Mínimo un número </label>
			</div>
			<PrimaryButton type="submit" className="w-full">
				Reestablecer contraseña
			</PrimaryButton>
		</form>
	);
}

interface ChangePasswordFormProps {
	onSubmit: (_data: IForgotPassword) => void;
}
