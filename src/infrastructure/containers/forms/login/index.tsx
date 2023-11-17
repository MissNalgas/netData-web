import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import schema from "./validation-schema";
import TextInput from "@shared/components/textInput";
import {
	PrimaryButton,
	SecondaryButton,
} from "@shared/components/buttons/styled";
export interface ILogin {
	email: string;
	password: string;
}

export default function LoginForm({ onSubmit, disableSubmit }: LoginFormProps) {
	const { handleSubmit, register } = useForm<ILogin>({
		resolver: yupResolver(schema),
	});
	const router = useRouter();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextInput
				label="Correo corporativo"
				placeholder="correo@example.com"
				icon="account"
				{...register("email")}
			/>
			<div className="flex justify-between my-2">
				<label className="text-sm">Contraseña</label>
				<label
					className="text-sm text-primary"
					onClick={() => router.push("recover-password")}
				>
					¿Olvidaste tu contraseña?
				</label>
			</div>
			<TextInput
				placeholder="Ingresa tu contraseña"
				icon="lock-key"
				iconright="eye"
				type="password"
				{...register("password")}
			/>
			<PrimaryButton disabled={disableSubmit} type="submit" className="w-full">
				Iniciar sesión
			</PrimaryButton>
			<SecondaryButton type="button" className="w-full">
				¡Quiero registrarme!
			</SecondaryButton>
		</form>
	);
}

interface LoginFormProps {
	onSubmit: (_data: ILogin) => void;
	disableSubmit?: boolean;
}
